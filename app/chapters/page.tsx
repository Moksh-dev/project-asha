import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section, VisualTile } from "@/components/v2/Primitives";
import { chapterStates, chapters } from "@/components/v2/data";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";

export default function ChaptersPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Chapters"
          title="Every chapter carries the mission in its own local voice."
          body="Explore city chapters, regional leadership, upcoming events, and ways to volunteer with a team near you."
        />
        <Section className="pt-0">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 grid gap-4 rounded-[2rem] border border-asha-line bg-white p-4 shadow-soft lg:grid-cols-[1fr_auto]">
              <label className="flex items-center gap-3 rounded-2xl bg-asha-cloud px-4 py-3">
                <Search size={18} className="text-asha-green" />
                <input placeholder="Search chapters" className="w-full bg-transparent text-asha-ink outline-none placeholder:text-asha-muted/60" />
              </label>
              <div className="flex flex-wrap gap-2">
                {chapterStates.map((state) => (
                  <button key={state} className="rounded-full border border-asha-line px-4 py-3 text-sm font-black text-asha-muted transition hover:bg-asha-ink hover:text-white">
                    {state}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {chapters.map((chapter) => (
                <article key={chapter.city} className="overflow-hidden rounded-[2.25rem] border border-asha-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <VisualTile label={chapter.city} gradient={chapter.image} />
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-asha-cloud px-3 py-2 text-sm font-black text-asha-green"><MapPin size={15} />{chapter.state}</span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-asha-cloud px-3 py-2 text-sm font-black text-asha-green"><Users size={15} />{chapter.lead}</span>
                    </div>
                    <h2 className="font-display mt-6 text-3xl font-black text-asha-ink">{chapter.city}</h2>
                    <p className="mt-3 leading-8 text-asha-muted">{chapter.summary}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {chapter.events.map((event) => (
                        <span key={event} className="inline-flex items-center gap-2 rounded-2xl border border-asha-line px-4 py-3 text-sm font-bold text-asha-muted">
                          <CalendarDays size={16} className="text-asha-coral" />
                          {event}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7">
                      <CTAButton href="/get-involved#chapter" tone="coral">Join this chapter</CTAButton>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
