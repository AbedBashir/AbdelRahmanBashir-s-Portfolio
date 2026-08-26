// ============================================================================
// SITE CONTENT — single source of truth
// Everything on the page is driven from this file.
// ============================================================================

export const profile = {
  name: "Abdel Rahman Bashir",
  firstName: "Abdel",
  role: "Technical Lead & Senior Web Developer",
  tagline:
    "Full-stack web developer with 4+ years of experience building 50+ websites worldwide — from custom Shopify stores to WordPress platforms.",
  location: "Beirut, Lebanon",
  email: "dev@abedbashir.com",
  phone: "+961 81 713 782",
  cvUrl: "/cv/AbdelRahman-Bashir-CV.pdf",
  photo: "/images/profile.jpg",
  company: {
    name: "BashFusion E-Solutions",
    url: "https://bashfusion.com",
  },
  socials: {
    github: "https://github.com/AbedBashir",
    linkedin: "https://www.linkedin.com/in/abedbashir/",
  },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "Full-stack web developer who has created over 50+ websites worldwide. I have 4+ years of expertise, and I'm currently focusing on React, Node.js, and Kotlin mobile development.",
    "As a skilled Shopify developer, I've successfully created and maintained several e-commerce websites, ensuring seamless functionality and exceptional user experience — implementing responsive designs, optimizing page load speeds, integrating third-party apps, and customizing themes to align with clients' branding. I'm proficient in HTML, CSS, JavaScript, and Liquid.",
    `One of my key strengths is working remotely with clients across the United States and Canada. Over the years I've collaborated with numerous companies in these regions, providing reliable support and delivering high-quality results. I'm also the owner of ${"BashFusion E-Solutions"}, offering hosting and web development services.`,
  ],
  traits: ["Problem Solver", "Team Player", "Detail Oriented", "Fast Learner"],
  stats: [
    { label: "Years of Experience", value: 4 },
    { label: "Websites Built", value: 50 },
    { label: "Shopify Stores Managed", value: 22 },
    { label: "Companies Worked With", value: 4 },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Advanced" },
  ],
};

export type StudyItem = {
  type: "work" | "education";
  year: string;
  title: string;
  place: string;
  description: string;
};

export const studies: StudyItem[] = [
  {
    type: "work",
    year: "2023 — Present",
    title: "Technical Lead",
    place: "Growth Hacker · Canada",
    description:
      "Leading a team of developers, QA testers and designers — owning technical decisions, architecture, and code review while staying hands-on with implementation.",
  },
  {
    type: "work",
    year: "2022 — 2023",
    title: "Senior Web Developer",
    place: "Growth Hacker · Canada",
    description:
      "Built and maintained client websites end-to-end across WordPress and Shopify, from architecture to deployment.",
  },
  {
    type: "work",
    year: "2022",
    title: "Shopify Developer / IT Support Technician",
    place: "Parallel Beauty LTD · Lebanon",
    description:
      "Designed, developed, and maintained e-commerce sites on Shopify — theme customization, third-party app integration, and custom scripts for unique business needs.",
  },
  {
    type: "work",
    year: "2021 — 2022",
    title: "WordPress Developer",
    place: "Webtags · Lebanon",
    description:
      "Designed and built websites end-to-end, including architecture, back-end/database integration, custom themes and plugins, and performance testing.",
  },
  {
    type: "work",
    year: "2021",
    title: "WordPress Developer",
    place: "Securealm · Lebanon",
    description:
      "Developed landing pages with PHP and custom WordPress blocks, post types, and fields; managed back-end/database integration and deployments.",
  },
  {
    type: "work",
    year: "2021",
    title: "Front-End Developer",
    place: "Productra · Lebanon",
    description:
      "Built front-end templates and combined PHP back-end work with the front-end team to deliver client websites.",
  },
  {
    type: "education",
    year: "2019 — 2021",
    title: "Bachelor's Degree in Computer Science",
    place: "Beirut Arab University",
    description: "Focused on software engineering, algorithms, and systems.",
  },
  {
    type: "education",
    year: "2016 — 2019",
    title: "Computer Engineering",
    place: "Beirut Arab University",
    description: "Foundational coursework in computer engineering.",
  },
  {
    type: "education",
    year: "2009 — 2016",
    title: "Economics & Sociology",
    place: "College Khadija El-Kobra — Makassed",
    description: "Secondary education.",
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
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "JavaScript", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "jQuery", level: 80 },
      { name: "Tailwind CSS", level: 50 },
      { name: "React", level: 30 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "PHP", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Python", level: 30 },
      { name: "Node.js", level: 10 },
    ],
  },
  {
    category: "Shopify Development",
    items: [
      { name: "Liquid", level: 100 },
      { name: "Theme Customization", level: 100 },
      { name: "Shopify CLI", level: 90 },
      { name: "ThemeKit", level: 80 },
      { name: "JSON Templates", level: 80 },
      { name: "Schemas", level: 80 },
      { name: "Shopify Apps", level: 60 },
    ],
  },
  {
    category: "WordPress Development",
    items: [
      { name: "REST API", level: 85 },
      { name: "Custom Blocks", level: 85 },
      { name: "Custom Post Types", level: 85 },
      { name: "Custom Fields", level: 85 },
      { name: "Custom Plugins", level: 85 },
      { name: "Custom Themes", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "GitHub", level: 100 },
      { name: "Figma", level: 100 },
      { name: "Jira", level: 100 },
      { name: "Slack", level: 100 },
      { name: "Git", level: 95 },
      { name: "Postman", level: 75 },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "Kotlin", level: 40 },
      { name: "Java", level: 40 },
      { name: "Swift", level: 40 },
    ],
  },
];

