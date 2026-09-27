type DeliverableStepProps = {
  onBack: () => void;
  onContinue: () => void;
};

const suppliedFields = [
  "Business name",
  "Business category",
  "Address",
  "Website",
  "Phone",
  "Rating",
  "Review count",
];

const learnerFields = [
  {
    name: "Services observed",
    description:
      "Record the main services or topics the competitor emphasizes on its website.",
  },
  {
    name: "Website observation",
    description:
      "Write one useful observation about what you found while reviewing the website.",
  },
  {
    name: "SEO observation",
    description:
      "Record an SEO-related observation that may be useful to the team.",
  },
  {
    name: "Research notes",
    description:
      "Add supporting details another team member may need when reviewing your work.",
  },
  {
    name: "Research status",
    description:
      "Mark the business as complete or needing further review.",
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
        Your finished assignment will be a competitor research sheet. Some
        business information is supplied to you. Your job is to add the
        research and observations that require human review.
      </p>

      <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
          Assignment deliverable
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Local SEO Competitor Research Sheet
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          A structured research sheet containing supplied business information
          alongside the observations you add during the assignment.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Already supplied
              </p>

              <h3 className="mt-2 text-xl font-bold">Business data</h3>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Given to you
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            You do not need to manually collect these fields in this practice
            assignment.
          </p>

          <ul className="mt-6 space-y-3">
            {suppliedFields.map((field) => (
              <li
                key={field}
                className="flex items-center gap-3 text-sm text-slate-700"
              >
                <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-emerald-50 px-2 text-[10px] font-bold text-emerald-700">
                  OK
                </span>

                {field}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                Your work
              </p>

              <h3 className="mt-2 text-xl font-bold">Research fields</h3>
            </div>

            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              You complete
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            These fields are completed while you research each competitor.
          </p>

          <div className="mt-6 space-y-4">
            {learnerFields.map((field) => (
              <div
                key={field.name}
                className="rounded-xl border border-blue-100 bg-white p-4"
              >
                <p className="font-semibold text-slate-900">{field.name}</p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {field.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold">Example of a completed row</h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          This example shows how supplied business data and your research will
          appear together in the finished deliverable.
        </p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-4 font-semibold">Business</th>
                <th className="px-4 py-4 font-semibold">Rating</th>
                <th className="px-4 py-4 font-semibold">Reviews</th>
                <th className="px-4 py-4 font-semibold">Website</th>
                <th className="px-4 py-4 font-semibold">
                  Services observed
                </th>
                <th className="px-4 py-4 font-semibold">
                  SEO observation
                </th>
                <th className="px-4 py-4 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-slate-200 bg-white">
                <td className="px-4 py-5 font-semibold">Example Dental</td>
                <td className="px-4 py-5">4.6</td>
                <td className="px-4 py-5">187</td>
                <td className="px-4 py-5">Available</td>
                <td className="px-4 py-5">
                  Preventive care, cosmetic dentistry
                </td>
                <td className="px-4 py-5">
                  Service pages are easy to find, but the homepage gives
                  limited information about the areas served.
                </td>
                <td className="px-4 py-5">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Complete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          Example data is shown only to explain the expected format. You will
          complete your own observations during the research step.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          Before you continue
        </p>

        <h3 className="mt-2 text-lg font-bold">
          Your job is to add the research, not repeat the supplied data.
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          The practice dataset gives you basic business information. The useful
          part of the assignment is reviewing each competitor and recording
          observations another member of the SEO team can understand.
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