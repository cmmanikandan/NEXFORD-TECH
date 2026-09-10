import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Terminal, ShoppingCart, ArrowRight, Check } from 'lucide-react';
import './ServiceCard.css';

const ICON_MAP = {
  'web-development': Globe,
  'mobile-applications': Smartphone,
  'ui-ux-design': Palette,
  'custom-software': Terminal,
  'e-commerce': ShoppingCart
};

export default function ServiceCard({ service }) {
  const IconComponent = ICON_MAP[service.id] || Globe;
  const accentColor = service.accentColor || '#0789E8';

  return (
    <div
      className="service-card"
      style={{ '--service-accent': accentColor }}
    >
      {/* 3D Service Visual Preview - Flush with top, left, right (No space) */}
      {service.image && (
        <div className="service-card-image-wrap">
          <img
            src={service.image}
            alt={`${service.title} - Visual Showcase`}
            className="service-card-img"
            loading="lazy"
          />
        </div>
      )}

      <div className="service-card-body">
        {/* Card Header: Icon & Minimalist Number */}
        <div className="service-card-top">
          <div className="service-icon-box">
            <IconComponent size={20} />
          </div>
          <span className="service-index">{service.number}</span>
        </div>

        {/* Card Content */}
        <div className="service-card-content">
          <h3 className="service-card-title">{service.title}</h3>
          <p className="service-card-desc">{service.description}</p>
        </div>

        {/* Clean Feature Deliverables */}
        <div className="service-features-block">
          <ul className="service-features-list">
            {service.items.map((item, idx) => (
              <li key={idx} className="service-feature-item">
                <span className="feature-check-wrapper">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer Link */}
        <div className="service-card-bottom">
          <Link to={`/services/${service.id}`} className="service-learn-link">
            <span>Explore Service</span>
            <ArrowRight size={15} className="service-arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
