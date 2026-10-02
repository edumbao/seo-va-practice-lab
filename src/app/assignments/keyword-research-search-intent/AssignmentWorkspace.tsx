"use client";

import { useEffect, useState } from "react";
import { getAssignmentById } from "@/data/assignments";
import AssignmentHeader from "../components/AssignmentHeader";
import AssignmentSidebar, {
  type AssignmentStep,
} from "../components/AssignmentSidebar";
import ClientBriefStep from "./components/ClientBriefStep";
import DeliverableStep from "./components/DeliverableStep";
import PracticeDataStep from "./components/PracticeDataStep";
import KeywordAnalysisStep from "./components/KeywordAnalysisStep";
import ReviewStep from "./components/ReviewStep";
import AssignmentComplete from "./components/AssignmentComplete";
import StartOverConfirmation from "./components/StartOverConfirmation";
import {
  createEmptyKeywordAnalysisEntry,
  type KeywordAnalysisEntry,
} from "./keywordAnalysis";

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

type CompletionView =
  | "assignment"
  | "complete"
  | "confirm-reset";

type StoredAssignmentState = {
  currentStep: number;
  activeKeywordIndex: number;
  analysisEntries: Record<string, KeywordAnalysisEntry>;
};

const assignment = getAssignmentById(
  "keyword-research-search-intent",
);

const STORAGE_KEY =
  "seo-va-practice-lab:keyword-research-search-intent";

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

function createInitialAnalysisEntries(
  keywords: PracticeKeyword[],
): Record<string, KeywordAnalysisEntry> {
  return Object.fromEntries(
    keywords.map((keyword) => [
      keyword.id,
      createEmptyKeywordAnalysisEntry(),
    ]),
  );
}

function mergeStoredAnalysisEntries(
  keywords: PracticeKeyword[],
  storedEntries?: Record<string, KeywordAnalysisEntry>,
): Record<string, KeywordAnalysisEntry> {
  const initialEntries =
    createInitialAnalysisEntries(keywords);

  if (!storedEntries) {
    return initialEntries;
  }

  return Object.fromEntries(
    keywords.map((keyword) => {
      const storedEntry = storedEntries[keyword.id];

      if (!storedEntry) {
        return [
          keyword.id,
          initialEntries[keyword.id],
        ];
      }

      return [
        keyword.id,
        {
          ...initialEntries[keyword.id],
          ...storedEntry,
        },
      ];
    }),
  );
}

export default function AssignmentWorkspace({
  keywords,
}: AssignmentWorkspaceProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const [analysisEntries, setAnalysisEntries] = useState<
    Record<string, KeywordAnalysisEntry>
  >(() => createInitialAnalysisEntries(keywords));

  const [activeKeywordIndex, setActiveKeywordIndex] =
    useState(0);

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
        storedState.currentStep <= assignmentSteps.length
      ) {
        setCurrentStep(storedState.currentStep);
      }

      if (
        typeof storedState.activeKeywordIndex === "number" &&
        storedState.activeKeywordIndex >= 0 &&
        storedState.activeKeywordIndex < keywords.length
      ) {
        setActiveKeywordIndex(
          storedState.activeKeywordIndex,
        );
      }

      setAnalysisEntries(
        mergeStoredAnalysisEntries(
          keywords,
          storedState.analysisEntries,
        ),
      );
    } catch (error) {
      console.error(
        "Could not restore keyword assignment progress.",
        error,
      );
    } finally {
      setHasLoadedStoredState(true);
    }
  }, [keywords]);

  useEffect(() => {
    if (!hasLoadedStoredState) {
      return;
    }

    const stateToStore: StoredAssignmentState = {
      currentStep,
      activeKeywordIndex,
      analysisEntries,
    };

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(stateToStore),
      );
    } catch (error) {
      console.error(
        "Could not save keyword assignment progress.",
        error,
      );
    }
  }, [
    currentStep,
    activeKeywordIndex,
    analysisEntries,
    hasLoadedStoredState,
  ]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
    scrollToTop();
  };

  const handleAnalysisChange = (
    keywordId: string,
    field: keyof KeywordAnalysisEntry,
    value: string,
  ) => {
    setAnalysisEntries((currentEntries) => ({
      ...currentEntries,
      [keywordId]: {
        ...currentEntries[keywordId],
        [field]: value,
      },
    }));
  };

  const handleEditKeyword = (index: number) => {
    setActiveKeywordIndex(index);
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
        "Could not clear keyword assignment progress.",
        error,
      );
    }

    setAnalysisEntries(
      createInitialAnalysisEntries(keywords),
    );
    setActiveKeywordIndex(0);
    setCurrentStep(1);
    setCompletionView("assignment");
    scrollToTop();
  };

  if (completionView === "complete") {
    return (
      <>
        <AssignmentHeader
          assignment={assignment}
          currentStep={5}
          totalSteps={assignmentSteps.length}
          hasLoadedStoredState={hasLoadedStoredState}
        />

        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <AssignmentComplete
            onReturnToReview={handleReturnToReview}
            onStartOver={handleRequestStartOver}
          />
        </div>
      </>
    );
  }

  if (completionView === "confirm-reset") {
    return (
      <>
        <AssignmentHeader
          assignment={assignment}
          currentStep={5}
          totalSteps={assignmentSteps.length}
          hasLoadedStoredState={hasLoadedStoredState}
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
        assignment={assignment}
        currentStep={currentStep}
        totalSteps={assignmentSteps.length}
        hasLoadedStoredState={hasLoadedStoredState}
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
              keywords={keywords}
              onBack={() => goToStep(2)}
              onContinue={() => {
                setActiveKeywordIndex(0);
                goToStep(4);
              }}
            />
          )}

          {currentStep === 4 && (
            <KeywordAnalysisStep
              keywords={keywords}
              analysisEntries={analysisEntries}
              activeKeywordIndex={activeKeywordIndex}
              onActiveKeywordChange={
                setActiveKeywordIndex
              }
              onAnalysisChange={handleAnalysisChange}
              onBack={() => goToStep(3)}
              onContinue={() => goToStep(5)}
            />
          )}

          {currentStep === 5 && (
            <ReviewStep
              keywords={keywords}
              analysisEntries={analysisEntries}
              onBack={() => goToStep(4)}
              onEditKeyword={handleEditKeyword}
              onFinish={handleFinishAssignment}
            />
          )}
        </section>
      </div>
    </>
  );
}