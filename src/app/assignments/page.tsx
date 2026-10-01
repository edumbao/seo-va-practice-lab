import Link from "next/link";
import AssignmentCard from "../components/AssignmentCard";
import { assignments } from "@/data/assignments";

export default function AssignmentsPage() {
  const availableAssignments = assignments.filter(
    (assignment) => assignment.status === "available",
  );

  const comingSoonAssignments = assignments.filter(
    (assignment) => assignment.status === "coming-soon",
  );

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
            Back to home
          </Link>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Practice assignments
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
            Choose a workflow to practice.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Work through simulated SEO assignments built around practical
            tasks, guided research, and finished deliverables.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              {availableAssignments.length} available
            </span>

            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              {comingSoonAssignments.length} coming soon
            </span>

            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              More workflows will be added as they are built and tested.
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Available assignments
          </h2>

          <p className="mt-2 max-w-2xl leading-7 text-slate-600">
            Start with a complete practice workflow and produce a learning
            artifact you can review afterward.
          </p>
        </div>

        <div className="space-y-6">
          {availableAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
            />
          ))}
        </div>
      </section>

      {comingSoonAssignments.length > 0 && (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Coming soon
              </h2>

              <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                These workflows are planned for the practice library but are
                not available to start until they have been built and tested.
              </p>
            </div>

            <div className="space-y-6">
              {comingSoonAssignments.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Developing practice library
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              The library will grow one tested workflow at a time.
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Future assignments may cover keyword research, content SEO,
              link building, technical SEO, analytics, lead generation,
              Google Sheets, automation, and VA foundations. Planned topics
              are not treated as available assignments until the workflow has
              actually been built and tested.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f7f8fa]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>SEO VA Practice Lab</p>
          <p>Practice projects are simulated learning assignments.</p>
        </div>
      </footer>
    </main>
  );
}



