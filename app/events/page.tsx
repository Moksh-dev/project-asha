"use client";

import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section } from "@/components/v2/Primitives";
import { CalendarDays, MapPin } from "lucide-react";
import { useLiveEvents } from "@/components/v2/liveContent";

const eventPhotos = [
  {
    image: "/content-images/freedom-walk-oakland-walk.png",
    alt: "Freedom Walk in Oakland, California",
    caption: <><strong>Freedom Walk in Oakland, California</strong>, coming together to raise awareness for survivors and stand alongside a community committed to ending human trafficking. We joined in amplifying survivor voices, advocating for greater awareness and action, and reminding our community that <strong>every voice matters and every survivor deserves to be heard</strong>.</>,
  },
  { image: "/content-images/bravemaker-photo.png", alt: "BraveMaker film screenings", caption: "Project A.S.H.A. co-founders Afnaan Islam and Archismita Mukherjee attended three BraveMaker film screenings hosted by Love Never Fails in Redwood City, where Archismita served as a panelist with the directors of the three exceptional short films. Through in-depth conversations surrounding the films, she shared a youth perspective on human trafficking and survivor-centered advocacy, while connecting the stories portrayed on screen to the importance of education, prevention, and meaningful action within our communities." },
  { image: "/content-images/open-mind-photo.png", alt: "Open Mind School presentation", caption: "Project A.S.H.A. presented to the staff at Open Mind School on human trafficking awareness, warning signs, online safety, and strengthening prevention and student safety." },
  { image: "/content-images/ncapda-photo.png", alt: "NCAPDA opioid rescue kit assembly", caption: "Project A.S.H.A. Core Team members and the Founder assembled opioid overdose rescue kits with partner organization NCAPDA." },
  { image: "/content-images/aclu-photo.png", alt: "ACLU advocacy visit", caption: "Founder advocacy with the American Civil Liberties Union on immigration and human rights, engaging with congressional and representative offices and connecting with issues affecting safety, dignity, and well-being." },
];

export default function EventsPage() {
  const liveEvents = useLiveEvents([{ title: "United Nations Headquarters", caption: "Project A.S.H.A.’s Founder & Co-Founder represented youth-led advocacy on an international stage at United Nations Headquarters in New York, bringing the voices of young changemakers into global conversations on safety and youth empowerment.", image: "/content-images/united-nations-highlight.png", isHighlight: true, location: "New York, United States" }, ...eventPhotos.map((item) => ({ title: item.alt, caption: typeof item.caption === "string" ? item.caption : "Freedom Walk in Oakland, California", image: item.image, isHighlight: false, location: undefined }))]);
  const highlight = liveEvents.find((event) => event.isHighlight);
  const regularEvents = liveEvents.filter((event) => !event.isHighlight);
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
          {highlight ? <article className="mx-auto mb-12 grid max-w-7xl overflow-hidden rounded-[2rem] border border-asha-line bg-asha-ink text-white shadow-lift md:grid-cols-[.9fr_1.1fr]">
            <img src={highlight.image} alt={highlight.title} className="h-80 w-full object-cover object-center md:h-full" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 text-asha-gold"><CalendarDays size={22} /><span className="text-sm font-black uppercase tracking-wider">Featured event</span></div>
              <h2 className="font-display mt-8 text-3xl font-black leading-tight md:text-5xl">{highlight.title}</h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/75">{highlight.caption}</p>
              {highlight.location ? <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/75"><MapPin size={16} />{highlight.location}</div> : null}
            </div>
          </article> : null}
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {regularEvents.map((event) => <figure key={event.id ?? event.image} className="flex min-h-[460px] flex-col overflow-hidden rounded-[2rem] border border-asha-line bg-white shadow-soft"><img src={event.image} alt={event.title} className={`h-72 w-full shrink-0 object-cover ${event.image.includes("bravemaker") ? "object-[center_22%]" : "object-center"}`} /><figcaption className="flex-1 p-6 leading-7 text-asha-muted">{event.caption}</figcaption></figure>)}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
