"use client";

import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section, VisualTile } from "@/components/v2/Primitives";
import { chapterStates, chapters, chapterVisuals } from "@/components/v2/data";
import { Instagram, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";
import { useLiveChapters } from "@/components/v2/liveContent";

export default function ChaptersPage() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("All");
  const chaptersWithoutCardImages = new Set(["Turkiye", "South Africa", "Bangladesh"]);
  const allChapters = useLiveChapters(chapters);
  const filtered = allChapters.filter((chapter) => (state === "All" || chapter.state === state) && `${chapter.city} ${chapter.state} ${chapter.lead}`.toLowerCase().includes(query.toLowerCase()));
  return <PublicShell><main><PageHero eyebrow="Chapters" title="Every chapter carries the mission in its own local voice." body="Explore city chapters, regional leadership, upcoming events, and ways to volunteer with a team near you." /><Section className="pt-0"><div className="mx-auto max-w-7xl"><div className="mb-8 grid gap-4 rounded-[2rem] border border-asha-line bg-white p-4 shadow-soft lg:grid-cols-[1fr_auto]"><label className="flex items-center gap-3 rounded-2xl bg-asha-cloud px-4 py-3"><Search size={18} className="text-asha-green" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search chapters" className="w-full bg-transparent text-asha-ink outline-none placeholder:text-asha-muted/60" /></label><div className="flex flex-wrap gap-2">{chapterStates.map((item) => <button type="button" key={item} onClick={() => setState(item)} className={`rounded-full border px-4 py-3 text-sm font-black transition ${state === item ? "border-asha-green bg-asha-green text-white" : "border-asha-line text-asha-muted hover:bg-asha-ink hover:text-white"}`}>{item}</button>)}</div></div><div className="grid gap-6 lg:grid-cols-2">{filtered.map((chapter) => <article key={chapter.city} className="overflow-hidden rounded-[2.25rem] border border-asha-line bg-white p-5 shadow-soft"><VisualTile label={chapter.city} gradient={chaptersWithoutCardImages.has(chapter.city) ? undefined : chapterVisuals[chapter.city]} /><div className="p-4"><div className="flex flex-wrap gap-2"><span className="inline-flex items-center gap-2 rounded-full bg-asha-cloud px-3 py-2 text-sm font-black text-asha-green"><MapPin size={15} />{chapter.state}</span><span className="inline-flex items-center gap-2 rounded-full bg-asha-cloud px-3 py-2 text-sm font-black text-asha-green"><Users size={15} />{chapter.lead}</span></div><h2 className="font-display mt-6 text-3xl font-black text-asha-ink">{chapter.city}</h2><p className="mt-3 leading-8 text-asha-muted">{chapter.summary}</p><div className="mt-7">{chapter.instagram ? <a href={chapter.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-asha-green px-6 py-3 text-sm font-black text-white"><Instagram size={16} />Follow on Instagram</a> : <CTAButton href="/get-involved" tone="coral">Join this chapter</CTAButton>}</div></div></article>)}</div>{filtered.length === 0 ? <p className="py-12 text-center font-bold text-asha-muted">No chapters match your search.</p> : null}</div></Section></main></PublicShell>;
}
