"use client";

import PublicShell from "@/components/v2/PublicShell";
import { useHomepageContent } from "@/components/v2/liveContent";
import Reveal, { Stagger, StaggerItem } from "@/components/v2/Reveal";
import { CTAButton, IconCard, Section, SectionHeader, VisualTile } from "@/components/v2/Primitives";
import { chapterVisuals, chapters, events, focusAreas, partnerTypes, processSteps } from "@/components/v2/data";
import { ArrowRight, HeartHandshake, MapPin } from "lucide-react";

const featuredChapters = chapters.filter((chapter) => chapter.city === "Haryana" || chapter.city === "West Bengal");

export default function Home() {
  const homepage = useHomepageContent();
  return (
    <PublicShell>
      <main>
        <section className="relative min-h-[72vh] overflow-hidden px-5 pb-16 pt-36 md:px-8 md:pt-44">
          <div className="absolute inset-0 -z-10 asha-grid opacity-70" />
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h1 className="font-display max-w-5xl text-balance text-5xl font-black uppercase leading-[.9] tracking-[-.055em] text-asha-ink md:text-7xl lg:text-8xl">
                {homepage.heading}
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-asha-muted">
                {homepage.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton href="/get-involved" tone="coral">{homepage.cta}</CTAButton>
                <CTAButton href="/about" tone="light">Our story</CTAButton>
              </div>
            </Reveal>
          </div>
        </section>

        <Section>
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
              {featuredChapters.map((chapter) => (
                <article key={chapter.city} className="grid gap-5 rounded-[2rem] border border-asha-line bg-asha-surface p-5 shadow-soft md:grid-cols-[.8fr_1fr]">
                  <VisualTile label={chapter.city} gradient={chapterVisuals[chapter.city]} />
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
