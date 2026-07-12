import { AdminButton, AdminCard, AdminShell } from "@/components/admin/v2/AdminShell";
import { dashboardMetrics, editableChecklist, recentActivity, volunteerRequests } from "@/components/admin/v2/adminData";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Dashboard() {
  return (
    <AdminShell
      title="Dashboard"
      subtitle="A light-blue command center for content, chapters, requests, people, and analytics."
      action={<AdminButton>New update</AdminButton>}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <AdminCard key={metric.label}>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#64748B]">{metric.label}</p>
            <div className="mt-5 flex items-end justify-between gap-4">
              <h3 className="text-4xl font-black">{metric.value}</h3>
              <span className="rounded-full bg-[#F5F9FF] px-3 py-1 text-xs font-black text-[#1F5EFF]">{metric.trend}</span>
            </div>
          </AdminCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black">Website editability map</h3>
              <p className="mt-2 text-[#475569]">These public-site elements are structured to become editable from admin.</p>
            </div>
            <ArrowUpRight className="text-[#1F5EFF]" />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {editableChecklist.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                <CheckCircle2 size={18} className="text-[#16A34A]" />
                <span className="font-bold text-[#0F172A]">{item}</span>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard>
          <h3 className="text-2xl font-black">Recent activity</h3>
          <div className="mt-5 grid gap-3">
            {recentActivity.map((item) => (
              <div key={item} className="rounded-2xl bg-[#F5F9FF] p-4 text-sm font-bold text-[#475569]">
                {item}
              </div>
            ))}
          </div>
        </AdminCard>
      </div>

      <AdminCard className="mt-6">
        <h3 className="text-2xl font-black">Latest volunteer and support requests</h3>
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#E2E8F0]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F8FAFC] text-[#475569]">
              <tr>
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">City</th>
                <th className="px-5 py-4">Chapter</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {volunteerRequests.map((request) => (
                <tr key={request.email} className="border-t border-[#E2E8F0]">
                  <td className="px-5 py-4 font-black">{request.name}</td>
                  <td className="px-5 py-4 text-[#475569]">{request.type}</td>
                  <td className="px-5 py-4 text-[#475569]">{request.city}</td>
                  <td className="px-5 py-4 text-[#475569]">{request.chapter}</td>
                  <td className="px-5 py-4">{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </AdminShell>
  );
}
