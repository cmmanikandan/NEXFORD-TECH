import React from 'react';
import {
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  TrendingUp,
  Smartphone,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import './ProductMockup.css';

export default function ProductMockup() {
  return (
    <div className="hero-composition">
      <div className="hero-glow" />

      {/* Laptop & Dashboard UI */}
      <div className="laptop-frame">
        <div className="screen-container">
          {/* Browser Bar */}
          <div className="browser-bar">
            <div className="window-dots">
              <span className="window-dot dot-red" />
              <span className="window-dot dot-yellow" />
              <span className="window-dot dot-green" />
            </div>
            <div className="browser-url">cloud.nexfordtech.io/enterprise-hub</div>
            <div className="browser-status">
              <span className="status-indicator" />
              <span>Live Engine 99.98%</span>
            </div>
          </div>

          {/* Web Dashboard */}
          <div className="dashboard-layout">
            {/* Sidebar */}
            <div className="dashboard-sidebar">
              <div className="sidebar-brand">NEXFORD • CORE</div>
              <div className="sidebar-item active">
                <Activity size={14} />
                <span>Realtime Pulse</span>
              </div>
              <div className="sidebar-item">
                <Layers size={14} />
                <span>Workflows</span>
              </div>
              <div className="sidebar-item">
                <ShieldCheck size={14} />
                <span>Security Vault</span>
              </div>
              <div className="sidebar-item">
                <Cpu size={14} />
                <span>API Gateway</span>
              </div>
            </div>

            {/* Main view */}
            <div className="dashboard-main">
              {/* Metric pills */}
              <div className="metrics-row">
                <div className="metric-pill">
                  <div className="metric-pill-label">Monthly Business Volume</div>
                  <div className="metric-pill-val">₹24,80,000</div>
                  <div className="metric-pill-sub">↑ 24.6% vs last quarter</div>
                </div>
                <div className="metric-pill">
                  <div className="metric-pill-label">Transactions Processed</div>
                  <div className="metric-pill-val">1.48M</div>
                  <div className="metric-pill-sub">99.99% error-free</div>
                </div>
                <div className="metric-pill">
                  <div className="metric-pill-label">System Response Latency</div>
                  <div className="metric-pill-val">28 ms</div>
                  <div className="metric-pill-sub" style={{ color: '#18A9F5' }}>
                    Cloud edge routing
                  </div>
                </div>
              </div>

              {/* Chart Card */}
              <div className="chart-card">
                <div className="chart-header">
                  <span className="chart-title">System Throughput & Customer Influx</span>
                  <div className="chart-legend">
                    <span style={{ color: '#0789E8' }}>● Production Requests</span>
                    <span style={{ color: '#18B6A4' }}>● Verified Deliveries</span>
                  </div>
                </div>
                {/* Clean SVG Area Chart */}
                <svg viewBox="0 0 500 85" width="100%" height="85" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0789E8" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#0789E8" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="tealGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#18B6A4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#18B6A4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="#142842" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="500" y2="50" stroke="#142842" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#142842" strokeDasharray="3 3" />
                  {/* Blue line & gradient */}
                  <path
                    d="M0,70 Q70,40 130,55 T260,25 T380,35 T500,10 L500,85 L0,85 Z"
                    fill="url(#blueGlow)"
                  />
                  <path
                    d="M0,70 Q70,40 130,55 T260,25 T380,35 T500,10"
                    fill="none"
                    stroke="#18A9F5"
                    strokeWidth="2.5"
                  />
                  {/* Teal line & gradient */}
                  <path
                    d="M0,78 Q70,60 140,65 T280,45 T400,48 T500,30 L500,85 L0,85 Z"
                    fill="url(#tealGlow)"
                  />
                  <path
                    d="M0,78 Q70,60 140,65 T280,45 T400,48 T500,30"
                    fill="none"
                    stroke="#18B6A4"
                    strokeWidth="2"
                  />
                  {/* Data nodes */}
                  <circle cx="260" cy="25" r="4" fill="#18A9F5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="500" cy="10" r="4" fill="#18A9F5" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Data Table */}
              <div className="data-table-card">
                <div className="data-table-row data-table-header">
                  <span>Product / Solution</span>
                  <span>Environment</span>
                  <span>Status</span>
                  <span>Health</span>
                </div>
                <div className="data-table-row">
                  <span className="data-table-cell" style={{ fontWeight: 600 }}>Qubink Cloud Engine</span>
                  <span className="data-table-cell" style={{ color: '#8BA1B8' }}>Digital Printing SaaS</span>
                  <span><span className="badge-status success">Active High</span></span>
                  <span className="data-table-cell" style={{ color: '#18B6A4' }}>100% OK</span>
                </div>
                <div className="data-table-row">
                  <span className="data-table-cell" style={{ fontWeight: 600 }}>EasyBiz Multi-Store</span>
                  <span className="data-table-cell" style={{ color: '#8BA1B8' }}>Billing & Ledger</span>
                  <span><span className="badge-status active">Synced</span></span>
                  <span className="data-table-cell" style={{ color: '#18A9F5' }}>2.4ms Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base">
          <div className="laptop-notch" />
        </div>
      </div>

      {/* Floating Left: Business Software Interface Widget (EasyBiz / Automation) */}
      <div className="software-widget-frame animate-float-gentle">
        <div className="widget-header">
          <div className="widget-title-row">
            <span className="widget-badge">EasyBiz ERP</span>
            <span className="widget-status-dot" />
          </div>
          <div className="widget-subtitle">Automated Tax & GST Sync</div>
        </div>
        <div className="widget-metric-row">
          <div>
            <div className="widget-label">Daily Billing</div>
            <div className="widget-val">₹1,84,500</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="widget-label">Settlement</div>
            <div className="widget-val-green">Instant OK</div>
          </div>
        </div>
        <div className="widget-progress-bar">
          <div className="widget-progress-fill" style={{ width: '84%' }} />
        </div>
        <div className="widget-footer-text">
          <span>Reconciled: 42 Stores</span>
          <span style={{ color: '#18A9F5' }}>100% Tax Compliant</span>
        </div>
      </div>

      {/* Floating Mobile Phone Mockup */}
      <div className="phone-frame animate-float">
        <div className="phone-screen">
          <div className="phone-notch" />
          <div className="phone-app-header">
            <span className="phone-title">Mahil-RO Logistics</span>
            <span className="phone-badge">Online</span>
          </div>

          <div className="phone-card">
            <div className="phone-card-title">Active Batch Delivery</div>
            <div className="phone-card-val">Route 14 • 85/90 Cans</div>
            <div style={{ height: '5px', background: '#162F50', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '92%', height: '100%', background: '#18A9F5' }} />
            </div>
          </div>

          <div className="phone-card" style={{ flex: 1 }}>
            <div className="phone-card-title">Next Destination</div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#FFFFFF', marginTop: '3px' }}>
              Apex Commercial Complex
            </div>
            <div style={{ fontSize: '10px', color: '#7994B2', marginTop: '2px' }}>
              Gate 4 • 12 Units Scheduled
            </div>
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={13} color="#18B6A4" />
              <span style={{ fontSize: '10px', color: '#18B6A4' }}>Barcode Verified</span>
            </div>
          </div>

          <div className="phone-btn">Confirm Dispatch</div>
        </div>
      </div>
    </div>
  );
}
