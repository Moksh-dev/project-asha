import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section, VisualTile } from "@/components/v2/Primitives";
import { chapterStates, chapters } from "@/components/v2/data";
import { Instagram, MapPin, Search, Users } from "lucide-react";

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
                    <div className="mt-7">
                      {chapter.instagram ? <a href={chapter.instagram} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#833AB4_0%,#C13584_42%,#FD1D1D_70%,#FCAF45_100%)] px-6 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(193,53,132,.28)] transition hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_38px_rgba(193,53,132,.4)]"><span className="grid h-7 w-7 place-items-center rounded-full bg-white/20"><Instagram size={16} /></span><span>Follow on Instagram</span><span className="text-white/70 transition group-hover:translate-x-1">↗</span></a> : <CTAButton href="/get-involved" tone="coral">Join this chapter</CTAButton>}
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
