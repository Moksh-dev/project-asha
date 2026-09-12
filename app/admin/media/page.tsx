"use client";

import { useMemo, useRef, useState } from "react";
import { AdminCard, AdminShell, StatusBadge } from "@/components/admin/v2/AdminShell";
import { blogFeatures, resources } from "@/components/v2/data";
import { FileText, FolderUp, Upload } from "lucide-react";

type LibraryItem = { name: string; section: "Resources" | "Blog"; size: string; date: string; source: "Live website" | "Upload" };

const liveItems: LibraryItem[] = [
  ...resources.map((item) => ({ name: item.title, section: "Resources" as const, size: "--", date: "Live website", source: "Live website" as const })),
  ...blogFeatures.map((item) => ({ name: item.title, section: "Blog" as const, size: "--", date: item.date, source: "Live website" as const })),
];

export default function MediaPage() {
  const input = useRef<HTMLInputElement>(null);
  const [section, setSection] = useState<"Resources" | "Blog">("Resources");
  const [uploads, setUploads] = useState<LibraryItem[]>([]);
  const items = useMemo(() => [...uploads, ...liveItems], [uploads]);
  const addFiles = async (list: FileList | null) => {
    if (!list) return;
    const completed: LibraryItem[] = [];
    for (const file of Array.from(list)) {
      const form = new FormData(); form.set("file", file);
      const response = await fetch("/api/admin/media", { method: "POST", body: form });
      if (response.ok) completed.push({ name: file.name, section, size: `${Math.max(.1, file.size / 1_000_000).toFixed(1)} MB`, date: "Just now", source: "Upload" });
    }
    setUploads((current) => [...completed, ...current]);
  };
  return <AdminShell title="Document library" subtitle="Live resources and blog features are synced here. Choose where a new document belongs before uploading it.">
    <AdminCard><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-black uppercase tracking-[.16em] text-[#1F5EFF]">Upload destination</p><h3 className="mt-2 text-2xl font-black">Where should this document appear?</h3></div><div className="flex gap-2"><button type="button" onClick={() => setSection("Resources")} className={`rounded-xl px-5 py-3 text-sm font-black ${section === "Resources" ? "bg-[#1F5EFF] text-white" : "bg-[#F5F9FF] text-[#475569]"}`}>Resources page</button><button type="button" onClick={() => setSection("Blog")} className={`rounded-xl px-5 py-3 text-sm font-black ${section === "Blog" ? "bg-[#1F5EFF] text-white" : "bg-[#F5F9FF] text-[#475569]"}`}>Blog page</button></div></div></AdminCard>
    <input ref={input} type="file" multiple className="hidden" onChange={(event) => void addFiles(event.target.files)} />
    <button type="button" onClick={() => input.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); void addFiles(event.dataTransfer.files); }} className="mt-6 grid w-full place-items-center rounded-[2rem] border-2 border-dashed border-[#93C5FD] bg-[#EFF6FF] px-6 py-12 text-center hover:bg-[#DBEAFE]"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#1F5EFF] text-white"><FolderUp size={25} /></span><h3 className="mt-4 text-xl font-black">Upload to {section}</h3><p className="mt-2 text-sm text-[#475569]">Files are securely uploaded to Supabase Storage; then use their public URL in the matching content record.</p><span className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-black text-[#1F5EFF]"><Upload size={16} /> Choose files</span></button>
    <AdminCard className="mt-6 overflow-hidden p-0"><div className="px-6 py-5"><h3 className="text-2xl font-black">Synced library</h3><p className="mt-1 text-sm text-[#64748B]">{resources.length} resources and {blogFeatures.length} blog features currently on the live website.</p></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="border-y border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B]"><tr><th className="px-6 py-4">Document or article</th><th className="px-6 py-4">Destination</th><th className="px-6 py-4">Source</th><th className="px-6 py-4">Updated</th></tr></thead><tbody>{items.map((file, index) => <tr className="border-b border-[#E2E8F0]" key={`${file.name}-${index}`}><td className="px-6 py-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F5F9FF] text-[#1F5EFF]"><FileText size={18} /></span><div><p className="font-black">{file.name}</p><p className="text-xs text-[#64748B]">{file.size}</p></div></div></td><td className="px-6 py-4"><StatusBadge value={file.section === "Resources" ? "Published" : "Active"} /><span className="ml-2 font-semibold text-[#475569]">{file.section}</span></td><td className="px-6 py-4 text-[#475569]">{file.source}</td><td className="px-6 py-4 text-[#64748B]">{file.date}</td></tr>)}</tbody></table></div></AdminCard>
  </AdminShell>;
}
