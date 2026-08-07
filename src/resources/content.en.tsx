import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Henrique",
  lastName: "Valentim",
  name: `Henrique Valentim`,
  role: "Data & Automation Analyst",
  avatar: "/images/avatar.jpg",
  email: "henriquevalentimbastos@hotmail.com",
  location: "America/Maceio", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English"], // optional: Leave the array empty if you don't want to display languages
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
    name: "Resume",
    icon: "person",
    link: "/curriculo-en.pdf",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Portfolio`,
  description: `Professional portfolio of ${person.name}, Data & Automation Analyst`,
  headline: <>Data, automation, and applied AI for smarter operations</>,
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
      Data & Automation Analyst with experience in SQL, Python, BigQuery, Power BI, and n8n.
      <br /> I turn operational processes into reliable, integrated, data-driven workflows.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Get to know ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/+553****7719",
  },
  intro: {
    display: true,
    title: "Summary",
    description: (
      <>
        Data & Automation Analyst with experience in SQL, Python, BigQuery, Power BI, and n8n automation pipelines.
        <br /><br />
        My work spans pipeline reliability and data modeling, executive dashboards, cross-system integrations, and applied AI solutions for operations.
        I automate processes, validate and consolidate data, define KPIs, and support decision-making.
        <br /><br />
        I have experience in support and content operations as well as operational and healthcare analytics, collaborating with international stakeholders in English.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional Experience",
    experiences: [
      {
        company: "Uproot Clean USA",
        timeframe: "Apr 2026 - Present",
        role: "Data & Automation Analyst",
        achievements: [
          <>Configure, optimize, and automate order and shipping-status processes using AI-generated responses, increasing automated responses to 40% of total volume.</>,
          <>Build n8n pipelines for validation, data cross-checking, and migration across platforms, with proactive notifications for critical operational events.</>,
          <>Model BigQuery tables and SQL queries to consolidate operational data, with Metabase visualizations supporting decision-making.</>,
          <>Collaborate with international stakeholders in English to analyze processes, identify automation opportunities, and design scalable solutions.</>,
        ],
        images: [],
      },
      {
        company: "Rede Primavera de Saúde",
        timeframe: "Oct 2025 - Mar 2026",
        role: "Business Analyst I",
        achievements: [
          <>Built strategic Power BI dashboards (DAX, Power Query) focused on operational, healthcare, and financial KPIs.</>,
          <>Executed optimized SQL queries in OracleSQL, PostgreSQL, and SQL Server for ad hoc analyses and performance investigations.</>,
          <>Structured data pipelines and ETL workflows, ensuring metric integrity and traceability.</>,
          <>Developed executive indicators for leadership, consolidating complex datasets.</>,
        ],
        images: [
        ],
      },
      {
        company: "Rede Primavera de Saúde",
        timeframe: "Feb 2025 - Oct 2025",
        role: "Data and BI Intern",
        achievements: [
          <>Developed a full-stack pipeline monitoring platform (Python, FastAPI, JS), reducing failure detection time by 90%.</>,
          <>Created Python scripts to automate reporting and data cleaning, saving more than two hours of manual work per day.</>,
          <>Built dashboards and semantic models in Power BI.</>,
          <>Documented workflows and business rules, strengthening data governance.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universidade Federal de Sergipe (UFS)",
        description: <>Bachelor's Degree in Information Systems (Expected: Mar 2027)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Automation & Applied AI",
        description: (
          <>
            Automating operational processes, integrating systems, and building AI-assisted workflows that reduce manual work and scale operations.
          </>
        ),
        tags: [
          { name: "n8n", icon: "rocket" },
          { name: "REST APIs", icon: "globe" },
          { name: "GraphQL", icon: "code" },
          { name: "Webhooks", icon: "arrowRight" },
          { name: "AI / LLMs", icon: "sparkle" },
        ],
        images: [],
      },
      {
        title: "Data & Analytics",
        description: (
          <>
            Extracting, modeling, and visualizing data for operational analysis and executive decision-making.
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
        title: "Data Engineering & Machine Learning",
        description: (
          <>
            Building pipelines, data quality and lineage, APIs, and predictive models for operational problems.
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
  label: "Projects",
  title: `My Projects`,
  description: `Projects and Studies - ${person.name}`,
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
