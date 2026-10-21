export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projectsSection = {
  eyebrow: 'PROJETOS SELECIONADOS',
  title: 'Conhecimento em construção.',
  description:
    'Projetos e experimentos que demonstram minha evolução em desenvolvimento de sistemas, bancos de dados e tecnologias relacionadas à área de Dados.',

  emptyState: {
    title: 'Novos projetos em preparação.',
    description:
      'Estou organizando meus projetos para compartilhar soluções, aprendizados e experimentos técnicos por aqui.',
  },

  action: {
    label: 'Acompanhe no GitHub',
    href: 'https://github.com/AnaBeatrizA-Silva',
  },
};

export const projects: Project[] = [];
