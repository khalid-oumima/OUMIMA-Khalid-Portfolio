import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="competences" className="section">
      <div className="section-head">
        <h2>Compétences</h2>
        <p className="section-note">Regroupées par domaine, du plus utilisé au plus récent.</p>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-panel" key={group.title}>
            <h3>{group.title}</h3>
            <div className="pills">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
