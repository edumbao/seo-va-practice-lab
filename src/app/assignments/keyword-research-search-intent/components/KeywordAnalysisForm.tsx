import {
  keywordGroupOptions,
  priorityOptions,
  searchIntentOptions,
  type KeywordAnalysisEntry,
} from "../keywordAnalysis";

type KeywordAnalysisFormProps = {
  keywordId: string;
  analysis: KeywordAnalysisEntry;
  onAnalysisChange: (
    keywordId: string,
    field: keyof KeywordAnalysisEntry,
    value: string,
  ) => void;
};

export default function KeywordAnalysisForm({
  keywordId,
  analysis,
  onAnalysisChange,
}: KeywordAnalysisFormProps) {
  const updateField = (
    field: keyof KeywordAnalysisEntry,
    value: string,
  ) => {
    onAnalysisChange(keywordId, field, value);
  };

  return (
    <section className="rounded-2xl border border-slate-200 p-6 sm:p-7">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
          Your analysis
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Classify this keyword
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Use the supplied keyword and practice metrics as context, then
          record your own classification and reasoning.
        </p>
      </div>

      <div className="mt-7 space-y-6">
        <label className="block">
          <span className="font-semibold text-slate-900">
            Search Intent
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            What is the searcher most likely trying to accomplish?
          </span>

          <select
            value={analysis.searchIntent}
            onChange={(event) =>
              updateField("searchIntent", event.target.value)
            }
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select search intent</option>

            {searchIntentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="mt-3 grid gap-2 text-xs leading-5 text-slate-500 sm:grid-cols-2">
            <p>
              <strong className="text-slate-700">
                Informational:
              </strong>{" "}
              primarily wants to learn or understand.
            </p>

            <p>
              <strong className="text-slate-700">
                Commercial:
              </strong>{" "}
              researching or comparing possible solutions.
            </p>

            <p>
              <strong className="text-slate-700">
                Transactional:
              </strong>{" "}
              appears ready to take an action such as signing up or buying.
            </p>

            <p>
              <strong className="text-slate-700">
                Navigational:
              </strong>{" "}
              trying to reach a particular brand, product, or website.
            </p>
          </div>
        </label>

        <label className="block">
          <span className="font-semibold text-slate-900">
            Keyword Group
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            Which topic group best organizes this keyword for the
            practice content plan?
          </span>

          <select
            value={analysis.keywordGroup}
            onChange={(event) =>
              updateField("keywordGroup", event.target.value)
            }
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select keyword group</option>

            {keywordGroupOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="font-semibold text-slate-900">
            Priority
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            Set a practical research priority after considering relevance,
            likely intent, competition, and search demand.
          </span>

          <select
            value={analysis.priority}
            onChange={(event) =>
              updateField("priority", event.target.value)
            }
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select priority</option>

            {priorityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Do not assign priority from search volume alone.
          </p>
        </label>

        <label className="block">
          <span className="font-semibold text-slate-900">
            Reasoning / Notes
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            Explain why you chose this intent, group, or priority.
            Mention relevance, competition, search demand, or the likely
            searcher goal when useful.
          </span>

          <textarea
            value={analysis.reasoning}
            onChange={(event) =>
              updateField("reasoning", event.target.value)
            }
            rows={5}
            className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Explain your reasoning so another member of the SEO team can understand your decision."
          />
        </label>
      </div>

      <div className="mt-7 rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-900">
          A classification can require judgment.
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Some keywords can reasonably support more than one
          interpretation. Choose the option you think fits best and use
          your reasoning to explain the decision.
        </p>
      </div>
    </section>
  );
}