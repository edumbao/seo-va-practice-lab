export type ExportKeyword = {
  id: string;
  keyword: string;
  search_volume: number;
  difficulty: number;
  cpc: number;
};

export type ExportKeywordAnalysisEntry = {
  searchIntent: string;
  keywordGroup: string;
  priority: string;
  reasoning: string;
};

type ExportKeywordResearchCsvArgs = {
  keywords: ExportKeyword[];
  analysisEntries: Record<
    string,
    ExportKeywordAnalysisEntry
  >;
};

const CSV_HEADERS = [
  "keyword",
  "search_volume",
  "keyword_difficulty",
  "cpc",
  "search_intent",
  "keyword_group",
  "priority",
  "reasoning",
];

function escapeCsvValue(value: string | number) {
  const text = String(value ?? "");

  if (
    text.includes(",") ||
    text.includes('"') ||
    text.includes("\n") ||
    text.includes("\r")
  ) {
    return `"${text.replace(/"/g, '""')}"`;
  }

  return text;
}

export function createKeywordResearchCsv({
  keywords,
  analysisEntries,
}: ExportKeywordResearchCsvArgs) {
  const rows = keywords.map((keyword) => {
    const analysis =
      analysisEntries[keyword.id];

    return [
      keyword.keyword,
      keyword.search_volume,
      keyword.difficulty,
      keyword.cpc.toFixed(2),
      analysis?.searchIntent ?? "",
      analysis?.keywordGroup ?? "",
      analysis?.priority ?? "",
      analysis?.reasoning ?? "",
    ];
  });

  return [
    CSV_HEADERS.map(escapeCsvValue).join(","),
    ...rows.map((row) =>
      row.map(escapeCsvValue).join(","),
    ),
  ].join("\r\n");
}

export function downloadKeywordResearchCsv(
  args: ExportKeywordResearchCsvArgs,
) {
  const csv = createKeywordResearchCsv(args);

  const blob = new Blob(
    ["\uFEFF", csv],
    {
      type: "text/csv;charset=utf-8;",
    },
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "keyword-research-search-intent.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}