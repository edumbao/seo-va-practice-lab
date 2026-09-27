import type { ResearchEntry } from "./ResearchStep";
import ResearchStatusControl from "./ResearchStatusControl";

type ResearchFormProps = {
  businessId: string;
  research: ResearchEntry;
  onResearchChange: (
    businessId: string,
    field: keyof ResearchEntry,
    value: string,
  ) => void;
};

export default function ResearchForm({
  businessId,
  research,
  onResearchChange,
}: ResearchFormProps) {
  const updateField = (
    field: keyof ResearchEntry,
    value: string,
  ) => {
    onResearchChange(businessId, field, value);
  };

  return (
    <section className="rounded-2xl border border-slate-200 p-6 sm:p-7">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
          Your research
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Record your observations
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Write what you observe from the supplied profile. Avoid simply
          repeating the business data.
        </p>
      </div>

      <div className="mt-7 space-y-6">
        <label className="block">
          <span className="font-semibold text-slate-900">
            Services observed
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            Which services or service themes stand out?
          </span>

          <textarea
            value={research.servicesObserved}
            onChange={(event) =>
              updateField("servicesObserved", event.target.value)
            }
            rows={3}
            className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Example: Cosmetic dentistry and dental implants receive prominent coverage."
          />
        </label>

        <label className="block">
          <span className="font-semibold text-slate-900">
            Website observation
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            Record something useful about the website content or structure.
          </span>

          <textarea
            value={research.websiteObservation}
            onChange={(event) =>
              updateField("websiteObservation", event.target.value)
            }
            rows={3}
            className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Write your website observation."
          />
        </label>

        <label className="block">
          <span className="font-semibold text-slate-900">
            SEO observation
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            What may be useful to an SEO team?
          </span>

          <textarea
            value={research.seoObservation}
            onChange={(event) =>
              updateField("seoObservation", event.target.value)
            }
            rows={3}
            className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Write your SEO observation."
          />
        </label>

        <label className="block">
          <span className="font-semibold text-slate-900">
            Research notes
          </span>

          <span className="mt-1 block text-sm text-slate-500">
            Optional. Add any context another team member may need.
          </span>

          <textarea
            value={research.researchNotes}
            onChange={(event) =>
              updateField("researchNotes", event.target.value)
            }
            rows={4}
            className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Add optional supporting notes."
          />
        </label>

        <ResearchStatusControl
          research={research}
          onStatusChange={(status) =>
            updateField("researchStatus", status)
          }
        />
      </div>
    </section>
  );
}