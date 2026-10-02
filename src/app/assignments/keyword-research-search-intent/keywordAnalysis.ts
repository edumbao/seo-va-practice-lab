export const searchIntentOptions = [
  "Informational",
  "Commercial",
  "Transactional",
  "Navigational",
] as const;

export const keywordGroupOptions = [
  "CRM Basics",
  "Small Business CRM",
  "Lead Management",
  "Customer Management",
  "Sales Follow-Up",
  "Industry / Audience",
  "Other",
] as const;

export const priorityOptions = [
  "High",
  "Medium",
  "Low",
] as const;

export type SearchIntent =
  (typeof searchIntentOptions)[number];

export type KeywordGroup =
  (typeof keywordGroupOptions)[number];

export type KeywordPriority =
  (typeof priorityOptions)[number];

export type KeywordAnalysisEntry = {
  searchIntent: SearchIntent | "";
  keywordGroup: KeywordGroup | "";
  priority: KeywordPriority | "";
  reasoning: string;
};

export function createEmptyKeywordAnalysisEntry(): KeywordAnalysisEntry {
  return {
    searchIntent: "",
    keywordGroup: "",
    priority: "",
    reasoning: "",
  };
}

export function isKeywordAnalysisComplete(
  entry?: KeywordAnalysisEntry,
): boolean {
  if (!entry) {
    return false;
  }

  return (
    entry.searchIntent !== "" &&
    entry.keywordGroup !== "" &&
    entry.priority !== "" &&
    entry.reasoning.trim().length > 0
  );
}