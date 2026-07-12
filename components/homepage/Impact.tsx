import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import Stats from "@/components/shared/Stats";

const stats = [
  {
    value: "25+",
    label: "Active Chapters",
  },
  {
    value: "1,000+",
    label: "Volunteers",
  },
  {
    value: "100+",
    label: "Awareness Campaigns",
  },
  {
    value: "50,000+",
    label: "Lives Reached",
  },
];

export default function Impact() {
  return (
    <Section background="white">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Impact"
          title="Creating Real Change Across Communities"
          description="Every campaign, volunteer and chapter contributes towards building a safer and more informed society."
        />

        <Stats items={stats} />

      </SectionContainer>

    </Section>
  );
}