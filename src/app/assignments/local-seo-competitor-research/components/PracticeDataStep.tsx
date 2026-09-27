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

type PracticeDataStepProps = {
  businesses: PracticeBusiness[];
  onBack: () => void;
  onContinue: () => void;
};

export default function PracticeDataStep({
  businesses,
  onBack,
  onContinue,
}: PracticeDataStepProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          3
        </span>

        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
          Practice Data
        </p>
      </div>

      <h2 className="mt-6 text-3xl font-bold tracking-tight">
        Review the businesses you will research
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        The assignment starts with five supplied business records. Review the
        information before beginning your own website and SEO research.
      </p>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="font-semibold text-blue-950">
          You are not expected to collect this information manually.
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-900/80">
          Treat these records as information supplied by the SEO team. Your
          work begins when you review the businesses and add your own research
          observations.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            Practice dataset
          </p>
          <h3 className="mt-2 text-xl font-bold">
            {businesses.length} competitors
          </h3>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Data ready
        </span>
      </div>

      <div className="mt-5 grid gap-4">
        {businesses.map((business, index) => (
          <article
            key={business.id}
            className="rounded-2xl border border-slate-200 p-5 sm:p-6"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-600">
                  {index + 1}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-950">
                    {business.name}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {business.category}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {business.address}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-4 lg:min-w-[420px]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Rating
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {business.rating}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Reviews
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {business.review_count}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Website
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Available
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Status
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {business.business_status === "OPERATIONAL"
                      ? "Operational"
                      : business.business_status}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:gap-6">
                <span>{business.phone}</span>
                <span>{business.city}, {business.state}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          Next step
        </p>

        <h3 className="mt-2 text-lg font-bold">
          You will research these businesses one at a time.
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          The research workspace will give you fields for services observed,
          website observations, SEO observations, research notes, and research
          status.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Back to deliverable
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Start competitor research
        </button>
      </div>
    </div>
  );
}