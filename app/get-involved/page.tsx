import PublicShell from "@/components/v2/PublicShell";
import { PageHero, Section } from "@/components/v2/Primitives";
import { contactDetails } from "@/components/v2/data";
import { AtSign, HelpCircle, Instagram, MapPin, Phone } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Get involved"
          title="Choose a real way to get involved."
          body="Use the official Project A.S.H.A. forms below to join the network, request a presentation, or contact the team."
        />
        <Section className="pt-0">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {[
              ["A.S.H.A. Interest Form", "Join the growing youth-led network.", "https://docs.google.com/forms/d/e/1FAIpQLSdFnc5Mj_u6wcPB2H7ghqvzT5m1OCtvYktXWzH8VNUuvfoebQ/viewform"],
              ["Book a Presentation", "Request an educational presentation for your school or organization.", "https://docs.google.com/forms/d/e/1FAIpQLSeH0IP95wW2_-cyU9TAPVPe7JCYzuA7MYe-kNgHII6QF08a5Q/viewform"],
              ["General Inquiry", "Contact the Project A.S.H.A. team directly.", "https://docs.google.com/forms/d/e/1FAIpQLSdm4aV-2orsS2RSQWMhHkQCJs2nXbd7VBo5dPpU7fOkYodt9g/viewform"],
            ].map(([title, body, href]) => <a key={title} id={title === "Book a Presentation" ? "book-a-presentation" : title === "General Inquiry" ? "general-inquiry" : undefined} href={href} target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-asha-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:bg-asha-cloud"><h2 className="font-display text-xl font-black text-asha-ink">{title}</h2><p className="mt-3 leading-7 text-asha-muted">{body}</p><span className="mt-6 inline-block rounded-full bg-asha-green px-4 py-2 text-sm font-black text-white">Open form</span></a>)}
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
