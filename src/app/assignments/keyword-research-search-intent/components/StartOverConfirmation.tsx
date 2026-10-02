type StartOverConfirmationProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export default function StartOverConfirmation({
  onCancel,
  onConfirm,
}: StartOverConfirmationProps) {
  return (
    <div className="rounded-3xl border border-red-200 bg-white p-7 sm:p-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
          !
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-red-700">
          Start Over
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Clear your saved assignment progress?
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Starting over will remove the keyword analysis saved in this browser
          for the Keyword Research + Search Intent assignment.
        </p>

        <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-6">
          <p className="font-semibold text-red-950">
            This action cannot restore your current analysis after it is
            cleared.
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-red-900/80">
            <li>Your 18 keyword analysis entries will be cleared.</li>
            <li>Your assignment progress will return to Step 1.</li>
            <li>Your active keyword selection will reset.</li>
            <li>The supplied fictional practice dataset will not be deleted.</li>
            <li>Any CSV you already exported will not be affected.</li>
          </ul>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          If you want to keep your current work, cancel and return to the
          completed assignment.
        </p>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Yes, clear and start over
          </button>
        </div>
      </div>
    </div>
  );
}