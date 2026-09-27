import type { ResearchEntry } from "./ResearchStep";
import ExportResearchButton from "./ExportResearchButton";

type PracticeBusiness = {
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

type ReviewStepProps = {
  businesses: PracticeBusiness[];
  researchEntries: Record<string, ResearchEntry>;
  onBack: () => void;
  onEditBusiness: (index: number) => void;
};

function isResearchComplete(entry?: ResearchEntry) {
  if (!entry) {
    return false;
  }

  return (
    entry.servicesObserved.trim().length > 0 &&
    entry.websiteObservation.trim().length > 0 &&
    entry.seoObservation.trim().length > 0 &&
    entry.researchStatus === "complete"
  );
}

export default function ReviewStep({
  businesses,
  researchEntries,
  onBack,
  onEditBusiness,
}: ReviewStepProps) {
  const completedCount = businesses.filter((business) =>
    isResearchComplete(researchEntries[business.id]),
  ).length;

  const allComplete = completedCount === businesses.length;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              5
            </span>

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Review
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight">
            Review your competitor research
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Check the observations you recorded for all five competitors before
            exporting the finished research sheet.
          </p>
        </div>

        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            allComplete ? "bg-emerald-50" : "bg-amber-50"
          }`}
        >
          <p
            className={`font-semibold ${
              allComplete ? "text-emerald-900" : "text-amber-900"
            }`}
          >
            {completedCount} of {businesses.length} complete
          </p>

          <p
            className={`mt-1 ${
              allComplete ? "text-emerald-700" : "text-amber-700"
            }`}
          >
            {allComplete
              ? "Research records ready for export"
              : "Complete the remaining research before export"}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="font-semibold text-blue-950">
          Review the quality of your notes, not just whether the fields are
          filled.
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-900/80">
          Another member of an SEO team should be able to understand what you
          observed without repeating the research themselves.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {businesses.map((business, index) => {
          const research = researchEntries[business.id];

          if (!research) {
            return null;
          }

          const validComplete = isResearchComplete(research);

          return (
            <article
              key={business.id}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <div className="flex flex-col gap-4 bg-slate-50 p-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {business.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {business.category} | {business.rating} rating |{" "}
                      {business.review_count} reviews
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      validComplete
                        ? "bg-emerald-100 text-emerald-700"
                        : research.researchStatus === "needs-review"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {validComplete
                      ? "Complete"
                      : research.researchStatus === "needs-review"
                        ? "Needs review"
                        : "Not complete"}
                  </span>

                  <button
                    type="button"
                    onClick={() => onEditBusiness(index)}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Edit research
                  </button>
                </div>
              </div>

              <div className="grid gap-6 p-5 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Services observed
                  </p>

                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {research.servicesObserved || "No observation entered."}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Website observation
                  </p>

                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {research.websiteObservation ||
                      "No website observation entered."}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    SEO observation
                  </p>

                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {research.seoObservation || "No SEO observation entered."}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Research notes
                  </p>

                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {research.researchNotes || "No additional notes entered."}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          Final check
        </p>

        <h3 className="mt-2 text-lg font-bold">
          Is this research clear enough for another team member to use?
        </h3>

        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
          <li>All five competitors have been reviewed.</li>
          <li>Observations describe what you actually found.</li>
          <li>SEO observations are separate from the supplied business data.</li>
          <li>Optional notes add useful context when needed.</li>
          <li>All five valid research records are marked Complete.</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-start sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Back to research
        </button>

        <ExportResearchButton
          businesses={businesses}
          researchEntries={researchEntries}
        />
      </div>
    </div>
  );
}