export type ServiceItem = {
  icon: "store" | "globe" | "smartphone" | "headphones" | "help" | "clipboard";
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    icon: "store",
    title: "Shopify Store",
    description:
      "Custom Shopify store development with unique features and optimized performance.",
  },
  {
    icon: "globe",
    title: "WordPress Website",
    description:
      "Professional WordPress websites with custom themes and functionality.",
  },
  {
    icon: "smartphone",
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile app development for iOS and Android.",
  },
  {
    icon: "headphones",
    title: "Online Private Tutor",
    description:
      "One-on-one mentoring and guidance for aspiring developers.",
  },
  {
    icon: "help",
    title: "Website Consultation",
    description:
      "Expert advice on web development, SEO, and digital strategy.",
  },
  {
    icon: "clipboard",
    title: "Project Management",
    description:
      "Efficient project management and team coordination services.",
  },
];

export type WorkItem = {
  title: string;
  company: string;
  location: string;
  image: string;
  link: string;
};

export const websites: WorkItem[] = [
  { title: "Oxford Scholastica", company: "Growth Hacker", location: "Canada", image: "/images/work/oxfordscholastica.jpg", link: "https://www.oxfordscholastica.com" },
  { title: "Les FinFinettes", company: "Growth Hacker", location: "Canada", image: "/images/work/lesfinfinettes.jpg", link: "https://www.lesfinfinettes.com/" },
  { title: "Mercer Mackay", company: "Growth Hacker", location: "Canada", image: "/images/work/mercermackay.jpg", link: "https://www.mercermackay.com/" },
  { title: "Caesars Flame", company: "BashFusion", location: "Lebanon", image: "/images/work/caesarsflame.jpg", link: "https://www.caesarsflame.com/" },
  { title: "Silva Science", company: "Growth Hacker", location: "Canada", image: "/images/work/silvascience.jpg", link: "https://www.silvascience.org" },
  { title: "Le Studio N.20", company: "Growth Hacker", location: "Canada", image: "/images/work/lestudiono20.jpg", link: "https://www.lestudiono20.com/" },
  { title: "Go360", company: "Growth Hacker", location: "Canada", image: "/images/work/go360.jpg", link: "https://www.go360canada.com/" },
  { title: "Authentik Securite", company: "Growth Hacker", location: "Canada", image: "/images/work/authenticsecurite.jpg", link: "https://www.authentiksecurite.com/" },
  { title: "Robert Alexander Salon", company: "BashFusion", location: "Lebanon", image: "/images/work/robertalexander.jpg", link: "https://www.robertalexandersalon.com/" },
  { title: "RIIEQ", company: "Growth Hacker", location: "Canada", image: "/images/work/riieq.jpg", link: "https://www.riieq.ca/" },
  { title: "BulletVPN", company: "Securealm", location: "Lebanon", image: "/images/work/bulletvpn.jpg", link: "https://www.bulletvpn.com/" },
  { title: "Verger Du Flanc Nord", company: "Growth Hacker", location: "Canada", image: "/images/work/flancnord.jpg", link: "https://www.vergerduflancnord.com" },
  { title: "Green Mount Recycling", company: "BashFusion", location: "Lebanon", image: "/images/work/greenmountrecycling.jpg", link: "https://www.greenmountrecycling.com/" },
  { title: "Wasted Treasures", company: "BashFusion", location: "Lebanon", image: "/images/work/wastedtreasures.jpg", link: "https://www.wastedtreasures.org/" },
  { title: "Learnopolis", company: "Growth Hacker", location: "Canada", image: "/images/work/learnopolis.jpg", link: "https://www.learnopolis-institute.com/" },
  { title: "Plan B Concept", company: "BashFusion", location: "Lebanon", image: "/images/work/planb.jpg", link: "http://pbc-lb.com/" },
  { title: "E3 Electricite", company: "Growth Hacker", location: "Canada", image: "/images/work/e3electricite.jpg", link: "https://www.e3electricite.ca/" },
  { title: "Filco LB", company: "BashFusion", location: "Lebanon", image: "/images/work/filco.jpg", link: "https://www.filco-lb.com/" },
  { title: "SIS Lebanon", company: "Growth Hacker", location: "Canada", image: "/images/work/sislebanon.jpg", link: "https://www.sis-lebanon.com/" },
  { title: "Khatib Law Firm", company: "BashFusion", location: "Lebanon", image: "/images/work/khatiblawfirm.jpg", link: "https://www.khatiblegal.com/" },
  { title: "Unique Coaching", company: "Growth Hacker", location: "Canada", image: "/images/work/uniquecoaching.jpg", link: "https://www.uniquecoaching.ca/" },
  { title: "Déménagement Will Go", company: "Growth Hacker", location: "Canada", image: "/images/work/willgo.jpg", link: "https://www.demenagementwillgo.com/" },
  { title: "Paleolib", company: "BashFusion", location: "Lebanon", image: "/images/work/paleolib.jpg", link: "https://www.paleolib.com/" },
];

