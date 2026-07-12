import ChapterCard from "@/components/chapters/ChapterCard";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

const chapters = [
  {
    name: "Delhi Chapter",
    state: "Delhi",
    volunteers: 120,
    description:
      "Empowering students through awareness campaigns, workshops and community outreach.",
  },
  {
    name: "Mumbai Chapter",
    state: "Maharashtra",
    volunteers: 95,
    description:
      "Building youth leadership while spreading awareness against human trafficking.",
  },
  {
    name: "Hyderabad Chapter",
    state: "Telangana",
    volunteers: 80,
    description:
      "Creating impact through education, volunteer engagement and local initiatives.",
  },
];

export default function Chapters() {
  return (
    <Section background="white">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Chapters"
          title="Growing Across India"
          description="Every chapter is powered by passionate young leaders committed to creating safer communities."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {chapters.map((chapter) => (

            <ChapterCard
              key={chapter.name}
              name={chapter.name}
              state={chapter.state}
              volunteers={chapter.volunteers}
              description={chapter.description}
            />

          ))}

        </div>

      </SectionContainer>

    </Section>
  );
}