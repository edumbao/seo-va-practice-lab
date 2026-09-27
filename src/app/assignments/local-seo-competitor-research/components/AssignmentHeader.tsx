type AssignmentHeaderProps = {
  currentStep: number;
  totalSteps: number;
  hasLoadedStoredState: boolean;
};

export default function AssignmentHeader({
  currentStep,
  totalSteps,
  hasLoadedStoredState,
}: AssignmentHeaderProps) {
  return (
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
              Step {currentStep} of {totalSteps}
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
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
  );
}