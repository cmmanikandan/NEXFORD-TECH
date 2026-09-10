import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './FloatingScrollTop.css';

export default function FloatingScrollTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show button after 350px of scroll
      setVisible(scrollY > 350);

      if (docHeight > 0) {
        const percent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollPercent(percent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG circle progress calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div
      className={`floating-scroll-top-wrapper ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top of page"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          scrollToTop();
        }
      }}
    >
      <div className="floating-scroll-ring">
        <svg width="52" height="52" viewBox="0 0 52 52" className="scroll-progress-svg">
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="scroll-ring-track"
          />
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="scroll-ring-fill"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset
            }}
          />
        </svg>
      </div>

      <div className="floating-scroll-btn">
        <ArrowUp size={18} className="floating-arrow-icon" />
      </div>
    </div>
  );
}
