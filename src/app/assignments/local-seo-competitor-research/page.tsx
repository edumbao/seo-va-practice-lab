import Link from "next/link";

const assignmentSteps = [
  {
    number: "01",
    title: "Client brief",
    description: "Understand the client, market, and research request.",
    status: "current",
  },
  {
    number: "02",
    title: "Deliverable",
    description: "Review what information you need to produce.",
    status: "upcoming",
  },
  {
    number: "03",
    title: "Practice data",
    description: "Review the businesses supplied for the assignment.",
    status: "upcoming",
  },
  {
    number: "04",
    title: "Research",
    description: "Investigate each competitor and record your observations.",
    status: "upcoming",
  },
  {
    number: "05",
    title: "Review",
    description: "Check your research before finishing the assignment.",
    status: "upcoming",
  },
];

export default function LocalSeoCompetitorResearchPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              S
            </div>

            <div>
              <p className="font-semibold tracking-tight">
                SEO VA Practice Lab
              </p>
              <p className="text-xs text-slate-500">
                Practice real workflows
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
          >
            ← Back to assignments
          </Link>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              SEO Research
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              Beginner
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              ~30 minutes
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
            Local SEO Competitor Research
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Practice researching competing local businesses and organizing
            useful observations for an SEO team.
          </p>

          <div className="mt-8 max-w-3xl">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-700">
                Assignment progress
              </span>
              <span className="text-slate-500">Step 1 of 5</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-1/5 rounded-full bg-blue-600" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside>
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Assignment
            </p>

            <div className="mt-5 space-y-2">
              {assignmentSteps.map((step) => {
                const isCurrent = step.status === "current";

                return (
                  <div
                    key={step.number}
                    className={`rounded-xl p-4 ${
                      isCurrent
                        ? "bg-blue-50 ring-1 ring-blue-100"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isCurrent
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            isCurrent
                              ? "text-blue-900"
                              : "text-slate-600"
                          }`}
                        >
                          {step.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <section>
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
              Before starting the research, read the request carefully. In
              client work, understanding what is being asked is part of the
              task.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Client
                  </p>
                  <p className="mt-2 font-semibold">Northstar Dental</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Fictional practice client
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Your role
                  </p>
                  <p className="mt-2 font-semibold">
                    SEO Research Assistant
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Simulated VA assignment
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Industry
                  </p>
                  <p className="mt-2 font-semibold">Dental</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Target market
                  </p>
                  <p className="mt-2 font-semibold">
                    Seattle, Washington
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
                  We&apos;re preparing a local SEO campaign for Northstar
                  Dental and need an initial view of competing dental practices
                  in the Seattle market.
                </p>

                <p className="mt-4 leading-7 text-slate-700">
                  Research the five businesses supplied for this assignment.
                  Review their websites, note the services they emphasize, and
                  record useful observations that could help the SEO team
                  understand the local competitive market.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold">Your task</h3>

              <div className="mt-4 grid gap-3">
                {[
                  "Review all five businesses supplied in the practice dataset.",
                  "Open and review each available business website.",
                  "Identify services or topics the competitor emphasizes.",
                  "Write at least one useful website or SEO observation for each business.",
                  "Organize your findings so another member of the SEO team can understand them.",
                ].map((task, index) => (
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

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="font-semibold text-amber-950">
                Remember: this is a practice assignment.
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-900/80">
                Northstar Dental is fictional. The goal is to practice the
                research workflow and create a simulated work sample, not to
                represent this assignment as paid client experience.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back
              </Link>

              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Continue to deliverable →
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}