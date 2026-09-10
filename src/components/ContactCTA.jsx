import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import './ContactCTA.css';

export default function ContactCTA({
  title = "Have an idea? Let's build it.",
  description = "Tell us about your project, timeline, and goals. Our team will review your requirements and get back to you.",
  buttonText = "Start a Project"
}) {
  return (
    <section className="contact-cta-wrapper">
      {/* Subtle blue geometric tech art */}
      <svg className="contact-cta-bg-art" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0789E8" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="1.5" fill="#18A9F5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
      
      {/* Subtle N symbol watermark */}
      <div className="brand-n-watermark" style={{ top: '-40px', right: '5%', width: '220px', height: '220px' }}>
        <img src="/logo.png" alt="" width="220" height="220" style={{ opacity: 0.15, filter: 'grayscale(1)' }} />
      </div>

      <div className="contact-cta-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-cta-content">
          <div className="contact-cta-eyebrow">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="contact-cta-title">
            {title}
          </h2>
          <p className="contact-cta-desc">
            {description}
          </p>
          <div className="contact-cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>{buttonText}</span>
              <ArrowRight size={18} className="arrow-icon" />
            </Link>
            <Link to="/contact" className="btn btn-dark btn-lg">
              <MessageSquare size={18} />
              <span>Talk to Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
