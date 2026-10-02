import type { PracticeKeyword } from "../AssignmentWorkspace";

type PracticeDataStepProps = {
  keywords: PracticeKeyword[];
  onBack: () => void;
  onContinue: () => void;
};

const metricGuide = [
  {
    name: "Keyword",
    description:
      "The search query you will classify and organize during the analysis step.",
  },
  {
    name: "Search Volume",
    description:
      "A simulated monthly search-demand signal. Higher volume does not automatically mean higher priority.",
  },
  {
    name: "Keyword Difficulty",
    description:
      "A simulated comparative difficulty signal for this practice dataset.",
  },
  {
    name: "CPC",
    description:
      "A simulated cost-per-click value that can provide additional context about the keyword.",
  },
];

export default function PracticeDataStep({
  keywords,
  onBack,
  onContinue,
}: PracticeDataStepProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          3
        </span>

        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
          Practice Data
        </p>
      </div>

      <h2 className="mt-6 text-3xl font-bold tracking-tight">
        Review the keyword dataset
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        The SEO team has supplied an initial list of keywords and practice
        metrics. Review the dataset before you begin classifying search
        intent, grouping related terms, and setting research priorities.
      </p>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="font-semibold text-blue-950">
          Your analysis has not started yet.
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-900/80">
          Use this step to become familiar with the keywords and compare
          the supplied metrics. You will add Search Intent, Keyword Group,
          Priority, and Reasoning / Notes in the next step.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          Metric guide
        </p>

        <h3 className="mt-2 text-xl font-bold">
          Understand the supplied fields
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {metricGuide.map((metric) => (
            <div
              key={metric.name}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
            >
              <p className="font-semibold text-slate-900">
                {metric.name}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            Practice dataset
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {keywords.length} keywords
          </h3>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Data ready
        </span>
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="w-16 px-4 py-4 font-semibold">
                #
              </th>

              <th className="px-4 py-4 font-semibold">
                Keyword
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                Search Volume
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                Difficulty
              </th>

              <th className="px-4 py-4 text-right font-semibold">
                CPC
              </th>
            </tr>
          </thead>

          <tbody>
            {keywords.map((keyword, index) => (
              <tr
                key={keyword.id}
                className="border-t border-slate-200 bg-white"
              >
                <td className="px-4 py-4 text-slate-400">
                  {index + 1}
                </td>

                <td className="px-4 py-4 font-semibold text-slate-900">
                  {keyword.keyword}
                </td>

                <td className="px-4 py-4 text-right tabular-nums text-slate-700">
                  {keyword.search_volume.toLocaleString()}
                </td>

                <td className="px-4 py-4 text-right tabular-nums text-slate-700">
                  {keyword.difficulty}
                </td>

                <td className="px-4 py-4 text-right tabular-nums text-slate-700">
                  ${keyword.cpc.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        Search Volume, Keyword Difficulty, and CPC are fictional practice
        metrics created for this assignment. They are not current values
        from an SEO platform.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          What to notice
        </p>

        <h3 className="mt-2 text-lg font-bold">
          Look for patterns before making decisions.
        </h3>

        <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
          <p>
            Some keywords describe broad CRM topics, while others focus on
            small businesses, lead management, customer management, sales
            follow-up, or a specific audience.
          </p>

          <p>
            The highest-volume keyword may not be the most useful keyword
            for FlowDesk CRM. Relevance, likely search intent, competition,
            and the searcher's goal also matter.
          </p>

          <p>
            Similar-looking keywords can still represent different search
            goals. In the next step, make a reasonable classification and
            explain your thinking when the answer is not obvious.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Back to deliverable
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue to keyword analysis
        </button>
      </div>
    </div>
  );
}