import { useState } from 'react';

const links = [
  { href: '#apropos', label: 'Profil' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#top" className="logo">
        KO<span className="logo-dot">·</span>
      </a>
      <nav className={`nav${open ? ' open' : ''}`} id="nav">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="nav-toggle"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
