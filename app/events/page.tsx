import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section } from "@/components/v2/Primitives";
import { CalendarDays, MapPin } from "lucide-react";

const eventPhotos = [
  { image: "/content-images/freedom-walk-oakland.png", alt: "Freedom Walk in Oakland", caption: "Freedom Walk in Oakland, California brought the community together to raise awareness for survivors, stand alongside a shared commitment to ending human trafficking, and amplify survivor voices." },
  { image: "/content-images/youth-safety-conversation.png", alt: "Youth safety conversation", caption: "Young people in conversation about safety, awareness, and the importance of making prevention education accessible." },
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
            <h2 className="font-display mt-8 max-w-5xl text-3xl font-black leading-tight md:text-5xl">Freedom Walk in Oakland</h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/75">A community gathering to raise awareness for survivors, strengthen solidarity, and affirm that every voice matters.</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/75"><MapPin size={16} />Oakland, California</div>
          </article>
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((photo) => <figure key={photo.image} className="overflow-hidden rounded-[2rem] border border-asha-line bg-white shadow-soft"><img src={photo.image} alt={photo.alt} className="h-72 w-full object-cover" /><figcaption className="p-6 leading-7 text-asha-muted">{photo.caption}</figcaption></figure>)}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
