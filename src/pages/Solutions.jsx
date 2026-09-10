import React from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import ContactCTA from '../components/ContactCTA';
import {
  Briefcase,
  Layers,
  Users,
  Rocket,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Solutions.css';

const SOLUTION_ICONS = {
  'business-websites': Briefcase,
  'business-management': Layers,
  'customer-platforms': Users,
  'digital-products': Rocket,
  'automation': Zap
};

export default function Solutions() {
  useScrollReveal();

  return (
    <div className="solutions-page">
      {/* Hero Header */}
      <section className="section bg-light" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="STRATEGIC PLATFORMS"
              title="Technology That Solves Real"
              highlight="Business Problems."
              description="We build targeted systems addressing the exact operational choke points, revenue bottlenecks, and customer experience hurdles faced by scaling enterprises."
              center={true}
            />
          </div>
        </div>
      </section>

      {/* Solutions Detailed Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="solutions-container-grid">
            {SOLUTIONS.map((sol, index) => {
              const Icon = SOLUTION_ICONS[sol.id] || Briefcase;

              return (
                <div key={sol.id} className={`solution-detailed-box reveal-on-scroll delay-${((index % 3) + 1) * 100}`}>
                  {/* 3D Solution Visual Showcase */}
                  <div className="solution-detailed-image-wrap">
                    <img
                      src={sol.image}
                      alt={`${sol.title} - Enterprise Solution Architecture`}
                      className="solution-detailed-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="solution-box-header">
                    <div className="solution-box-icon">
                      <Icon size={24} color="var(--color-primary-blue)" />
                    </div>
                    <div>
                      <span className="solution-box-badge">{sol.badge}</span>
                      <h2 className="solution-box-title">{sol.title}</h2>
                    </div>
                  </div>

                  <p className="solution-box-desc">{sol.description}</p>

                  <div className="solution-features-block">
                    <div className="features-label">Key Capabilities & Deliverables</div>
                    <ul className="solution-features-list">
                      {sol.deliverables.map((item, idx) => (
                        <li key={idx} className="solution-feature-item">
                          <CheckCircle2 size={16} color="var(--color-primary-blue)" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                    <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                      <span>Request Solution Proposal</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Delivery Framework */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            eyebrow="EXECUTION STANDARDS"
            title="How We Deliver"
            highlight="Solutions."
            description="A disciplined engineering engagement model ensuring fast time-to-market, zero scope ambiguity, and lasting system resilience."
            center={true}
          />

          <div className="grid-4" style={{ marginTop: '40px' }}>
            <div className="framework-card">
              <div className="framework-num">PHASE 01</div>
              <h3 className="framework-title">Architecture Discovery</h3>
              <p className="framework-desc">We map legacy bottlenecks, analyze operational flows, and establish clear technical specifications.</p>
            </div>
            <div className="framework-card">
              <div className="framework-num">PHASE 02</div>
              <h3 className="framework-title">Interactive Prototype</h3>
              <p className="framework-desc">We design high-fidelity design systems and clickable prototypes tested against real workflows.</p>
            </div>
            <div className="framework-card">
              <div className="framework-num">PHASE 03</div>
              <h3 className="framework-title">Production Engineering</h3>
              <p className="framework-desc">Fullstack modular implementation with type-safe APIs, automated CI/CD testing, and security hardening.</p>
            </div>
            <div className="framework-card">
              <div className="framework-num">PHASE 04</div>
              <h3 className="framework-title">Continuous Scaling</h3>
              <p className="framework-desc">Zero-downtime deployment, infrastructure telemetry monitoring, and proactive SLA optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Let's solve your business challenge."
        description="From operational bottlenecks to customer experience scaling, our enterprise solution team designs the exact architecture you need."
      />
    </div>
  );
}
