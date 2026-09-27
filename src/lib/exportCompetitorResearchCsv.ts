export type ExportBusiness = {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  state: string;
  website: string;
  phone: string;
  rating: number;
  review_count: number;
  business_status: string;
};

export type ExportResearchEntry = {
  servicesObserved: string;
  websiteObservation: string;
  seoObservation: string;
  researchNotes: string;
  researchStatus: "not-started" | "needs-review" | "complete";
};

type ExportCompetitorResearchCsvArgs = {
  businesses: ExportBusiness[];
  researchEntries: Record<string, ExportResearchEntry>;
};

const CSV_HEADERS = [
  "Business Name",
  "Category",
  "Address",
  "City",
  "State",
  "Phone",
  "Website",
  "Rating",
  "Review Count",
  "Business Status",
  "Services Observed",
  "Website Observation",
  "SEO Observation",
  "Research Notes",
  "Research Status",
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

export function createCompetitorResearchCsv({
  businesses,
  researchEntries,
}: ExportCompetitorResearchCsvArgs) {
  const rows = businesses.map((business) => {
    const research = researchEntries[business.id];

    return [
      business.name,
      business.category,
      business.address,
      business.city,
      business.state,
      business.phone,
      business.website,
      business.rating,
      business.review_count,
      business.business_status,
      research?.servicesObserved ?? "",
      research?.websiteObservation ?? "",
      research?.seoObservation ?? "",
      research?.researchNotes ?? "",
      research?.researchStatus ?? "not-started",
    ];
  });

  return [
    CSV_HEADERS.map(escapeCsvValue).join(","),
    ...rows.map((row) =>
      row.map(escapeCsvValue).join(","),
    ),
  ].join("\r\n");
}

export function downloadCompetitorResearchCsv(
  args: ExportCompetitorResearchCsvArgs,
) {
  const csv = createCompetitorResearchCsv(args);

  const blob = new Blob(
    ["\uFEFF", csv],
    {
      type: "text/csv;charset=utf-8;",
    },
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "local-seo-competitor-research.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}