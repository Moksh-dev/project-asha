"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

type DynamicSection = { id: string; section_key: string; title: string | null; content: { body?: string; cta_label?: string; cta_href?: string }; sort_order: number };

export default function DynamicPageSections() {
  const pathname = usePathname();
  const [sections, setSections] = useState<DynamicSection[]>([]);
  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data } = await supabaseBrowser.from("page_sections").select("id, section_key, title, content, sort_order").eq("page_slug", pathname).eq("status", "published").order("sort_order");
      if (active && data) setSections(data as DynamicSection[]);
    };
    void load();
    const channel = supabaseBrowser.channel(`page-sections:${pathname}`).on("postgres_changes", { event: "*", schema: "public", table: "page_sections", filter: `page_slug=eq.${pathname}` }, () => void load()).subscribe();
    return () => { active = false; void supabaseBrowser.removeChannel(channel); };
  }, [pathname]);
  if (!sections.length) return null;
  return <section className="px-5 py-16 md:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">{sections.map((section) => <article key={section.id} className="rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft"><p className="font-hand text-lg text-asha-coral">{section.section_key.replace(/-/g, " ")}</p>{section.title ? <h2 className="font-display mt-3 text-3xl font-black text-asha-ink">{section.title}</h2> : null}{section.content.body ? <p className="mt-4 leading-8 text-asha-muted">{section.content.body}</p> : null}{section.content.cta_label && section.content.cta_href ? <a href={section.content.cta_href} className="mt-7 inline-flex rounded-full bg-asha-green px-5 py-3 text-sm font-black text-white">{section.content.cta_label}</a> : null}</article>)}</div></section>;
}
