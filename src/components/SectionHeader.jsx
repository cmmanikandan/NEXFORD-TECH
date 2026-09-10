import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  titleAfter,
  description,
  center = false,
  dark = false
}) {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      {eyebrow && (
        <div className="eyebrow">
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 style={{ color: dark ? '#FFFFFF' : 'var(--color-dark-navy)' }}>
        {title}
        {highlight && <span className="gradient-text"> {highlight}</span>}
        {titleAfter && ` ${titleAfter}`}
      </h2>
      {description && (
        <p
          className="text-lead"
          style={{
            color: dark ? '#9FB3C8' : 'var(--color-secondary-text)',
            maxWidth: center ? '720px' : '640px',
            marginLeft: center ? 'auto' : '0',
            marginRight: center ? 'auto' : '0'
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
