import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Henrique",
  lastName: "Valentim",
  name: `Henrique Valentim`,
  role: "Analista de Negócios",
  avatar: "/images/avatar.jpg",
  email: "henriquevalentimbastos@hotmail.com",
  location: "America/Maceio", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Henriquevv",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/henriquevalentim1",
  },
//  {
//    name: "Threads",
//    icon: "threads",
//    link: "https://www.threads.com/@once_ui",
//  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Currículo",
    icon: "person", // Este ícone já existe na biblioteca do template
    link: "/curriculo.pdf", // Certifique-se que o nome do ficheiro na pasta public é igual a este
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `${person.name} | Portfólio`,
  description: `Portfólio profissional de ${person.name}, Analista de Dados e Business Intelligence`,
  headline: <>Transformando dados em análises e decisões estratégicas</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/+5531996187719",
  },
  intro: {
    display: true,
    title: "Resumo",
    description: (
      <>
        Profissional de Dados atuando como Técnico de Negócios, com experiência em Business Intelligence, SQL, 
        ETL, tratamento e análise de dados, automação e visualização de dados.
        <br /><br />
        Trabalho diretamente com construção de dashboards, definição de KPIs, extração de dados e modelagem para tomada de decisão.
        Tenho forte atuação em análises operacionais e assistenciais, garantindo integridade e padronização de métricas corporativas.
        <br /><br />
        Interesse em Ciência de Dados, Engenharia de Dados, IA e Aprendizado de Máquina.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Rede Primavera de Saúde",
        timeframe: "Out 2025 - Atual",
        role: "Técnico de Negócios I",
        achievements: [
          <>Construção de dashboards estratégicos em Power BI (DAX, Power Query) com foco em KPIs operacionais, assistenciais e financeiros.</>,
          <>Execução de consultas SQL otimizadas em OracleSQL, PostgreSQL e SQL Server para análises ad hoc e investigações de performance.</>,
          <>Estruturação de pipelines de dados e fluxos ETL garantindo integridade e rastreabilidade das métricas.</>,
          <>Desenvolvimento de indicadores executivos para diretoria, consolidando datasets complexos.</>,
        ],
        images: [
        ],
      },
      {
        company: "Rede Primavera de Saúde",
        timeframe: "Fev 2025 - Out 2025",
        role: "Estagiário em Dados e BI",
        achievements: [
          <>Desenvolvimento de plataforma full-stack de monitoramento de pipelines (Python, FastAPI, JS), reduzindo em 90% o tempo de detecção de falhas.</>,
          <>Criação de scripts Python para automação de relatórios e limpeza de dados, economizando mais de 2 horas diárias de trabalho manual.</>,
          <>Construção de dashboards e modelos semânticos em Power BI.</>,
          <>Documentação de fluxos e regras de negócio fortalecendo a governança de dados.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "Universidade Federal de Sergipe (UFS)",
        description: <>Bacharelado em Sistemas de Informação (Previsão: Mar 2027)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Business Intelligence",
        description: (
          <>
            Transformação de dados brutos em insights visuais e estratégicos para apoiar a tomada de decisão executiva e operacional.
          </>
        ),
        tags: [
          { name: "Power BI", icon: "rocket" }, // Ícone sugerido
          { name: "DAX", icon: "code" },
          { name: "Power Query", icon: "grid" },
          { name: "ETL", icon: "arrowRight" },
          { name: "Modelagem", icon: "grid" },
        ],
        images: [],
      },
      {
        title: "SQL & Bancos de Dados",
        description: (
          <>
            Manipulação avançada de dados, otimização de performance e extração de informações em ambientes de bancos de dados complexos.
          </>
        ),
        tags: [
          { name: "OracleSQL", icon: "database" }, // Ícone sugerido
          { name: "PostgreSQL", icon: "database" },
          { name: "SQL Server", icon: "database" },
          { name: "MySQL", icon: "database" },
          { name: "Tuning", icon: "eye" },
        ],
        images: [],
      },
      {
        title: "Python & Desenvolvimento",
        description: (
          <>
            Desenvolvimento de scripts de automação, APIs para integração de sistemas e pipelines de engenharia de dados.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" }, // Usando ícone de código genérico se não tiver o do Python
          { name: "Pandas", icon: "grid" },
          { name: "FastAPI", icon: "globe" },
          { name: "Automação", icon: "rocket" },
          { name: "Git", icon: "github" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Meus Projetos`,
  description: `Projetos e Estudos - ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
