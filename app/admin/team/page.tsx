import { AdminButton, AdminCard, AdminShell } from "@/components/admin/v2/AdminShell";
import { organizationRows } from "@/components/admin/v2/adminData";
import { teamGroups } from "@/components/v2/data";
import { Building2, KeyRound, ShieldCheck, UserPlus } from "lucide-react";

const people = teamGroups.flatMap((group) => group.people.map((person) => ({ ...person, level: group.title, access: "--" })));

export default function TeamAdminPage() {
  return (
    <AdminShell
      title="Internal Structure"
      subtitle="Manage leadership, core team, national team, chapter leads, chapter members, and permissions."
      action={<AdminButton>Invite person</AdminButton>}
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_.9fr]">
        <AdminCard>
          <div className="flex items-center gap-3">
            <Building2 className="text-[#1F5EFF]" />
            <h3 className="text-2xl font-black">Project ASHA structure</h3>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FAFC] text-[#475569]">
                <tr>
                  <th className="px-5 py-4">Level</th>
                  <th className="px-5 py-4">Roles</th>
                  <th className="px-5 py-4">People</th>
                  <th className="px-5 py-4">Permissions</th>
                </tr>
              </thead>
              <tbody>
                {organizationRows.length === 0 && <tr><td colSpan={4} className="px-5 py-10 text-center font-bold text-[#64748B]">No team structure has been added yet.</td></tr>}
                {organizationRows.map((row) => (
                  <tr key={row.level} className="border-t border-[#E2E8F0]">
                    <td className="px-5 py-4 font-black">{row.level}</td>
                    <td className="px-5 py-4 text-[#475569]">{row.roles}</td>
                    <td className="px-5 py-4 font-black text-[#1F5EFF]">{row.people}</td>
                    <td className="px-5 py-4 text-[#475569]">{row.permissions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#16A34A]" />
            <h3 className="text-2xl font-black">Access model</h3>
          </div>
          <div className="mt-5 grid gap-4">
            {[
              { icon: KeyRound, title: "Role based access", body: "Founder, core team, chapter lead, editor, and viewer permissions." },
              { icon: UserPlus, title: "Smooth onboarding", body: "Invite a person, assign a role, connect them to a chapter, and set module access." },
              { icon: ShieldCheck, title: "Approval flow", body: "Volunteer requests can be reviewed before becoming chapter members." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-[#F5F9FF] p-5">
                <Icon className="text-[#1F5EFF]" />
                <h4 className="mt-4 font-black">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#475569]">{body}</p>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>

      <AdminCard className="mt-6">
        <h3 className="text-2xl font-black">People directory</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {people.length === 0 && <p className="rounded-2xl bg-[#F8FAFC] p-5 text-sm font-bold text-[#64748B]">No people have been added yet.</p>}
          {people.map((person) => (
            <article key={person.name} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1F5EFF] font-black text-white">
                {person.name.charAt(0)}
              </div>
              <h4 className="mt-5 text-lg font-black">{person.name}</h4>
              <p className="mt-1 text-sm font-bold text-[#1F5EFF]">{person.role}</p>
              <p className="mt-4 text-sm text-[#475569]">{person.level}</p>
              <p className="mt-1 text-xs font-black text-[#64748B]">{person.access}</p>
            </article>
          ))}
        </div>
      </AdminCard>
    </AdminShell>
  );
}
