export type AssignmentStep = {
  number: string;
  title: string;
  description: string;
};

type AssignmentSidebarProps = {
  steps: AssignmentStep[];
  currentStep: number;
};

export default function AssignmentSidebar({
  steps,
  currentStep,
}: AssignmentSidebarProps) {
  return (
    <aside>
      <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          Assignment
        </p>

        <div className="mt-5 space-y-2">
          {steps.map((step, index) => {
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
  );
}