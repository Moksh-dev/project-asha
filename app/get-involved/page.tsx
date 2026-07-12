import PublicShell from "@/components/v2/PublicShell";
import { Field, PageHero, Section, SelectField, SubmitButton, TextArea } from "@/components/v2/Primitives";
import { contactDetails, formTopics, involvementSections } from "@/components/v2/data";
import { AtSign, HelpCircle, Instagram, MapPin, Phone } from "lucide-react";

function SmartForm({ id, title, button }: { id: string; title: string; button: string }) {
  return (
    <form id={id} className="grid gap-5 rounded-[2rem] border border-asha-line bg-white p-6 shadow-soft">
      <h2 className="font-display text-2xl font-black text-asha-ink">{title}</h2>
      <Field label="Full name" placeholder="Your name" />
      <Field label="Email" type="email" placeholder="you@example.com" />
      <Field label="Phone" placeholder="+91 XXXXX XXXXX" />
      <SelectField label="Topic" options={formTopics} />
      <TextArea label="Message" placeholder="Tell us what you need..." />
      <SubmitButton>{button}</SubmitButton>
    </form>
  );
}

const formCards = [
  ["volunteer-form", "Volunteer Form", "Submit volunteer request"],
  ["become-a-chapter-member", "Become a Chapter Member", "Apply for chapter membership"],
  ["partnership-form", "Partnership Form", "Start partnership conversation"],
  ["contact-form", "Contact Form", "Send message"],
  ["report-an-issue", "Report an Issue", "Report securely"],
  ["support-request", "Support Request", "Request support"],
] as const;

export default function GetInvolvedPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Get involved"
          title="One page for volunteering, chapters, partnerships, contact, and support."
          body="Choose the path that fits you. The page is structured for smooth scrolling and future backend form wiring without splitting the user journey."
        />
        <Section className="pt-0">
          <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {involvementSections.map((section) => (
              <a key={section} href={`#${section.toLowerCase().replaceAll(" ", "-")}`} className="rounded-2xl border border-asha-line bg-white px-5 py-4 font-black text-asha-muted shadow-soft transition hover:-translate-y-1 hover:bg-asha-ink hover:text-white">
                {section}
              </a>
            ))}
          </div>
        </Section>
        <Section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {formCards.map(([id, title, button]) => (
              <SmartForm key={id} id={id} title={title} button={button} />
            ))}
          </div>
        </Section>
        <Section>
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-asha-ink p-8 text-white shadow-lift">
              <HelpCircle />
              <h2 className="font-display mt-8 text-3xl font-black">Frequently Asked Questions</h2>
              <div className="mt-8 grid gap-4">
                {["Can students join?", "Can an institution partner?", "Can I start a chapter?"].map((q) => (
                  <details key={q} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <summary className="cursor-pointer font-black">{q}</summary>
                    <p className="mt-3 leading-7 text-white/68">Yes. Share your details through the relevant form and the team can review the next step.</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { icon: AtSign, label: contactDetails[0] },
                { icon: MapPin, label: contactDetails[1] },
                { icon: Phone, label: "Support requests accepted through the form" },
                { icon: Instagram, label: "Social links ready for admin-managed updates" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 rounded-[1.5rem] border border-asha-line bg-white p-5 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-asha-cloud text-asha-green"><Icon size={20} /></span>
                  <span className="font-black text-asha-ink">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
