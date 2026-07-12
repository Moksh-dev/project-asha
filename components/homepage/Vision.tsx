import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

const visionPoints = [
  {
    title: "Awareness",
    description:
      "Create nationwide awareness against human trafficking through education, campaigns and digital outreach.",
  },
  {
    title: "Leadership",
    description:
      "Develop future leaders who can inspire change and build stronger, safer communities.",
  },
  {
    title: "Collaboration",
    description:
      "Partner with institutions, NGOs and communities to maximize social impact and reach.",
  },
  {
    title: "Sustainability",
    description:
      "Establish self-sustaining chapters that continue creating impact for generations.",
  },
];

export default function Vision() {
  return (
    <Section background="blue">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Vision"
          title="A Future Where Every Community Is Safe"
          description="We envision a world where awareness, compassion and youth leadership unite to eliminate human trafficking and empower every individual."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {visionPoints.map((item) => (

            <Card
              key={item.title}
              hover
              padding="lg"
            >

              <h3 className="text-2xl font-bold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>

            </Card>

          ))}

        </div>

      </SectionContainer>

    </Section>
  );
}