import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

const missionPoints = [
  {
    title: "Educate",
    description:
      "Spread awareness about human trafficking through workshops, seminars and community outreach.",
  },
  {
    title: "Empower",
    description:
      "Equip students and volunteers with leadership skills to create meaningful social impact.",
  },
  {
    title: "Engage",
    description:
      "Build a nationwide network of passionate individuals committed to positive change.",
  },
];

export default function Mission() {
  return (
    <Section background="white">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Mission"
          title="Empowering Youth To Create Lasting Change"
          description="Project A.S.H.A. exists to educate communities, empower future leaders and inspire collective action against human trafficking."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {missionPoints.map((item) => (

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