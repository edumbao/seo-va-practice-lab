"use client";

import {
  downloadCompetitorResearchCsv,
  type ExportBusiness,
  type ExportResearchEntry,
} from "@/lib/exportCompetitorResearchCsv";

type ExportResearchButtonProps = {
  businesses: ExportBusiness[];
  researchEntries: Record<string, ExportResearchEntry>;
};

function hasRequiredResearch(entry?: ExportResearchEntry) {
  if (!entry) {
    return false;
  }

  return (
    entry.servicesObserved.trim().length > 0 &&
    entry.websiteObservation.trim().length > 0 &&
    entry.seoObservation.trim().length > 0 &&
    entry.researchStatus === "complete"
  );
}

export default function ExportResearchButton({
  businesses,
  researchEntries,
}: ExportResearchButtonProps) {
  const canExport = businesses.every((business) =>
    hasRequiredResearch(researchEntries[business.id]),
  );

  const handleExport = () => {
    if (!canExport) {
      return;
    }

    downloadCompetitorResearchCsv({
      businesses,
      researchEntries,
    });
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={handleExport}
        disabled={!canExport}
        className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${
          canExport
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "cursor-not-allowed bg-slate-200 text-slate-500"
        }`}
      >
        Export research sheet
      </button>

      {!canExport && (
        <p className="max-w-sm text-right text-xs leading-5 text-slate-500">
          Complete the required research for all five competitors before
          exporting.
        </p>
      )}
    </div>
  );
}