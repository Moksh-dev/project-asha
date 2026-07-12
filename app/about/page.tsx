import PublicShell from "@/components/v2/PublicShell";
import Reveal, { Stagger, StaggerItem } from "@/components/v2/Reveal";
import { CTAButton, PageHero, Section, SectionHeader } from "@/components/v2/Primitives";
import { timeline } from "@/components/v2/data";

export default function AboutPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Our story"
          title="A youth-led movement for trafficking prevention."
          body="Project A.S.H.A. (Awareness, Safety, Hope, Action) combats human trafficking through education, advocacy, and community awareness."
        >
          <CTAButton href="/team" tone="coral">Meet the team</CTAButton>
        </PageHero>

        <Section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-black leading-tight text-asha-ink md:text-5xl">Why Project ASHA started</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl leading-9 text-asha-muted">
                While researching human trafficking for a classroom mock presentation, our founder saw how few schools provide meaningful prevention education. What began as an assignment became a youth-led initiative making education accessible, empowering, and actionable.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-5xl">
            <SectionHeader eyebrow="Growth journey" title="From a concern to a coordinated platform." />
            <Stagger className="grid gap-5">
              {timeline.map((item) => (
                <StaggerItem key={item.title}>
                  <article className="grid gap-5 rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft md:grid-cols-[150px_1fr]">
                    <span className="font-hand text-lg text-asha-coral">{item.year}</span>
                    <div>
                      <h3 className="font-display text-2xl font-black text-asha-ink">{item.title}</h3>
                      <p className="mt-3 leading-8 text-asha-muted">{item.body}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section className="bg-asha-ink text-white">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
              <p className="font-hand text-lg text-asha-coral">Mission</p>
              <h2 className="font-display mt-5 text-3xl font-black">Education that leads to prevention.</h2>
              <p className="mt-5 leading-8 text-white/68">Educate youth across the globe about human trafficking, online exploitation, and personal safety through accessible education.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
              <p className="font-hand text-lg text-asha-coral">Vision</p>
              <h2 className="font-display mt-5 text-3xl font-black">A global youth-led education network.</h2>
              <p className="mt-5 leading-8 text-white/68">Empowering communities to recognize, prevent, and respond to human trafficking through awareness, collaboration, and measurable impact.</p>
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
