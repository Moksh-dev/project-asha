import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section, SectionHeader } from "@/components/v2/Primitives";
import { teamGroups } from "@/components/v2/data";
import { Linkedin, Mail } from "lucide-react";

export default function TeamPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Team"
          title="The people carrying Project ASHA forward."
          body="Founder and Co-Founder stories now live with the wider leadership structure: core team, national team, chapter leads, and chapter members."
        />
        {teamGroups.map((group) => (
          <Section key={group.title} className={group.title === "Leadership" ? "pt-0" : "bg-white"}>
            <div className="mx-auto max-w-7xl">
              <SectionHeader title={group.title} body="Profiles are designed for images, social links, short introductions, and expandable biographies as the team directory grows." />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.people.map((person, index) => (
                  <article key={`${group.title}-${person.role}-${person.name}`} className="group overflow-hidden rounded-[2rem] border border-asha-line bg-asha-surface shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                    <div className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,#1F5EFF,#1877FF_58%,#00AEF0)] p-6 text-white">
                      {"image" in person ? (
                        <>
                          <img src={person.image} alt={person.name} className="absolute inset-0 h-full w-full object-cover" />
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
              </div>
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
