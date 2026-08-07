import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Henrique",
  lastName: "Valentim",
  name: `Henrique Valentim`,
  role: "Business Analyst",
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
  description: `Professional portfolio of ${person.name}, Data and Business Intelligence Analyst`,
  headline: <>Turning data into strategic insights and decisions</>,
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
        Data professional working as a Business Analyst, with experience in Business Intelligence, SQL, 
        ETL, data processing and analysis, automation, and data visualization.
        <br /><br />
        I work directly on building dashboards, defining KPIs, extracting data, and modeling data to support decision-making.
        I have strong experience in operational and healthcare analyses, ensuring the integrity and standardization of corporate metrics.
        <br /><br />
        Interested in Data Science, Data Engineering, AI, and Machine Learning.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional Experience",
    experiences: [
      {
        company: "Rede Primavera de Saúde",
        timeframe: "Oct 2025 - Present",
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
        title: "Business Intelligence",
        description: (
          <>
            Transforming raw data into visual and strategic insights to support executive and operational decision-making.
          </>
        ),
        tags: [
          { name: "Power BI", icon: "rocket" }, // Suggested icon
          { name: "DAX", icon: "code" },
          { name: "Power Query", icon: "grid" },
          { name: "ETL", icon: "arrowRight" },
          { name: "Data Modeling", icon: "grid" },
        ],
        images: [],
      },
      {
        title: "SQL & Databases",
        description: (
          <>
            Advanced data manipulation, performance optimization, and information extraction in complex database environments.
          </>
        ),
        tags: [
          { name: "OracleSQL", icon: "database" }, // Suggested icon
          { name: "PostgreSQL", icon: "database" },
          { name: "SQL Server", icon: "database" },
          { name: "MySQL", icon: "database" },
          { name: "Tuning", icon: "eye" },
        ],
        images: [],
      },
      {
        title: "Python & Development",
        description: (
          <>
            Developing automation scripts, APIs for systems integration, and data engineering pipelines.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" }, // Using a generic code icon if a Python icon is unavailable
          { name: "Pandas", icon: "grid" },
          { name: "FastAPI", icon: "globe" },
          { name: "Automation", icon: "rocket" },
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
