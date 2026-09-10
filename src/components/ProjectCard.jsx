import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Link to={`/work/${project.id}`} className="project-card-image-wrap" tabIndex={-1}>
        <img
          src={project.image}
          alt={`${project.title} - Showcase`}
          className="project-card-img"
          loading="lazy"
        />
        <div className="project-card-image-overlay">
          <span className="project-card-view-badge">
            View Case Study <ArrowRight size={14} />
          </span>
        </div>
      </Link>

      <div className="project-card-content">
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>

        <h3 className="project-title">
          <Link to={`/work/${project.id}`}>{project.title}</Link>
        </h3>

        <div className="project-subtitle">{project.subtitle}</div>

        <div className="project-card-footer">
          <Link to={`/work/${project.id}`} className="project-footer-link">
            <span>View Case Study</span>
            <ArrowRight size={16} className="project-footer-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
