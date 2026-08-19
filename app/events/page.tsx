import PublicShell from "@/components/v2/PublicShell";
import EventSlider from "@/components/v2/EventSlider";
import { CTAButton, PageHero, Section } from "@/components/v2/Primitives";
import { CalendarDays, MapPin } from "lucide-react";

const eventPhotos = [
  { image: "/content-images/bravemaker-photo.png", alt: "BraveMaker film screenings", caption: "Project A.S.H.A. co-founders Afnaan Islam and Archismita Mukherjee attended three BraveMaker film screenings hosted by Love Never Fails in Redwood City." },
  { image: "/content-images/open-mind-photo.png", alt: "Open Mind School presentation", caption: "Project A.S.H.A. presented to the staff at Open Mind School on human trafficking awareness, warning signs, online safety, and strengthening prevention and student safety." },
  { image: "/content-images/ncapda-photo.png", alt: "NCAPDA opioid rescue kit assembly", caption: "Project A.S.H.A. Core Team members and the Founder assembled opioid overdose rescue kits with partner organization NCAPDA." },
  { image: "/content-images/aclu-photo.png", alt: "ACLU advocacy visit", caption: "Founder advocacy with the American Civil Liberties Union on immigration and human rights, engaging with congressional and representative offices and connecting with issues affecting safety, dignity, and well-being." },
];

const sliderPhotos = [
  {
    image: "/content-images/freedom-walk-oakland-walk.png",
    alt: "Freedom Walk in Oakland, California",
    caption: <><strong>Freedom Walk in Oakland, California</strong>, coming together to raise awareness for survivors and stand alongside a community committed to ending human trafficking. We joined in amplifying survivor voices, advocating for greater awareness and action, and reminding our community that <strong>every voice matters and every survivor deserves to be heard</strong>.</>,
  },
];

export default function EventsPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Events & advocacy"
          title="Education in action."
          body="Project A.S.H.A. brings trafficking-prevention education and advocacy to schools, community events, and international conversations."
        >
          <CTAButton href="/get-involved" tone="coral">Get involved</CTAButton>
        </PageHero>
        <Section className="pt-0">
          <article className="mx-auto mb-12 grid max-w-7xl overflow-hidden rounded-[2rem] border border-asha-line bg-asha-ink text-white shadow-lift md:grid-cols-[.9fr_1.1fr]">
            <img src="/content-images/united-nations-highlight.png" alt="Project A.S.H.A. Founder and Co-Founder at the United Nations Headquarters" className="h-80 w-full object-cover object-center md:h-full" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 text-asha-gold"><CalendarDays size={22} /><span className="text-sm font-black uppercase tracking-wider">Featured event</span></div>
              <h2 className="font-display mt-8 text-3xl font-black leading-tight md:text-5xl">United Nations Headquarters</h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/75">Project A.S.H.A.’s Founder & Co-Founder represented youth-led advocacy on an international stage at United Nations Headquarters in New York, bringing the voices of young changemakers into global conversations on safety and youth empowerment.</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/75"><MapPin size={16} />New York, United States</div>
            </div>
          </article>
          <EventSlider slides={sliderPhotos} />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((photo) => <figure key={photo.image} className="overflow-hidden rounded-[2rem] border border-asha-line bg-white shadow-soft"><img src={photo.image} alt={photo.alt} className="h-72 w-full object-cover" /><figcaption className="p-6 leading-7 text-asha-muted">{photo.caption}</figcaption></figure>)}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
