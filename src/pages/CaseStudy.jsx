import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/content';
import ProjectMobileShowcase from '../components/ProjectMobileShowcase';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Server,
  Database,
  Smartphone,
  Sparkles,
  Workflow,
  Target,
  Compass,
  Activity,
  Zap,
  Globe,
  Monitor,
  Code2,
  Box,
  FileCheck,
  TrendingUp
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './CaseStudy.css';

export default function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  useScrollReveal(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const domainName = project.id === 'qubink'
    ? 'qubink.app • Production Environment'
    : project.id === 'manikandan-lathe'
    ? 'ml-klm.vercel.app • Live Industrial Platform'
    : 'mahil-ro.com • Production Website';

  return (
    <div className="case-study-page">
      {/* 01 — HERO SECTION */}
      <section className="cs-hero-section">
        <div className="container">
          <div className="cs-back-nav">
            <Link to="/work" className="case-back-link" aria-label="Back to All Work">
              <span className="back-link-icon">
                <ArrowLeft size={14} />
              </span>
              <span>Back to All Work</span>
            </Link>
          </div>

          <div className="cs-hero-grid">
            <div className="cs-hero-content">
              <div className="cs-hero-badge">
                <span className="cs-badge-dot" />
                <span>{project.heroTag || 'CASE STUDY / DIGITAL PRODUCT'}</span>
              </div>

              <h1 className="cs-hero-title">{project.title}</h1>
              <div className="cs-hero-headline">{project.headline || project.subtitle}</div>

              <p className="cs-hero-desc">
                {project.heroDescription || project.overview}
              </p>

              <div className="cs-hero-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg cs-live-btn"
                >
                  <span>{project.liveUrlLabel || 'Visit Live Website →'}</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('project-snapshot')}
                  className="btn btn-secondary btn-lg cs-explore-btn"
                >
                  <span>Explore Case Study</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="cs-hero-visual">
              <div className="cs-mockup-frame">
                <div className="cs-mockup-topbar">
                  <div className="cs-window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-amber" />
                    <span className="dot dot-green" />
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-window-url cs-window-url-clickable"
                    title={`Open live website for ${project.title}`}
                  >
                    <Globe size={12} />
                    <span>{domainName}</span>
                    <ExternalLink size={11} style={{ marginLeft: 4, opacity: 0.7 }} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-window-status cs-window-status-link"
                    title="Open live website"
                  >
                    Live ↗
                  </a>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-mockup-screen-link"
                  title={`Open live website for ${project.title}`}
                >
                  <div className="cs-mockup-screen">
                    <img
                      src={project.image}
                      alt={`${project.title} Interface`}
                      className="cs-mockup-img"
                    />
                    <div className="cs-mockup-glow" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — PROJECT SNAPSHOT */}
      <section id="project-snapshot" className="cs-snapshot-section">
        <div className="container">
          <div className="cs-snapshot-strip">
            <div className="cs-snapshot-col">
              <span className="cs-snapshot-label">PROJECT</span>
              <span className="cs-snapshot-val">{project.title}</span>
            </div>
            <div className="cs-snapshot-divider" />
            <div className="cs-snapshot-col">
              <span className="cs-snapshot-label">INDUSTRY</span>
              <span className="cs-snapshot-val">{project.industry}</span>
            </div>
            <div className="cs-snapshot-divider" />
            <div className="cs-snapshot-col">
              <span className="cs-snapshot-label">CATEGORY</span>
              <span className="cs-snapshot-val">{project.category}</span>
            </div>
            <div className="cs-snapshot-divider" />
            <div className="cs-snapshot-col">
              <span className="cs-snapshot-label">FOCUS</span>
              <span className="cs-snapshot-val">{project.focus}</span>
            </div>
          </div>

          <div className="cs-snapshot-statement">
            <p>"{project.summaryStatement}"</p>
          </div>
        </div>
      </section>

      {/* 03 — THE CHALLENGE */}
      <section className="section bg-white">
        <div className="container">
          <div className="cs-section-header">
            <div className="cs-eyebrow">03 • THE CHALLENGE</div>
            <h2 className="cs-section-title">{project.challenge.heading}</h2>
            {project.challenge.supporting && (
              <p className="cs-section-subtitle">{project.challenge.supporting}</p>
            )}
            <p className="cs-section-desc">{project.challenge.description}</p>
          </div>

          <div className="cs-challenge-grid">
            {project.challenge.items.map((item, idx) => (
              <div key={idx} className="cs-challenge-card reveal-on-scroll">
                <div className="cs-challenge-num">{item.num}</div>
                <h3 className="cs-challenge-title">{item.title}</h3>
                <p className="cs-challenge-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="cs-highlight-quote reveal-on-scroll">
            <div className="cs-quote-bar" />
            <div className="cs-quote-text">
              "{project.challenge.highlight}"
            </div>
          </div>
        </div>
      </section>

      {/* 04 — THE IDEA */}
      <section className="cs-idea-section">
        <div className="container">
          <div className="cs-section-header text-center cs-idea-header">
            <div className="cs-eyebrow cs-eyebrow-light">04 • THE IDEA</div>
            <h2 className="cs-section-title text-white">{project.idea.heading}</h2>
            <p className="cs-idea-desc">"{project.idea.description}"</p>
          </div>

          <div className="cs-flow-track reveal-on-scroll">
            {project.idea.flow.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="cs-flow-node">
                  <span className="cs-node-idx">0{idx + 1}</span>
                  <span className="cs-node-label">{step}</span>
                </div>
                {idx < project.idea.flow.length - 1 && (
                  <div className="cs-flow-arrow">
                    <span className="cs-flow-line" />
                    <ArrowRight size={16} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="cs-idea-statement reveal-on-scroll">
            <Sparkles size={22} className="cs-sparkle-icon" />
            <span>"{project.idea.quote}"</span>
          </div>
        </div>
      </section>

      {/* 05 — HOW THE PRODUCT WORKS / CUSTOMER JOURNEY */}
      <section className="section bg-light">
        <div className="container">
          <div className="cs-section-header">
            <div className="cs-eyebrow">05 • WORKFLOW PIPELINE</div>
            <h2 className="cs-section-title">{project.workflow.heading}</h2>
            <p className="cs-section-subtitle">{project.workflow.subheading}</p>
          </div>

          <div className="cs-timeline-container">
            <div className="cs-timeline-desktop">
              {project.workflow.steps.map((st, idx) => (
                <div key={idx} className="cs-timeline-step reveal-on-scroll">
                  <div className="cs-step-header">
                    <span className="cs-step-badge">{st.step}</span>
                    <span className="cs-step-connector" />
                  </div>
                  <h4 className="cs-step-title">{st.title}</h4>
                  <p className="cs-step-desc">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 — UX / UI EXPERIENCE */}
      <section className="section bg-white">
        <div className="container">
          <div className="cs-section-header">
            <div className="cs-eyebrow">06 • USER EXPERIENCE & INTERACTION</div>
            <h2 className="cs-section-title">{project.ux.heading}</h2>
            <div className="cs-ux-big-quote">"{project.ux.quote}"</div>
          </div>

          <div className="cs-ux-grid">
            {project.ux.items.map((item, idx) => (
              <div key={idx} className="cs-ux-card reveal-on-scroll">
                <div className="cs-ux-top">
                  <span className="cs-ux-num">{item.num}</span>
                  <Activity size={18} color="var(--color-primary-blue)" />
                </div>
                <h3 className="cs-ux-title">{item.title}</h3>
                <p className="cs-ux-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — KEY FEATURES */}
      <section className="section bg-light">
        <div className="container">
          <div className="cs-section-header">
            <div className="cs-eyebrow">07 • CORE PRODUCT CAPABILITIES</div>
            <h2 className="cs-section-title">{project.features.heading}</h2>
            <p className="cs-section-subtitle">
              Engineered for operational efficiency, transparency, and seamless execution.
            </p>
          </div>

          <div className="cs-features-editorial">
            {/* 2 Featured Cards */}
            <div className="cs-features-featured-row">
              {project.features.items.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="cs-feature-card featured reveal-on-scroll">
                  <div className="cs-feat-badge-row">
                    <span className="cs-feat-badge">{feat.num}</span>
                    <CheckCircle2 size={20} color="var(--color-primary-blue)" />
                  </div>
                  <h3 className="cs-feat-title">{feat.title}</h3>
                  <p className="cs-feat-desc">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* 4 Supporting Cards */}
            <div className="cs-features-grid-row">
              {project.features.items.slice(2).map((feat, idx) => (
                <div key={idx} className="cs-feature-card reveal-on-scroll">
                  <div className="cs-feat-badge-row">
                    <span className="cs-feat-badge">{feat.num}</span>
                    <Layers size={18} color="var(--color-secondary-blue)" />
                  </div>
                  <h4 className="cs-feat-title-sm">{feat.title}</h4>
                  <p className="cs-feat-desc-sm">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — SOLUTION ARCHITECTURE */}
      <section className="cs-architecture-section">
        <div className="container">
          <div className="cs-section-header text-center">
            <div className="cs-eyebrow cs-eyebrow-light">08 • SYSTEM TOPOLOGY</div>
            <h2 className="cs-section-title text-white">{project.architecture.heading}</h2>
            <p className="cs-arch-desc">
              {project.architecture.description}
            </p>
          </div>

          <div className="cs-arch-diagram reveal-on-scroll">
            <div className="cs-arch-flow">
              {project.architecture.diagram.map((item, idx) => (
                <div key={idx} className="cs-arch-block">
                  <div className="cs-arch-block-header">
                    <span className="cs-arch-block-tag">LAYER 0{idx + 1}</span>
                    {idx < project.architecture.diagram.length - 1 && (
                      <ArrowRight size={15} className="cs-arch-step-arrow" />
                    )}
                  </div>
                  <div className="cs-arch-block-title">{item.layer}</div>
                  <div className="cs-arch-block-desc">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="cs-arch-cross-panel">
              <div className="cs-cross-label">SYSTEM RECONCILIATION & SYNC</div>
              <div className="cs-cross-val">{project.architecture.crossConnection}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — TECHNOLOGY & INFRASTRUCTURE */}
      <section className="section bg-white">
        <div className="container">
          <div className="cs-section-header">
            <div className="cs-eyebrow">09 • ENGINEERING SPECIFICATIONS</div>
            <h2 className="cs-section-title">{project.technology.heading}</h2>
            <p className="cs-section-subtitle">
              Built with battle-tested modern tools for sub-second performance, strict security, and zero downtime.
            </p>
          </div>

          <div className="cs-tech-grid">
            {project.technology.categories.map((cat, idx) => (
              <div key={idx} className="cs-tech-card reveal-on-scroll">
                <div className="cs-tech-cat-header">
                  {cat.title.includes('FRONTEND') ? (
                    <Monitor size={18} color="var(--color-primary-blue)" />
                  ) : cat.title.includes('BACKEND') ? (
                    <Server size={18} color="var(--color-primary-blue)" />
                  ) : cat.title.includes('STYLING') || cat.title.includes('EXPERIENCE') ? (
                    <Smartphone size={18} color="var(--color-primary-blue)" />
                  ) : cat.title.includes('INTEGRATION') || cat.title.includes('PWA') || cat.title.includes('CAPABILITIES') ? (
                    <Zap size={18} color="var(--color-primary-blue)" />
                  ) : cat.title.includes('STORAGE') || cat.title.includes('DATA') ? (
                    <Database size={18} color="var(--color-primary-blue)" />
                  ) : cat.title.includes('DEPLOY') || cat.title.includes('HOSTING') ? (
                    <Globe size={18} color="var(--color-primary-blue)" />
                  ) : (
                    <Cpu size={18} color="var(--color-primary-blue)" />
                  )}
                  <span>{cat.title}</span>
                </div>
                <ul className="cs-tech-list">
                  {cat.items.map((tech, i) => (
                    <li key={i} className="cs-tech-item">
                      <span className="cs-tech-bullet" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Engineering Principles */}
          <div className="cs-principles-box reveal-on-scroll">
            <span className="cs-principles-label">ENGINEERING PRINCIPLES:</span>
            <div className="cs-principles-pills">
              {project.technology.principles.map((pr, i) => (
                <span key={i} className="cs-principle-pill">
                  <ShieldCheck size={14} color="var(--color-primary-blue)" />
                  <span>{pr}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 — BUSINESS IMPACT */}
      <section className="section bg-light">
        <div className="container">
          <div className="cs-section-header">
            <div className="cs-eyebrow">10 • VALUE CREATION</div>
            <h2 className="cs-section-title">{project.impact.heading}</h2>
            <p className="cs-section-subtitle">
              Delivering tangible operational improvements, customer clarity, and sustainable digital advantage.
            </p>
          </div>

          <div className="cs-impact-grid">
            {project.impact.items.map((imp, idx) => (
              <div key={idx} className="cs-impact-card reveal-on-scroll">
                <div className="cs-impact-icon">
                  <TrendingUp size={20} color="var(--color-primary-blue)" />
                </div>
                <h3 className="cs-impact-title">{imp.title}</h3>
                <p className="cs-impact-desc">{imp.desc}</p>
              </div>
            ))}
          </div>

          {project.impact.highlight && (
            <div className="cs-scalable-foundation reveal-on-scroll">
              <div className="cs-foundation-tag">{project.impact.highlight.title}</div>
              <div className="cs-foundation-quote">
                "{project.impact.highlight.text}"
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 11 — MOBILE RESPONSIVE SHOWCASE */}
      <section className="section bg-white cs-showcase-section" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <ProjectMobileShowcase project={project} />
        </div>
      </section>

      {/* 12 — DEVELOPMENT PROCESS */}
      <section className="section bg-light">
        <div className="container">
          <div className="cs-section-header">
            <div className="cs-eyebrow">12 • DELIVERY METHODOLOGY</div>
            <h2 className="cs-section-title">{project.developmentProcess.heading}</h2>
            <p className="cs-section-subtitle">
              A disciplined, milestone-driven development process from discovery to production launch.
            </p>
          </div>

          <div className="cs-process-stepper reveal-on-scroll">
            {project.developmentProcess.steps.map((pStep, idx) => (
              <div key={idx} className="cs-process-node">
                <div className="cs-pnode-circle">
                  <span>{pStep.num}</span>
                </div>
                <div className="cs-pnode-content">
                  <h4 className="cs-pnode-title">{pStep.title}</h4>
                  <p className="cs-pnode-desc">{pStep.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — FINAL OUTCOME */}
      <section className="cs-outcome-section">
        <div className="container">
          <div className="cs-outcome-box reveal-on-scroll">
            <div className="cs-eyebrow cs-eyebrow-light">13 • FINAL OUTCOME</div>
            <h2 className="cs-outcome-title">{project.outcome.heading}</h2>
            <p className="cs-outcome-desc">{project.outcome.description}</p>

            <div className="cs-formula-strip">
              <div className="cs-formula-text">{project.outcome.brandFormula}</div>
            </div>

            <div className="cs-outcome-large-quote">
              "{project.outcome.statement}"
            </div>

            <div className="cs-outcome-preview-wrap">
              <img
                src={project.image}
                alt={`${project.title} Final Deployment`}
                className="cs-outcome-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 14 — FINAL CTA */}
      <section className="cs-final-cta-section">
        <div className="container">
          <div className="cs-cta-container reveal-on-scroll">
            <div className="cs-cta-eyebrow">14 • TRANSFORM YOUR BUSINESS WORKFLOW</div>
            <h2 className="cs-cta-heading">{project.cta.heading}</h2>
            <p className="cs-cta-desc">{project.cta.description}</p>

            <div className="cs-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start Your Project</span>
                <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <Link to="/work" className="btn btn-secondary btn-lg">
                <span>Explore More Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
