import GalleryGrid from "@/components/gallery/GalleryGrid";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

const galleryItems = [
  {
    title: "Awareness Campaign",
    category: "Campaign",
  },
  {
    title: "School Workshop",
    category: "Workshop",
  },
  {
    title: "Volunteer Training",
    category: "Training",
  },
  {
    title: "Community Outreach",
    category: "Community",
  },
  {
    title: "Youth Leadership Summit",
    category: "Leadership",
  },
  {
    title: "Fundraising Event",
    category: "Event",
  },
];

export default function Gallery() {
  return (
    <Section background="slate">

      <SectionContainer>

        <SectionHeader
          eyebrow="Gallery"
          title="Moments That Inspire Change"
          description="Explore snapshots from our campaigns, workshops, leadership events and community initiatives across India."
        />

        <GalleryGrid items={galleryItems} />

      </SectionContainer>

    </Section>
  );
}