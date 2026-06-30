export type Job = {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
};

export const experience: Job[] = [
  {
    id: "amazon",
    period: "2023 — Present",
    company: "Amazon (via Staff Augmentation)",
    role: "Frontend Engineer — Embedded",
    description:
      "Embedded as a Yellow Badge frontend engineer, fully integrated with internal teams, systems, and processes. Collaborating daily with frontend and backend engineers on large-scale, production-grade solutions.",
  },
  {
    id: "monks",
    period: "2021 — 2023",
    company: "Monks / Jam3",
    role: "Frontend Developer — Immersive Web",
    description:
      "Core part of the Immersive Web team, building standout digital projects for global brands. Work received international recognition on FWA and Awwwards. Sharpened my craft in advanced animations, immersive interactions, and performant UI at scale.",
  },
  {
    id: "freelance",
    period: "Ongoing",
    company: "Freelance",
    role: "Frontend Developer",
    description:
      "Selected high-end projects where I own the styling and animation layer end-to-end — including the Porsche Cayenne Black Edition launch experience.",
  },
];
