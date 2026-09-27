"use client";

import { useEffect, useState } from "react";
import ClientBriefStep from "./components/ClientBriefStep";
import DeliverableStep from "./components/DeliverableStep";
import PracticeDataStep from "./components/PracticeDataStep";
import ResearchStep, {
  type ResearchEntry,
} from "./components/ResearchStep";
import ReviewStep from "./components/ReviewStep";

export type PracticeBusiness = {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  state: string;
  website: string;
  phone: string;
  rating: number;
  review_count: number;
  business_status: string;
};

type WebsiteProfile = {
  business_id: string;
  homepage_title: string;
  homepage_heading: string;
  homepage_intro: string;
  services: string[];
  service_pages: string[];
  location_copy: string;
  calls_to_action: string[];
  content_notes: string[];
};

type AssignmentWorkspaceProps = {
  businesses: PracticeBusiness[];
  websiteProfiles: WebsiteProfile[];
};

type StoredAssignmentState = {
  currentStep: number;
  activeBusinessIndex: number;
  researchEntries: Record<string, ResearchEntry>;
};

const STORAGE_KEY = "seo-va-practice-lab:local-seo-competitor-research";

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

function createInitialResearchEntries(
  businesses: PracticeBusiness[],
): Record<string, ResearchEntry> {
  return Object.fromEntries(
    businesses.map((business) => [
      business.id,
      {
        servicesObserved: "",
        websiteObservation: "",
        seoObservation: "",
        researchNotes: "",
        researchStatus: "not-started",
      },
    ]),
  );
}

function mergeStoredResearchEntries(
  businesses: PracticeBusiness[],
  storedEntries?: Record<string, ResearchEntry>,
): Record<string, ResearchEntry> {
  const initialEntries = createInitialResearchEntries(businesses);

  if (!storedEntries) {
    return initialEntries;
  }

  return Object.fromEntries(
    businesses.map((business) => {
      const storedEntry = storedEntries[business.id];

      if (!storedEntry) {
        return [business.id, initialEntries[business.id]];
      }

      return [
        business.id,
        {
          ...initialEntries[business.id],
          ...storedEntry,
        },
      ];
    }),
  );
}

export default function AssignmentWorkspace({
  businesses,
  websiteProfiles,
}: AssignmentWorkspaceProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeBusinessIndex, setActiveBusinessIndex] = useState(0);

  const [researchEntries, setResearchEntries] = useState<
    Record<string, ResearchEntry>
  >(() => createInitialResearchEntries(businesses));

  const [hasLoadedStoredState, setHasLoadedStoredState] = useState(false);

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);

      if (!storedValue) {
        setHasLoadedStoredState(true);
        return;
      }

      const storedState = JSON.parse(
        storedValue,
      ) as Partial<StoredAssignmentState>;

      if (
        typeof storedState.currentStep === "number" &&
        storedState.currentStep >= 1 &&
        storedState.currentStep <= assignmentSteps.length
      ) {
        setCurrentStep(storedState.currentStep);
      }

      if (
        typeof storedState.activeBusinessIndex === "number" &&
        storedState.activeBusinessIndex >= 0 &&
        storedState.activeBusinessIndex < businesses.length
      ) {
        setActiveBusinessIndex(storedState.activeBusinessIndex);
      }

      setResearchEntries(
        mergeStoredResearchEntries(
          businesses,
          storedState.researchEntries,
        ),
      );
    } catch (error) {
      console.error("Could not restore assignment progress.", error);
    } finally {
      setHasLoadedStoredState(true);
    }
  }, [businesses]);

  useEffect(() => {
    if (!hasLoadedStoredState) {
      return;
    }

    const stateToStore: StoredAssignmentState = {
      currentStep,
      activeBusinessIndex,
      researchEntries,
    };

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(stateToStore),
      );
    } catch (error) {
      console.error("Could not save assignment progress.", error);
    }
  }, [
    currentStep,
    activeBusinessIndex,
    researchEntries,
    hasLoadedStoredState,
  ]);

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResearchChange = (
    businessId: string,
    field: keyof ResearchEntry,
    value: string,
  ) => {
    setResearchEntries((currentEntries) => ({
      ...currentEntries,
      [businessId]: {
        ...currentEntries[businessId],
        [field]: value,
      },
    }));
  };

  const handleEditBusiness = (index: number) => {
    setActiveBusinessIndex(index);
    goToStep(4);
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

            {hasLoadedStoredState && (
              <p className="mt-2 text-xs text-slate-400">
                Progress is saved in this browser.
              </p>
            )}
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
                        className={`flex h-7 min-w-7 items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                          isCurrent
                            ? "bg-blue-600 text-white"
                            : isComplete
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {isComplete ? "OK" : step.number}
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
            <ClientBriefStep onContinue={() => goToStep(2)} />
          )}

          {currentStep === 2 && (
            <DeliverableStep
              onBack={() => goToStep(1)}
              onContinue={() => goToStep(3)}
            />
          )}

          {currentStep === 3 && (
            <PracticeDataStep
              businesses={businesses}
              onBack={() => goToStep(2)}
              onContinue={() => {
                setActiveBusinessIndex(0);
                goToStep(4);
              }}
            />
          )}

          {currentStep === 4 && (
            <ResearchStep
              businesses={businesses}
              websiteProfiles={websiteProfiles}
              researchEntries={researchEntries}
              activeBusinessIndex={activeBusinessIndex}
              onActiveBusinessChange={setActiveBusinessIndex}
              onResearchChange={handleResearchChange}
              onBack={() => goToStep(3)}
              onContinue={() => goToStep(5)}
            />
          )}

          {currentStep === 5 && (
            <ReviewStep
              businesses={businesses}
              researchEntries={researchEntries}
              onBack={() => goToStep(4)}
              onEditBusiness={handleEditBusiness}
            />
          )}
        </section>
      </div>
    </>
  );
}