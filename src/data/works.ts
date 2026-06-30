export type Work = {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  award?: string;
  nda?: boolean;
};

export const works: Work[] = [
  {
    id: "porsche",
    title: "Porsche Cayenne Black Edition",
    client: "Porsche",
    year: "2025",
    role: "Frontend Developer — Freelance",
    description:
      "A cinematic launch experience for the Cayenne Black Edition. I owned the full styling and animation layer, crafting scroll-driven motion and refined micro-interactions to bring Porsche's design language to the web.",
    tags: ["Animation", "GSAP", "Brand", "Freelance"],
    link: "https://cayenneblackedition.com/porsche-co/",
  },
  {
    id: "amazon",
    title: "Amazon",
    client: "Amazon",
    year: "2023 — Present",
    role: "Frontend Engineer — Embedded (Staff Augmentation)",
    description:
      "Embedded as a Yellow Badge frontend engineer on a large-scale production platform. I contributed across the full lifecycle — from implementation to release — collaborating daily with frontend and backend teams. The linked page is one section of a much larger system.",
    tags: ["React", "Large-scale", "Production", "Cross-team"],
    link: "https://sustainabilityexchange.amazon.com/credits/",
  },
  {
    id: "intuit",
    title: "Prosperity Quest",
    client: "Intuit for Education",
    year: "2022",
    role: "Frontend Developer @ Monks",
    description:
      "An immersive educational game built around advanced animations and interactive storytelling. As part of the frontend team, I contributed to building its interactive experiences. Awarded on FWA.",
    tags: ["WebGL", "GSAP", "Immersive"],
    award: "FWA — Site of the Day",
    link: "https://thefwa.com/cases/intuit-for-education-prosperity-quest-game",
  },
];
