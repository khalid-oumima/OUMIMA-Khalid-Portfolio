import Timeline from './Timeline.jsx';
import { education, certifications } from '../data.js';

export default function Education() {
  return (
    <section id="formation" className="section">
      <div className="section-head">
        <h2>Formation</h2>
      </div>
      <Timeline items={education} compact />

      <div className="sub-block">
        <h3 className="sub-heading">Certifications</h3>
        <div className="pills">
          {certifications.map((cert) => (
            <span key={cert}>{cert}</span>
          ))}
        </div>
      </div>

      <div className="sub-block">
        <h3 className="sub-heading">Engagement associatif</h3>
        <p className="prose">
          Bénévole logistique pour EL CHOUROUK (2021 — 2023) : organisation logistique et gestion
          des stocks lors de grandes collectes, distribution de vêtements et de nourriture aux
          personnes en situation de précarité.
        </p>
      </div>
    </section>
  );
}
