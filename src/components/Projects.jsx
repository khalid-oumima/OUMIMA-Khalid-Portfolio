import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="section-head">
        <h2>Projets</h2>
        <p className="section-note">Projets personnels, du prototype au déploiement.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <div className="pills pills-mono">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <ul>
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {project.links.map((link) => (
              <a
                className="project-link"
                href={link.url}
                target="_blank"
                rel="noopener"
                key={link.url}
              >
                {link.label}
              </a>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
