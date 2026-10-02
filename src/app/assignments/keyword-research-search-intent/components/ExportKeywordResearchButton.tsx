"use client";

import {
  downloadKeywordResearchCsv,
  type ExportKeyword,
} from "@/lib/exportKeywordResearchCsv";
import {
  isKeywordAnalysisComplete,
  type KeywordAnalysisEntry,
} from "../keywordAnalysis";

type ExportKeywordResearchButtonProps = {
  keywords: ExportKeyword[];
  analysisEntries: Record<
    string,
    KeywordAnalysisEntry
  >;
};

export default function ExportKeywordResearchButton({
  keywords,
  analysisEntries,
}: ExportKeywordResearchButtonProps) {
  const canExport = keywords.every((keyword) =>
    isKeywordAnalysisComplete(
      analysisEntries[keyword.id],
    ),
  );

  const handleExport = () => {
    if (!canExport) {
      return;
    }

    downloadKeywordResearchCsv({
      keywords,
      analysisEntries,
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
        Export keyword research sheet
      </button>

      {!canExport && (
        <p className="max-w-sm text-right text-xs leading-5 text-slate-500">
          Complete Search Intent, Keyword Group, Priority, and
          Reasoning / Notes for all {keywords.length} keywords before
          exporting.
        </p>
      )}
    </div>
  );
}