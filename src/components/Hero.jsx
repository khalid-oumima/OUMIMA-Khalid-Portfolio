import photo from '../assets/khalid-photo.jpg';

const readouts = [
  { value: '2', label: 'stages en développement web' },
  { value: '9', label: 'technologies web maîtrisées' },
  { value: '4', label: 'projets déployés' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-photo">
          <img src={photo} alt="Portrait de Khalid Oumima" width="104" height="104" />
        </div>
        <p className="eyebrow-plain">Khalid Oumima — Dijon, France</p>
        <h1 className="hero-title">
          Construire des applications web complètes, <br /> de l&apos;API à l&apos;interface.
        </h1>
        <p className="hero-sub">
          Développeur full-stack (React, Angular, Spring Boot,
          Laravel) formé en stage puis en projets personnels. Je conçois des applications de bout
          en bout — base de données, API REST, interface utilisateur — et j&apos;y ajoute parfois
          une couche data &amp; IA (machine learning, RAG).
        </p>
        <div className="hero-actions">
          <a href="#projets" className="btn btn-primary">
            Voir les projets
          </a>
          <a href="mailto:oumima.khalid.24@gmail.com" className="btn btn-ghost">
            Écrire un mail
          </a>
        </div>
        <div className="readouts">
          {readouts.map((r) => (
            <div className="readout" key={r.label}>
              <span className="readout-value">{r.value}</span>
              <span className="readout-label">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
