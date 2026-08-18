import PublicShell from "@/components/v2/PublicShell";
import { PageHero, Section } from "@/components/v2/Primitives";

const eventPhotos = [
  {
    image: "/content-images/united-nations-headquarters.png",
    alt: "Project A.S.H.A. Founder and Co-Founder at the United Nations Headquarters",
    caption: "Project A.S.H.A.’s Founder & Co-Founder represented youth-led advocacy on an international stage at United Nations Headquarters in New York, bringing the voices of young changemakers into global conversations on safety and youth empowerment.",
  },
  {
    image: "/content-images/freedom-walk-oakland.png",
    alt: "Freedom Walk in Oakland, California",
    caption: "Freedom Walk in Oakland, California brought the community together to raise awareness for survivors, stand alongside a shared commitment to ending human trafficking, and amplify survivor voices.",
  },
  { image: "/content-images/bravemaker-photo.png", alt: "BraveMaker film screenings", caption: "Project A.S.H.A. co-founders Afnaan Islam and Archismita Mukherjee attended three BraveMaker film screenings hosted by Love Never Fails in Redwood City." },
  { image: "/content-images/open-mind-photo.png", alt: "Open Mind School presentation", caption: "Project A.S.H.A. presented to the staff at Open Mind School on human trafficking awareness, warning signs, online safety, and strengthening prevention and student safety." },
  { image: "/content-images/ncapda-photo.png", alt: "NCAPDA opioid rescue kit assembly", caption: "Project A.S.H.A. Core Team members and the Founder assembled opioid overdose rescue kits with partner organization NCAPDA." },
  { image: "/content-images/aclu-photo.png", alt: "ACLU advocacy visit", caption: "Founder advocacy with the American Civil Liberties Union on immigration and human rights, engaging with congressional and representative offices and connecting with issues affecting safety, dignity, and well-being." },
];

export default function EventsPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Events & advocacy"
          title="Some Moments from Our Work"
          body="Project A.S.H.A. brings trafficking-prevention education and advocacy to schools, community events, and international conversations."
        />
        <Section className="pt-0">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((photo) => <figure key={photo.image} className="overflow-hidden rounded-[2rem] border border-asha-line bg-white shadow-soft"><img src={photo.image} alt={photo.alt} className="h-72 w-full object-cover object-center" /><figcaption className="p-6 leading-7 text-asha-muted">{photo.caption}</figcaption></figure>)}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
