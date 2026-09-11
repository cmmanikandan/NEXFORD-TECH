import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Smartphone,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import './ProjectMobileShowcase.css';

export default function ProjectMobileShowcase({ project }) {
  const screenshots = project?.screenshots || [];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);

  const total = screenshots.length;

  const prevSlide = useCallback(() => {
    if (!total) return;
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const nextSlide = useCallback(() => {
    if (!total) return;
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-advance every 3.5s unless hovered, touched, or in full view
  useEffect(() => {
    if (!total || isPaused || isFullViewOpen) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [total, isPaused, isFullViewOpen, nextSlide]);

  // Keyboard navigation when in full view
  useEffect(() => {
    if (!isFullViewOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsFullViewOpen(false);
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isFullViewOpen, prevSlide, nextSlide]);

  if (!total) return null;

  const activeItem = screenshots[current];

  return (
    <div
      className="cs-showcase-single-wrap reveal-on-scroll"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Screen Title & Info Header (Focused on the active screen) */}
      <div className="cs-showcase-header-content">
        <div className="cs-showcase-badge-row">
          <span className="cs-showcase-badge">
            <Smartphone size={14} />
            <span>SCREEN {String(current + 1).padStart(2, '0')} OF {String(total).padStart(2, '0')}</span>
          </span>
          <span className="cs-showcase-status-tag">
            <CheckCircle2 size={13} color="#18B6A4" />
            <span>Production Verified</span>
          </span>
        </div>

        <h3 className="cs-showcase-title">{activeItem.title}</h3>
        <p className="cs-showcase-desc">{activeItem.desc}</p>
      </div>

      {/* Center Device Mockup displaying ONLY ONE screen image */}
      <div className="cs-showcase-stage">
        <div
          className="cs-phone-frame cs-phone-frame-clickable"
          onClick={() => setIsFullViewOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsFullViewOpen(true);
            }
          }}
          title="Click to open full view"
          aria-label={`Open full view for ${activeItem.title}`}
        >
          {/* Top Notch / Dynamic Island */}
          <div className="cs-phone-notch">
            <span className="cs-phone-camera" />
            <span className="cs-phone-speaker" />
          </div>

          {/* Viewport with only ONE active screenshot image */}
          <div className="cs-phone-screen">
            <img
              key={activeItem.src}
              src={activeItem.src}
              alt={`${project.title} - ${activeItem.title}`}
              className="cs-phone-img"
            />
            {/* Hover overlay hint */}
            <div className="cs-screen-hover-overlay">
              <div className="cs-hover-zoom-pill">
                <Maximize2 size={16} />
                <span>Click for Full View</span>
              </div>
            </div>
          </div>

          {/* Glass reflection */}
          <div className="cs-phone-glare" />
        </div>
      </div>

      {/* IN DOWN: Navigation Controls (<- , > , dots, counter, full view) */}
      <div className="cs-showcase-down-controls">
        <button
          type="button"
          className="cs-down-nav-btn cs-down-prev"
          onClick={prevSlide}
          aria-label="Previous Screen"
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        {/* Screen Dots Indicator */}
        <div className="cs-down-dots-wrap">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`cs-down-dot ${current === idx ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to screen ${idx + 1}`}
              title={`Screen ${idx + 1}: ${screenshots[idx].title}`}
            >
              <span className="cs-down-dot-label">0{idx + 1}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="cs-down-nav-btn cs-down-next"
          onClick={nextSlide}
          aria-label="Next Screen"
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Secondary Quick Action Bar underneath controls */}
      <div className="cs-showcase-bottom-actions">
        <button
          type="button"
          className="cs-open-fullview-btn"
          onClick={() => setIsFullViewOpen(true)}
        >
          <Maximize2 size={14} />
          <span>Open Full View Modal</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cs-showcase-live-link"
          >
            <span>Visit Live {project.title}</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {/* FULL VIEW LIGHTBOX MODAL (Rendered via portal) */}
      {isFullViewOpen &&
        createPortal(
          <div
            className="cs-fullview-overlay"
            onClick={(e) => {
              // Close if clicked directly on overlay background
              if (e.target === e.currentTarget) {
                setIsFullViewOpen(false);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`Full view of ${activeItem.title}`}
          >
            {/* Top Bar */}
            <div className="cs-fullview-topbar">
              <div className="cs-fullview-title-group">
                <span className="cs-fullview-project">{project.title}</span>
                <span className="cs-fullview-sep">/</span>
                <span className="cs-fullview-screen-title">{activeItem.title}</span>
              </div>

              <div className="cs-fullview-top-right">
                <span className="cs-fullview-counter">
                  {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="cs-fullview-close-btn"
                  onClick={() => setIsFullViewOpen(false)}
                  aria-label="Close Full View"
                  title="Close (Esc)"
                >
                  <X size={20} />
                  <span className="cs-esc-key">ESC</span>
                </button>
              </div>
            </div>

            {/* Main Image Stage with Left & Right Arrows */}
            <div className="cs-fullview-body">
              <button
                type="button"
                className="cs-fullview-nav-btn cs-fullview-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous Screen (Left Arrow)"
                title="Previous Screen (←)"
              >
                <ChevronLeft size={28} />
              </button>

              <div
                className="cs-fullview-img-container"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  key={activeItem.src}
                  src={activeItem.src}
                  alt={`${project.title} - ${activeItem.title}`}
                  className="cs-fullview-img"
                />
              </div>

              <button
                type="button"
                className="cs-fullview-nav-btn cs-fullview-next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next Screen (Right Arrow)"
                title="Next Screen (→)"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Bar in Full View: Show 1, 2 only (no page details) */}
            <div className="cs-fullview-footer" onClick={(e) => e.stopPropagation()}>
              <div className="cs-fullview-numbers">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`cs-fullview-num-btn ${current === idx ? 'active' : ''}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to screen ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
