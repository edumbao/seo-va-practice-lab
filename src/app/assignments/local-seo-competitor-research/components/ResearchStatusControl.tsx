import { useEffect } from "react";
import type { ResearchEntry } from "./ResearchStep";

type ResearchStatusControlProps = {
  research: ResearchEntry;
  onStatusChange: (
    status: ResearchEntry["researchStatus"],
  ) => void;
};

type RequiredField = {
  label: string;
  complete: boolean;
};

export default function ResearchStatusControl({
  research,
  onStatusChange,
}: ResearchStatusControlProps) {
  const requiredFields: RequiredField[] = [
    {
      label: "Services observed",
      complete: research.servicesObserved.trim().length > 0,
    },
    {
      label: "Website observation",
      complete: research.websiteObservation.trim().length > 0,
    },
    {
      label: "SEO observation",
      complete: research.seoObservation.trim().length > 0,
    },
  ];

  const missingFields = requiredFields.filter(
    (field) => !field.complete,
  );

  const canComplete = missingFields.length === 0;

  useEffect(() => {
    if (
      research.researchStatus === "complete" &&
      !canComplete
    ) {
      onStatusChange("needs-review");
    }
  }, [
    canComplete,
    research.researchStatus,
    onStatusChange,
  ]);

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedStatus = event.target
      .value as ResearchEntry["researchStatus"];

    if (selectedStatus === "complete" && !canComplete) {
      onStatusChange("needs-review");
      return;
    }

    onStatusChange(selectedStatus);
  };

  return (
    <div>
      <label className="block">
        <span className="font-semibold text-slate-900">
          Research status
        </span>

        <select
          value={
            research.researchStatus === "complete" &&
            !canComplete
              ? "needs-review"
              : research.researchStatus
          }
          onChange={handleChange}
          className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="not-started">Not started</option>
          <option value="needs-review">Needs review</option>
          <option value="complete" disabled={!canComplete}>
            Complete
          </option>
        </select>
      </label>

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
          Required before completion
        </p>

        <div className="mt-3 space-y-2">
          {requiredFields.map((field) => (
            <div
              key={field.label}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <span className="text-slate-700">
                {field.label}
              </span>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  field.complete
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {field.complete ? "Ready" : "Missing"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {!canComplete && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-900">
            Complete the required research fields first.
          </p>

          <p className="mt-2 text-sm leading-6 text-amber-800">
            You can use Needs review while the research is
            unfinished. Complete becomes available after the three
            required fields contain an observation.
          </p>
        </div>
      )}

      {canComplete &&
        research.researchStatus !== "complete" && (
          <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-900">
              Required research is ready.
            </p>

            <p className="mt-2 text-sm leading-6 text-blue-800">
              Review your observations, then choose Complete when
              you are satisfied with this competitor record.
            </p>
          </div>
        )}

      {canComplete &&
        research.researchStatus === "complete" && (
          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-900">
              Competitor research complete.
            </p>
          </div>
        )}
    </div>
  );
}