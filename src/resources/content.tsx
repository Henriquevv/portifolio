import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Henrique",
  lastName: "Valentim",
  name: `Henrique Valentim`,
  role: "Analista de Dados & Automação",
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
    icon: "person",
    link: "/curriculo.pdf#cv",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `${person.name} | Portfólio`,
  description: `Portfólio profissional de ${person.name}, Analista de Dados e Automação`,
  headline: <>Dados, automação e IA aplicada para operações mais inteligentes</>,
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
      Analista de Dados & Automação com experiência em SQL, Python, BigQuery, Power BI e n8n.
      <br /> Transformo processos operacionais em fluxos confiáveis, integrados e orientados por dados.
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
        Analista de Dados & Automação com experiência em SQL, Python, BigQuery, Power BI e pipelines de automação em n8n.
        <br /><br />
        Atuo da confiabilidade e modelagem de pipelines a dashboards executivos, integrações entre sistemas e soluções de IA aplicada à operação.
        Trabalho com automação de processos, validação e consolidação de dados, definição de KPIs e suporte à tomada de decisão.
        <br /><br />
        Tenho experiência em operações de atendimento e conteúdo, análises operacionais e assistenciais, colaborando também com stakeholders internacionais em inglês.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Uproot Clean USA",
        timeframe: "Abr 2026 - Atual",
        role: "Data & Automation Analyst",
        achievements: [
          <>Configuração, otimização e automação de processos de status de pedidos e envios com respostas geradas por IA, elevando a taxa de respostas automatizadas em 40% do volume total.</>,
          <>Construção de pipelines no n8n para validação, cruzamento de informações e migração de dados entre plataformas, com notificações proativas para eventos críticos da operação.</>,
          <>Modelagem de tabelas e consultas SQL no BigQuery para consolidação de dados operacionais, com visualizações em Metabase para suporte à tomada de decisão.</>,
          <>Colaboração com stakeholders internacionais em inglês para analisar processos, identificar oportunidades de automação e desenhar soluções escaláveis.</>,
        ],
        images: [],
      },
      {
        company: "Rede Primavera de Saúde",
        timeframe: "Out 2025 - Mar 2026",
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
        title: "Automação & IA Aplicada",
        description: (
          <>
            Automação de processos operacionais, integrações entre sistemas e fluxos assistidos por IA para reduzir trabalho manual e escalar operações.
          </>
        ),
        tags: [
          { name: "n8n", icon: "rocket" },
          { name: "APIs REST", icon: "globe" },
          { name: "GraphQL", icon: "code" },
          { name: "Webhooks", icon: "arrowRight" },
          { name: "IA / LLMs", icon: "sparkle" },
        ],
        images: [],
      },
      {
        title: "Dados & Analytics",
        description: (
          <>
            Extração, modelagem e visualização de dados para análises operacionais e decisões executivas.
          </>
        ),
        tags: [
          { name: "BigQuery", icon: "database" },
          { name: "Metabase", icon: "grid" },
          { name: "Power BI", icon: "rocket" },
          { name: "DAX", icon: "code" },
          { name: "Power Query", icon: "grid" },
          { name: "OracleSQL", icon: "database" },
          { name: "PostgreSQL", icon: "database" },
          { name: "SQL Server", icon: "database" },
          { name: "MySQL", icon: "database" },
        ],
        images: [],
      },
      {
        title: "Engenharia de Dados & Machine Learning",
        description: (
          <>
            Construção de pipelines, qualidade e linhagem de dados, APIs e modelos preditivos aplicados a problemas operacionais.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Pandas", icon: "grid" },
          { name: "FastAPI", icon: "globe" },
          { name: "XGBoost", icon: "chart" },
          { name: "SHAP", icon: "chart" },
          { name: "Lifelines", icon: "chart" },
          { name: "ETL", icon: "arrowRight" },
          { name: "Data Quality", icon: "check" },
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
