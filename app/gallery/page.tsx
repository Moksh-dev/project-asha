import PublicShell from "@/components/v2/PublicShell";
import { PageHero, Section, VisualTile } from "@/components/v2/Primitives";
import { galleryItems } from "@/components/v2/data";

export default function GalleryPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Gallery"
          title="Moments from campaigns, workshops, and volunteer action."
          body="A premium gallery system prepared for real images, chapter filters, event albums, and admin-managed media."
        />
        <Section className="pt-0">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article key={item} className={index === 0 ? "md:col-span-2" : ""}>
                <VisualTile label={item} gradient={index % 2 === 0 ? "linear-gradient(135deg,#1F5EFF,#00AEF0)" : "linear-gradient(135deg,#1F5EFF,#67C7FF)"} />
              </article>
            ))}
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