export const stores: WorkItem[] = [
  { title: "SohatiCare", company: "Parallel Holdings", location: "Egypt", image: "/images/stores/sohati.jpg", link: "https://www.eg.sohaticare.com/" },
  { title: "Junior Kids", company: "Growth Hacker", location: "Canada", image: "/images/stores/juniorkids.jpg", link: "https://www.juniorkids.ca/" },
  { title: "Chapter One", company: "BashFusion", location: "Lebanon", image: "/images/stores/chapterone.jpg", link: "https://www.chapteroneonline.com/" },
  { title: "LooliaCloset", company: "Parallel Holdings", location: "Egypt", image: "/images/stores/loolia.jpg", link: "https://www.eg.looliacloset.com/" },
  { title: "Naturesage", company: "Growth Hacker", location: "Canada", image: "/images/stores/naturesage.jpg", link: "https://www.naturesageomega3.com/" },
  { title: "Jeux Mania", company: "Growth Hacker", location: "Canada", image: "/images/stores/jeuxmania.jpg", link: "https://www.jeux-mania.ca/" },
  { title: "Verb Products", company: "Growth Hacker", location: "Canada", image: "/images/stores/verb.jpg", link: "https://www.verbproducts.com" },
  { title: "Noah Bissi", company: "Growth Hacker", location: "Canada", image: "/images/stores/noahbissi.jpg", link: "https://www.noahbissi.com/" },
  { title: "Simplement Kosy", company: "Growth Hacker", location: "Canada", image: "/images/stores/kosy.jpg", link: "https://www.simplementkosy.ca/" },
  { title: "Pinecone Row", company: "BashFusion", location: "Lebanon", image: "/images/stores/pineconerow.jpg", link: "https://www.pineconerow.com/" },
  { title: "Mark Lumber", company: "Growth Hacker", location: "Canada", image: "/images/stores/marklumber.jpg", link: "https://www.marklumber.com/" },
  { title: "Boutique SP", company: "Growth Hacker", location: "Canada", image: "/images/stores/boutiquesp.jpg", link: "https://www.sexxxplus.com/" },
  { title: "Vers L'avenir", company: "Growth Hacker", location: "Canada", image: "/images/stores/verslavenir.jpg", link: "https://www.verslavenir.net/" },
  { title: "BimOo", company: "Growth Hacker", location: "Canada", image: "/images/stores/bimoo.jpg", link: "https://www.bimoo.ca/" },
  { title: "Party Ô Max", company: "Growth Hacker", location: "Canada", image: "/images/stores/partyomax.jpg", link: "https://www.partyomax.com/" },
  { title: "V-Mania", company: "Growth Hacker", location: "Canada", image: "/images/stores/vmania.jpg", link: "https://www.vapeshopmania.ca/" },
  { title: "Vignoble Des Coteaux Artisans", company: "Growth Hacker", location: "Canada", image: "/images/stores/vignoble.jpg", link: "https://www.coteaudesartisans.com/" },
  { title: "Clinique Odyssey", company: "Growth Hacker", location: "Canada", image: "/images/stores/cliniqueodyssey.jpg", link: "https://www.cliniqueodyssey.com/" },
  { title: "CapsulCase", company: "Growth Hacker", location: "Canada", image: "/images/stores/capsulcase.jpg", link: "https://www.capsulcase.com/" },
  { title: "Gayane Avetisyan", company: "Growth Hacker", location: "Canada", image: "/images/stores/gayane.jpg", link: "https://www.gayaneavetisyan.ca/" },
  { title: "Centre Du Moteur Granby", company: "Growth Hacker", location: "Canada", image: "/images/stores/cmeg.jpg", link: "https://www.cmeg.ca/" },
  { title: "Boujee Life", company: "BashFusion", location: "UAE", image: "/images/stores/boujeelife.jpg", link: "https://www.boujeelife.ae/" },
];

export const contact = {
  heading: "Let's Build Something Great",
  subheading:
    "Have a project in mind, need a Shopify app built, or want to manage your store better? Let's talk.",
  // Formspree form ID — used via the official @formspree/react `useForm` hook in Contact.tsx.
  formspreeId: "xgawgjgk",
};
