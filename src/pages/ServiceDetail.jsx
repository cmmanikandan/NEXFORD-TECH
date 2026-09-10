import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, PROJECTS } from '../data/content';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Code2,
  Layers,
  Sparkles,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import ProjectCard from '../components/ProjectCard';
import ServiceArchitectureVisual from '../components/ServiceArchitectureVisual';
import ProjectEstimatorWidget from '../components/ProjectEstimatorWidget';
import useScrollReveal from '../hooks/useScrollReveal';
import './ServiceDetail.css';

// Rich service specific details
const SERVICE_EXPANDED_DATA = {
  'web-development': {
    heroTag: 'ENTERPRISE WEB ENGINEERING',
    tagline: 'High-performance web architecture built for velocity, conversion, and global scale.',
    challenge: 'Modern businesses cannot afford sluggish page speeds, fragile codebases, or clunky content systems that slow down marketing and product teams.',
    solutionOverview: 'NEXFORD engineers high-end web applications and corporate websites with modern component frameworks (React, Next.js, TypeScript), ensuring sub-second page loads, ironclad security headers, and intuitive administrative control.',
    deliverableDetails: [
      {
        title: 'Corporate & Brand Websites',
        desc: 'High-authority digital storefronts engineered with responsive design, optimized typography, and search engine excellence to build buyer trust.'
      },
      {
        title: 'Custom Web Applications',
        desc: 'Dynamic, state-driven browser applications that replace complicated desktop software with fluid, zero-install cloud workflows.'
      },
      {
        title: 'Admin Portals & Control Centers',
        desc: 'Data-dense operational dashboards equipped with role-based access control, realtime telemetry, and exportable financial reporting.'
      },
      {
        title: 'High-Converting Landing Experiences',
        desc: 'Laser-focused campaign pages built with minimal JavaScript payloads for maximum speed and conversion rate optimization (CRO).'
      }
    ],
    architectureHighlights: [
      'Server-Side Rendering (SSR) & Static Site Generation (SSG) for instant TTFB',
      'Modular CSS / Design System architecture preventing style drift',
      'Automated accessibility audits (WCAG 2.1 AA compliant)',
      'Global CDN edge distribution with automated asset compression'
    ],
    faqs: [
      {
        q: 'How long does a corporate website or web application typically take?',
        a: 'Typical corporate web builds range from 3 to 6 weeks, while complex full-stack web applications usually require 6 to 12 weeks depending on integration requirements.'
      },
      {
        q: 'Do you provide maintenance and cloud infrastructure management after launch?',
        a: 'Yes. NEXFORD offers comprehensive SLA support packages including uptime monitoring, dependency patching, cloud scaling, and iterative feature development.'
      }
    ],
    relatedProjectIds: ['qubink', 'manikandan-lathe']
  },
  'mobile-applications': {
    heroTag: 'CROSS-PLATFORM MOBILE ENGINEERING',
    tagline: 'Fluid 60fps mobile applications engineered for iOS and Android from a single robust codebase.',
    challenge: 'Managing separate Swift and Kotlin codebases often doubles engineering overhead, creates platform discrepancies, and slows release cadences.',
    solutionOverview: 'We architect cross-platform mobile apps using React Native and modern mobile tools that look, feel, and perform indistinguishably from native apps, sharing up to 90% of business logic while preserving native UI conventions.',
    deliverableDetails: [
      {
        title: 'Customer-Facing Mobile Apps',
        desc: 'Engaging consumer and client mobile experiences with seamless biometric login, in-app payments, and push notification automation.'
      },
      {
        title: 'Field & Logistics Operations Apps',
        desc: 'Ruggedized mobile workflows built for delivery drivers, field technicians, and inspectors with offline caching and GPS tracking.'
      },
      {
        title: 'Enterprise Companion Apps',
        desc: 'Secure internal tools granting managers and executives realtime visibility into corporate telemetry and team operations on the go.'
      },
      {
        title: 'Hardware & IoT Integration',
        desc: 'Direct communication with BLE beacons, thermal receipt printers, QR scanners, and remote sensors for connected workflows.'
      }
    ],
    architectureHighlights: [
      'Smooth 60fps animations with hardware acceleration',
      'Offline-first data sync with conflict resolution',
      'Secure keychain token storage and biometric authentication',
      'Automated App Store and Google Play CI/CD deployment pipelines'
    ],
    faqs: [
      {
        q: 'Will cross-platform mobile apps feel as responsive as pure native apps?',
        a: 'Yes. With modern React Native architecture and native thread bridging, our apps execute at 60 frames per second with native system gestures and zero input lag.'
      },
      {
        q: 'How do you handle App Store and Google Play approvals?',
        a: 'We handle the complete submission, compliance checks, asset preparation, and review correspondence from initial beta testing to final public release.'
      }
    ],
    relatedProjectIds: ['mahil-ro', 'qubink']
  },
  'ui-ux-design': {
    heroTag: 'STRATEGIC PRODUCT DESIGN & DESIGN SYSTEMS',
    tagline: 'Translating complex workflows into intuitive, high-clarity interfaces that delight users and drive conversion.',
    challenge: 'Software with high technical capability often fails when the interface is confusing, cluttered, or difficult for non-technical employees to navigate.',
    solutionOverview: 'NEXFORD conducts user journey mapping, information architecture structuring, wireframing, and interactive design token systems in Figma. We test every interface against real user tasks before engineering begins.',
    deliverableDetails: [
      {
        title: 'User Research & Journey Mapping',
        desc: 'Qualitative customer interviews, task analysis, and friction-point discovery that inform data-backed interface decisions.'
      },
      {
        title: 'Atomic Design Systems & Tokens',
        desc: 'Comprehensive Figma component libraries and design tokens that synchronize perfectly with frontend code.'
      },
      {
        title: 'High-Fidelity Interactive Prototyping',
        desc: 'Clickable realistic prototypes that allow stakeholders and clients to experience the final product prior to coding.'
      },
      {
        title: 'Accessibility & Usability Audits',
        desc: 'Reviewing contrast, touch target dimensions, screen-reader semantics, and layout responsiveness to guarantee universal usability.'
      }
    ],
    architectureHighlights: [
      'Comprehensive Figma component libraries with auto-layout and variable modes',
      'Design token pipeline seamlessly exporting to CSS variables',
      'WCAG 2.1 AA compliance across all color schemes and contrast pairings',
      'Micro-interaction choreography engineered for natural cognitive flow'
    ],
    faqs: [
      {
        q: 'What assets do we receive at the conclusion of the design phase?',
        a: 'You receive complete Figma source files, documented design tokens, component libraries, responsive breakpoints (Desktop, Tablet, Mobile), and interactive clickable prototypes.'
      },
      {
        q: 'Can you redesign our existing software without breaking our current workflow?',
        a: 'Yes. We specialize in phased UI/UX modernization, isolating critical user paths and upgrading them systematically without disrupting active business operations.'
      }
    ],
    relatedProjectIds: ['qubink', 'mahil-ro']
  },
  'custom-software': {
    heroTag: 'BESPOKE ENTERPRISE SOFTWARE SYSTEMS',
    tagline: 'Custom ERP, billing, inventory, and automation software built around your exact business operational model.',
    challenge: 'Off-the-shelf software forces businesses to change their workflows, charges exorbitant per-seat subscription fees, and creates data silos.',
    solutionOverview: 'We architect purpose-built software platforms that model your actual corporate processes, centralizing billing, warehouse stock, staff permissions, and customer data into one unified operating system.',
    deliverableDetails: [
      {
        title: 'Business Management Systems (BMS / ERP)',
        desc: 'Integrated management consoles unifying departments, customer records, inventory tracking, and operational tasks.'
      },
      {
        title: 'Billing & Invoicing Engines',
        desc: 'Automated recurring billing, tax-compliant invoice generation, payment reconciliation, and ledger reporting.'
      },
      {
        title: 'Automated Workflow Pipelines',
        desc: 'Eliminating repetitive manual data entry between spreadsheets and databases through automated event triggers.'
      },
      {
        title: 'Custom API Integrations & Middleware',
        desc: 'Reliable bridges connecting legacy databases, third-party payment gateways, logistics partners, and communication tools.'
      }
    ],
    architectureHighlights: [
      'High-throughput PostgreSQL databases with ACID transaction guarantees',
      'Strict Role-Based Access Control (RBAC) and immutable audit logs',
      'Realtime WebSocket event streaming for sub-second team updates',
      'Automated nightly database backups and multi-region disaster recovery'
    ],
    faqs: [
      {
        q: 'Who owns the intellectual property and source code of the custom software?',
        a: 'You do. Upon project delivery and milestone completion, 100% of the custom software source code, architecture, and database schemas belong entirely to your company.'
      },
      {
        q: 'Can the custom software integrate with our existing accounting or CRM tools?',
        a: 'Yes. We engineer robust REST and GraphQL API adapters to sync data bidirectionally with QuickBooks, SAP, Salesforce, Stripe, or any modern service.'
      }
    ],
    relatedProjectIds: ['qubink', 'manikandan-lathe']
  },
  'e-commerce': {
    heroTag: 'HIGH-CONVERSION DIGITAL COMMERCE ARCHITECTURE',
    tagline: 'High-converting online stores, automated checkouts, and resilient inventory pipelines.',
    challenge: 'Clunky checkout experiences, slow page speeds, and fragmented inventory sync cause high cart abandonment and lost revenue.',
    solutionOverview: 'We engineer blazingly fast modern storefronts with sub-second page loads, automated payment gateway integrations, real-time inventory tracking, and intuitive merchant admin consoles.',
    deliverableDetails: [
      {
        title: 'High-Performance Online Stores',
        desc: 'Custom headless storefronts engineered for lightning-fast catalog search, mobile conversion, and SEO visibility.'
      },
      {
        title: 'Seamless Payment Gateways',
        desc: 'One-click checkout with Razorpay, Stripe, UPI, Apple Pay, and automated multi-currency reconciliation.'
      },
      {
        title: 'Live Inventory & Stock Management',
        desc: 'Real-time stock reservation, low-inventory alerts, SKU tracking, and warehouse dispatch integrations.'
      },
      {
        title: 'Customer Portals & Order Tracking',
        desc: 'Self-service account dashboards for order history, automated WhatsApp status updates, and invoice downloads.'
      }
    ],
    architectureHighlights: [
      'Sub-second first-paint speeds with Edge CDN asset optimization',
      'PCI-DSS compliant secure checkout and tokenized payment pipelines',
      'Real-time webhooks for automated order dispatch and invoice generation',
      'Automated daily catalog sync and multi-channel inventory reconciliation'
    ],
    faqs: [
      {
        q: 'Which payment gateways can be integrated?',
        a: 'We integrate all major payment gateways including Razorpay, Stripe, PayPal, Cashfree, UPI, and net banking with automated webhook verification.'
      },
      {
        q: 'Can the store handle flash sales and high traffic spikes?',
        a: 'Yes. Our e-commerce architectures are built on cloud-native serverless infrastructure and global Edge CDNs that scale effortlessly under sudden surges in customer volume.'
      }
    ],
    relatedProjectIds: ['qubink', 'mahil-ro', 'manikandan-lathe']
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  useScrollReveal(id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const expanded = SERVICE_EXPANDED_DATA[service.id] || {};
  const relatedProjects = PROJECTS.filter((p) =>
    (expanded.relatedProjectIds || []).includes(p.id)
  );

  return (
    <div className="service-detail-page">
      {/* 1. Header Banner */}
      <section className="service-detail-hero">
        <div className="container">
          <div style={{ marginBottom: '28px' }}>
            <Link to="/services" className="service-back-link" aria-label="Back to All Services">
              <span className="back-link-icon">
                <ArrowLeft size={14} />
              </span>
              <span>Back to All Services</span>
            </Link>
          </div>

          <div className="service-badge-pill" style={{ color: service.accentColor, borderColor: service.accentColor }}>
            <Sparkles size={14} />
            <span>{expanded.heroTag || `SERVICE ${service.number} • ${service.title.toUpperCase()}`}</span>
          </div>

          <h1 className="service-hero-title">
            {service.title}
          </h1>

          <p className="service-hero-subtitle">
            {expanded.tagline || service.description}
          </p>

          <div className="service-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Start Your {service.title} Project</span>
              <ArrowRight size={18} className="arrow-icon" />
            </Link>
            <Link to="/work" className="btn btn-secondary btn-lg">
              <span>View Case Studies</span>
            </Link>
          </div>

          {/* 3D Service Architecture Visual Showcase */}
          {service.image && (
            <div className="service-hero-visual-wrap reveal-on-scroll">
              <div
                className="service-hero-visual-glow"
                style={{
                  background: `radial-gradient(ellipse at center, ${service.accentColor}33 0%, rgba(7, 137, 232, 0.12) 40%, transparent 75%)`
                }}
              />
              <img
                src={service.image}
                alt={`${service.title} Architecture & Visual Interface`}
                className="service-hero-visual-img animate-float-gentle"
                loading="eager"
              />
            </div>
          )}
        </div>
      </section>

      {/* 2. Overview & Problem/Solution Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="service-strategy-grid">
            <div className="reveal-on-scroll">
              <div className="eyebrow">
                <span>THE STRATEGIC CHALLENGE</span>
              </div>
              <h2 style={{ fontSize: '32px', color: 'var(--color-dark-navy)', marginBottom: '18px' }}>
                Why generic solutions fail businesses.
              </h2>
              <p className="text-lead" style={{ marginBottom: '20px' }}>
                {expanded.challenge}
              </p>
              <p>
                {expanded.solutionOverview}
              </p>
            </div>

            {/* Architecture Highlights Card */}
            <div className="service-highlights-card reveal-on-scroll delay-200">
              <div className="highlights-header">
                <ShieldCheck size={18} color="var(--color-bright-blue)" />
                <span>NEXFORD ENGINEERING STANDARDS</span>
              </div>
              <div className="highlights-body">
                <ul className="highlights-list">
                  {(expanded.architectureHighlights || []).map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={16} color={service.accentColor} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Interactive System Architecture Topology */}
      <section className="section bg-white" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="reveal-on-scroll">
            <div className="eyebrow">
              <span>SYSTEM BLUEPRINT</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--color-dark-navy)', marginBottom: '14px' }}>
              Interactive {service.title} Architecture
            </h2>
            <p className="text-lead" style={{ maxWidth: '680px', marginBottom: '32px' }}>
              Explore how components, security layers, and data pipelines interlock to support uninterrupted business operations.
            </p>
          </div>

          <div className="reveal-on-scroll delay-100">
            <ServiceArchitectureVisual serviceId={service.id} />
          </div>
        </div>
      </section>

      {/* 3. Detailed Deliverables Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="reveal-on-scroll">
            <div className="eyebrow">
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 style={{ fontSize: '34px', color: 'var(--color-dark-navy)', marginBottom: '16px' }}>
              What We Build in <span className="gradient-text">{service.title}</span>
            </h2>
            <p className="text-lead" style={{ maxWidth: '680px', marginBottom: '40px' }}>
              Each deliverable is engineered to precise production standards, ensuring security, maintainability, and clean user experience.
            </p>
          </div>

          <div className="grid-2">
            {(expanded.deliverableDetails || []).map((item, idx) => (
              <div key={idx} className={`service-capability-card reveal-on-scroll delay-${(idx + 1) * 100}`}>
                <div className="capability-num" style={{ color: service.accentColor }}>0{idx + 1}</div>
                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Project Estimator Widget */}
          <div style={{ marginTop: '48px' }} className="reveal-on-scroll delay-200">
            <ProjectEstimatorWidget serviceTitle={service.title} />
          </div>
        </div>
      </section>

      {/* 4. Technologies & Tools */}
      <section className="section bg-white">
        <div className="container">
          <div className="reveal-on-scroll">
            <div className="eyebrow">
              <span>TECHNOLOGY SPECIFICATIONS</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--color-dark-navy)', marginBottom: '14px' }}>
              Technology Stack for {service.title}
            </h2>
            <p className="text-lead" style={{ maxWidth: '680px', marginBottom: '36px' }}>
              We choose modern, battle-tested tools and frameworks that guarantee stability and high performance.
            </p>
          </div>

          <div className="service-tech-pill-grid reveal-on-scroll delay-100">
            {service.tech.map((t, idx) => (
              <div key={idx} className="service-tech-pill-item">
                <Cpu size={16} color="var(--color-primary-blue)" />
                <span style={{ fontWeight: 600 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <div className="reveal-on-scroll">
              <div className="eyebrow">
                <span>PROVEN IMPLEMENTATIONS</span>
              </div>
              <h2 style={{ fontSize: '32px', color: 'var(--color-dark-navy)', marginBottom: '32px' }}>
                Selected Work Featuring {service.title}
              </h2>
            </div>

            <div className="grid-2">
              {relatedProjects.map((proj) => (
                <div key={proj.id} className="reveal-on-scroll delay-200">
                  <ProjectCard project={proj} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ Section */}
      <section className="section bg-white">
        <div className="container container-narrow">
          <div className="reveal-on-scroll">
            <div className="eyebrow">
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--color-dark-navy)', marginBottom: '32px' }}>
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="service-faqs-flow">
            {(expanded.faqs || []).map((faq, idx) => (
              <div key={idx} className="service-faq-item reveal-on-scroll delay-100">
                <div className="faq-question">
                  <HelpCircle size={18} color="var(--color-primary-blue)" />
                  <span>{faq.q}</span>
                </div>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Dark CTA */}
      <ContactCTA
        title={`Ready to build your ${service.title.toLowerCase()} solution?`}
        description={`Tell us about your requirements, timeline, and goals. Our solution architects will design a production-ready roadmap tailored to your business.`}
        buttonText={`Start ${service.title} Project →`}
      />
    </div>
  );
}
