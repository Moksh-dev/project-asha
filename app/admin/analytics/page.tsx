"use client";

import { useEffect, useState } from "react";
import { AdminCard, AdminShell } from "@/components/admin/v2/AdminShell";
import { analyticsRows } from "@/components/admin/v2/adminData";
import { Activity, BarChart3, MousePointerClick, TrendingUp } from "lucide-react";

const analyticsCards = [
  { label: "Website visitors", value: "--", icon: Activity },
  { label: "Page views", value: "--", icon: BarChart3 },
  { label: "Form conversions", value: "--", icon: MousePointerClick },
  { label: "Chapter growth", value: "--", icon: TrendingUp },
];

export default function AnalyticsPage() {
  const [visitors, setVisitors] = useState<string>("Loading...");
  const [pageviews, setPageviews] = useState<string>("Loading...");
  const [source, setSource] = useState("Connecting securely to Vercel Web Analytics...");
  useEffect(() => {
    fetch("/api/admin/analytics").then((response) => response.json()).then((data) => {
      if (typeof data.visitors === "number") { setVisitors(data.visitors.toLocaleString()); setPageviews(typeof data.pageviews === "number" ? data.pageviews.toLocaleString() : "--"); setSource("Live total from Vercel Web Analytics."); }
      else setSource(data.error ?? "Vercel analytics is not configured yet.");
    }).catch(() => setSource("Vercel analytics could not be reached. Please try again."));
  }, []);
  const cards = analyticsCards.map((card) => card.label === "Website visitors" ? { ...card, value: visitors } : card.label === "Page views" ? { ...card, value: pageviews } : card);
  return (
    <AdminShell
      title="Analytics"
      subtitle="Track public site activity, volunteer interest, chapter growth, form conversions, and engagement."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <AdminCard key={label}>
            <Icon className="text-[#1F5EFF]" />
            <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-[#64748B]">{label}</p>
            <h3 className="mt-3 text-4xl font-black">{value}</h3>
          </AdminCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_.8fr]">
        <AdminCard>
          <h3 className="text-2xl font-black">Engagement overview</h3>
          <div className="mt-6 grid gap-5">
            {analyticsRows.length === 0 && <p className="rounded-2xl bg-[#F8FAFC] p-5 text-sm font-bold text-[#64748B]">Vercel Web Analytics is collecting your public-site visits. Detailed visitor totals remain protected in the Vercel dashboard until a secure server connection is configured.</p>}
            {analyticsRows.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-sm font-black">
                  <span>{row.label}</span>
                  <span className="text-[#1F5EFF]">{row.value}</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#E2E8F0]">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#1F5EFF] to-[#4F8DFF]" style={{ width: `${row.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard>
          <h3 className="text-2xl font-black">Data source</h3>
          <div className="mt-5 rounded-2xl bg-[#F0FDF4] p-5 text-sm font-bold text-[#166534]">
            <p>{source}</p>
            <a href="https://vercel.com/dashboard/analytics" target="_blank" rel="noreferrer" className="mt-3 inline-block text-[#1F5EFF] underline">Open live analytics in Vercel</a>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#64748B]">To show the private Vercel totals here as well, add a Vercel API token as a server-only environment variable. The tracking component alone cannot safely send those private totals to a public browser.</p>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
