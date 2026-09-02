export const skills = [
  {
    title: 'Développement web',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'React', 'Angular', 'Tailwind CSS', 'Laravel', 'Spring Boot', 'REST API'],
  },
  {
    title: 'Langages',
    items: ['Java', 'PHP', 'Python', 'SQL', 'C++', 'C', 'Bash'],
  },
  {
    title: 'Bases de données',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLAlchemy', 'Vector databases'],
  },
  {
    title: 'Déploiement & DevOps',
    items: ['Docker', 'Git', 'GitHub', 'FastAPI', 'Flask', 'Streamlit'],
  },
  {
    title: 'Data science & machine learning',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Classification', 'Régression', 'Feature engineering', 'NLP'],
  },
  {
    title: 'IA générative',
    items: ['LLM', 'Architecture RAG', 'LangChain', 'FAISS', 'Prompt engineering'],
  },
  {
    title: 'Data engineering',
    items: ['ETL / ELT', 'Apache Spark', 'Kafka', 'Data warehousing', 'Data modeling'],
  },
  {
    title: 'Visualisation de données',
    items: ['Power BI', 'Tableau', 'Matplotlib', 'Streamlit'],
  },
  {
    title: 'Réseaux & systèmes',
    items: ['Linux', 'Administration système', 'Switches & routeurs', 'VLAN', 'Cisco Packet Tracer', 'Sécurité informatique'],
  },
];

export const experience = [
  {
    date: 'Février 2025 — présent',
    title: 'Contrat étudiant',
    org: 'Intermarché — Genlis, France',
    bullets: [
      'Réception et stockage des marchandises, réapprovisionnement des rayons.',
      'Mise en rayon soignée et gestion de la présentation produit.',
      "Accueil et orientation client avec l'attitude commerciale appropriée.",
    ],
  },
  {
    date: 'Novembre 2023 — Mai 2024',
    title: 'Stagiaire en développement web',
    org: 'Fiduciaire Oufsou — Elksiba Beni Mellal, Maroc',
    bullets: [
      "Développement et maintenance du front-end d'un site de gestion clients, avec AngularJS.",
      'Mise en place de designs responsives et compatibilité multi-navigateurs.',
      "Formation et assistance des utilisateurs internes à l'usage du site.",
    ],
  },
  {
    date: 'Mai — Juin 2023',
    title: 'Stagiaire en développement web front-end',
    org: 'Procheck — Casablanca, Maroc',
    bullets: [
      "Développement et maintenance du front-end de pages d'une application web, avec AngularJS.",
      'Implémentation d\u2019un design responsive et de la compatibilité multi-navigateurs.',
      'Adaptation rapide à un nouvel environnement technique.',
    ],
  },
];

export const projects = [
  {
    title: 'Assistant IA — architecture RAG',
    stack: ['Python', 'LangChain', 'FAISS', 'Llama 3', 'Streamlit'],
    bullets: [
      "Chatbot capable d'analyser des documents PDF et d'y répondre par recherche sémantique.",
      "Base vectorielle FAISS et pipeline d'ingestion / vectorisation de documents.",
      'Déploiement local via Ollama pour garantir la confidentialité des données.',
    ],
    links: [{ label: 'github.com/khalid-oumima/MON-CHATBOT-RAG', url: 'https://github.com/khalid-oumima/MON-CHATBOT-RAG' }],
  },
  {
    title: 'Prédiction du churn client',
    stack: ['Python', 'Scikit-learn', 'Random Forest', 'Streamlit'],
    bullets: [
      "Modèle de machine learning pour prédire l'attrition client sur 7000+ données.",
      'Feature engineering et nettoyage du jeu de données ; accuracy du modèle : 80 %.',
      'Application interactive pour simuler des profils clients en temps réel.',
    ],
    links: [{ label: 'github.com/khalid-oumima/customer-churn-prediction', url: 'https://github.com/khalid-oumima/customer-churn-prediction' }],
  },
  {
    title: 'Analyse e-commerce & segmentation RFM',
    stack: ['Python', 'Pandas', 'RFM', 'Power BI'],
    bullets: [
      'Analyse de 8000+ transactions et segmentation client par méthode RFM.',
      'Identification des clients à risque et des clients premium.',
      'Dashboards analytiques pour restituer les segments à une équipe métier.',
    ],
    links: [{ label: 'github.com/khalid-oumima/ecommerce-data-analysis', url: 'https://github.com/khalid-oumima/ecommerce-data-analysis' }],
  },
  {
    title: 'Erasme',
    stack: ['HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Site vitrine pour un établissement scolaire, interface fluide et intuitive.',
      'Conception et intégration front-end complètes, sans framework.',
    ],
    links: [
      { label: 'Voir la démo ↗', url: 'https://khalid-oumima.github.io/Erasme/' },
      { label: 'github.com/khalid-oumima/Erasme', url: 'https://github.com/khalid-oumima/Erasme' },
    ],
  },
];

export const education = [
  {
    date: '2025 — 2026',
    title: "Cycle ingénieur, Électronique & Informatique — spécialisation Data & IA",
    org: "ESEO, Grande École d'Ingénieurs — Dijon",
  },
  {
    date: '2024 — 2025',
    title: 'CPGE ATS — Ingénierie industrielle',
    org: 'Lycée Gustave Eiffel — Dijon',
  },
  {
    date: '2024',
    title: 'BTS Systèmes & Réseaux Informatiques',
    org: 'Lycée Al Khawarizmi — Casablanca, Maroc',
  },
  {
    date: '2020 — 2021',
    title: 'Licence 1, Sciences économiques et gestion',
    org: 'FSJES Ain Chock — Casablanca, Maroc',
  },
  {
    date: '2019 — 2020',
    title: 'Baccalauréat, Sciences et technologies électriques',
    org: 'Lycée Alkhaouarizmi — Casablanca, Maroc',
  },
];

export const certifications = [
  'Analyste de données — IBM',
  'Python — HackerRank',
  'SQL — HackerRank',
  'React — HackerRank',
  'JavaScript — HackerRank',
  'CSS — HackerRank',
  'HTML — SoloLearn',
];

export const languages = [
  { name: 'Français', level: 'C1' },
  { name: 'Anglais', level: 'C1' },
  { name: 'Arabe', level: 'Maternelle' },
];

export const contact = {
  email: 'oumima.khalid.24@gmail.com',
  phone: '06 15 15 41 02',
  phoneHref: 'tel:0615154102',
  linkedin: 'https://www.linkedin.com/in/khalid-oumima',
  github: 'https://github.com/khalid-oumima',
};
