"use client";

import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section, SectionHeader } from "@/components/v2/Primitives";
import { chapters, teamGroups } from "@/components/v2/data";
import { useAddedChapters, useChapterEdits, useDeletedChapters } from "@/components/v2/liveContent";
import { Linkedin, Mail } from "lucide-react";

const leadershipOrder = ["Afnaan Islam", "Mananya Pahuja", "Agrima Chatterjee", "Moksh Goel"];

export default function TeamPage() {
  const addedChapters = useAddedChapters();
  const edits = useChapterEdits();
  const deletedChapters = useDeletedChapters();
  const liveChapters = [...addedChapters, ...chapters].filter((chapter) => !deletedChapters.includes(chapter.city)).map((chapter) => ({ ...chapter, ...edits[chapter.city] }));
  const groups = teamGroups.map((group) => group.title !== "Chapter Leads" ? group : {
    ...group,
    people: liveChapters.map((chapter) => {
      const original = group.people.find((person) => person.name === chapter.lead);
      const fallbackImage = original && "image" in original ? original.image : undefined;
      const image = /^(https?:\/\/|\/)/.test(chapter.image) ? chapter.image : fallbackImage;
      return { name: chapter.lead, role: "Chapter lead", bio: `${chapter.city}, ${chapter.state}`, ...(image ? { image } : {}) };
    }),
  });
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Team"
          title="The people carrying Project ASHA forward."
          body="Meet the people turning our mission into action, building chapters, creating change, and carrying Project A.S.H.A. into communities across the world."
        />
        {groups.map((group) => (
          <Section key={group.title} className={group.title === "Leadership" ? "pt-0" : "bg-white"}>
            <div className="mx-auto max-w-7xl">
              {group.title !== "Leadership" ? <SectionHeader title={group.title} body="Profiles are designed for images, social links, short introductions, and expandable biographies as the team directory grows." /> : null}
              {group.title === "Leadership" ? <div className="mx-auto max-w-5xl">
                {group.people.slice(0, 1).map((person) => <article key={person.name} className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-asha-line bg-white shadow-soft md:grid-cols-[minmax(250px,.78fr)_1.22fr]"><div className="min-h-80 overflow-hidden bg-asha-green md:min-h-full">{"image" in person && person.image ? <img src={person.image} alt={person.name} className="h-full w-full object-cover object-center" /> : null}</div><div className="flex flex-col justify-center p-7 text-center md:p-10 md:text-left"><p className="font-hand text-lg text-asha-coral">Founder & Executive Director</p><h2 className="font-display mt-3 text-3xl font-black text-asha-ink md:text-4xl">{person.name}</h2><p className="mt-6 max-w-2xl leading-8 text-asha-muted">{person.bio}</p></div></article>)}
                <div className="mx-auto h-12 w-px bg-asha-line" />
                <div className="grid gap-5 md:grid-cols-2">{leadershipOrder.map((name) => group.people.find((person) => person.name === name)).filter((person): person is typeof group.people[number] => Boolean(person)).map((person) => <article key={person.name} className="flex min-h-[480px] flex-col overflow-hidden rounded-[1.75rem] border border-asha-line bg-white text-center shadow-soft"><div className="h-72 shrink-0 overflow-hidden bg-asha-green md:h-80">{"image" in person && person.image ? <img src={person.image} alt={person.name} className={`h-full w-full object-cover ${person.name === "Moksh Goel" ? "object-[center_12%]" : person.name === "Afnaan Islam" ? "object-[center_20%]" : "object-center"}`} /> : null}</div><div className="flex flex-1 flex-col justify-center p-6"><p className="font-hand text-lg text-asha-coral">{person.role}</p><h2 className="font-display mt-3 text-2xl font-black text-asha-ink">{person.name}</h2><p className="mt-5 leading-7 text-asha-muted">{person.bio}</p></div></article>)}</div>
              </div> : <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.people.map((person, index) => (
                  <article key={`${group.title}-${person.role}-${person.name}`} className="group overflow-hidden rounded-[2rem] border border-asha-line bg-asha-surface shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                    <div className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,#1F5EFF,#1877FF_58%,#00AEF0)] p-6 text-white">
                      {"image" in person && person.image ? (
                        <>
                          <img src={person.image} alt={person.name} className={`absolute inset-0 h-full w-full object-cover ${person.name === "Lauren Crispino" ? "object-[center_22%]" : "object-center"}`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-asha-ink/80 via-asha-ink/10 to-transparent" />
                          <p className="font-hand absolute bottom-8 left-8 right-8 text-lg text-white">{person.role}</p>
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,.3),transparent_26%)]" />
                          <div className="relative grid h-24 w-24 place-items-center rounded-full bg-white/18 text-4xl font-black backdrop-blur">{index + 1}</div>
                          <p className="font-hand relative mt-24 text-lg text-white/82">{person.role}</p>
                        </>
                      )}
                    </div>
                    <div className="p-7">
                      <h2 className="font-display text-2xl font-black text-asha-ink">{person.name}</h2>
                      <p className="mt-4 leading-8 text-asha-muted">{person.bio}</p>
                      <div className="mt-6 flex gap-2">
                        <button className="grid h-11 w-11 place-items-center rounded-full bg-asha-cloud text-asha-green transition hover:bg-asha-green hover:text-white" aria-label={`${person.name} LinkedIn`}>
                          <Linkedin size={18} />
                        </button>
                        <button className="grid h-11 w-11 place-items-center rounded-full bg-asha-cloud text-asha-green transition hover:bg-asha-green hover:text-white" aria-label={`${person.name} email`}>
                          <Mail size={18} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>}
            </div>
          </Section>
        ))}
        <Section>
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-asha-ink p-8 text-white shadow-lift md:p-12">
            <h2 className="font-display max-w-3xl text-3xl font-black md:text-5xl">Want to build a chapter or join the national team?</h2>
            <div className="mt-8">
              <CTAButton href="/get-involved#volunteer-form" tone="light">Get involved</CTAButton>
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
