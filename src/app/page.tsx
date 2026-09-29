import AssignmentCard from "./components/AssignmentCard";
import { featuredAssignment } from "@/data/assignments";
const steps = [
  {
    number: "01",
    title: "Choose an assignment",
    description:
      "Pick a practical SEO or content task based on the skill you want to practice.",
  },
  {
    number: "02",
    title: "Read the client brief",
    description:
      "Understand the scenario, your role, the task, and what you are expected to deliver.",
  },
  {
    number: "03",
    title: "Do the work",
    description:
      "Research the supplied businesses, review the information, and record your own observations.",
  },
  {
    number: "04",
    title: "Finish a deliverable",
    description:
      "Complete the assignment with a practical file you can review and learn from.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              S
            </div>

            <div>
              <p className="font-semibold tracking-tight">SEO VA Practice Lab</p>
              <p className="text-xs text-slate-500">Practice real workflows</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#how-it-works">
              How it works
            </a>
            <a className="transition hover:text-slate-950" href="#assignments">
              Assignments
            </a>
            <span className="rounded-full border border-slate-200 px-4 py-2 text-slate-400">
              Progress coming soon
            </span>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                SEO & Content VA Practice
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl">
              Practice the work,
              <span className="block text-blue-600">not just the theory.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Build practical SEO and content skills through realistic
              assignments, client-style briefs, guided workflows, and finished
              practice deliverables.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#assignments"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Start practicing
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                See how it works
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              No client account needed. Start with a simulated practice
              assignment.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-4 shadow-xl shadow-slate-200/50 sm:p-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Practice Assignment
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {featuredAssignment.difficulty}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight">
                  {featuredAssignment.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {featuredAssignment.shortDescription}
                </p>

                <div className="my-6 border-t border-slate-200" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Read the client brief</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Understand the market and research goal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Research 5 competitors</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Review business data and websites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Record your observations</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Add your own research instead of copying supplied data.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                      4
                    </div>
                    <div>
                      <p className="font-semibold">Finish the deliverable</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Complete a competitor research sheet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-xl bg-slate-950 px-5 py-4 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Deliverable
                      </p>
                      <p className="mt-1 font-semibold">
                        {featuredAssignment.deliverable}
                      </p>
                    </div>
                    <span className="text-sm text-slate-300">{featuredAssignment.estimatedTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Learn by completing the task.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Each assignment is built around a realistic work scenario and ends
            with something you actually produce.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-sm font-bold text-blue-600">
                {step.number}
              </span>
              <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="assignments" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Practice assignments
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Start with one real workflow.
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              The first version focuses on doing one assignment properly before
              adding more practice tracks.
            </p>
          </div>

          <div className="mt-10">
            <AssignmentCard assignment={featuredAssignment} />
          </div>
        </div>
      </section>

      <footer className="bg-[#f7f8fa]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>SEO VA Practice Lab</p>
          <p>Practice projects are simulated learning assignments.</p>
        </div>
      </footer>
    </main>
  );
}


