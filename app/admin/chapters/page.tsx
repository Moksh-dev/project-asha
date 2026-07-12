import { AdminButton, AdminCard, AdminShell, StatusBadge } from "@/components/admin/v2/AdminShell";
import { chapterRecords } from "@/components/admin/v2/adminData";
import { Plus, UserRoundPen, UsersRound } from "lucide-react";

export default function ChaptersPage() {
  return (
    <AdminShell
      title="Chapter Management"
      subtitle="Create chapters, assign leads, edit members, manage volunteers, and prepare chapter-specific public content."
      action={<AdminButton>New chapter</AdminButton>}
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_.85fr]">
        <AdminCard>
          <h3 className="text-2xl font-black">Chapters</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FAFC] text-[#475569]">
                <tr>
                  <th className="px-5 py-4">Chapter</th>
                  <th className="px-5 py-4">Lead</th>
                  <th className="px-5 py-4">Co-lead</th>
                  <th className="px-5 py-4">Volunteers</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4 text-right">Edit</th>
                </tr>
              </thead>
              <tbody>
                {chapterRecords.map((chapter) => (
                  <tr key={chapter.name} className="border-t border-[#E2E8F0]">
                    <td className="px-5 py-4">
                      <p className="font-black">{chapter.name}</p>
                      <p className="text-xs font-bold text-[#64748B]">{chapter.state}</p>
                    </td>
                    <td className="px-5 py-4 text-[#475569]">{chapter.lead}</td>
                    <td className="px-5 py-4 text-[#475569]">{chapter.coLead}</td>
                    <td className="px-5 py-4 font-black text-[#1F5EFF]">{chapter.volunteers}</td>
                    <td className="px-5 py-4"><StatusBadge value={chapter.status} /></td>
                    <td className="px-5 py-4 text-right">
                      <button className="rounded-xl bg-[#F5F9FF] px-4 py-2 font-black text-[#1F5EFF]">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>

        <div className="grid gap-6">
          {chapterRecords.map((chapter) => (
            <AdminCard key={chapter.name}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black">{chapter.name} structure</h3>
                  <p className="mt-1 text-[#475569]">Lead, members, and volunteer records.</p>
                </div>
                <UsersRound className="text-[#1F5EFF]" />
              </div>
              <div className="mt-5 grid gap-3">
                <label className="grid gap-2">
                  <span className="text-sm font-black text-[#475569]">Chapter lead</span>
                  <input defaultValue={chapter.lead} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-semibold outline-none focus:border-[#1F5EFF]" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-black text-[#475569]">Co-lead</span>
                  <input defaultValue={chapter.coLead} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-semibold outline-none focus:border-[#1F5EFF]" />
                </label>
                <div>
                  <span className="text-sm font-black text-[#475569]">Members</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {chapter.members.map((member) => (
                      <span key={member} className="inline-flex items-center gap-2 rounded-full bg-[#F5F9FF] px-3 py-2 text-xs font-black text-[#1F5EFF]">
                        <UserRoundPen size={14} />
                        {member}
                      </span>
                    ))}
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#00AEF0] px-3 py-2 text-xs font-black text-white">
                      <Plus size={14} />
                      Add member
                    </button>
                  </div>
                </div>
              </div>
            </AdminCard>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
