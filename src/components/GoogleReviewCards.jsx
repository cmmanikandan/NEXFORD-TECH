import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle2, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { getStoredReviews, saveStoredReviews } from '../data/reviewsData';
import './GoogleReviewCards.css';

// Google 'G' 4-Color SVG
export const GoogleGIcon = ({ size = 20, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className="google-g-svg" style={style}>
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.98 0 12c0 2.02.45 3.84 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export default function GoogleReviewCards() {
  const [reviews, setReviews] = useState(getStoredReviews);
  const [likedReviews, setLikedReviews] = useState({});
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      setReviews(getStoredReviews());
    };
    window.addEventListener('nexford_reviews_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('nexford_reviews_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Auto-scroll when more than 2 reviews exist
  useEffect(() => {
    if (reviews.length <= 2 || isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      
      if (el.scrollLeft >= maxScroll - 10) {
        // Loop back to start smoothly
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll forward by one card width
        el.scrollBy({ left: 390, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length, isPaused]);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -390, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 390, behavior: 'smooth' });
      }
    }
  };

  const handleLike = (id) => {
    if (likedReviews[id]) return;
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
    const updated = reviews.map((r) => (r.id === id ? { ...r, likes: (r.likes || 0) + 1 } : r));
    setReviews(updated);
    saveStoredReviews(updated);
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)
    : '5.0';

  // If no genuine user feedback has been posted yet, show clean placeholder box
  if (reviews.length === 0) {
    return (
      <div className="testimonial-box">
        <GoogleGIcon size={34} style={{ margin: '0 auto 16px', display: 'block' }} />
        <h3 style={{ fontSize: '20px', color: 'var(--color-dark-navy)', marginBottom: '12px' }}>
          Client testimonials will appear here.
        </h3>
        <p style={{ maxWidth: '540px', margin: '0 auto', fontSize: '15px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
          We are actively rolling out our client feedback portal as we deliver milestones across our enterprise deployments and bespoke applications.
        </p>
      </div>
    );
  }

  const hasMultiple = reviews.length > 2;

  return (
    <div className="google-reviews-wrapper">
      {/* Top Google Summary Bar */}
      <div className="google-summary-bar">
        <div className="google-summary-left">
          <div className="google-logo-box">
            <GoogleGIcon size={28} />
            <div>
              <span className="google-summary-title">Google Rating</span>
              <span className="google-summary-badge">
                <CheckCircle2 size={12} color="#16A34A" />
                Verified Client Reviews
              </span>
            </div>
          </div>

          <div className="google-score-box">
            <span className="google-score-digit">{averageRating}</span>
            <div className="google-score-stars-col">
              <div className="google-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(averageRating) ? 'star-gold' : 'star-muted'}
                  />
                ))}
              </div>
              <span className="google-reviews-total">
                Based on {reviews.length} {reviews.length === 1 ? 'client review' : 'client reviews'}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Left/Right arrows when more than 2 reviews */}
        {hasMultiple && (
          <div className="google-scroll-nav-btns">
            <button
              type="button"
              className="google-nav-arrow-btn"
              onClick={handleScrollLeft}
              aria-label="Scroll reviews left"
              title="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="google-nav-arrow-btn"
              onClick={handleScrollRight}
              aria-label="Scroll reviews right"
              title="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Reviews: Scroll track when > 2, Grid when <= 2 */}
      <div
        className={hasMultiple ? 'google-cards-scroll-container' : 'google-cards-grid'}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={hasMultiple ? 'google-cards-scroll-track' : 'google-cards-grid-inner'}
          ref={hasMultiple ? scrollRef : null}
        >
          {reviews.map((rev) => {
            const initials = rev.name
              ? rev.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .substring(0, 2)
                  .toUpperCase()
              : 'CL';

            return (
              <div key={rev.id} className="google-card">
                {/* Header: User Info & Google G Badge */}
                <div className="google-card-top">
                  <div className="google-user-meta">
                    <div
                      className="google-user-avatar"
                      style={{ backgroundColor: rev.avatarColor || '#4285F4' }}
                    >
                      {initials}
                    </div>
                    <div>
                      <h4 className="google-user-name">{rev.name}</h4>
                      <p className="google-user-sub">
                        {rev.role && <span>{rev.role}</span>}
                        {rev.reviewsCount && (
                          <>
                            <span className="google-dot">•</span>
                            <span>{rev.reviewsCount}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="google-card-g-badge" title="Google Verified Client">
                    <GoogleGIcon size={16} />
                  </div>
                </div>

                {/* Stars, Date & Service */}
                <div className="google-card-stars-row">
                  <div className="google-card-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < rev.rating ? 'star-gold' : 'star-muted'}
                      />
                    ))}
                  </div>
                  <span className="google-card-date">{rev.date}</span>

                  {rev.service && (
                    <span className="google-card-service-chip">{rev.service}</span>
                  )}
                </div>

                {/* Review Text */}
                <p className="google-card-text">{rev.comment}</p>

                {/* Card Footer: Helpful Button & Verified Badge */}
                <div className="google-card-bottom">
                  <button
                    type="button"
                    className={`google-helpful-action ${likedReviews[rev.id] ? 'active' : ''}`}
                    onClick={() => handleLike(rev.id)}
                  >
                    <ThumbsUp size={13} />
                    <span>Helpful {rev.likes > 0 && `(${rev.likes})`}</span>
                  </button>

                  <div className="google-card-verified-tag">
                    <CheckCircle2 size={12} color="#16A34A" />
                    <span>Verified Client</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
