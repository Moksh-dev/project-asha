import PublicShell from "@/components/v2/PublicShell";
import Reveal, { Stagger, StaggerItem } from "@/components/v2/Reveal";
import { CTAButton, IconCard, Section, SectionHeader, VisualTile } from "@/components/v2/Primitives";
import { chapters, events, focusAreas, impactWords, partnerTypes, processSteps } from "@/components/v2/data";
import { ArrowRight, HeartHandshake, MapPin, Sparkles } from "lucide-react";

const taglineWords = ["Awareness", "Safety", "Hope", "Action"];

export default function Home() {
  return (
    <PublicShell>
      <main>
        <section className="relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-36 md:px-8 md:pt-44">
          <div className="absolute inset-0 -z-10 asha-grid opacity-70" />
          <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <Reveal>
              <p className="font-hand mb-6 inline-flex rounded-full border border-asha-line bg-white px-4 py-2 text-base text-asha-green shadow-soft">
                Youth-led action for safer communities
              </p>
              <h1 className="font-display max-w-5xl text-balance text-4xl font-black leading-[1.02] text-asha-ink md:text-6xl lg:text-7xl">
                Hope that moves from awareness to action.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-asha-muted">
                Project A.S.H.A. is a youth-led initiative dedicated to combating human trafficking through education, advocacy, and community awareness.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton href="/get-involved" tone="coral">Get involved</CTAButton>
                <CTAButton href="/about" tone="light">Our story</CTAButton>
              </div>
              <div className="mt-10 overflow-hidden rounded-full border border-asha-line bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
                <div className="tagline-track flex gap-3">
                  {taglineWords.map((word) => (
                    <span
                      key={word}
                      className="tagline-word rounded-full bg-asha-cloud px-4 py-2 text-sm font-black text-asha-green"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal variant="scale" delay={0.1}>
              <div className="relative rounded-[2.5rem] bg-white p-5 text-white shadow-lift">
                <div className="rounded-[2rem] border border-white/25 bg-[linear-gradient(135deg,#1F5EFF,#1877FF_52%,#00AEF0)] p-7">
                  <Sparkles className="text-white/80" />
                  <p className="font-card-message mt-20 text-3xl leading-tight md:text-4xl">
                    Prevention begins with knowledge.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {impactWords.map((word) => (
                      <span key={word} className="rounded-2xl bg-white/12 px-4 py-3 text-sm font-black backdrop-blur">
                        {word}
                      </span>
                    ))}
                  </div>
                  <div className="animated-line mt-8 h-1 rounded-full bg-gradient-to-r from-white/30 via-white to-white/30" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Section>
          <div className="mx-auto mb-14 max-w-7xl overflow-hidden rounded-[2rem] border border-asha-line bg-white py-5 shadow-soft">
            <div className="tagline-track flex justify-center gap-4 px-5">
              {taglineWords.map((word) => (
                <span
                  key={`band-${word}`}
                  className="font-display rounded-full bg-gradient-to-r from-asha-green to-asha-coral px-6 py-3 text-lg font-black text-white shadow-soft"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Mission"
              title="Making prevention understandable, human, and local."
              body="We equip young people with accurate, age-appropriate information so they can help create safer communities around the world."
            />
            <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area) => (
                <StaggerItem key={area.title}>
                  <IconCard {...area} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section className="bg-asha-ink text-white">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal>
              <p className="font-hand text-lg text-asha-coral">How we work</p>
              <h2 className="font-display mt-5 text-balance text-4xl font-black leading-tight md:text-5xl">Education, advocacy, and community awareness.</h2>
            </Reveal>
            <Stagger className="grid gap-4">
              {processSteps.map((step, index) => (
                <StaggerItem key={step.title}>
                  <article className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 md:grid-cols-[90px_1fr]">
                    <span className="text-4xl font-black text-white/30">0{index + 1}</span>
                    <div>
                      <h3 className="text-2xl font-black">{step.title}</h3>
                      <p className="mt-2 leading-7 text-white/68">{step.body}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Partnerships" title="Built for institutions that want real impact." />
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partnerTypes.map(({ name, icon: Icon, href }) => (
                <StaggerItem key={name}>
                  <a href={href} className="group block rounded-[1.75rem] border border-asha-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:bg-asha-green hover:text-white">
                    <Icon size={24} />
                    <p className="mt-8 text-xl font-black">{name}</p>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-hand text-lg text-asha-coral">Featured chapters</p>
                <h2 className="font-display mt-4 text-3xl font-black text-asha-ink md:text-5xl">Local identities, shared mission.</h2>
              </div>
              <CTAButton href="/chapters">Explore chapters</CTAButton>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {chapters.slice(0, 2).map((chapter) => (
                <article key={chapter.city} className="grid gap-5 rounded-[2rem] border border-asha-line bg-asha-surface p-5 shadow-soft md:grid-cols-[.8fr_1fr]">
                  <VisualTile label={chapter.city} gradient={chapter.image} />
                  <div className="p-3">
                    <MapPin size={20} className="text-asha-coral" />
                    <h3 className="font-display mt-5 text-2xl font-black text-asha-ink">{chapter.city}</h3>
                    <p className="mt-3 leading-7 text-asha-muted">{chapter.summary}</p>
                    <p className="mt-6 text-sm font-black text-asha-green">{chapter.lead}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.9fr]">
            <Reveal>
              <SectionHeader eyebrow="Our work" title="Education in action, across communities." />
            </Reveal>
            <div className="grid gap-4">
              {events.map((event) => (
                <a href="/events" key={event} className="flex items-center justify-between rounded-[1.5rem] border border-asha-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:bg-asha-cloud">
                  <span className="font-black text-asha-ink">{event}</span>
                  <ArrowRight size={18} className="text-asha-coral" />
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-asha-green p-8 text-white shadow-lift md:p-14">
            <HeartHandshake size={34} />
            <h2 className="font-display mt-10 max-w-4xl text-balance text-4xl font-black leading-tight md:text-5xl">
              Help build a future where young people know how to stay safe, on and offline.
            </h2>
            <div className="mt-10">
              <CTAButton href="/get-involved" tone="light">Start with one step</CTAButton>
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
