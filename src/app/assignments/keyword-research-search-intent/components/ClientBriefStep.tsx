type ClientBriefStepProps = {
  onContinue: () => void;
};

const tasks = [
  "Review the supplied keyword dataset and its simulated SEO metrics.",
  "Classify the likely search intent behind each keyword.",
  "Organize related keywords into useful topic groups.",
  "Assign a practical research priority to each keyword.",
  "Explain your reasoning so another member of the SEO team can understand your decisions.",
];

export default function ClientBriefStep({
  onContinue,
}: ClientBriefStepProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          1
        </span>

        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
          Client Brief
        </p>
      </div>

      <h2 className="mt-6 text-3xl font-bold tracking-tight">
        Understand the assignment
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        Before reviewing the keywords, understand the fictional company,
        its audience, and what the SEO team needs from your research.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Client
            </p>
            <p className="mt-2 font-semibold">FlowDesk CRM</p>
            <p className="mt-1 text-sm text-slate-500">
              Fictional SaaS practice client
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Your role
            </p>
            <p className="mt-2 font-semibold">SEO Research Assistant</p>
            <p className="mt-1 text-sm text-slate-500">
              Simulated VA assignment
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Product
            </p>
            <p className="mt-2 font-semibold">
              Simple CRM software
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Lead, contact, and sales follow-up management
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Target audience
            </p>
            <p className="mt-2 font-semibold">
              Small service businesses
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Agencies, consultants, and service teams
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          Client request
        </p>

        <div className="mt-3 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
          <p className="leading-7 text-slate-700">
            We&apos;re preparing a content plan for FlowDesk CRM and have
            collected an initial list of keywords related to CRM software,
            lead management, customer management, and sales follow-up.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Review the supplied keyword data and organize it into a
            research sheet that the SEO team can use during content
            planning. Identify likely search intent, group related
            keywords, set a practical research priority, and explain your
            reasoning.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold">Your task</h3>

        <div className="mt-4 grid gap-3">
          {tasks.map((task, index) => (
            <div
              key={task}
              className="flex gap-4 rounded-xl border border-slate-200 p-4"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                {index + 1}
              </div>

              <p className="text-sm leading-6 text-slate-700">
                {task}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5 ring-1 ring-blue-100">
        <p className="font-semibold text-blue-950">
          Your role is to organize the research, not create the final SEO strategy.
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-900/80">
          Do not rank keywords by search volume alone. Consider likely
          search intent, relevance to the fictional product and audience,
          competition, and how the keyword could support a content plan.
        </p>
      </div>

      <div className="mt-5 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
        <p className="font-semibold text-amber-950">
          Remember: this is a practice assignment.
        </p>

        <p className="mt-2 text-sm leading-6 text-amber-900/80">
          FlowDesk CRM is fictional, and the keyword metrics used in this
          assignment are simulated practice data. They are not current
          values from an SEO platform. The goal is to practice the
          workflow and create a simulated work sample.
        </p>
      </div>

      <div className="mt-10 flex justify-end border-t border-slate-200 pt-7">
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue to deliverable
        </button>
      </div>
    </div>
  );
}
