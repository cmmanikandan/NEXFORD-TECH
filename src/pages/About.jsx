import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ContactCTA from '../components/ContactCTA';
import { BRAND, WHY_NEXFORD } from '../data/content';
import {
  ShieldCheck,
  Code2,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="section bg-light" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <SectionHeader
            eyebrow="OUR IDENTITY & VISION"
            title="Technology Built Around"
            highlight="Your Business."
            description="NEXFORD TECHNOLOGIES combines software development, design, and business thinking to transform ideas into meaningful digital products."
            center={true}
          />
        </div>
      </section>

      {/* Main Narrative & Engineering Visual */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <div className="eyebrow">
                <span>HOW WE OPERATE</span>
              </div>
              <h2 style={{ fontSize: '34px', color: 'var(--color-dark-navy)', marginBottom: '20px' }}>
                Building the path to what's next.
              </h2>
              <p className="text-lead" style={{ marginBottom: '18px' }}>
                We work with businesses and entrepreneurs to create professional digital experiences, practical business systems, and custom technology solutions.
              </p>
              <p style={{ marginBottom: '24px' }}>
                In a technology landscape flooded with generic templates and disposable code, NEXFORD takes a disciplined engineering stance: every line of software we write is designed for maintainability, security, and measurable commercial value.
              </p>
              <p style={{ marginBottom: '32px' }}>
                We bridge the critical gap between conceptual business goals and production software execution, ensuring your digital investment delivers lasting competitive advantage.
              </p>

              <Link to="/contact" className="btn btn-primary">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Technical System Blueprint Visual */}
            <div className="about-blueprint-card">
              <div className="blueprint-header">
                <span>NEXFORD • CORE DELIVERY SPECIFICATION</span>
                <span className="blueprint-status">Verified Standards</span>
              </div>
              <div className="blueprint-body">
                <div className="blueprint-item">
                  <div className="blueprint-icon"><Code2 size={20} color="var(--color-primary-blue)" /></div>
                  <div>
                    <div className="blueprint-title">Disciplined Architecture</div>
                    <p className="blueprint-text">Modular TypeScript, strict linting, automated CI/CD validation, and decoupled APIs.</p>
                  </div>
                </div>

                <div className="blueprint-item">
                  <div className="blueprint-icon"><ShieldCheck size={20} color="#18B6A4" /></div>
                  <div>
                    <div className="blueprint-title">Enterprise Security Posture</div>
                    <p className="blueprint-text">Strict role-based access, encrypted databases, and OWASP-compliant practices.</p>
                  </div>
                </div>

                <div className="blueprint-item">
                  <div className="blueprint-icon"><Compass size={20} color="#7567E8" /></div>
                  <div>
                    <div className="blueprint-title">Direct Technical Ownership</div>
                    <p className="blueprint-text">You work directly with engineers and solution architects who understand your product inside out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Delivery Guarantees */}
      <section className="section bg-light" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            eyebrow="CLIENT COMMITMENTS"
            title="Our Four Fundamental"
            highlight="Guarantees."
            description="Clear principles that protect your investment, timeline, and intellectual property."
            center={true}
          />

          <div className="about-guarantees-grid">
            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <Code2 size={22} color="var(--color-primary-blue)" />
              </div>
              <h3 className="guarantee-title">Zero Technical Debt</h3>
              <p className="guarantee-desc">
                Clean, typed, self-documenting code built with automated testing and industry-standard frameworks for effortless future scaling.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <Users size={22} color="#18B6A4" />
              </div>
              <h3 className="guarantee-title">Direct Engineer Contact</h3>
              <p className="guarantee-desc">
                Eliminating layers of non-technical middlemen. You collaborate directly with senior architects who write and review the code.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <ShieldCheck size={22} color="#7567E8" />
              </div>
              <h3 className="guarantee-title">100% IP & Asset Ownership</h3>
              <p className="guarantee-desc">
                Full unencumbered ownership of all git repositories, Figma prototypes, documentation, and database schemas upon delivery.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-box">
                <CheckCircle2 size={22} color="#0789E8" />
              </div>
              <h3 className="guarantee-title">Production Stability Warranty</h3>
              <p className="guarantee-desc">
                Dedicated post-launch warranty and monitoring support covering bug fixes, server telemetry, and performance assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles (Why Choose Us) */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="ENGINEERING PRINCIPLES"
            title="Why Businesses Choose"
            highlight="NEXFORD."
            description="Our standards guide how we communicate, code, and support your technology."
            center={true}
          />

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {WHY_NEXFORD.map((item) => (
              <div key={item.number} className="why-card">
                <div className="why-number">PILLAR {item.number}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc" style={{ marginBottom: '14px' }}>{item.description}</p>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Have an idea or business challenge?"
        description="Let's discuss how disciplined engineering and modern design can elevate your business operations."
        buttonText="Talk to an Engineer →"
      />
    </div>
  );
}
