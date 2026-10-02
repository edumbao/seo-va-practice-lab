import type { PracticeKeyword } from "../AssignmentWorkspace";
import {
  isKeywordAnalysisComplete,
  type KeywordAnalysisEntry,
} from "../keywordAnalysis";
import KeywordAnalysisForm from "./KeywordAnalysisForm";

type KeywordAnalysisStepProps = {
  keywords: PracticeKeyword[];
  analysisEntries: Record<string, KeywordAnalysisEntry>;
  activeKeywordIndex: number;
  onActiveKeywordChange: (index: number) => void;
  onAnalysisChange: (
    keywordId: string,
    field: keyof KeywordAnalysisEntry,
    value: string,
  ) => void;
  onBack: () => void;
  onContinue: () => void;
};

export default function KeywordAnalysisStep({
  keywords,
  analysisEntries,
  activeKeywordIndex,
  onActiveKeywordChange,
  onAnalysisChange,
  onBack,
  onContinue,
}: KeywordAnalysisStepProps) {
  const keyword = keywords[activeKeywordIndex];
  const analysis = keyword
    ? analysisEntries[keyword.id]
    : undefined;

  const completedCount = keywords.filter((item) =>
    isKeywordAnalysisComplete(analysisEntries[item.id]),
  ).length;

  const isLastKeyword =
    activeKeywordIndex === keywords.length - 1;

  const goToKeyword = (index: number) => {
    onActiveKeywordChange(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousKeyword = () => {
    if (activeKeywordIndex > 0) {
      goToKeyword(activeKeywordIndex - 1);
    }
  };

  const goToNextKeyword = () => {
    if (!isLastKeyword) {
      goToKeyword(activeKeywordIndex + 1);
    }
  };

  if (!keyword || !analysis) {
    return (
      <div className="rounded-3xl border border-red-200 bg-white p-7 sm:p-10">
        <h2 className="text-2xl font-bold text-slate-950">
          Keyword analysis data is incomplete
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          This keyword is missing the analysis record needed for the
          practice workspace.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              4
            </span>

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Keyword Analysis
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight">
            Analyze the keywords
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Review each keyword and its supplied practice metrics, then
            classify its likely search intent, organize it into a topic
            group, set a priority, and explain your reasoning.
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm">
          <p className="font-semibold text-slate-900">
            {completedCount} of {keywords.length} complete
          </p>

          <p className="mt-1 text-slate-500">
            Keyword {activeKeywordIndex + 1} of {keywords.length}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          Keyword navigator
        </p>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {keywords.map((item, index) => {
            const entry = analysisEntries[item.id];
            const isComplete =
              isKeywordAnalysisComplete(entry);
            const isActive =
              index === activeKeywordIndex;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToKeyword(index)}
                aria-label={`Open keyword ${index + 1}: ${item.keyword}`}
                className={`min-w-12 rounded-xl px-4 py-3 text-sm font-bold transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : isComplete
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Completed keywords turn green. You can return to any keyword
          before moving to Review.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Supplied keyword data
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              {keyword.keyword}
            </h3>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Search Volume
                </p>

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {keyword.search_volume.toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Difficulty
                </p>

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {keyword.difficulty}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  CPC
                </p>

                <p className="mt-2 text-lg font-bold text-slate-900">
                  ${keyword.cpc.toFixed(2)}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
              Analysis reminder
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-950">
              Use the metrics as context, not an answer key.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Search volume, difficulty, and CPC can help you compare the
              practice keywords, but they do not determine intent, topic
              group, or priority by themselves.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Consider how closely the keyword relates to FlowDesk CRM,
              its small-service-business audience, and the likely goal
              behind the search.
            </p>
          </section>

          <section className="rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
            <p className="font-semibold text-amber-950">
              Simulated metrics
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-900/80">
              Search Volume, Keyword Difficulty, and CPC are fictional
              practice values. They are not current data from an SEO
              platform.
            </p>
          </section>
        </div>

        <KeywordAnalysisForm
          keywordId={keyword.id}
          analysis={analysis}
          onAnalysisChange={onAnalysisChange}
        />
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={
              activeKeywordIndex === 0
                ? onBack
                : goToPreviousKeyword
            }
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {activeKeywordIndex === 0
              ? "Back to practice data"
              : "Previous keyword"}
          </button>

          {!isLastKeyword ? (
            <button
              type="button"
              onClick={goToNextKeyword}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Save and continue
            </button>
          ) : (
            <button
              type="button"
              onClick={onContinue}
              disabled={completedCount !== keywords.length}
              className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${
                completedCount === keywords.length
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-200 text-slate-500"
              }`}
            >
              Continue to review
            </button>
          )}
        </div>

        {isLastKeyword &&
          completedCount !== keywords.length && (
            <p className="text-right text-xs text-slate-500">
              Complete Search Intent, Keyword Group, Priority, and
              Reasoning / Notes for all {keywords.length} keywords before
              continuing to Review.
            </p>
          )}
      </div>
    </div>
  );
}