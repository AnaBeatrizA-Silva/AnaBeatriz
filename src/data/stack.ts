export const stack = {
  eyebrow: 'CONHECIMENTOS TÉCNICOS',
  title: 'Ferramentas que fazem parte da minha jornada.',
  description:
    'Tecnologias e conceitos que utilizo, estudo e continuo aprofundando ao longo da minha trajetória em desenvolvimento de sistemas e na transição para a área de Dados.',

  categories: [
    {
      id: 'databases',
      title: 'Dados & Bancos de Dados',
      description: 'Consultas, estruturação e gerenciamento de dados.',
      accent: 'blue',
      technologies: [
        { name: 'SQL', level: 'Conhecimento técnico' },
        { name: 'MariaDB', level: 'Conhecimento técnico' },
        { name: 'PostgreSQL', level: 'Contato profissional' },
        { name: 'Modelagem de Dados', level: 'Fundamentos' },
        { name: 'Procedures & Triggers', level: 'Conhecimento técnico' },
      ],
    },
    {
      id: 'development',
      title: 'Desenvolvimento Web',
      description: 'Desenvolvimento e manutenção de aplicações.',
      accent: 'red',
      technologies: [
        { name: 'HTML', level: 'Conhecimento técnico' },
        { name: 'CSS', level: 'Conhecimento técnico' },
        { name: 'JavaScript', level: 'Conhecimento técnico' },
        { name: 'Vue 3', level: 'Experiência profissional' },
        { name: 'Tailwind CSS', level: 'Conhecimento técnico' },
      ],
    },
    {
      id: 'languages',
      title: 'Linguagens & Tipagem',
      description: 'Linguagens utilizadas no desenvolvimento.',
      accent: 'blue',
      technologies: [
        { name: 'TypeScript', level: 'Experiência profissional' },
        { name: 'PHP', level: 'Conhecimentos básicos' },
      ],
    },
    {
      id: 'tools',
      title: 'Ferramentas & Ambiente',
      description: 'Versionamento, containers e sistemas operacionais.',
      accent: 'red',
      technologies: [
        { name: 'Git', level: 'Conhecimento técnico' },
        { name: 'GitHub', level: 'Conhecimento técnico' },
        { name: 'Docker', level: 'Contato profissional' },
        { name: 'Linux Ubuntu', level: 'Contato profissional' },
      ],
    },
  ],

  languages: [
    {
      name: 'Português',
      proficiency: 'Nativo',
    },
    {
      name: 'Inglês',
      proficiency: 'Intermediário a avançado',
    },
  ],
};