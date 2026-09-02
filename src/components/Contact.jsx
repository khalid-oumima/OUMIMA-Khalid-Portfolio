import { contact } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="section-head">
        <h2>Contact</h2>
        <p className="section-note">
          {/*Disponible pour une alternance en Data &amp; IA à partir de septembre 2026. */}
        </p>
      </div>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${contact.email}`}>
          <span className="contact-label">Email</span>
          <span className="contact-value">{contact.email}</span>
        </a>
        <a className="contact-card" href={contact.phoneHref}>
          <span className="contact-label">Téléphone</span>
          <span className="contact-value">{contact.phone}</span>
        </a>
        <a className="contact-card" href={contact.linkedin} target="_blank" rel="noopener">
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">Khalid Oumima ↗</span>
        </a>
        <a className="contact-card" href={contact.github} target="_blank" rel="noopener">
          <span className="contact-label">GitHub</span>
          <span className="contact-value">khalid-oumima ↗</span>
        </a>
      </div>
    </section>
  );
}
