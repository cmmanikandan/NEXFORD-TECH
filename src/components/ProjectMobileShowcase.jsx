import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import './ProjectMobileShowcase.css';

export default function ProjectMobileShowcase({ project }) {
  const screenshots = project?.screenshots || [];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance next slide every 3.2 seconds unless hovered/touched
  useEffect(() => {
    if (!screenshots.length || isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [screenshots.length, isPaused, current]);

  if (!screenshots.length) return null;

  const activeItem = screenshots[current];

  return (
    <div
      className="cs-mobile-showcase-wrap reveal-on-scroll"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="cs-mobile-showcase-grid">
        {/* Device Column: High-fidelity phone frame */}
        <div className="cs-device-col">
          <div className="cs-phone-frame">
            {/* Phone notch / Dynamic Island */}
            <div className="cs-phone-notch">
              <span className="cs-phone-camera" />
              <span className="cs-phone-speaker" />
            </div>

            {/* Viewport with screenshot */}
            <div className="cs-phone-screen">
              <img
                key={activeItem.src}
                src={activeItem.src}
                alt={`${project.title} - ${activeItem.title}`}
                className="cs-phone-img"
              />
            </div>

            {/* Glass reflection */}
            <div className="cs-phone-glare" />

            {/* Navigation buttons */}
            <button
              type="button"
              className="cs-phone-nav cs-phone-nav-prev"
              onClick={() => setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
              aria-label="Previous Screen"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="cs-phone-nav cs-phone-nav-next"
              onClick={() => setCurrent((prev) => (prev + 1) % screenshots.length)}
              aria-label="Next Screen"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="cs-phone-dots">
            {screenshots.map((s, idx) => (
              <button
                key={idx}
                type="button"
                className={`cs-dot-pill ${current === idx ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to screenshot ${idx + 1}`}
              >
                <span className="cs-dot-fill" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div className="cs-showcase-info-col">
          <div className="cs-slide-counter-badge">
            <Smartphone size={15} color="var(--color-primary-blue)" />
            <span>MOBILE RESPONSIVE SHOWCASE</span>
            <span className="cs-counter-num">
              {String(current + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
            </span>
          </div>

          <h3 className="cs-active-slide-title">{activeItem.title}</h3>
          <p className="cs-active-slide-desc">{activeItem.desc}</p>

          <div className="cs-showcase-specs">
            <div className="cs-spec-item">
              <CheckCircle2 size={16} color="#18B6A4" />
              <span>Full Viewport Scaling (iOS & Android)</span>
            </div>
            <div className="cs-spec-item">
              <CheckCircle2 size={16} color="#18B6A4" />
              <span>Touch Gestures & Dynamic Interactive Flow</span>
            </div>
            <div className="cs-spec-item">
              <CheckCircle2 size={16} color="#18B6A4" />
              <span>Edge-Hosted Production Verification</span>
            </div>
          </div>

          {/* 5-Thumbnail Selector Strip */}
          <div className="cs-thumbnails-strip">
            <div className="cs-thumbnails-label">TAP ANY SCREEN TO EXPLORE:</div>
            <div className="cs-thumbnails-grid">
              {screenshots.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`cs-thumb-card ${current === idx ? 'active' : ''}`}
                  onClick={() => setCurrent(idx)}
                >
                  <div className="cs-thumb-img-wrap">
                    <img src={item.src} alt={item.title} className="cs-thumb-img" />
                    <div className="cs-thumb-num">0{idx + 1}</div>
                  </div>
                  <span className="cs-thumb-name">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {project.liveUrl && (
            <div style={{ marginTop: '24px' }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Visit Live {project.title}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
