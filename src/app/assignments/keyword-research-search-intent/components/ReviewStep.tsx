import type { PracticeKeyword } from "../AssignmentWorkspace";
import {
  isKeywordAnalysisComplete,
  type KeywordAnalysisEntry,
} from "../keywordAnalysis";
import ExportKeywordResearchButton from "./ExportKeywordResearchButton";

type ReviewStepProps = {
  keywords: PracticeKeyword[];
  analysisEntries: Record<string, KeywordAnalysisEntry>;
  onBack: () => void;
  onEditKeyword: (index: number) => void;
};

export default function ReviewStep({
  keywords,
  analysisEntries,
  onBack,
  onEditKeyword,
}: ReviewStepProps) {
  const completedCount = keywords.filter((keyword) =>
    isKeywordAnalysisComplete(
      analysisEntries[keyword.id],
    ),
  ).length;

  const incompleteCount =
    keywords.length - completedCount;

  const allComplete =
    completedCount === keywords.length;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              5
            </span>

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Review
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight">
            Review your keyword research
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Check your classifications, keyword groups, priorities,
            and reasoning before finishing the assignment.
          </p>
        </div>

        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            allComplete
              ? "bg-emerald-50"
              : "bg-amber-50"
          }`}
        >
          <p
            className={`font-semibold ${
              allComplete
                ? "text-emerald-900"
                : "text-amber-900"
            }`}
          >
            {completedCount} of {keywords.length} complete
          </p>

          <p
            className={`mt-1 ${
              allComplete
                ? "text-emerald-700"
                : "text-amber-700"
            }`}
          >
            {allComplete
              ? "Keyword research ready for export"
              : `${incompleteCount} ${
                  incompleteCount === 1
                    ? "keyword needs"
                    : "keywords need"
                } attention`}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="font-semibold text-blue-950">
          Review your reasoning, not just whether every field is filled.
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-900/80">
          Your classifications are working SEO judgments for this
          fictional scenario. Check whether each choice makes sense for
          the likely searcher goal, FlowDesk CRM, and its target
          audience.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full border-collapse text-left">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Keyword
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Intent
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Group
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Priority
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Status
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {keywords.map((keyword, index) => {
                const analysis =
                  analysisEntries[keyword.id];

                const complete =
                  isKeywordAnalysisComplete(analysis);

                return (
                  <tr
                    key={keyword.id}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <td className="px-4 py-4">
                      <p className="font-semibold text-slate-900">
                        {keyword.keyword}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Volume{" "}
                        {keyword.search_volume.toLocaleString()}{" "}
                        | Difficulty {keyword.difficulty} | CPC $
                        {keyword.cpc.toFixed(2)}
                      </p>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-700">
                      {analysis?.searchIntent || "Not set"}
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-700">
                      {analysis?.keywordGroup || "Not set"}
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-700">
                      {analysis?.priority || "Not set"}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          complete
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {complete
                          ? "Complete"
                          : "Needs attention"}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <button
                        type="button"
                        onClick={() =>
                          onEditKeyword(index)
                        }
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        Edit keyword
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          Final check
        </p>

        <h3 className="mt-2 text-lg font-bold">
          Does your keyword research explain your decisions?
        </h3>

        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
          <li>
            Every keyword has a search intent classification.
          </li>
          <li>
            Related keywords are organized into useful groups.
          </li>
          <li>
            Priorities consider more than search volume alone.
          </li>
          <li>
            Reasoning explains why each decision makes sense.
          </li>
          <li>
            Supplied metrics are treated as fictional practice data.
          </li>
        </ul>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to keyword analysis
          </button>

          <ExportKeywordResearchButton
            keywords={keywords}
            analysisEntries={analysisEntries}
          />
        </div>
      </div>
    </div>
  );
}