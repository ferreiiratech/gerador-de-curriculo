import type { ResumeData } from "./type";

export const resumeData: ResumeData = {
  contact: {
    name: "João Silva Santos",
    website: "https://www.joaodev.com",
    email: "joao.silva@email.com",
    phone: "+55 11 98765-4321",
    github: "https://github.com/joaosilva",
    linkedin: "https://www.linkedin.com/in/joaosilva/",
  },

  about: [
    "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Com experiência em desenvolvimento web moderno, tenho",
    "trabalhado com diversas tecnologias e frameworks para entregar projetos de alta qualidade. Busco constantemente aprender novas",
    "ferramentas e metodologias para aprimorar minhas habilidades técnicas. Atualmente, foco em arquitetura de software e boas práticas de",
    "desenvolvimento, sempre com o objetivo de escrever código limpo, testável e de fácil manutenção.",
  ],

  experiences: [
    {
      title: "Desenvolvedor Full Stack",
      company: "TechCorp · Tempo integral · Híbrido",
      period: "Março de 2024 - o momento",
      description: [
        "Responsável pelo desenvolvimento e manutenção de aplicações web corporativas, trabalhando com stack completa desde o banco de",
        "dados até a interface do usuário. Principais responsabilidades incluem:",
        "Desenvolver APIs RESTful robustas utilizando Node.js e Express, garantindo escalabilidade e performance adequada para atender",
        "milhares de usuários simultâneos. Implemento padrões de projeto e clean architecture para manter o código organizado.",
        "Criar interfaces de usuário responsivas e acessíveis com React e TypeScript, focando em experiência do usuário e",
        "performance de carregamento. Utilizo ferramentas modernas de build e otimização.",
        "Colaborar com equipes multidisciplinares em metodologias ágeis, participando ativamente de cerimônias Scrum e",
        "contribuindo para o planejamento de sprints e definição de histórias de usuário.",
        "Implementar testes automatizados e integração contínua usando Jest e GitHub Actions, garantindo qualidade e",
        "confiabilidade do código antes de cada deploy em produção.",
      ],
    },
  ],

  education: [
    {
      institution: "Universidade Federal de São Paulo",
      degree: "Bacharelado em Ciência da Computação",
      period: "Março 2020 - Dezembro 2024",
    },
    {
      institution: "Escola Estadual Prof. Santos Dumont",
      degree: "Ensino médio completo",
      period: "Janeiro 2015 - Dezembro 2017",
    },
  ],

  projects: [
    {
      name: "E-commerce Platform",
      period: "Agosto – Outubro 2024",
      description: [
        "Desenvolvi uma plataforma completa de e-commerce do zero, incluindo carrinho de compras, processamento de pagamentos e painel",
        "administrativo. O projeto utilizou uma arquitetura moderna e escalável, com separação clara entre frontend e backend. Implementei",
        "autenticação segura, gerenciamento de estoque em tempo real e sistema de recomendação de produtos baseado em histórico de compras.",
        "A aplicação foi desenvolvida pensando em escalabilidade e foi otimizada para SEO, garantindo boa visibilidade nos motores de busca.",
        "Todo o código seguiu padrões de clean code e foi coberto por testes automatizados.",
      ],
      highlights: [
        "Tecnologias: Node.js, React, PostgreSQL, Redis, Stripe API, Docker.",
        "Metodologias: TDD, CI/CD, Git Flow.",
        "Projeto individual com mais de 10.000 linhas de código.",
      ],
    },
    {
      name: "Task Manager App",
      period: "Maio – Julho 2024",
      description: [
        "Criei um aplicativo de gerenciamento de tarefas colaborativo com funcionalidades de tempo real usando WebSockets. A aplicação permite",
        "que equipes organizem projetos, atribuam tarefas, definam prazos e acompanhem o progresso de forma visual através de quadros Kanban.",
        "Implementei notificações em tempo real, sistema de comentários, upload de arquivos e integração com calendário. O backend foi construído",
        "com arquitetura em camadas, separando lógica de negócio, acesso a dados e apresentação para facilitar manutenção e testes.",
        "A interface foi desenvolvida com foco em usabilidade e acessibilidade, seguindo diretrizes WCAG.",
      ],
      highlights: [
        "Tecnologias: Express.js, Socket.io, MongoDB, Vue.js, Tailwind CSS, AWS S3.",
        "Padrões: Repository Pattern, Dependency Injection.",
        "Projeto em equipe de 5 desenvolvedores.",
      ],
    },
  ],

  skills: {
    programmingLanguages: {
      "4 years": ["JavaScript", "HTML/CSS"],
      "3 years": ["TypeScript", "SQL"],
      "2 years": ["Python", "Java"],
    },
    technologies: [
      "React.js, Vue.js, Node.js, Express, NestJS, PostgreSQL, MongoDB,",
      "Redis, Docker, Kubernetes, AWS, Git, GitHub Actions, Jest, Cypress,",
      "RESTful APIs, GraphQL, WebSockets, Microservices.",
    ],
    awards: [
      "Melhor Projeto de Conclusão de Curso 2024, reconhecimento pela",
      "inovação e qualidade técnica do projeto apresentado",
      "Hackathon CodeFest 2023 - 2º Lugar, competição com mais de",
      "200 participantes focada em soluções sustentáveis",
    ],
    courses: [
      "Advanced React Patterns and Performance (Frontend Masters, 2024),",
      "Microservices Architecture with Node.js (Udemy, 2024),",
      "AWS Certified Solutions Architect (Amazon, 2023), Clean Code and",
      "SOLID Principles (Alura, 2023), Docker and Kubernetes Fundamentals",
      "(Pluralsight, 2022), Full Stack Web Development Bootcamp (Rocketseat, 2022)",
    ],
  },
};
