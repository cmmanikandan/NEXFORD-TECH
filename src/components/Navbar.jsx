import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/content';
import BrandLogo from './BrandLogo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & prevent background scroll
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* Sleek dynamic scroll progress bar */}
      <div
        className="navbar-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Identity with official logo & Montserrat NEX + FORD wordmark */}
          <BrandLogo theme="light" />

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-sm nav-header-cta">
              <span>Start a Project</span>
              <ArrowRight size={16} className="arrow-icon" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="mobile-menu-arrow" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <Link
            to="/contact"
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            onClick={() => setMobileOpen(false)}
          >
            <span>Start a Project</span>
            <ArrowRight size={18} className="arrow-icon" />
          </Link>
          <div className="mobile-drawer-contact">
            <a href={`mailto:${BRAND.email}`} className="mobile-contact-link">{BRAND.email}</a>
            <span className="mobile-contact-dot">•</span>
            <a href={`tel:${BRAND.phoneRaw}`} className="mobile-contact-link">{BRAND.phone}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
