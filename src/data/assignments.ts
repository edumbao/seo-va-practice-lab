export type AssignmentStatus = "available" | "coming-soon";

export type Assignment = {
  id: string;
  title: string;
  track: string;
  difficulty: string;
  estimatedTime: string;
  shortDescription: string;
  assignmentDescription: string;
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
    assignmentDescription:
      "Practice researching competing local businesses and organizing useful observations for an SEO team.",
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
  {
    id: "keyword-research-search-intent",
    title: "Keyword Research + Search Intent",
    track: "Keyword Research",
    difficulty: "Beginner",
    estimatedTime: "~40 minutes",
    shortDescription:
      "Review a supplied keyword dataset, classify search intent, group related terms, and explain which keywords deserve priority.",
    assignmentDescription:
      "Practice reviewing keyword data, identifying search intent, organizing related keywords, and explaining SEO priorities for a SaaS scenario.",
    description:
      "Work from a simulated SaaS SEO brief, review supplied keyword data, classify intent, organize keywords into useful groups, and explain your prioritization decisions.",
    deliverable: "Keyword Research Sheet",
    href: "/assignments/keyword-research-search-intent",
    status: "coming-soon",
    skills: [
      "Search intent classification",
      "Keyword grouping",
      "Keyword prioritization",
      "SEO reasoning",
    ],
  },
];

export const featuredAssignment = assignments[0];



export function getAssignmentById(id: string): Assignment {
  const assignment = assignments.find((item) => item.id === id);

  if (!assignment) {
    throw new Error(`Assignment metadata not found for id: ${id}`);
  }

  return assignment;
}

