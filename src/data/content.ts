// ============================================================================
// SITE CONTENT — single source of truth
// Everything on the page is driven from this file. Replace the placeholder
// values below with your real information whenever you're ready — no other
// file needs to change.
// ============================================================================

export const profile = {
  name: "AbdelRahman Bashir",
  firstName: "AbdelRahman",
  role: "Full-Stack Developer & Shopify Specialist",
  tagline:
    "I design and build fast, animated web experiences — from custom Shopify apps to full-stack platforms.",
  location: "Remote / Available Worldwide",
  email: "dev@abedbashir.com",
  cvUrl: "/cv/AbdelRahman-Bashir-CV.pdf", // TODO: drop your real CV PDF in public/cv/
  photo: "/images/profile.svg", // TODO: replace with your real photo
  socials: {
    github: "https://github.com/abedbashir",
    linkedin: "https://www.linkedin.com/in/abedbashir",
    twitter: "https://twitter.com/abedbashir",
    instagram: "https://instagram.com/abedbashir",
  },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a full-stack developer who loves turning ideas into polished, production-ready products — with a particular focus on e-commerce and the Shopify ecosystem.",
    "Over the past few years I've built custom Shopify apps, managed and scaled live stores, and shipped web platforms end-to-end using modern JavaScript frameworks like Next.js, React, Vue, and Node.js.",
    "I care deeply about the details: performance, accessibility, clean architecture, and interfaces that feel alive — not just functional.",
  ],
  stats: [
    { label: "Years of Experience", value: 4 },
    { label: "Projects Delivered", value: 30 },
    { label: "Shopify Stores Managed", value: 12 },
    { label: "Happy Clients", value: 20 },
  ],
};

export type StudyItem = {
  year: string;
  title: string;
  place: string;
  description: string;
};

export const studies: StudyItem[] = [
  {
    year: "2019 — 2023",
    title: "B.Sc. in Computer Science",
    place: "University Name",
    description:
      "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
  },
  {
    year: "2022",
    title: "Full-Stack Web Development",
    place: "Online Certification",
    description:
      "Deep dive into modern JavaScript, React/Next.js, Node.js, and database design.",
  },
  {
    year: "2023",
    title: "Shopify App Development",
    place: "Shopify Partner Program",
    description:
      "Specialized training in building embedded Shopify apps with Polaris, GraphQL Admin API, and app extensions.",
  },
  {
    year: "2024 — Present",
    title: "Continuous Learning",
    place: "Self-Directed",
    description:
      "Staying current with the latest in Next.js, animation engineering (GSAP), and scalable backend architecture.",
  },
];

export type SkillGroup = {
  category: string;
  items: { name: string; level: number }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "Vue / Nuxt", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "GSAP / Framer Motion", level: 88 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express", level: 90 },
      { name: "REST & GraphQL APIs", level: 85 },
      { name: "PostgreSQL / MongoDB", level: 82 },
      { name: "Authentication & Security", level: 80 },
    ],
  },
  {
    category: "E-Commerce",
    items: [
      { name: "Shopify App Development", level: 95 },
      { name: "Liquid Theme Development", level: 90 },
      { name: "Shopify Admin/Storefront API", level: 92 },
      { name: "Store Management & CRO", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Vercel / Hostinger", level: 88 },
      { name: "Figma", level: 78 },
    ],
  },
];

export type WorkItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const websites: WorkItem[] = [
  {
    title: "Project One",
    description:
      "A full-stack web platform built with Next.js, featuring real-time data and a custom animated UI.",
    image: "/images/work/project-1.svg",
    tags: ["Next.js", "TypeScript", "Node.js"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "A modern marketing site with GSAP scroll animations and a headless CMS backend.",
    image: "/images/work/project-2.svg",
    tags: ["Vue", "Nuxt", "GSAP"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A custom dashboard application with data visualization and role-based access.",
    image: "/images/work/project-3.svg",
    tags: ["React", "Express", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const apps: WorkItem[] = [
  {
    title: "Shopify App One",
    description:
      "A Shopify embedded app that helps merchants automate order fulfillment workflows.",
    image: "/images/apps/app-1.svg",
    tags: ["Shopify", "React", "Polaris"],
    liveUrl: "#",
  },
  {
    title: "Shopify App Two",
    description:
      "A conversion-boosting upsell app installed on hundreds of active stores.",
    image: "/images/apps/app-2.svg",
    tags: ["Shopify", "Node.js", "GraphQL"],
    liveUrl: "#",
  },
];

export type StoreItem = {
  name: string;
  description: string;
  image: string;
  metric: string;
  url?: string;
};

export const stores: StoreItem[] = [
  {
    name: "Store One",
    description: "Managed theme customization, app integrations, and CRO strategy.",
    image: "/images/stores/store-1.svg",
    metric: "+45% Conversion Rate",
    url: "#",
  },
  {
    name: "Store Two",
    description: "Full storefront rebuild and ongoing performance optimization.",
    image: "/images/stores/store-2.svg",
    metric: "+60% Page Speed",
    url: "#",
  },
  {
    name: "Store Three",
    description: "Custom Shopify Plus solution with automated inventory sync.",
    image: "/images/stores/store-3.svg",
    metric: "12k+ Orders Processed",
    url: "#",
  },
];

export const contact = {
  heading: "Let's Build Something Great",
  subheading:
    "Have a project in mind, need a Shopify app built, or want to manage your store better? Let's talk.",
  // Formspree endpoint — create a free form at https://formspree.io and paste
  // your form ID below (looks like "https://formspree.io/f/xxxxabcd").
  formspreeEndpoint: "https://formspree.io/f/xgawgjgk",
};
