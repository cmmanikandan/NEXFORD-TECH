import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import useScrollReveal from '../hooks/useScrollReveal';
import './Work.css';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  useScrollReveal(activeFilter);

  const filterOptions = ['All', 'Web Platform', 'Business Website', 'Industrial Website', 'Digital Product'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="work-page">
      {/* Work Page Header */}
      <section className="section bg-light" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <SectionHeader
            eyebrow="PORTFOLIO & CASE STUDIES"
            title="Real Projects."
            highlight="Real Solutions."
            description="Explore digital products and business solutions designed and developed by NEXFORD TECHNOLOGIES. Built for measurable operational impact and market leadership."
            center={true}
          />

          {/* Filter Bar */}
          <div className="work-filter-bar">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Production Impact Strip */}
          <div className="work-impact-strip">
            <div className="work-impact-col">
              <div className="work-impact-val">3 Live</div>
              <div className="work-impact-label">Production Platforms</div>
            </div>
            <div className="work-impact-divider" />
            <div className="work-impact-col">
              <div className="work-impact-val">100%</div>
              <div className="work-impact-label">Digital Workflow (Qubink)</div>
            </div>
            <div className="work-impact-divider" />
            <div className="work-impact-col">
              <div className="work-impact-val">End-to-End</div>
              <div className="work-impact-label">Digital Experience (Mahil-RO)</div>
            </div>
            <div className="work-impact-divider" />
            <div className="work-impact-col">
              <div className="work-impact-val">Precision</div>
              <div className="work-impact-label">Engineering Hub (Manikandan)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="grid-3">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className={`reveal-on-scroll delay-${(index + 1) * 100}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--color-very-light-blue)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-dark-navy)', marginBottom: '8px' }}>
                No projects found under "{activeFilter}"
              </h3>
              <p style={{ color: 'var(--color-secondary-text)', marginBottom: '20px' }}>
                Try choosing another capability or view all live production platforms.
              </p>
              <button className="btn btn-secondary" onClick={() => setActiveFilter('All')}>
                Reset Filters & View All
              </button>
            </div>
          )}
        </div>
      </section>

      <ContactCTA
        title="Have a project like this?"
        description="Share your concept or current product challenges. Our engineering leads will evaluate your requirements and assemble a prototype delivery plan."
      />
    </div>
  );
}
