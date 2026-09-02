import Timeline from './Timeline.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2>Expérience</h2>
      </div>
      <Timeline items={experience} />
    </section>
  );
}
