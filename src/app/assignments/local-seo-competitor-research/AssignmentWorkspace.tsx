"use client";

import { useEffect, useState } from "react";
import AssignmentHeader from "./components/AssignmentHeader";
import AssignmentSidebar, {
  type AssignmentStep,
} from "./components/AssignmentSidebar";
import ClientBriefStep from "./components/ClientBriefStep";
import DeliverableStep from "./components/DeliverableStep";
import PracticeDataStep from "./components/PracticeDataStep";
import ResearchStep, {
  type ResearchEntry,
} from "./components/ResearchStep";
import ReviewStep from "./components/ReviewStep";
import AssignmentComplete from "./components/AssignmentComplete";
import StartOverConfirmation from "./components/StartOverConfirmation";

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

type CompletionView =
  | "assignment"
  | "complete"
  | "confirm-reset";

type StoredAssignmentState = {
  currentStep: number;
  activeBusinessIndex: number;
  researchEntries: Record<string, ResearchEntry>;
};

const STORAGE_KEY =
  "seo-va-practice-lab:local-seo-competitor-research";

const assignmentSteps: AssignmentStep[] = [
  {
    number: "01",
    title: "Client brief",
    description:
      "Understand the client, market, and research request.",
  },
  {
    number: "02",
    title: "Deliverable",
    description:
      "Review what information you need to produce.",
  },
  {
    number: "03",
    title: "Practice data",
    description:
      "Review the businesses supplied for the assignment.",
  },
  {
    number: "04",
    title: "Research",
    description:
      "Investigate each competitor and record your observations.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Check your research before finishing the assignment.",
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
  const initialEntries =
    createInitialResearchEntries(businesses);

  if (!storedEntries) {
    return initialEntries;
  }

  return Object.fromEntries(
    businesses.map((business) => {
      const storedEntry = storedEntries[business.id];

      if (!storedEntry) {
        return [
          business.id,
          initialEntries[business.id],
        ];
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

  const [
    activeBusinessIndex,
    setActiveBusinessIndex,
  ] = useState(0);

  const [
    researchEntries,
    setResearchEntries,
  ] = useState<Record<string, ResearchEntry>>(() =>
    createInitialResearchEntries(businesses),
  );

  const [
    hasLoadedStoredState,
    setHasLoadedStoredState,
  ] = useState(false);

  const [completionView, setCompletionView] =
    useState<CompletionView>("assignment");

  useEffect(() => {
    try {
      const storedValue =
        window.localStorage.getItem(STORAGE_KEY);

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
        storedState.currentStep <=
          assignmentSteps.length
      ) {
        setCurrentStep(storedState.currentStep);
      }

      if (
        typeof storedState.activeBusinessIndex ===
          "number" &&
        storedState.activeBusinessIndex >= 0 &&
        storedState.activeBusinessIndex <
          businesses.length
      ) {
        setActiveBusinessIndex(
          storedState.activeBusinessIndex,
        );
      }

      setResearchEntries(
        mergeStoredResearchEntries(
          businesses,
          storedState.researchEntries,
        ),
      );
    } catch (error) {
      console.error(
        "Could not restore assignment progress.",
        error,
      );
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
      console.error(
        "Could not save assignment progress.",
        error,
      );
    }
  }, [
    currentStep,
    activeBusinessIndex,
    researchEntries,
    hasLoadedStoredState,
  ]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToStep = (step: number) => {
    setCompletionView("assignment");
    setCurrentStep(step);
    scrollToTop();
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

  const handleFinishAssignment = () => {
    setCurrentStep(5);
    setCompletionView("complete");
    scrollToTop();
  };

  const handleReturnToReview = () => {
    setCurrentStep(5);
    setCompletionView("assignment");
    scrollToTop();
  };

  const handleRequestStartOver = () => {
    setCompletionView("confirm-reset");
    scrollToTop();
  };

  const handleCancelStartOver = () => {
    setCompletionView("complete");
    scrollToTop();
  };

  const handleConfirmStartOver = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error(
        "Could not clear assignment progress.",
        error,
      );
    }

    setResearchEntries(
      createInitialResearchEntries(businesses),
    );
    setActiveBusinessIndex(0);
    setCurrentStep(1);
    setCompletionView("assignment");
    scrollToTop();
  };

  if (completionView === "complete") {
    return (
      <>
        <AssignmentHeader
          currentStep={5}
          totalSteps={assignmentSteps.length}
          hasLoadedStoredState={
            hasLoadedStoredState
          }
        />

        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <AssignmentComplete
            onReturnToReview={
              handleReturnToReview
            }
            onStartOver={
              handleRequestStartOver
            }
          />
        </div>
      </>
    );
  }

  if (completionView === "confirm-reset") {
    return (
      <>
        <AssignmentHeader
          currentStep={5}
          totalSteps={assignmentSteps.length}
          hasLoadedStoredState={
            hasLoadedStoredState
          }
        />

        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <StartOverConfirmation
            onCancel={handleCancelStartOver}
            onConfirm={handleConfirmStartOver}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <AssignmentHeader
        currentStep={currentStep}
        totalSteps={assignmentSteps.length}
        hasLoadedStoredState={
          hasLoadedStoredState
        }
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_1fr] lg:px-8">
        <AssignmentSidebar
          steps={assignmentSteps}
          currentStep={currentStep}
        />

        <section>
          {currentStep === 1 && (
            <ClientBriefStep
              onContinue={() => goToStep(2)}
            />
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
              activeBusinessIndex={
                activeBusinessIndex
              }
              onActiveBusinessChange={
                setActiveBusinessIndex
              }
              onResearchChange={
                handleResearchChange
              }
              onBack={() => goToStep(3)}
              onContinue={() => goToStep(5)}
            />
          )}

          {currentStep === 5 && (
            <ReviewStep
              businesses={businesses}
              researchEntries={researchEntries}
              onBack={() => goToStep(4)}
              onEditBusiness={
                handleEditBusiness
              }
              onFinish={
                handleFinishAssignment
              }
            />
          )}
        </section>
      </div>
    </>
  );
}
