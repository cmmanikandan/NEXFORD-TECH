import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, SERVICES } from '../data/content';
import BrandLogo from './BrandLogo';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* Crisp 1px brand accent line across the top */}
      <div className="footer-accent-line" />

      <div className="container">
        <div className="footer-top">
          <div className="footer-grid">
            {/* 1. Brand column */}
            <div className="footer-brand-col">
              <BrandLogo theme="dark" />

              <p className="footer-tagline">
                "{BRAND.tagline}"
              </p>

              <div className="footer-contact-list">
                <a href={`mailto:${BRAND.email}`} className="footer-contact-item">
                  <Mail size={15} className="footer-contact-icon" />
                  <span>{BRAND.email}</span>
                </a>
                <a href={`tel:${BRAND.phoneRaw}`} className="footer-contact-item">
                  <Phone size={15} className="footer-contact-icon" />
                  <span>{BRAND.phone}</span>
                </a>
                <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                  <Instagram size={15} className="footer-contact-icon" />
                  <span>@{BRAND.instagram}</span>
                </a>
                <div className="footer-contact-item">
                  <MapPin size={15} className="footer-contact-icon" />
                  <span>{BRAND.address}</span>
                </div>
              </div>

              {/* Social links */}
              <div className="footer-social-row">
                <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                  <Phone size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                  <Github size={16} />
                </a>
              </div>
            </div>

            {/* 2. Navigation */}
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/services" className="footer-link">Services</Link></li>
                <li><Link to="/solutions" className="footer-link">Solutions</Link></li>
                <li><Link to="/work" className="footer-link">Selected Work</Link></li>
                <li><Link to="/about" className="footer-link">About</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>

            {/* 3. Services with direct detail page links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.id}`} className="footer-link">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Solutions */}
            <div className="footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-links">
                <li><Link to="/solutions" className="footer-link">Business Websites</Link></li>
                <li><Link to="/solutions" className="footer-link">Business Management</Link></li>
                <li><Link to="/solutions" className="footer-link">Customer Platforms</Link></li>
                <li><Link to="/solutions" className="footer-link">Digital Products</Link></li>
                <li><Link to="/solutions" className="footer-link">Automation Workflows</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            {BRAND.copyright}
          </div>
          <div className="footer-bottom-badges">
            <span className="footer-badge">Enterprise Quality</span>
            <span className="footer-badge-dot">•</span>
            <span className="footer-badge">Security-First Architecture</span>
            <span className="footer-badge-dot">•</span>
            <span className="footer-badge">Scalable Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
