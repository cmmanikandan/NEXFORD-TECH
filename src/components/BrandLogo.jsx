import React from 'react';
import { Link } from 'react-router-dom';
import './BrandLogo.css';

export default function BrandLogo({ theme = 'light', className = '' }) {
  return (
    <Link
      to="/"
      className={`brand-logo-component theme-${theme} ${className}`}
      aria-label="NEXFORD TECHNOLOGIES Home"
    >
      <img
        src="/logo.png"
        alt="NEXFORD TECHNOLOGIES"
        className="brand-symbol-img"
        width="38"
        height="38"
      />
      <div className="brand-text-lockup">
        <div className="brand-wordmark">
          <span className="wordmark-nex">NEX</span>
          <span className="wordmark-ford">FORD</span>
        </div>
        <div className="brand-sub-lockup">
          <span className="brand-sub-line" />
          <span className="brand-sub-text">TECHNOLOGIES</span>
          <span className="brand-sub-line" />
        </div>
      </div>
    </Link>
  );
}
