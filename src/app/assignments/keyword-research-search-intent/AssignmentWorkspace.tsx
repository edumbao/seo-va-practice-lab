"use client";

import { useState } from "react";
import { getAssignmentById } from "@/data/assignments";
import AssignmentHeader from "../components/AssignmentHeader";
import AssignmentSidebar, {
  type AssignmentStep,
} from "../components/AssignmentSidebar";
import ClientBriefStep from "./components/ClientBriefStep";
import DeliverableStep from "./components/DeliverableStep";

export type PracticeKeyword = {
  id: string;
  keyword: string;
  search_volume: number;
  difficulty: number;
  cpc: number;
};

type AssignmentWorkspaceProps = {
  keywords: PracticeKeyword[];
};

const assignment = getAssignmentById(
  "keyword-research-search-intent",
);

const assignmentSteps: AssignmentStep[] = [
  {
    number: "01",
    title: "Client brief",
    description:
      "Understand the fictional company, audience, and SEO request.",
  },
  {
    number: "02",
    title: "Deliverable",
    description:
      "Review what the finished keyword research sheet should contain.",
  },
  {
    number: "03",
    title: "Practice data",
    description:
      "Review the supplied keywords and simulated SEO metrics.",
  },
  {
    number: "04",
    title: "Keyword analysis",
    description:
      "Classify intent, group keywords, set priorities, and explain your reasoning.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Check your keyword analysis before finishing the assignment.",
  },
];

export default function AssignmentWorkspace({
  keywords,
}: AssignmentWorkspaceProps) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <AssignmentHeader
        assignment={assignment}
        currentStep={currentStep}
        totalSteps={assignmentSteps.length}
        hasLoadedStoredState={false}
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_1fr] lg:px-8">
        <AssignmentSidebar
          steps={assignmentSteps}
          currentStep={currentStep}
        />

        <section>
          {currentStep === 1 && (
            <ClientBriefStep
              onContinue={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <DeliverableStep
              onBack={() => setCurrentStep(1)}
              onContinue={() => setCurrentStep(3)}
            />
          )}

          {currentStep > 2 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Step {currentStep}
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Assignment 02 workspace
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                This assignment is still being built. The practice dataset
                currently contains {keywords.length} simulated keywords.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentStep((step) => step - 1)
                  }
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Previous step
                </button>

                {currentStep < assignmentSteps.length && (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentStep((step) => step + 1)
                    }
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Next step
                  </button>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}