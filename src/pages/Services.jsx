import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import ContactCTA from '../components/ContactCTA';
import {
  Globe,
  Smartphone,
  Palette,
  Terminal,
  ShoppingCart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

const ICON_MAP = {
  'web-development': Globe,
  'mobile-applications': Smartphone,
  'ui-ux-design': Palette,
  'custom-software': Terminal,
  'e-commerce': ShoppingCart
};

export default function Services() {
  useScrollReveal();
  return (
    <div className="services-page">
      {/* Services Hero Header */}
      <section className="section bg-light" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <SectionHeader
            eyebrow="CAPABILITIES & SERVICES"
            title="Digital Solutions Built Around"
            highlight="Your Business."
            description="From consumer-facing web experiences to mission-critical business software, we engineer purpose-built digital products that drive measurable business outcomes."
            center={true}
          />

          {/* Quick Service Anchor Navigation */}
          <div className="service-jump-bar">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.id] || Globe;
              return (
                <a key={s.id} href={`#${s.id}`} className="service-jump-pill">
                  <Icon size={15} style={{ color: s.accentColor }} />
                  <span>{s.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="section bg-white">
        <div className="container">
          <div className="services-list">
            {SERVICES.map((s, index) => {
              const Icon = ICON_MAP[s.id] || Globe;
              const isEven = index % 2 === 1;

              return (
                <div key={s.id} className={`service-detail-row ${isEven ? 'reverse' : ''} reveal-on-scroll`} id={s.id}>
                  <div className="service-detail-info">
                    <div className="service-detail-badge" style={{ color: s.accentColor, borderColor: s.accentColor }}>
                      <Icon size={18} />
                      <span>SERVICE {s.number} • {s.title.toUpperCase()}</span>
                    </div>

                    <h2 className="service-detail-title">{s.title}</h2>
                    <p className="text-lead" style={{ marginBottom: '18px' }}>
                      {s.description}
                    </p>
                    <p style={{ marginBottom: '24px' }}>
                      {s.details}
                    </p>

                    <h4 style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-dark-navy)', marginBottom: '12px' }}>
                      Core Deliverables:
                    </h4>
                    <div className="deliverable-chips">
                      {s.items.map((item, i) => (
                        <div key={i} className="deliverable-chip">
                          <CheckCircle2 size={15} style={{ color: s.accentColor }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <Link to={`/services/${s.id}`} className="btn btn-primary">
                        <span>Explore {s.title} Specs</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link to="/contact" className="btn btn-secondary">
                        <span>Discuss Project</span>
                      </Link>
                    </div>
                  </div>

                  {/* 3D Visual Column */}
                  <div className="service-detail-visual-col">
                    <div className="service-detail-image-wrap">
                      <img
                        src={s.image}
                        alt={`${s.title} - Architecture & Visual Interface`}
                        className="service-detail-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Need the right technology for your business?"
        description="Tell us about your technical specifications and growth milestones. Our senior solutions architects will outline an actionable technical roadmap."
      />
    </div>
  );
}
