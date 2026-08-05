import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section } from "@/components/v2/Primitives";
import { CalendarDays, MapPin } from "lucide-react";

const eventPhotos = [
  { image: "/content-images/image10.png", alt: "Project A.S.H.A. founders at the United Nations", caption: "Founder and Co-Founder represented Project A.S.H.A. at the United Nations Headquarters in New York." },
  { image: "/content-images/image3.png", alt: "BraveMaker film screenings", caption: "Co-founders at BraveMaker film screenings hosted by Love Never Fails in Redwood City." },
  { image: "/content-images/image4.png", alt: "Hong Kong chapter presentation", caption: "The Hong Kong Chapter delivers an educational presentation to middle-school students." },
  { image: "/content-images/image2.png", alt: "NCAPDA opioid rescue kit assembly", caption: "Core Team members and Founder assemble opioid overdose rescue kits with NCAPDA." },
  { image: "/content-images/image5.jpg", alt: "ACLU advocacy visit", caption: "Founder advocacy with the ACLU on immigration, human rights, and community safety." },
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
          <article className="mx-auto mb-12 max-w-7xl rounded-[2rem] border border-asha-line bg-asha-ink p-8 text-white shadow-lift md:p-10">
            <div className="flex items-center gap-3 text-asha-gold"><CalendarDays size={22} /><span className="text-sm font-black uppercase tracking-wider">Featured event</span></div>
            <h2 className="font-display mt-8 max-w-5xl text-3xl font-black leading-tight md:text-5xl">Representing Project A.S.H.A. at the United Nations Headquarters</h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/75">Founder and Co-Founder represented Project A.S.H.A. at the United Nations Headquarters in New York.</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/75"><MapPin size={16} />Global youth-led advocacy</div>
          </article>
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((photo) => <figure key={photo.image} className="overflow-hidden rounded-[2rem] border border-asha-line bg-white shadow-soft"><img src={photo.image} alt={photo.alt} className="h-72 w-full object-cover" /><figcaption className="p-6 leading-7 text-asha-muted">{photo.caption}</figcaption></figure>)}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
