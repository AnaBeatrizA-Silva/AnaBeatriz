export interface ContactLink {
  label: string;
  value: string;
  href: string;
  detail: string;
  accent: 'red' | 'blue';
  external?: boolean;
}

export const contact = {
  eyebrow: 'CONTATO / CONNECT',
  title: 'Vamos conversar sobre dados?',
  description:
    'Estou construindo minha trajetória na área de dados e aberta a conversas, trocas de conhecimento e oportunidades profissionais.',
  email: 'ana.beatriz.adriano.silva.1929@gmail.com',
  links: [
    {
      label: 'LinkedIn',
      value: 'ana-beatriz-a-silva',
      href: 'https://www.linkedin.com/in/ana-beatriz-a-silva',
      detail: 'Conecte-se comigo',
      accent: 'blue',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'AnaBeatrizA-Silva',
      href: 'https://github.com/AnaBeatrizA-Silva',
      detail: 'Veja meus repositórios',
      accent: 'red',
      external: true,
    },
    {
      label: 'Telefone',
      value: '(47) 99269-6563',
      href: 'tel:+5547992696563',
      detail: 'Fale comigo',
      accent: 'blue',
    },
  ] satisfies ContactLink[],
};
