import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Shield,
  Workflow,
  ExternalLink,
  MessageSquare,
  Rocket,
  Building2,
  TrendingUp,
  Building,
  Check
} from 'lucide-react';
import {
  BRAND,
  SERVICES,
  SOLUTIONS,
  PROJECTS,
  PROCESS_STEPS,
  WHY_NEXFORD,
  WHAT_WE_BUILD
} from '../data/content';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import GoogleReviewCards from '../components/GoogleReviewCards';
import useScrollReveal from '../hooks/useScrollReveal';
import './Home.css';

export default function Home() {
  useScrollReveal();

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Dynamic Multi-Tone Aurora Ambient Mesh */}
        <div className="hero-aurora-glow hero-aurora-1" />
        <div className="hero-aurora-glow hero-aurora-2" />
        
        {/* High-Tech Dot Matrix Pattern with Vignette */}
        <div className="hero-dot-grid" />

        {/* Floating Telemetry Metric Badges (Desktop & Large Tablet) */}
        <div className="hero-floating-chip chip-left animate-float">
          <span className="live-dot-pulse" />
          <span className="chip-text">Cloud Microservices • 99.98% SLA</span>
        </div>
        <div className="hero-floating-chip chip-right animate-float-gentle">
          <Sparkles size={14} className="chip-icon" />
          <span className="chip-text">Engineered for Rapid Scale</span>
        </div>

        {/* Subtle Brand N Watermark */}
        <div className="brand-n-watermark" style={{ top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '520px', height: '520px' }}>
          <img src="/logo.png" alt="" width="520" height="520" style={{ opacity: 0.035, filter: 'grayscale(1)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <div className="eyebrow eyebrow-pill">
              <Sparkles size={14} />
              <span>{BRAND.eyebrow}</span>
            </div>

            <h1>
              {BRAND.heroHeadingBefore}
              <span className="gradient-text">{BRAND.heroHeadingHighlight}</span>
            </h1>

            <p className="text-lead" style={{ marginTop: '20px', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto' }}>
              {BRAND.heroSubtext}
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Project</span>
                <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <Link to="/work" className="btn btn-secondary btn-lg">
                <span>Explore Our Work</span>
              </Link>
            </div>
          </div>

          {/* Flagship Enterprise Ecosystem 3D Visual */}
          <div className="hero-ecosystem-visual-wrap reveal-on-scroll">
            <div className="hero-ecosystem-glow" />
            <img
              src="/home-top.png"
              alt="NEXFORD TECHNOLOGIES - Distributed Digital Product Ecosystem"
              className="hero-ecosystem-img animate-float-gentle"
              loading="eager"
            />
            <div className="hero-ecosystem-status-pill">
              <span className="live-dot-pulse" />
              <span>Full-Stack Cloud & Architecture Mesh • Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INTRODUCTION */}
      <section className="trust-section">
        <div className="container reveal-on-scroll">
          <div className="trust-content-grid">
            <div>
              <h2 className="trust-heading">
                {BRAND.trustHeading}
              </h2>
            </div>
            <div>
              <p className="text-lead" style={{ marginBottom: '16px' }}>
                {BRAND.trustText}
              </p>
              <div className="trust-pills">
                <span className="trust-pill">Web</span>
                <span className="trust-pill">Mobile</span>
                <span className="trust-pill">UI/UX</span>
                <span className="trust-pill">Custom Software</span>
                <span className="trust-pill">Digital Platforms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="section bg-light" id="services" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-tech-pattern" />
        <div className="section-ambient-glow glow-blue" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="WHAT WE DO"
              title="Digital Solutions Built Around"
              highlight="Your Business."
              description="From engaging digital experiences to powerful business systems, we engineer software around your commercial goals."
              center={true}
            />
          </div>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`reveal-on-scroll delay-${((index % 3) + 1) * 100}`}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION (With Miniature UI Illustrations) */}
      <section className="section bg-white" id="solutions" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-ambient-glow glow-teal" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="ENTERPRISE SOLUTIONS"
              title="Technology That Solves Real"
              highlight="Business Problems."
              description="Proven architectural frameworks tailored for sustainable operational efficiency and revenue growth."
              center={true}
            />
          </div>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {SOLUTIONS.map((item, index) => (
              <div key={item.id} className={`solution-card reveal-on-scroll delay-${((index % 3) + 1) * 100}`}>
                {/* 3D Solution Visual Showcase */}
                <div className="solution-card-image-wrap">
                  <img
                    src={item.image}
                    alt={`${item.title} - Enterprise Solution`}
                    className="solution-card-img"
                    loading="lazy"
                  />
                  <div className="solution-card-image-badge">{item.badge}</div>
                </div>

                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-desc">{item.description}</p>
                <ul className="solution-deliverables">
                  {item.deliverables.map((del, i) => (
                    <li key={i} className="solution-deliverable-item">
                      <CheckCircle2 size={14} color="var(--color-primary-blue)" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEW SECTION: WHAT CAN WE BUILD FOR YOU? */}
      <section className="section bg-light" id="what-we-build" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-tech-pattern" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="CAPABILITIES & FIT"
              title="What Can We Build"
              highlight="For You?"
              description="Whether launching a new venture or scaling established operations, we deliver purpose-built digital products tailored to your business stage."
              center={true}
            />
          </div>

          <div className="grid-4 what-build-grid" style={{ marginTop: '36px' }}>
            {WHAT_WE_BUILD.map((cat, idx) => {
              const IconComponent = cat.category === 'STARTUPS' ? Rocket
                : cat.category === 'SMALL BUSINESSES' ? Building2
                : cat.category === 'GROWING BUSINESSES' ? TrendingUp
                : Building;

              return (
                <div
                  key={cat.category}
                  className={`what-build-card reveal-on-scroll delay-${(idx + 1) * 100}`}
                  style={{ '--build-accent': cat.accent }}
                >
                  <div className="what-build-top-bar" />
                  
                  <div className="what-build-card-content">
                    <div className="what-build-header">
                      <div className="what-build-icon-wrap">
                        <IconComponent size={22} color={cat.accent} />
                      </div>
                      <span className="what-build-category">
                        {cat.category}
                      </span>
                      <p className="what-build-tagline">{cat.tagline}</p>
                    </div>

                    <div className="what-build-deliverables-label">SOLUTIONS & SCOPE</div>

                    <ul className="what-build-list">
                      {cat.items.map((item, i) => (
                        <li key={i} className="what-build-item">
                          <span className="what-build-check-wrap">
                            <Check size={12} strokeWidth={3} color={cat.accent} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="what-build-action">
                      <Link to="/contact" className="what-build-btn">
                        <span>Discuss Requirements</span>
                        <ArrowRight size={14} className="what-build-btn-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SELECTED WORK / PORTFOLIO */}
      <section className="section bg-white" id="work" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-ambient-glow glow-blue" style={{ top: '20%', right: '-10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="SELECTED WORK"
              title="Real Projects."
              highlight="Real Solutions."
              description="Explore real digital products designed, engineered, and maintained by NEXFORD TECHNOLOGIES."
              center={true}
            />
          </div>

          <div className="grid-3">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className={`reveal-on-scroll delay-${(index + 1) * 100}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION (Connected Timeline) */}
      <section className="section bg-light" id="process" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-tech-pattern" />
        <div className="section-ambient-glow glow-teal" style={{ bottom: '-10%', left: '10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="HOW WE WORK"
              title="From Idea to"
              highlight="Impact."
              description="A structured, predictable, and transparent delivery methodology engineered for business velocity."
              center={true}
            />
          </div>

          <div className="timeline-container">
            <div className="timeline-line-track" />
            <div className="timeline-grid">
              {PROCESS_STEPS.map((p, index) => (
                <div key={p.step} className={`timeline-step-card reveal-on-scroll delay-${(index + 1) * 100}`}>
                  <div className="timeline-node">
                    <span className="timeline-node-core" />
                  </div>
                  <div className="step-badge">{p.step}</div>
                  <h3 className="step-title">{p.title}</h3>
                  <p className="step-desc">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY NEXFORD */}
      <section className="section bg-white" id="why-us">
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="STRATEGIC ADVANTAGE"
              title="Why Businesses Choose"
              highlight="NEXFORD."
              description="We combine technical depth with business understanding to deliver software that drives lasting ROI."
              center={true}
            />
          </div>

          <div className="why-grid">
            {WHY_NEXFORD.map((item, index) => (
              <div key={item.number} className={`why-card reveal-on-scroll delay-${((index % 3) + 1) * 100}`}>
                <div className="why-number">{item.number} • ADVANTAGE</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginTop: '10px' }}>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 11. TESTIMONIAL SECTION (Google Review Style Feedback Cards) */}
      <section className="section bg-light" id="testimonials">
        <div className="container reveal-on-scroll">
          <SectionHeader
            eyebrow="CLIENT VOICES"
            title="What Our Clients"
            highlight="Say."
            description="Direct feedback and verified reviews from partners who trust NEXFORD to build and maintain their critical technology."
            center={true}
          />

          <GoogleReviewCards />
        </div>
      </section>

      {/* 12. FINAL CONTACT CTA */}
      <ContactCTA title="Have an idea? Let's build it." />
    </div>
  );
}
