import { languages } from '../data.js';

export default function About() {
  return (
    <section id="apropos" className="section">
      <div className="section-head">
        <h2>Profil</h2>
      </div>
      <div className="section-body prose">
        <p>
          Développeur full-stack formé au BTS Systèmes & Réseaux Informatiques à Casablanca, avec un parcours allant des systèmes & réseaux (BTS, puis classe préparatoire ATS en ingénierie industrielle) jusqu'au développement d'applications web complètes.

Lors de mon stage, j'ai développé et maintenu des interfaces front-end en AngularJS pour des applications de gestion client. Dans le cadre de mes projets personnels, je conçois des applications de bout en bout, de la base de données à l'API jusqu'à l'interface utilisateur, en utilisant notamment React, Laravel et Spring Boot.

        </p>
        <p>
          En parallèle des études, je suis en contrat étudiant chez Intermarché à Genlis. Je
          m&apos;intéresse aussi au machine learning et aux architectures RAG, que j&apos;intègre
          parfois à mes projets web pour y ajouter une couche intelligente.
        </p>
      </div>
      <div className="lang-row">
        {languages.map((lang) => (
          <div className="lang-chip" key={lang.name}>
            <span>{lang.name}</span>
            <span className="lang-level">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
