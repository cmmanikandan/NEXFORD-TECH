import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import './ProjectEstimatorWidget.css';

const TIERS = [
  {
    id: 'mvp',
    name: 'MVP / Focused Solution',
    time: '3 – 5 Weeks',
    team: '1 Lead Architect + 1 Senior Engineer + 1 UI/UX Designer',
    deliverables: [
      'Core functional architecture & user flow',
      'Production database & secure authentication',
      'Modern responsive web or mobile interface',
      'Deployment on high-speed cloud infrastructure'
    ]
  },
  {
    id: 'standard',
    name: 'Growth & Business Platform',
    time: '6 – 8 Weeks',
    team: '1 Solution Architect + 2 Fullstack Engineers + 1 UI/UX Lead + 1 QA Specialist',
    deliverables: [
      'Full enterprise features with multi-role access',
      'Payment processing & automated invoicing',
      'Custom admin analytics & reporting suite',
      'Third-party CRM / ERP API bidirectional syncing'
    ]
  },
  {
    id: 'enterprise',
    name: 'High-Scale Enterprise Architecture',
    time: '10 – 14 Weeks',
    team: 'Principal Architect + 3 Fullstack Engineers + 1 Mobile Lead + 1 DevOps + 1 QA',
    deliverables: [
      'Multi-tenant database clustering & automated failover',
      'High-throughput asynchronous event queues',
      'Rigorous security compliance & penetration testing',
      '99.99% uptime architecture & continuous telemetry monitoring'
    ]
  }
];

export default function ProjectEstimatorWidget({ serviceTitle }) {
  const [selectedTier, setSelectedTier] = useState(1);

  const current = TIERS[selectedTier];

  return (
    <div className="estimator-widget">
      <div className="estimator-header">
        <h3 className="estimator-title">Estimated Scope & Turnaround Framework</h3>
        <p className="estimator-desc">
          Select an implementation scope to inspect typical delivery cadence, team structure, and engineering outputs for {serviceTitle}.
        </p>
      </div>

      <div className="estimator-tabs">
        {TIERS.map((tier, idx) => (
          <button
            key={tier.id}
            className={`estimator-tab-btn ${selectedTier === idx ? 'active' : ''}`}
            onClick={() => setSelectedTier(idx)}
          >
            {tier.name}
          </button>
        ))}
      </div>

      <div className="estimator-details-card">
        <div>
          <div className="estimator-metrics">
            <div>
              <div className="metric-item-label">Typical Delivery Window</div>
              <div className="metric-item-val" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={20} color="var(--color-primary-blue)" />
                <span>{current.time}</span>
              </div>
            </div>
            <div>
              <div className="metric-item-label">Dedicated Team Pod</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-dark-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <Users size={18} color="#18B6A4" />
                <span>{current.team}</span>
              </div>
            </div>
          </div>

          <ul className="deliverables-checklist">
            {current.deliverables.map((item, i) => (
              <li key={i} className="deliverable-item-row">
                <CheckCircle2 size={16} color="var(--color-primary-blue)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: 'center', paddingLeft: '12px' }}>
          <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginBottom: '14px' }}>
            Ready for a precise scope document?
          </div>
          <Link to="/contact" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
            <span>Request Detailed Scope</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
