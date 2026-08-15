"use client";

import PublicShell from "@/components/v2/PublicShell";
import { PageHero, Section } from "@/components/v2/Primitives";
import { pressArticles } from "@/components/v2/data";
import { useLivePress } from "@/components/v2/liveContent";

export default function PressPage() {
  const articles = useLivePress(pressArticles);
  return <PublicShell><main><PageHero eyebrow="Press" title="Project A.S.H.A. in the news." body="Newspapers and online publications featuring our youth-led prevention, education, and awareness work." /><Section className="pt-0"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <article key={article.url} className="rounded-[2rem] border border-asha-line bg-white p-8 shadow-soft"><p className="text-sm font-black text-asha-green">{article.date}</p><h2 className="font-display mt-4 text-2xl font-black text-asha-ink">{article.title}</h2><p className="mt-4 leading-7 text-asha-muted">{article.excerpt}</p><a href={article.url} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-asha-green px-5 py-3 text-sm font-black text-white hover:bg-asha-blue-dark">Read coverage</a></article>)}</div></Section></main></PublicShell>;
}
