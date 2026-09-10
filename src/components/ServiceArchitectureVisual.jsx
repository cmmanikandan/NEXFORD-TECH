import React, { useState } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Smartphone,
  ShieldCheck,
  Cpu,
  Palette,
  Workflow,
  CheckCircle2
} from 'lucide-react';
import './ServiceArchitectureVisual.css';

const ARCHITECTURE_DATA = {
  'web-development': {
    title: 'Enterprise Web Application Topology',
    tabs: [
      {
        id: 'runtime',
        label: '01 • Application Layer',
        nodes: [
          {
            icon: Code2,
            title: 'Modern Frontend Core',
            desc: 'Next.js & React component architecture with Server-Side Rendering (SSR) for sub-second first contentful paint.',
            tags: ['React', 'Next.js', 'TypeScript', 'Tailored CSS']
          },
          {
            icon: Layers,
            title: 'State & Cache Engine',
            desc: 'Optimistic UI updates with client-side memory caching to ensure seamless user interactivity without blocking threads.',
            tags: ['Client Cache', 'Web Workers', 'Hydration']
          },
          {
            icon: ShieldCheck,
            title: 'Security & Auth Guard',
            desc: 'Strict Content Security Policy (CSP), CSRF protection, and stateless JWT/OAuth session handling.',
            tags: ['CSP Headers', 'OAuth 2.0', 'XSS Shield']
          }
        ]
      },
      {
        id: 'infrastructure',
        label: '02 • Infrastructure & CDN',
        nodes: [
          {
            icon: Cloud,
            title: 'Global Edge Network',
            desc: 'Assets and static pages distributed across 300+ edge points-of-presence for minimal latency worldwide.',
            tags: ['Cloudflare / AWS', 'Edge Caching', 'HTTP/3']
          },
          {
            icon: Cpu,
            title: 'API Gateway & Serverless',
            desc: 'Microservices handling computational pipelines, document processing, and dynamic payload assembly.',
            tags: ['Node.js', 'REST Endpoints', 'GraphQL']
          },
          {
            icon: Database,
            title: 'Resilient Relational Storage',
            desc: 'PostgreSQL & Supabase clusters configured with connection pooling, automated read replicas, and SSL.',
            tags: ['PostgreSQL', 'Connection Pooling', 'ACID']
          }
        ]
      }
    ]
  },
  'mobile-applications': {
    title: 'Modern Cross-Platform Mobile System',
    tabs: [
      {
        id: 'client',
        label: '01 • Mobile Client Layer',
        nodes: [
          {
            icon: Smartphone,
            title: '60fps UI Presentation',
            desc: 'Declarative component trees executing with native GPU acceleration and zero input stutter on iOS and Android.',
            tags: ['React Native', 'Native Threads', 'Gesture Handler']
          },
          {
            icon: Database,
            title: 'Offline-First SQLite Cache',
            desc: 'Local encrypted database storing active operational records for uninterrupted work during signal dropouts.',
            tags: ['SQLite', 'Encrypted Realm', 'Sync Queue']
          },
          {
            icon: ShieldCheck,
            title: 'Biometric Security Vault',
            desc: 'Face ID & Touch ID integration storing private credentials within Apple Keychain and Android Keystore.',
            tags: ['Biometrics', 'Secure Enclave', 'Token Refresh']
          }
        ]
      },
      {
        id: 'cloud-bridge',
        label: '02 • Telemetry & Cloud Bridge',
        nodes: [
          {
            icon: Cloud,
            title: 'Bi-Directional Gateway',
            desc: 'Realtime WebSocket streams broadcasting dispatch routing, instant status updates, and notifications.',
            tags: ['WebSockets', 'APNs Push', 'Firebase FCM']
          },
          {
            icon: Cpu,
            title: 'Device Hardware Bridge',
            desc: 'Camera barcode reading, GPS geofencing, and Bluetooth printer communication.',
            tags: ['Barcode Scanner', 'Geolocation', 'BLE']
          },
          {
            icon: Layers,
            title: 'Store Deployment CI/CD',
            desc: 'Automated test suite, fastlane binary packaging, and OTA (Over-The-Air) bugfix distribution.',
            tags: ['Fastlane', 'App Store Connect', 'Play Console']
          }
        ]
      }
    ]
  },
  'ui-ux-design': {
    title: 'Design System & Interaction Framework',
    tabs: [
      {
        id: 'foundations',
        label: '01 • Design Tokens & Standards',
        nodes: [
          {
            icon: Palette,
            title: 'Atomic Design Tokens',
            desc: 'Mathematical color scales, 8pt spacing grid, responsive typography scales, and calibrated border radii.',
            tags: ['Figma Tokens', 'CSS Variables', 'HSL Palettes']
          },
          {
            icon: ShieldCheck,
            title: 'WCAG 2.1 AA Compliance',
            desc: 'High contrast ratios, 48px minimum touch targets, and assistive technology keyboard navigation.',
            tags: ['Accessibility', 'Contrast Audit', 'ARIA Specs']
          },
          {
            icon: Layers,
            title: 'Component Architecture',
            desc: 'Reusable component variants with auto-layout, boolean properties, and interactive hover states.',
            tags: ['Component Library', 'Variants', 'States']
          }
        ]
      },
      {
        id: 'testing',
        label: '02 • Usability & Delivery',
        nodes: [
          {
            icon: Workflow,
            title: 'User Journey Mapping',
            desc: 'Detailed task flows and wireframes engineered to eliminate cognitive friction and shorten user completion paths.',
            tags: ['Wireframes', 'Task Flows', 'Information Arch']
          },
          {
            icon: Cpu,
            title: 'High-Fidelity Prototyping',
            desc: 'Interactive clickable prototypes verifying realistic micro-interactions and transitions prior to code implementation.',
            tags: ['Figma Prototype', 'Micro-interactions', 'Review']
          },
          {
            icon: Code2,
            title: 'Engineering Handoff Spec',
            desc: 'Zero-ambiguity documentation linking design components directly to frontend production code.',
            tags: ['Developer Specs', 'Asset Exports', 'Token Sync']
          }
        ]
      }
    ]
  },
  'custom-software': {
    title: 'Enterprise Software & Database Blueprint',
    tabs: [
      {
        id: 'core-system',
        label: '01 • Core Business Logic',
        nodes: [
          {
            icon: Cpu,
            title: 'Business Engine & ERP',
            desc: 'Domain-driven architecture handling complex multi-entity billing, inventory calculations, and ledger entries.',
            tags: ['Node.js', 'Clean Architecture', 'Event-Driven']
          },
          {
            icon: ShieldCheck,
            title: 'Role-Based Access (RBAC)',
            desc: 'Granular permissions controlling what individual employees, accountants, and executives can view and execute.',
            tags: ['RBAC', 'Immutable Audit', 'SSO']
          },
          {
            icon: Database,
            title: 'Multi-Tenant Relational DB',
            desc: 'Normalized schema with row-level security (RLS), ACID guarantees, and automated backups.',
            tags: ['PostgreSQL', 'RLS Policies', 'Replication']
          }
        ]
      },
      {
        id: 'automation-bus',
        label: '02 • Automation & Integrations',
        nodes: [
          {
            icon: Workflow,
            title: 'Scheduled Event Queues',
            desc: 'Background task workers processing recurring invoices, payment reminders, and inventory threshold alerts.',
            tags: ['Task Scheduler', 'Event Bus', 'Worker Threads']
          },
          {
            icon: Cloud,
            title: 'Third-Party Connectors',
            desc: 'Bidirectional adapters communicating with payment gateways, banking APIs, and government tax portals.',
            tags: ['Stripe', 'Banking APIs', 'Tax Services']
          },
          {
            icon: Layers,
            title: 'Analytics & Reporting Hub',
            desc: 'Pre-aggregated analytical queries delivering real-time P&L insights, stock turnover rates, and telemetry.',
            tags: ['Fast Aggregation', 'CSV/PDF Export', 'Dashboards']
          }
        ]
      }
    ]
  }
};

export default function ServiceArchitectureVisual({ serviceId }) {
  const data = ARCHITECTURE_DATA[serviceId] || ARCHITECTURE_DATA['web-development'];
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = data.tabs[activeTab] || data.tabs[0];

  return (
    <div className="arch-visual-container">
      <div className="arch-visual-header">
        <div className="arch-header-left">
          <Cpu size={16} color="var(--color-bright-blue)" />
          <span className="arch-header-title">{data.title}</span>
        </div>
        <span className="arch-status-pill">Production Architecture</span>
      </div>

      <div className="arch-tab-nav">
        {data.tabs.map((tab, idx) => (
          <button
            key={tab.id}
            className={`arch-tab-btn ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="arch-content-body">
        <div className="arch-diagram-flow">
          {currentTab.nodes.map((node, i) => {
            const NodeIcon = node.icon;
            return (
              <div key={i} className="arch-node-card">
                <div className="arch-node-header">
                  <div className="arch-node-icon">
                    <NodeIcon size={18} />
                  </div>
                  <h4 className="arch-node-title">{node.title}</h4>
                </div>
                <p className="arch-node-desc">{node.desc}</p>
                <div className="arch-node-tags">
                  {node.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="arch-node-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
