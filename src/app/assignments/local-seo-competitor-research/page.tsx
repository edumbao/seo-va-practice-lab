import Link from "next/link";
import AssignmentWorkspace from "./AssignmentWorkspace";
import competitorPracticeData from "@/data/competitor-practice.json";
import competitorWebsiteProfiles from "@/data/competitor-website-profiles.json";

export default function LocalSeoCompetitorResearchPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              S
            </div>

            <div>
              <p className="font-semibold tracking-tight">
                SEO VA Practice Lab
              </p>
              <p className="text-xs text-slate-500">
                Practice real workflows
              </p>
            </div>
          </Link>

          <Link
            href="/#assignments"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
          >
            Back to assignments
          </Link>
        </div>
      </header>

      <AssignmentWorkspace
        businesses={competitorPracticeData}
        websiteProfiles={competitorWebsiteProfiles}
      />
    </main>
  );
}