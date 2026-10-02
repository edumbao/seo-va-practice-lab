type DeliverableStepProps = {
  onBack: () => void;
  onContinue: () => void;
};

const suppliedFields = [
  {
    name: "Keyword",
    description:
      "The search query you will review and classify.",
  },
  {
    name: "Search Volume",
    description:
      "Simulated monthly search demand for the practice keyword.",
  },
  {
    name: "Keyword Difficulty",
    description:
      "A simulated difficulty score for comparing the practice keywords.",
  },
  {
    name: "CPC",
    description:
      "A simulated cost-per-click value included as an additional research signal.",
  },
];

const learnerFields = [
  {
    name: "Search Intent",
    description:
      "Choose the likely searcher goal: Informational, Commercial, Transactional, or Navigational.",
  },
  {
    name: "Keyword Group",
    description:
      "Organize the keyword into the topic group that best fits its subject and potential content role.",
  },
  {
    name: "Priority",
    description:
      "Set a High, Medium, or Low research priority after considering more than search volume alone.",
  },
  {
    name: "Reasoning / Notes",
    description:
      "Briefly explain the thinking behind your classification or priority so another team member can follow your decision.",
  },
];

export default function DeliverableStep({
  onBack,
  onContinue,
}: DeliverableStepProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          2
        </span>

        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
          Deliverable
        </p>
      </div>

      <h2 className="mt-6 text-3xl font-bold tracking-tight">
        Know what you need to produce
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        Your finished assignment will be a keyword research sheet. The
        keyword and simulated SEO metrics are already supplied. Your job is
        to add the classifications and reasoning that require human review.
      </p>

      <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
          Assignment deliverable
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Keyword Research Sheet
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          A structured sheet containing supplied keyword metrics alongside
          your search intent, topic grouping, research priority, and
          reasoning for each keyword.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Already supplied
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Keyword data
              </h3>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Given to you
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            You do not need to collect or calculate these fields during
            this practice assignment.
          </p>

          <div className="mt-6 space-y-4">
            {suppliedFields.map((field) => (
              <div
                key={field.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-emerald-50 px-2 text-[10px] font-bold text-emerald-700">
                    OK
                  </span>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {field.name}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {field.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
            <p className="text-sm font-semibold text-amber-950">
              Practice metrics only
            </p>

            <p className="mt-1 text-sm leading-6 text-amber-900/80">
              Search Volume, Keyword Difficulty, and CPC are fictional
              values created for this assignment. They are not current
              data from an SEO platform.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                Your work
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Analysis fields
              </h3>
            </div>

            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              You complete
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Complete these four fields for every keyword during the
            analysis step.
          </p>

          <div className="mt-6 space-y-4">
            {learnerFields.map((field) => (
              <div
                key={field.name}
                className="rounded-xl border border-blue-100 bg-white p-4"
              >
                <p className="font-semibold text-slate-900">
                  {field.name}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {field.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold">
          Example of a completed row
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          This example shows how supplied keyword data and your analysis
          will appear together in the finished research sheet.
        </p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-4 font-semibold">
                  Keyword
                </th>
                <th className="px-4 py-4 font-semibold">
                  Volume
                </th>
                <th className="px-4 py-4 font-semibold">
                  Difficulty
                </th>
                <th className="px-4 py-4 font-semibold">
                  CPC
                </th>
                <th className="px-4 py-4 font-semibold">
                  Intent
                </th>
                <th className="px-4 py-4 font-semibold">
                  Group
                </th>
                <th className="px-4 py-4 font-semibold">
                  Priority
                </th>
                <th className="px-4 py-4 font-semibold">
                  Reasoning
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-slate-200 bg-white align-top">
                <td className="px-4 py-5 font-semibold">
                  what is crm software
                </td>
                <td className="px-4 py-5">3,600</td>
                <td className="px-4 py-5">54</td>
                <td className="px-4 py-5">$8.20</td>
                <td className="px-4 py-5">
                  Informational
                </td>
                <td className="px-4 py-5">
                  CRM Basics
                </td>
                <td className="px-4 py-5">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Medium
                  </span>
                </td>
                <td className="px-4 py-5 leading-6">
                  The searcher appears to be learning what CRM software
                  is. It is relevant to the product but broader than a
                  solution-focused query.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          This is one reasonable example, not an answer key. Some keywords
          can support more than one interpretation when the reasoning is
          clear.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          Before you continue
        </p>

        <h3 className="mt-2 text-lg font-bold">
          Do not prioritize keywords by search volume alone.
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Consider likely search intent, relevance to FlowDesk CRM and its
          audience, competition, search demand, and how the keyword could
          contribute to a content plan. When a classification is not
          obvious, make a reasonable choice and explain your thinking.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Back to client brief
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue to practice data
        </button>
      </div>
    </div>
  );
}