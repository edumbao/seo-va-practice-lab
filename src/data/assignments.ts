export type AssignmentStatus = "available" | "coming-soon";

export type Assignment = {
  id: string;
  title: string;
  track: string;
  difficulty: string;
  estimatedTime: string;
  shortDescription: string;
  description: string;
  deliverable: string;
  href: string;
  status: AssignmentStatus;
  skills: string[];
};

export const assignments: Assignment[] = [
  {
    id: "local-seo-competitor-research",
    title: "Local SEO Competitor Research",
    track: "SEO Research",
    difficulty: "Beginner",
    estimatedTime: "~30 minutes",
    shortDescription:
      "Research competing local businesses, review their websites, and organize useful observations for an SEO team.",
    description:
      "Work from a simulated client brief, research five competing local businesses, record useful SEO observations, and organize your findings into a finished research sheet.",
    deliverable: "Competitor Research Sheet",
    href: "/assignments/local-seo-competitor-research",
    status: "available",
    skills: [
      "Local business research",
      "Competitor website review",
      "SEO observation writing",
      "Research organization",
    ],
  },
];

export const featuredAssignment = assignments[0];

