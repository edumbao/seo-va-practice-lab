import ResearchForm from "./ResearchForm";

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

export type ResearchEntry = {
  servicesObserved: string;
  websiteObservation: string;
  seoObservation: string;
  researchNotes: string;
  researchStatus: "not-started" | "needs-review" | "complete";
};

type ResearchStepProps = {
  businesses: PracticeBusiness[];
  websiteProfiles: WebsiteProfile[];
  researchEntries: Record<string, ResearchEntry>;
  activeBusinessIndex: number;
  onActiveBusinessChange: (index: number) => void;
  onResearchChange: (
    businessId: string,
    field: keyof ResearchEntry,
    value: string,
  ) => void;
  onBack: () => void;
  onContinue: () => void;
};

function hasRequiredResearch(entry?: ResearchEntry) {
  if (!entry) {
    return false;
  }

  return (
    entry.servicesObserved.trim().length > 0 &&
    entry.websiteObservation.trim().length > 0 &&
    entry.seoObservation.trim().length > 0
  );
}

function isResearchComplete(entry?: ResearchEntry) {
  return (
    Boolean(entry) &&
    entry?.researchStatus === "complete" &&
    hasRequiredResearch(entry)
  );
}

export default function ResearchStep({
  businesses,
  websiteProfiles,
  researchEntries,
  activeBusinessIndex,
  onActiveBusinessChange,
  onResearchChange,
  onBack,
  onContinue,
}: ResearchStepProps) {
  const business = businesses[activeBusinessIndex];

  const websiteProfile = websiteProfiles.find(
    (profile) => profile.business_id === business.id,
  );

  const research = researchEntries[business.id];

  const completedCount = businesses.filter((item) =>
    isResearchComplete(researchEntries[item.id]),
  ).length;

  const isLastBusiness =
    activeBusinessIndex === businesses.length - 1;

  const goToPreviousBusiness = () => {
    if (activeBusinessIndex > 0) {
      onActiveBusinessChange(activeBusinessIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNextBusiness = () => {
    if (!isLastBusiness) {
      onActiveBusinessChange(activeBusinessIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!business || !websiteProfile || !research) {
    return (
      <div className="rounded-3xl border border-red-200 bg-white p-7 sm:p-10">
        <h2 className="text-2xl font-bold text-slate-950">
          Practice data is incomplete
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          This business is missing either a website profile or a
          research record.
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
              Research
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight">
            Research the competitors
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Review the supplied business information and practice
            website profile, then record your own observations.
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm">
          <p className="font-semibold text-slate-900">
            {completedCount} of {businesses.length} complete
          </p>

          <p className="mt-1 text-slate-500">
            Competitor {activeBusinessIndex + 1} of{" "}
            {businesses.length}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {businesses.map((item, index) => {
          const entry = researchEntries[item.id];
          const isComplete = isResearchComplete(entry);
          const isActive = index === activeBusinessIndex;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onActiveBusinessChange(index)}
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

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Supplied business data
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              {business.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {business.category}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Rating
                </p>
                <p className="mt-1 font-semibold">
                  {business.rating}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Reviews
                </p>
                <p className="mt-1 font-semibold">
                  {business.review_count}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Address
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {business.address}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Phone
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {business.phone}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {business.business_status === "OPERATIONAL"
                    ? "Operational"
                    : business.business_status}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
              Practice website profile
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-950">
              {websiteProfile.homepage_heading}
            </h3>

            <p className="mt-2 text-xs font-semibold text-slate-500">
              Title: {websiteProfile.homepage_title}
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-700">
              {websiteProfile.homepage_intro}
            </p>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Services shown
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {websiteProfile.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-blue-100"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Dedicated service pages
              </p>

              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {websiteProfile.service_pages.map((page) => (
                  <li key={page}>{page}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Location copy
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                {websiteProfile.location_copy}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Calls to action
              </p>

              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {websiteProfile.calls_to_action.map((cta) => (
                  <li key={cta}>{cta}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-blue-100 pt-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Additional website notes
              </p>

              <ul className="mt-3 space-y-3">
                {websiteProfile.content_notes.map((note) => (
                  <li
                    key={note}
                    className="text-sm leading-6 text-slate-700"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <ResearchForm
          businessId={business.id}
          research={research}
          onResearchChange={onResearchChange}
        />
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={
              activeBusinessIndex === 0
                ? onBack
                : goToPreviousBusiness
            }
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {activeBusinessIndex === 0
              ? "Back to practice data"
              : "Previous competitor"}
          </button>

          {!isLastBusiness ? (
            <button
              type="button"
              onClick={goToNextBusiness}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Save and continue
            </button>
          ) : (
            <button
              type="button"
              onClick={onContinue}
              disabled={completedCount !== businesses.length}
              className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${
                completedCount === businesses.length
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-200 text-slate-500"
              }`}
            >
              Continue to review
            </button>
          )}
        </div>

        {isLastBusiness &&
          completedCount !== businesses.length && (
            <p className="text-right text-xs text-slate-500">
              Complete the required research fields and mark all five
              competitors Complete before continuing to review.
            </p>
          )}
      </div>
    </div>
  );
}