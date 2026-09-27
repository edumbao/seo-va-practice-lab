type AssignmentCompleteProps = {
  onReturnToReview: () => void;
  onStartOver: () => void;
};

export default function AssignmentComplete({
  onReturnToReview,
  onStartOver,
}: AssignmentCompleteProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-700">
          DONE
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
          Assignment Complete
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Local SEO Competitor Research completed
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          You completed the practice workflow for researching five local
          competitors, recording SEO observations, reviewing your work, and
          preparing a structured research deliverable.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          What you practiced
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Reading a simulated client brief",
            "Reviewing supplied business data",
            "Inspecting competitor website information",
            "Recording website observations",
            "Writing SEO observations",
            "Organizing research notes",
            "Checking required research fields",
            "Reviewing a finished research sheet",
            "Exporting research as CSV",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <p className="font-semibold text-blue-950">
          Your CSV is the practice deliverable from this assignment.
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-900/80">
          This exercise uses fictional practice businesses and simulated
          website information. Treat the exported research sheet as a learning
          artifact, not as paid client work or verified real-world competitor
          research.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <p className="font-semibold text-amber-950">
          Starting over will erase your saved research for this assignment.
        </p>

        <p className="mt-2 text-sm leading-6 text-amber-900/80">
          Export or keep any research you want before starting again. Your
          practice dataset will remain available, but your browser-saved
          answers will be cleared.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onReturnToReview}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Return to review
        </button>

        <button
          type="button"
          onClick={onStartOver}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-red-200 bg-white px-6 py-3 font-semibold text-red-700 transition hover:bg-red-50"
        >
          Start assignment over
        </button>
      </div>
    </div>
  );
}