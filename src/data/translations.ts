// Conteúdo em português.
export const pt = {
  meta: {
    title: 'Ana Beatriz | Desenvolvedora de Sistemas',
    description:
      'Portfólio de Ana Beatriz, desenvolvedora de sistemas com experiência em ERP e bancos de dados, em transição para a área de dados.',
    lang: 'pt-BR',
  },
  navigation: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Conhecimentos', href: '#conhecimentos' },
    { label: 'Contato', href: '#contato' },
  ],
  nav: {
    ariaLabel: 'Navegação principal',
    chooseLanguage: 'Escolha o idioma',
    language: 'Idioma',
    openMenu: 'Abrir menu de navegação',
    homeLabel: 'Ana Beatriz',
    logoAlt: 'ab. — Ana Beatriz',
    languageCodes: ['PT', 'EN'],
  },
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Ana',
    surname: 'Beatriz',
    role: 'Desenvolvedora de Sistemas',
    transition: 'em transição para a área de Dados',
    description:
      'Desenvolvo soluções, trabalho com sistemas ERP e bancos de dados, e busco transformar minha experiência técnica em soluções orientadas por dados.',
    availability: 'Aberta a oportunidades na área de Dados',
    primaryAction: { label: 'Conheça minha trajetória', href: '#sobre' },
    secondaryAction: { label: 'Ver projetos', href: '#projetos' },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/AnaBeatrizA-Silva' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ana-beatriz-a-silva',
      },
      {
        label: 'E-mail',
        href: 'mailto:ana.beatriz.adriano.silva.1929@gmail.com',
      },
    ],
    visual: {
      windowTitle: 'ana / foco',
      label: 'FOCO_ATUAL',
      value: 'DADOS & BANCOS DE DADOS',
      explanation:
        'Construindo a ponte entre desenvolvimento de sistemas e inteligência baseada em dados.',
      pipeline: {
        ariaLabel: 'Animação de fluxo: origem, transformação e consulta',
        heading: 'PIPELINE / EM MOVIMENTO',
        liveLabel: 'AO VIVO',
        source: 'origem',
        transform: 'transformação',
        query: 'consulta',
      },
      stages: [
        { code: 'DB', title: 'Banco de dados', detail: 'Estruturação e consultas SQL' },
        { code: 'ETL', title: 'Fluxo de dados', detail: 'Interesse em integração e transformação' },
        { code: 'SQL', title: 'Análise e consulta', detail: 'Explorando informações estruturadas' },
      ],
      technologies: ['SQL', 'PostgreSQL', 'Modelagem de Dados'],
      status: 'Explorando novas possibilidades',
      footer: 'Desenvolvimento · Dados · Aprendizado contínuo',
    },
  },
  about: {
    eyebrow: 'SOBRE MIM',
    title: 'Entre sistemas, dados e novas possibilidades.',
    paragraphs: [
      'Minha trajetória profissional começou na área de Tecnologia da Informação, com experiência em suporte, infraestrutura e desenvolvimento de sistemas ERP.',
      'No desenvolvimento, tenho contato com manutenção e evolução de funcionalidades, correção de problemas e tecnologias como Vue 3, TypeScript e PostgreSQL, incluindo contato com migrações de banco de dados.',
      'Durante minha formação em Engenharia de Software, desenvolvi interesse por bancos de dados, SQL, modelagem de dados e análise de informações. Hoje, busco direcionar minha carreira para a área de Dados, ampliando meus conhecimentos e construindo uma base técnica consistente.',
    ],
    principles: [
      { number: '01', title: 'Organização', description: 'Estruturar tarefas e informações para trabalhar com clareza e consistência.', accent: 'blue' },
      { number: '02', title: 'Aprendizado', description: 'Buscar conhecimento continuamente e me adaptar a novas ferramentas e desafios.', accent: 'red' },
      { number: '03', title: 'Resolução de problemas', description: 'Investigar cenários, compreender necessidades e buscar soluções práticas.', accent: 'blue' },
    ],
    focus: {
      label: 'DIREÇÃO PROFISSIONAL',
      title: 'Desenvolvimento de Sistemas → Dados',
      description:
        'Aproveitar a experiência com sistemas e bancos de dados como base para evoluir em análise, integração e engenharia de dados.',
    },
  },
  experience: {
    eyebrow: 'TRAJETÓRIA PROFISSIONAL',
    title: 'Experiência na prática.',
    description:
      'Minha trajetória em tecnologia combina desenvolvimento de sistemas, manutenção de aplicações e suporte à infraestrutura de TI.',
    activitiesHeading: 'PRINCIPAIS ATIVIDADES',
    jobs: [
      {
        company: 'Freeline Informática', role: 'Desenvolvedora Júnior', period: 'Jul. 2026 - Atual', type: 'Desenvolvimento de Sistemas',
        description: 'Desenvolvimento e manutenção de funcionalidades em sistemas ERP, com foco na evolução das aplicações e na resolução de problemas.',
        activities: ['Desenvolvimento e manutenção de telas e funcionalidades.', 'Correção de bugs e melhorias em sistemas existentes.', 'Utilização de Vue 3 e TypeScript no desenvolvimento.', 'Contato com migrações de bancos PostgreSQL durante a evolução do sistema.', 'Uso de Docker e ambiente Linux Ubuntu.'],
        technologies: ['Vue 3', 'TypeScript', 'PostgreSQL', 'Docker', 'Linux'], accent: 'blue',
      },
      {
        company: 'Transmagna Transportes', role: 'Analista de TI Júnior', period: 'Out. 2024 - Jun. 2026', type: 'Tecnologia da Informação',
        description: 'Atuação no suporte e na manutenção da infraestrutura de TI, contribuindo para o funcionamento dos recursos tecnológicos da empresa.',
        activities: ['Atendimento de solicitações e demandas técnicas.', 'Suporte aos usuários e manutenção de recursos de TI.', 'Apoio à resolução de problemas relacionados à infraestrutura.'],
        technologies: ['Suporte técnico', 'Infraestrutura de TI', 'Resolução de problemas'], accent: 'red',
      },
    ],
  },
  projects: {
    eyebrow: 'PROJETOS SELECIONADOS',
    title: 'Conhecimento em construção.',
    description: 'Projetos e experimentos que demonstram minha evolução em desenvolvimento de sistemas, bancos de dados e tecnologias relacionadas à área de Dados.',
    emptyTitle: 'Novos projetos em preparação.',
    emptyDescription: 'Estou organizando meus projetos para compartilhar soluções, aprendizados e experimentos técnicos por aqui.',
    action: 'Acompanhe no GitHub',
    explore: 'Explorar repositórios',
    repository: 'Repositório',
    demo: 'Demonstração',
    githubUrl: 'https://github.com/AnaBeatrizA-Silva',
    projectPrefix: 'PROJETO',
  },
  stack: {
    eyebrow: 'CONHECIMENTOS TÉCNICOS',
    title: 'Ferramentas que fazem parte da minha jornada.',
    description: 'Tecnologias e conceitos que utilizo, estudo e continuo aprofundando ao longo da minha trajetória em desenvolvimento de sistemas e na transição para a área de Dados.',
    category: 'CATEGORIA',
    categories: [
      { id: 'databases', title: 'Dados & Bancos de Dados', description: 'Consultas, estruturação e gerenciamento de dados.', accent: 'blue', technologies: [{ name: 'SQL', level: 'Conhecimento técnico' }, { name: 'MariaDB', level: 'Conhecimento técnico' }, { name: 'PostgreSQL', level: 'Contato profissional' }, { name: 'Modelagem de Dados', level: 'Fundamentos' }, { name: 'Procedures & Triggers', level: 'Conhecimento técnico' }] },
      { id: 'development', title: 'Desenvolvimento Web', description: 'Desenvolvimento e manutenção de aplicações.', accent: 'red', technologies: [{ name: 'HTML', level: 'Conhecimento técnico' }, { name: 'CSS', level: 'Conhecimento técnico' }, { name: 'JavaScript', level: 'Conhecimento técnico' }, { name: 'Vue 3', level: 'Experiência profissional' }, { name: 'Tailwind CSS', level: 'Conhecimento técnico' }] },
      { id: 'languages', title: 'Linguagens & Tipagem', description: 'Linguagens utilizadas no desenvolvimento.', accent: 'blue', technologies: [{ name: 'TypeScript', level: 'Experiência profissional' }, { name: 'PHP', level: 'Conhecimentos básicos' }] },
      { id: 'tools', title: 'Ferramentas & Ambiente', description: 'Versionamento, containers e sistemas operacionais.', accent: 'red', technologies: [{ name: 'Git', level: 'Conhecimento técnico' }, { name: 'GitHub', level: 'Conhecimento técnico' }, { name: 'Docker', level: 'Contato profissional' }, { name: 'Linux Ubuntu', level: 'Contato profissional' }] },
    ],
  },
  education: {
    eyebrow: 'FORMAÇÃO', title: 'Uma base para evoluir.',
    description: 'Minha formação acadêmica e técnica reúne fundamentos de desenvolvimento, tecnologia e construção de sistemas.',
    inProgress: 'Em andamento',
    entries: [
      { institution: 'Centro Universitário Católica de Joinville', course: 'Bacharelado em Engenharia de Software', period: '2025 - 2029', status: 'Em andamento', type: 'Graduação', description: 'Formação voltada ao desenvolvimento de software, engenharia de sistemas, fundamentos computacionais e boas práticas de desenvolvimento.', accent: 'blue' },
      { institution: 'SENAC Joinville', course: 'Técnico em Informática para Internet', period: '2021 - 2023', status: 'Concluído', type: 'Ensino técnico integrado ao médio', description: 'Formação técnica com fundamentos de informática e desenvolvimento para a internet.', accent: 'red' },
      { institution: 'CEBRAC', course: 'Manutenção de Computadores e Celulares', period: '2021', status: 'Concluído', type: 'Curso complementar', description: 'Aprendizado voltado à manutenção e aos fundamentos de hardware de computadores e dispositivos móveis.', accent: 'blue' },
    ],
  },
  communication: {
    eyebrow: 'DIA A DIA / IDIOMAS', title: 'Dia a dia & Idiomas', description: 'Organização, escuta e vontade de aprender para trabalhar bem em equipe e transformar desafios em soluções.', dayToDay: 'No dia a dia', softSkillsLabel: 'HABILIDADES',
    softSkills: ['Organização e planejamento', 'Trabalho em equipe', 'Aprendizado e adaptação', 'Proatividade', 'Resolução de problemas', 'Compromisso com o desenvolvimento'],
    languagesTitle: 'Idiomas', languagesLabel: 'IDIOMAS', languages: [{ name: 'Português', proficiency: 'Nativo', code: 'PT' }, { name: 'Inglês', proficiency: 'Intermediário a avançado', code: 'EN' }],
  },
  contact: {
    eyebrow: 'CONTATO / CONECTE-SE', title: 'Vamos conversar sobre dados?', description: 'Estou construindo minha trajetória na área de dados e aberta a conversas, trocas de conhecimento e oportunidades profissionais.', email: 'ana.beatriz.adriano.silva.1929@gmail.com', emailLabel: 'E-mail', emailAction: 'Enviar um e-mail',
    links: [
      { icon: 'linkedin', label: 'LinkedIn', value: 'ana-beatriz-a-silva', href: 'https://www.linkedin.com/in/ana-beatriz-a-silva', accent: 'blue', external: true },
      { icon: 'github', label: 'GitHub', value: 'AnaBeatrizA-Silva', href: 'https://github.com/AnaBeatrizA-Silva', accent: 'red', external: true },
      { icon: 'phone', label: 'Telefone', value: '(47) 99269-6563', href: 'tel:+5547992696563', accent: 'blue' },
    ],
  },
  footer: {
    tagline: ['Sistemas', 'Dados'], note: 'Feito com curiosidade e vontade de aprender.', backToTop: 'Voltar ao topo ↑', backLabel: 'Ana Beatriz - voltar ao início', copyrightName: 'Ana Beatriz',
  },
};
// English content.
export const en = {
  meta: {
    title: 'Ana Beatriz | Software Developer',
    description:
      "Ana Beatriz's portfolio: a software developer with ERP and database experience, transitioning into Data.",
    lang: 'en',
  },
  navigation: [
    { label: 'About', href: '#sobre' },
    { label: 'Projects', href: '#projetos' },
    { label: 'Skills', href: '#conhecimentos' },
    { label: 'Contact', href: '#contato' },
  ],
  nav: {
    ariaLabel: 'Main navigation',
    chooseLanguage: 'Choose language',
    language: 'Language',
    openMenu: 'Open navigation menu',
    homeLabel: 'Ana Beatriz',
    logoAlt: 'ab. — Ana Beatriz',
    languageCodes: ['PT', 'EN'],
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Ana',
    surname: 'Beatriz',
    role: 'Software Developer',
    transition: 'transitioning into Data',
    description:
      'I build solutions, work with ERP systems and databases, and aim to turn my technical experience into data-driven solutions.',
    availability: 'Open to opportunities in Data',
    primaryAction: { label: 'Explore my journey', href: '#sobre' },
    secondaryAction: { label: 'View projects', href: '#projetos' },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/AnaBeatrizA-Silva' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ana-beatriz-a-silva',
      },
      {
        label: 'Email',
        href: 'mailto:ana.beatriz.adriano.silva.1929@gmail.com',
      },
    ],
    visual: {
      windowTitle: 'ana / focus',
      label: 'CURRENT_FOCUS',
      value: 'DATA & DATABASES',
      explanation:
        'Building a bridge between software development and data-driven insights.',
      pipeline: {
        ariaLabel: 'Data flow animation: source, transformation, and query',
        heading: 'PIPELINE / IN MOTION',
        liveLabel: 'LIVE',
        source: 'source',
        transform: 'transform',
        query: 'query',
      },
      stages: [
        { code: 'DB', title: 'Database', detail: 'Data structures and SQL queries' },
        { code: 'ETL', title: 'Data pipeline', detail: 'Interested in integration and transformation' },
        { code: 'SQL', title: 'Analysis and querying', detail: 'Exploring structured information' },
      ],
      technologies: ['SQL', 'PostgreSQL', 'Data Modeling'],
      status: 'Exploring new possibilities',
      footer: 'Software · Data · Continuous learning',
    },
  },
  about: {
    eyebrow: 'ABOUT ME',
    title: 'Between systems, data, and new possibilities.',
    paragraphs: [
      'My career in technology began in IT, with experience in support, infrastructure, and ERP system development.',
      'In software development, I work on maintaining and improving features, fixing issues, and using technologies such as Vue 3, TypeScript, and PostgreSQL, including database migrations.',
      'During my Software Engineering studies, I became interested in databases, SQL, data modeling, and information analysis. I am now moving my career toward Data, expanding my knowledge and building a strong technical foundation.',
    ],
    principles: [
      {
        number: '01',
        title: 'Organization',
        description:
          'Structuring tasks and information to work with clarity and consistency.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'Learning',
        description:
          'Continuously seeking knowledge and adapting to new tools and challenges.',
        accent: 'red',
      },
      {
        number: '03',
        title: 'Problem solving',
        description:
          'Investigating situations, understanding needs, and finding practical solutions.',
        accent: 'blue',
      },
    ],
    focus: {
      label: 'CAREER DIRECTION',
      title: 'Software Development → Data',
      description:
        'Building on my experience with systems and databases to grow in analytics, data integration, and data engineering.',
    },
  },
  experience: {
    eyebrow: 'PROFESSIONAL EXPERIENCE',
    title: 'Experience in practice.',
    description:
      'My experience in technology combines software development, application maintenance, and IT infrastructure support.',
    activitiesHeading: 'KEY CONTRIBUTIONS',
    jobs: [
      {
        company: 'Freeline Informática',
        role: 'Junior Developer',
        period: 'Jul 2026 – Present',
        type: 'Software Development',
        description:
          'Developing and maintaining ERP system features, focusing on application improvements and problem solving.',
        activities: [
          'Developing and maintaining screens and features.',
          'Fixing bugs and improving existing systems.',
          'Using Vue 3 and TypeScript in development.',
          'Working with PostgreSQL database migrations as the system evolves.',
          'Using Docker and the Ubuntu Linux environment.',
        ],
        technologies: ['Vue 3', 'TypeScript', 'PostgreSQL', 'Docker', 'Linux'],
        accent: 'blue',
      },
      {
        company: 'Transmagna Transportes',
        role: 'Junior IT Analyst',
        period: 'Oct 2024 – Jun 2026',
        type: 'Information Technology',
        description:
          'Supported and maintained IT infrastructure, helping keep the company’s technology resources running.',
        activities: [
          'Responding to technical requests and support needs.',
          'Supporting users and maintaining IT resources.',
          'Helping resolve infrastructure-related issues.',
        ],
        technologies: [
          'Technical Support',
          'IT Infrastructure',
          'Problem Solving',
        ],
        accent: 'red',
      },
    ],
  },
  projects: {
    eyebrow: 'SELECTED PROJECTS',
    title: 'Knowledge in progress.',
    description:
      'Projects and experiments that show my growth in software development, databases, and technologies related to Data.',
    emptyTitle: 'New projects in the works.',
    emptyDescription:
      'I am preparing projects to share solutions, lessons learned, and technical experiments here.',
    action: 'Follow on GitHub',
    explore: 'Explore repositories',
    repository: 'Repository',
    demo: 'Demo',
    githubUrl: 'https://github.com/AnaBeatrizA-Silva',
    projectPrefix: 'PROJECT',
  },
  stack: {
    eyebrow: 'TECHNICAL SKILLS',
    title: 'Tools that are part of my journey.',
    description:
      'Technologies and concepts I use, study, and continue to develop throughout my work in software and my transition into Data.',
    category: 'CATEGORY',
    categories: [
      {
        id: 'databases',
        title: 'Data & Databases',
        description: 'Queries, data structure, and database management.',
        accent: 'blue',
        technologies: [
          { name: 'SQL', level: 'Technical knowledge' },
          { name: 'MariaDB', level: 'Technical knowledge' },
          { name: 'PostgreSQL', level: 'Professional exposure' },
          { name: 'Data Modeling', level: 'Foundational knowledge' },
          { name: 'Procedures & Triggers', level: 'Technical knowledge' },
        ],
      },
      {
        id: 'development',
        title: 'Web Development',
        description: 'Application development and maintenance.',
        accent: 'red',
        technologies: [
          { name: 'HTML', level: 'Technical knowledge' },
          { name: 'CSS', level: 'Technical knowledge' },
          { name: 'JavaScript', level: 'Technical knowledge' },
          { name: 'Vue 3', level: 'Professional experience' },
          { name: 'Tailwind CSS', level: 'Technical knowledge' },
        ],
      },
      {
        id: 'languages',
        title: 'Programming Languages & Types',
        description: 'Languages used in software development.',
        accent: 'blue',
        technologies: [
          { name: 'TypeScript', level: 'Professional experience' },
          { name: 'PHP', level: 'Basic knowledge' },
        ],
      },
      {
        id: 'tools',
        title: 'Tools & Environment',
        description: 'Version control, containers, and operating systems.',
        accent: 'red',
        technologies: [
          { name: 'Git', level: 'Technical knowledge' },
          { name: 'GitHub', level: 'Technical knowledge' },
          { name: 'Docker', level: 'Professional exposure' },
          { name: 'Ubuntu Linux', level: 'Professional exposure' },
        ],
      },
    ],
  },
  education: {
    eyebrow: 'EDUCATION',
    title: 'A foundation to keep growing.',
    description:
      'My academic and technical education brings together foundations in development, technology, and software systems.',
    inProgress: 'In progress',
    entries: [
      {
        institution: 'Centro Universitário Católica de Joinville',
        course: 'BSc in Software Engineering',
        period: '2025 – 2029',
        status: 'In progress',
        type: "Bachelor's degree",
        description:
          'Studies focused on software development, systems engineering, computing fundamentals, and development best practices.',
        accent: 'blue',
      },
      {
        institution: 'SENAC Joinville',
        course: 'Technical Program in Internet Computing',
        period: '2021 – 2023',
        status: 'Completed',
        type: 'Integrated technical high school program',
        description:
          'Technical education in computing fundamentals and web development.',
        accent: 'red',
      },
      {
        institution: 'CEBRAC',
        course: 'Computer and Mobile Phone Maintenance',
        period: '2021',
        status: 'Completed',
        type: 'Additional course',
        description:
          'Training in computer and mobile device maintenance and hardware fundamentals.',
        accent: 'blue',
      },
    ],
  },
  communication: {
    eyebrow: 'COMMUNICATION / LANGUAGES',
    description:
      'Organization, active listening, and a willingness to learn help me collaborate and turn challenges into solutions.',
    title: 'Communication & Languages',
    dayToDay: 'At work',
    softSkillsLabel: 'SOFT_SKILLS',
    softSkills: [
      'Organization and planning',
      'Teamwork',
      'Learning and adaptability',
      'Proactivity',
      'Problem solving',
      'Commitment to professional growth',
    ],
    languagesTitle: 'Languages',
    languagesLabel: 'LANGUAGES',
    languages: [
      { name: 'Portuguese', proficiency: 'Native', code: 'PT' },
      {
        name: 'English',
        proficiency: 'Intermediate to advanced',
        code: 'EN',
      },
    ],
  },
  contact: {
    eyebrow: 'CONTACT / CONNECT',
    title: "Let's talk about data.",
    description:
      'I am building my career in Data and open to conversations, knowledge sharing, and professional opportunities.',
    email: 'ana.beatriz.adriano.silva.1929@gmail.com',
    emailLabel: 'Email',
    emailAction: 'Send an email',
    links: [
      { icon: 'linkedin', label: 'LinkedIn', value: 'ana-beatriz-a-silva', href: 'https://www.linkedin.com/in/ana-beatriz-a-silva', accent: 'blue', external: true },
      { icon: 'github', label: 'GitHub', value: 'AnaBeatrizA-Silva', href: 'https://github.com/AnaBeatrizA-Silva', accent: 'red', external: true },
      { icon: 'phone', label: 'Phone', value: '+55 (47) 99269-6563', href: 'tel:+5547992696563', accent: 'blue' },
    ],
  },
  footer: {
    tagline: ['Software', 'Data'],
    note: 'Made with curiosity and a desire to learn.',
    backToTop: 'Back to top ↑',
    backLabel: 'Ana Beatriz — back to top',
    copyrightName: 'Ana Beatriz',
  },
};
