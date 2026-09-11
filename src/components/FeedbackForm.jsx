import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, Sparkles, ArrowRight, MessageSquarePlus } from 'lucide-react';
import { addReview } from '../data/reviewsData';
import { GoogleGIcon } from './GoogleReviewCards';
import './FeedbackForm.css';

export default function FeedbackForm() {
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formService, setFormService] = useState('Web Development');
  const [formRating, setFormRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formComment, setFormComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [postedReview, setPostedReview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newRev = addReview({
        name: formName,
        company: formCompany,
        rating: formRating,
        service: formService,
        comment: formComment
      });

      setPostedReview(newRev);
      setIsSubmitting(false);
      setFormName('');
      setFormCompany('');
      setFormComment('');
      setFormRating(5);
    }, 400);
  };

  return (
    <section className="section feedback-form-section" id="leave-review">
      <div className="container container-narrow">
        <div className="feedback-form-card">
          <div className="feedback-form-header">
            <div className="feedback-google-brand">
              <GoogleGIcon size={30} />
              <div className="feedback-brand-col">
                <span className="feedback-badge-top">GOOGLE CLIENT REVIEW</span>
                <h3 className="feedback-card-heading">Share Your Client Feedback</h3>
              </div>
            </div>
            <p className="feedback-card-sub">
              Your feedback is published directly onto our <strong>Home Page</strong> client reviews section to highlight real partner experiences.
            </p>
          </div>

          {postedReview ? (
            <div className="feedback-success-box">
              <div className="feedback-success-icon-wrap">
                <CheckCircle2 size={44} color="#16A34A" />
              </div>
              <h3 className="feedback-success-title">Review Posted Successfully!</h3>
              <p className="feedback-success-desc">
                Thank you, <strong>{postedReview.name}</strong>. Your {postedReview.rating}-star review has been published and is now live on the <strong>Home Page</strong> client voices wall.
              </p>

              <div className="feedback-success-actions">
                <Link to="/#testimonials" className="btn btn-primary">
                  <span>View on Home Page</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setPostedReview(null)}
                >
                  Post Another Review
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="feedback-actual-form">
              {/* Star Rating Picker */}
              <div className="feedback-group">
                <label className="feedback-label">Your Rating *</label>
                <div className="feedback-stars-selector">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className="star-click-btn"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setFormRating(star)}
                    >
                      <Star
                        size={30}
                        className={
                          star <= (hoverRating || formRating)
                            ? 'star-gold-active'
                            : 'star-empty-pick'
                        }
                      />
                    </button>
                  ))}
                  <span className="rating-status-text">
                    {(hoverRating || formRating) === 5 && '5.0 — Excellent & Exceptional'}
                    {(hoverRating || formRating) === 4 && '4.0 — Very Good'}
                    {(hoverRating || formRating) === 3 && '3.0 — Average'}
                    {(hoverRating || formRating) === 2 && '2.0 — Needs Improvement'}
                    {(hoverRating || formRating) === 1 && '1.0 — Poor'}
                  </span>
                </div>
              </div>

              {/* Name & Company */}
              <div className="feedback-grid-2">
                <div className="feedback-group">
                  <label className="feedback-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="feedback-input"
                    placeholder="e.g., Rajesh Kumar"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>

                <div className="feedback-group">
                  <label className="feedback-label">Company / Role (Optional)</label>
                  <input
                    type="text"
                    className="feedback-input"
                    placeholder="e.g., Founder, Acme Corp"
                    value={formCompany}
                    onChange={(e) => setFormCompany(e.target.value)}
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="feedback-group">
                <label className="feedback-label">Service / Project Delivered</label>
                <select
                  className="feedback-select"
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                >
                  <option value="Web Development">Web Development & Portal</option>
                  <option value="E-Commerce & 3D Print Platform">E-Commerce & Digital Platform</option>
                  <option value="Mobile Applications">Mobile Application (iOS / Android)</option>
                  <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                  <option value="Custom Software">Custom Enterprise Software / ERP</option>
                  <option value="Digital Product">Digital Product Development</option>
                </select>
              </div>

              {/* Review Text */}
              <div className="feedback-group">
                <label className="feedback-label">Your Feedback / Review *</label>
                <textarea
                  required
                  rows={4}
                  className="feedback-textarea"
                  placeholder="Share details of your experience with NEXFORD TECHNOLOGIES: engineering quality, communication, delivery turnaround, and business impact..."
                  value={formComment}
                  onChange={(e) => setFormComment(e.target.value)}
                />
              </div>

              <div className="feedback-submit-wrap">
                <button
                  type="submit"
                  className="btn btn-primary feedback-post-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Posting Review...</span>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      <span>Post Review to Home Page</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
