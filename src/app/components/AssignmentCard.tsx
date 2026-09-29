import Link from "next/link";
import type { Assignment } from "@/data/assignments";

type AssignmentCardProps = {
  assignment: Assignment;
};

export default function AssignmentCard({
  assignment,
}: AssignmentCardProps) {
  const isAvailable = assignment.status === "available";

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc]">
      <div className="grid lg:grid-cols-[1fr_300px]">
        <div className="p-7 sm:p-9">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {assignment.track}
            </span>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
              {assignment.difficulty}
            </span>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
              {assignment.estimatedTime}
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight">
            {assignment.title}
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            {assignment.description}
          </p>

          <div className="mt-7">
            {isAvailable ? (
              <Link
                href={assignment.href}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Start assignment
              </Link>
            ) : (
              <span className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-500">
                Coming soon
              </span>
            )}
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-950 p-7 text-white lg:border-l lg:border-t-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            You&apos;ll practice
          </p>

          <ul className="mt-5 space-y-4 text-sm">
            {assignment.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Output
            </p>

            <p className="mt-2 font-semibold">
              {assignment.deliverable}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
