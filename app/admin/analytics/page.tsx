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
  return (
    <AdminShell
      title="Analytics"
      subtitle="Track public site activity, volunteer interest, chapter growth, form conversions, and engagement."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {analyticsCards.map(({ label, value, icon: Icon }) => (
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
            {analyticsRows.length === 0 && <p className="rounded-2xl bg-[#F8FAFC] p-5 text-sm font-bold text-[#64748B]">No analytics data yet. Connect your analytics provider to begin tracking.</p>}
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
          <p className="mt-5 rounded-2xl bg-[#F8FAFC] p-5 text-sm font-bold text-[#64748B]">No analytics provider connected.</p>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
