import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section } from "@/components/v2/Primitives";
import { contactCards } from "@/components/v2/data";
import { AtSign, Clock3, MapPin, Phone, Send, Share2 } from "lucide-react";

const contactIcons = [AtSign, Phone, MapPin];

export default function ContactPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Reach the Project ASHA team."
          body="For volunteering, partnerships, chapter support, event coordination, media, or general questions, use the official contact details below."
        >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdm4aV-2orsS2RSQWMhHkQCJs2nXbd7VBo5dPpU7fOkYodt9g/viewform" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-asha-green px-6 py-3 text-sm font-black text-white shadow-soft transition hover:bg-asha-blue-dark">Send a message</a>
        </PageHero>

        <Section className="pt-0">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = contactIcons[index];
              return (
                <article
                  key={card.label}
                  className="rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-asha-cloud text-asha-green">
                    <Icon size={22} />
                  </div>
                  <p className="font-hand mt-8 text-lg text-asha-coral">
                    {card.label}
                  </p>
                  <h2 className="font-display mt-3 text-xl font-black text-asha-ink">
                    {card.value}
                  </h2>
                  <p className="mt-4 leading-7 text-asha-muted">
                    {card.helper}
                  </p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section className="bg-asha-feature">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-asha-ink p-8 text-white shadow-lift">
              <Send className="text-asha-orange-soft" />
              <h2 className="font-display mt-8 text-3xl font-black md:text-4xl">
                Need a specific kind of help?
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                The Get Involved page includes separate paths for volunteer requests, partnerships, support, reporting an issue, and chapter membership.
              </p>
              <div className="mt-8">
                <CTAButton href="/get-involved" tone="light">
                  Open forms
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: Clock3,
                  title: "Response time",
                  body: "The team can add official response-time guidance once operations are finalized.",
                },
                {
                  icon: Share2,
                  title: "Social links",
                  body: "Social profiles are prepared to be added here when the official handles are confirmed.",
                },
                {
                  icon: MapPin,
                  title: "Chapter enquiries",
                  body: "For city-specific work, mention your city and institution in the form message.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] border border-asha-line bg-white p-6 shadow-soft"
                >
                  <Icon className="text-asha-green" />
                  <h3 className="font-display mt-5 text-xl font-black text-asha-ink">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-asha-muted">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
