import { AdminCard, AdminShell } from "@/components/admin/v2/AdminShell";
import { analyticsRows } from "@/components/admin/v2/adminData";
import { Activity, BarChart3, MousePointerClick, TrendingUp } from "lucide-react";

const analyticsCards = [
  { label: "Website visitors", value: "12,480", icon: Activity },
  { label: "Page views", value: "38,214", icon: BarChart3 },
  { label: "Form conversions", value: "18.4%", icon: MousePointerClick },
  { label: "Chapter growth", value: "+24%", icon: TrendingUp },
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
          <h3 className="text-2xl font-black">Analytics plan</h3>
          <div className="mt-5 grid gap-3 text-sm font-bold text-[#475569]">
            <p className="rounded-2xl bg-[#F5F9FF] p-4">Connect Vercel Analytics or Plausible for page views.</p>
            <p className="rounded-2xl bg-[#F5F9FF] p-4">Store form submissions in Supabase for conversion tracking.</p>
            <p className="rounded-2xl bg-[#F5F9FF] p-4">Track chapter growth by state, city, and monthly activity.</p>
          </div>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
