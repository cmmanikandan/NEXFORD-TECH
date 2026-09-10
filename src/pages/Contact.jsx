import React, { useState } from 'react';
import { BRAND } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Web Application',
    budgetRange: '₹25,000 – ₹50,000',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Website',
    'Web Application',
    'Mobile Application',
    'UI/UX Design',
    'Custom Software',
    'Business Management System',
    'Other'
  ];

  const budgetRanges = [
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,50,000',
    '₹2,50,000 – ₹5,00,000',
    '₹5,00,000+',
    'Not sure yet'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="section bg-light" style={{ paddingBottom: '50px' }}>
        <div className="container">
          <SectionHeader
            eyebrow="PROJECT ENQUIRY & CONSULTATION"
            title="Let's Build"
            highlight="Something Great."
            description="Tell us about your project, timeline, and goals. Our team will review your requirements and get back to you."
            center={true}
          />
        </div>
      </section>

      {/* Form & Contact Details */}
      <section className="section bg-white">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Direct Channels */}
            <div className="contact-sidebar-card">
              <div>
                <h3 className="contact-info-title">Direct Communication</h3>
                <p className="contact-info-desc" style={{ marginTop: '8px' }}>
                  Connect with our technology practice leads directly for immediate enterprise enquiries.
                </p>
              </div>

              <div className="contact-channels">
                <div className="channel-box">
                  <div className="channel-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Email Enquiry</div>
                    <div className="channel-val">{BRAND.email}</div>
                  </div>
                </div>

                <div className="channel-box">
                  <div className="channel-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Phone Number</div>
                    <div className="channel-val">{BRAND.phone}</div>
                    <div style={{ fontSize: '12px', color: '#7E9BB8', marginTop: '2px' }}>
                      WhatsApp: {BRAND.whatsapp}
                    </div>
                  </div>
                </div>

                <div className="channel-box">
                  <div className="channel-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Location</div>
                    <div className="channel-val">{BRAND.address}</div>
                  </div>
                </div>

                <div className="channel-box">
                  <div className="channel-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Response Guarantee</div>
                    <div className="channel-val">Response within 1 business day</div>
                  </div>
                </div>
              </div>

              <div className="standards-box">
                <div className="standard-point">
                  <ShieldCheck size={16} color="var(--color-primary-blue)" />
                  <span>Strict NDA & confidentiality compliance</span>
                </div>
                <div className="standard-point">
                  <CheckCircle2 size={16} color="#18B6A4" />
                  <span>Transparent architecture scoping & milestones</span>
                </div>
              </div>
            </div>

            {/* Project Enquiry Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success-alert">
                  <CheckCircle2 size={48} color="#18B6A4" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '24px', color: 'var(--color-dark-navy)', marginBottom: '8px' }}>
                    Project Enquiry Received
                  </h3>
                  <p style={{ maxWidth: '460px', margin: '0 auto 24px', fontSize: '15px' }}>
                    Thank you, {formData.name}. Our technical architect is reviewing your submission for <strong>{formData.company || 'your project'}</strong> and will follow up with you at <strong>{formData.email}</strong> within one business day.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        projectType: 'Web Application',
                        budgetRange: '₹25,000 – ₹50,000',
                        description: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="form-title">Tell Us What You're Building.</h2>
                  <p className="form-subtitle">
                    Tell us about your project, timeline, and goals. Our team will review your requirements and get back to you.
                  </p>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="field-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="field-input"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label className="field-label">Business / Company *</label>
                      <input
                        type="text"
                        required
                        className="field-input"
                        placeholder="Acme Enterprises"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="field-label">Work Email *</label>
                      <input
                        type="email"
                        required
                        className="field-input"
                        placeholder="alex@acme.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label className="field-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="field-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="field-label">Project Type *</label>
                      <select
                        className="field-select"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">Estimated Budget</label>
                      <select
                        className="field-select"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="field-label">Project Requirements *</label>
                    <textarea
                      required
                      className="field-textarea"
                      placeholder="Briefly describe what you are looking to build, key challenges, target audience, and target launch window..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <span>Start a Project</span>
                    <ArrowRight size={18} className="arrow-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next? */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            eyebrow="TRANSPARENT PROCESS"
            title="What Happens"
            highlight="Next?"
            description="Our structured enquiry onboarding ensures clear expectations, prompt communication, and zero ambiguity."
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '40px' }}>
            <div className="contact-step-card">
              <div className="contact-step-num">STEP 01</div>
              <h3 className="contact-step-title">Requirement Assessment</h3>
              <p className="contact-step-desc">A senior solutions architect reviews your requirements, technology constraints, and timeline within 1 business day.</p>
            </div>
            <div className="contact-step-card">
              <div className="contact-step-num">STEP 02</div>
              <h3 className="contact-step-title">Technical Strategy Call</h3>
              <p className="contact-step-desc">We conduct a focused 30-minute consultation to evaluate architectural options, feasibility, and resource allocation.</p>
            </div>
            <div className="contact-step-card">
              <div className="contact-step-num">STEP 03</div>
              <h3 className="contact-step-title">Actionable Proposal</h3>
              <p className="contact-step-desc">You receive a clear, milestone-driven technical proposal detailing scope, sprints, architecture blueprint, and cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Enquiries */}
      <section className="section bg-white">
        <div className="container container-narrow">
          <SectionHeader
            eyebrow="COMMONLY ASKED"
            title="Frequently Asked"
            highlight="Questions."
            description="Clear answers regarding our engagement standards, security compliance, and commercial models."
            center={true}
          />

          <div className="contact-faq-list" style={{ marginTop: '36px' }}>
            <div className="contact-faq-item">
              <h3 className="contact-faq-question">Do you sign a Mutual Non-Disclosure Agreement (NDA)?</h3>
              <p className="contact-faq-answer">
                Yes. We treat every client's intellectual property with institutional confidentiality. We are happy to execute mutual NDAs before reviewing proprietary workflows or architecture specifications.
              </p>
            </div>

            <div className="contact-faq-item">
              <h3 className="contact-faq-question">Can you work with our existing codebase or third-party APIs?</h3>
              <p className="contact-faq-answer">
                Yes. We frequently audit, refactor, and scale existing software systems, build modern interfaces on top of existing databases, and develop bidirectional API integrations with legacy infrastructure.
              </p>
            </div>

            <div className="contact-faq-item">
              <h3 className="contact-faq-question">Who owns the intellectual property and source code?</h3>
              <p className="contact-faq-answer">
                You do. NEXFORD provides full, unencumbered ownership of all custom software, Figma design tokens, documentation, and repository commits upon project completion.
              </p>
            </div>

            <div className="contact-faq-item">
              <h3 className="contact-faq-question">What are your commercial payment milestones?</h3>
              <p className="contact-faq-answer">
                We operate on structured milestone-based billing tied to verified sprint deliverables (Discovery → Prototype → Functional Beta → Production Release), ensuring complete accountability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
