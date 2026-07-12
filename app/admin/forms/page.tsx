import { AdminButton, AdminCard, AdminShell, StatusBadge } from "@/components/admin/v2/AdminShell";
import { volunteerRequests } from "@/components/admin/v2/adminData";

const inbox = [
  { name: "Volunteer Form", submissions: 126, owner: "Volunteer Team", status: "Active" },
  { name: "Chapter Membership", submissions: 34, owner: "Chapter Ops", status: "Active" },
  { name: "Partnership Form", submissions: 12, owner: "Partnerships", status: "Review" },
  { name: "Report an Issue", submissions: 7, owner: "Safety Desk", status: "Active" },
  { name: "Support Request", submissions: 17, owner: "Support", status: "Active" },
  { name: "Contact Form", submissions: 89, owner: "Admin", status: "Active" },
];

export default function FormsPage() {
  return (
    <AdminShell
      title="Applications Inbox"
      subtitle="Review volunteer requests, partnerships, issue reports, support messages, and chapter applications."
      action={<AdminButton>Export CSV</AdminButton>}
    >
      <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <AdminCard>
          <h3 className="text-2xl font-black">Forms and queues</h3>
          <div className="mt-5 grid gap-3">
            {inbox.map((form) => (
              <div key={form.name} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-black">{form.name}</h4>
                    <p className="mt-1 text-sm text-[#64748B]">{form.owner}</p>
                  </div>
                  <StatusBadge value={form.status} />
                </div>
                <p className="mt-4 text-3xl font-black text-[#1F5EFF]">{form.submissions}</p>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard>
          <h3 className="text-2xl font-black">Recent requests</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FAFC] text-[#475569]">
                <tr>
                  <th className="px-5 py-4">Person</th>
                  <th className="px-5 py-4">Request</th>
                  <th className="px-5 py-4">Chapter</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {volunteerRequests.map((request) => (
                  <tr key={request.email} className="border-t border-[#E2E8F0]">
                    <td className="px-5 py-4">
                      <p className="font-black">{request.name}</p>
                      <p className="text-xs text-[#64748B]">{request.email}</p>
                    </td>
                    <td className="px-5 py-4 text-[#475569]">{request.type}</td>
                    <td className="px-5 py-4 text-[#475569]">{request.chapter}</td>
                    <td className="px-5 py-4"><StatusBadge value={request.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
