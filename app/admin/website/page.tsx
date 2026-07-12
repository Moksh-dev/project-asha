import { AdminButton, AdminCard, AdminShell, StatusBadge } from "@/components/admin/v2/AdminShell";
import { editablePages, fieldEditorGroups } from "@/components/admin/v2/adminData";
import { Eye, FilePenLine, ImagePlus, Save } from "lucide-react";

export default function WebsiteBuilder() {
  return (
    <AdminShell
      title="Website CMS"
      subtitle="Edit headings, subheadings, body copy, images, buttons, SEO, and page status without touching code."
      action={<AdminButton>Publish changes</AdminButton>}
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_.95fr]">
        <AdminCard>
          <h3 className="text-2xl font-black">Public pages</h3>
          <p className="mt-2 text-[#475569]">Every public route gets editable fields and visibility controls.</p>
          <div className="mt-6 grid gap-4">
            {editablePages.map((page) => (
              <article key={page.route} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-black">{page.page}</h4>
                    <p className="mt-1 text-sm font-bold text-[#64748B]">{page.route}</p>
                  </div>
                  <StatusBadge value={page.status} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {page.fields.map((field) => (
                    <span key={field} className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#475569] ring-1 ring-[#E2E8F0]">
                      {field}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-[#1F5EFF] px-4 py-2 text-sm font-black text-white">
                    <FilePenLine size={16} />
                    Edit
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-black text-[#1F5EFF]">
                    <Eye size={16} />
                    Preview
                  </button>
                </div>
              </article>
            ))}
          </div>
        </AdminCard>

        <div className="grid gap-6">
          {fieldEditorGroups.map((group) => (
            <AdminCard key={group.title}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black">{group.title}</h3>
                <Save size={20} className="text-[#1F5EFF]" />
              </div>
              <div className="mt-5 grid gap-4">
                {group.fields.map((field) => (
                  <label key={field.label} className="grid gap-2">
                    <span className="text-sm font-black text-[#475569]">{field.label}</span>
                    <input
                      defaultValue={field.value}
                      className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-semibold text-[#0F172A] outline-none focus:border-[#1F5EFF] focus:ring-4 focus:ring-[#1F5EFF]/10"
                    />
                  </label>
                ))}
              </div>
            </AdminCard>
          ))}
          <AdminCard>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F5F9FF] text-[#1F5EFF]">
                <ImagePlus size={22} />
              </span>
              <div>
                <h3 className="text-xl font-black">Image manager ready</h3>
                <p className="text-[#475569]">Hero images, profile photos, gallery, partner logos, and OG images can be wired here.</p>
              </div>
            </div>
          </AdminCard>
        </div>
      </div>
    </AdminShell>
  );
}
