"use client";

import { useState } from "react";
import { AdminButton, AdminCard, AdminShell } from "@/components/admin/v2/AdminShell";
import { Eye, ExternalLink, Save } from "lucide-react";
import { saveHomepageContent } from "@/components/v2/liveContent";

const pages = [
  { name: "Homepage", route: "/", eyebrow: "Youth-led action for safer communities", heading: "Hope that moves from awareness to action.", description: "Project A.S.H.A. is a youth-led initiative dedicated to combating human trafficking through education, advocacy, and community awareness.", cta: "Get involved" },
  { name: "About / Our Story", route: "/about", eyebrow: "About", heading: "", description: "", cta: "" },
  { name: "Team", route: "/team", eyebrow: "Team", heading: "The people carrying Project ASHA forward.", description: "Founder and Co-Founder stories now live with the wider leadership structure: core team, national team, chapter leads, and chapter members.", cta: "Get involved" },
  { name: "Chapters", route: "/chapters", eyebrow: "Chapters", heading: "Every chapter carries the mission in its own local voice.", description: "Explore city chapters, regional leadership, upcoming events, and ways to volunteer with a team near you.", cta: "" },
  { name: "Get Involved", route: "/get-involved", eyebrow: "", heading: "", description: "", cta: "" },
  { name: "Contact", route: "/contact", eyebrow: "", heading: "", description: "", cta: "" },
  { name: "Donation", route: "/donate", eyebrow: "", heading: "", description: "", cta: "" },
];

export default function WebsiteBuilder() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [drafts, setDrafts] = useState(pages);
  const [saved, setSaved] = useState(false);
  const [previewVersion, setPreviewVersion] = useState(0);
  const active = drafts[activeIndex];
  const update = (field: "eyebrow" | "heading" | "description" | "cta", value: string) => {
    setDrafts((current) => current.map((page, index) => index === activeIndex ? { ...page, [field]: value } : page));
    setSaved(false);
  };
  const publish = () => {
    if (active.route === "/") saveHomepageContent({ eyebrow: active.eyebrow, heading: active.heading, description: active.description, cta: active.cta });
    setSaved(true);
    setPreviewVersion((version) => version + 1);
  };
  return <AdminShell title="Website editor" subtitle="Content is loaded from the current public website. Select a page to view its live preview and edit its saved draft." action={<AdminButton onClick={publish}>Publish changes</AdminButton>}>
    <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_minmax(420px,1.1fr)]">
      <AdminCard className="h-fit p-4"><p className="px-2 text-xs font-black uppercase tracking-[.16em] text-[#64748B]">Public pages</p><div className="mt-3 grid gap-1">{drafts.map((page, index) => <button type="button" key={page.route} onClick={() => { setActiveIndex(index); setSaved(false); }} className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black ${index === activeIndex ? "bg-[#1F5EFF] text-white" : "text-[#475569] hover:bg-[#F5F9FF]"}`}><span>{page.name}</span><span className="text-xs opacity-75">{index === activeIndex ? "Editing" : "Open"}</span></button>)}</div></AdminCard>
      <AdminCard><p className="text-sm font-black uppercase tracking-[.16em] text-[#1F5EFF]">{active.name} · {active.route}</p><h3 className="mt-2 text-2xl font-black">Page content</h3><p className="mt-2 text-sm text-[#64748B]">Fields already present on the live page are available here. Homepage changes publish directly to the live site.</p><div className="mt-7 grid gap-5"><label className="grid gap-2"><span className="text-sm font-black text-[#475569]">Eyebrow</span><input value={active.eyebrow} onChange={(event) => update("eyebrow", event.target.value)} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-semibold outline-none focus:border-[#1F5EFF]" /></label><label className="grid gap-2"><span className="text-sm font-black text-[#475569]">Heading</span><input value={active.heading} onChange={(event) => update("heading", event.target.value)} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-semibold outline-none focus:border-[#1F5EFF]" /></label><label className="grid gap-2"><span className="text-sm font-black text-[#475569]">Description</span><textarea rows={4} value={active.description} onChange={(event) => update("description", event.target.value)} className="resize-none rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-semibold outline-none focus:border-[#1F5EFF]" /></label><label className="grid gap-2"><span className="text-sm font-black text-[#475569]">Primary button</span><input value={active.cta} onChange={(event) => update("cta", event.target.value)} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-semibold outline-none focus:border-[#1F5EFF]" /></label></div><button onClick={publish} className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#0F172A] px-5 py-3 text-sm font-black text-white"><Save size={17} /> {saved ? "Published" : "Publish now"}</button></AdminCard>
      <AdminCard className="overflow-hidden p-0"><div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-5"><div><h3 className="text-xl font-black">Live page preview</h3><p className="mt-1 text-sm text-[#64748B]">Current public website content</p></div><a href={active.route} target="_blank" className="text-[#1F5EFF]"><ExternalLink size={19} /></a></div><div className="h-[690px] bg-[#F8FAFC]"><iframe key={`${active.route}-${previewVersion}`} src={active.route} title={`${active.name} live preview`} className="h-full w-full border-0" /></div></AdminCard>
    </div>
  </AdminShell>;
}
