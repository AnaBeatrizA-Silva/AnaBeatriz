export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [];
