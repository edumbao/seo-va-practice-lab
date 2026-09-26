"use client";

import { useState } from "react";

const assignmentSteps = [
  {
    number: "01",
    title: "Client brief",
    description: "Understand the client, market, and research request.",
  },
  {
    number: "02",
    title: "Deliverable",
    description: "Review what information you need to produce.",
  },
  {
    number: "03",
    title: "Practice data",
    description: "Review the businesses supplied for the assignment.",
  },
  {
    number: "04",
    title: "Research",
    description: "Investigate each competitor and record your observations.",
  },
  {
    number: "05",
    title: "Review",
    description: "Check your research before finishing the assignment.",
  },
];

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

export default function AssignmentWorkspace() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
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

              <span className="text-slate-500">
                Step {currentStep} of {assignmentSteps.length}
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{
                  width: `${(currentStep / assignmentSteps.length) * 100}%`,
                }}
              />
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
              {assignmentSteps.map((step, index) => {
                const stepNumber = index + 1;
                const isCurrent = currentStep === stepNumber;
                const isComplete = currentStep > stepNumber;

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
                            : isComplete
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {isComplete ? "✓" : step.number}
                      </div>

                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            isCurrent
                              ? "text-blue-900"
                              : isComplete
                                ? "text-slate-700"
                                : "text-slate-500"
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
          {currentStep === 1 && (
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
                    Dental and need an initial view of competing dental
                    practices in the Seattle market.
                  </p>

                  <p className="mt-4 leading-7 text-slate-700">
                    Research the five businesses supplied for this assignment.
                    Review their websites, note the services they emphasize,
                    and record useful observations that can help the SEO team
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

              <div className="mt-10 flex justify-end border-t border-slate-200 pt-7">
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Continue to deliverable →
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
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
                Your finished assignment will be a competitor research sheet.
                Some business information is supplied to you. Your job is to
                add the research and observations that require human review.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  Assignment deliverable
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Local SEO Competitor Research Sheet
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                  A structured research sheet containing supplied business
                  information alongside the observations you add during the
                  assignment.
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
                    You do not need to manually collect these fields in this
                    practice assignment.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {suppliedFields.map((field) => (
                      <li
                        key={field}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700">
                          ✓
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
                      <h3 className="mt-2 text-xl font-bold">
                        Research fields
                      </h3>
                    </div>

                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      You complete
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    These fields are completed while you research each
                    competitor.
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
                  This example shows how supplied business data and your
                  research will appear together in the finished deliverable.
                </p>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-[900px] w-full border-collapse text-left text-sm">
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
                        <td className="px-4 py-5 font-semibold">
                          Example Dental
                        </td>
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
                  Example data is shown only to explain the expected format.
                  You will complete your own observations during the research
                  step.
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
                  The practice dataset gives you basic business information.
                  The useful part of the assignment is reviewing each
                  competitor and recording observations another member of the
                  SEO team can understand.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  ← Back to client brief
                </button>

                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-500"
                >
                  Practice data coming next →
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}