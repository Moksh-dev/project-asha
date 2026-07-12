import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  {
    title: "Hope",
    description:
      "Inspiring people to believe that every life deserves dignity, freedom and opportunity.",
  },
  {
    title: "Action",
    description:
      "Turning awareness into meaningful initiatives through youth-led campaigns and community engagement.",
  },
  {
    title: "Leadership",
    description:
      "Developing confident changemakers who can lead social impact in their communities.",
  },
  {
    title: "Impact",
    description:
      "Creating measurable, long-term change by empowering volunteers and expanding chapters across India.",
  },
];

export default function Vision() {
  return (
    <Section background="slate">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Vision"
          title="Building a Future Free from Human Trafficking"
          description="Our vision is to create a nationwide movement where awareness, compassion and youth leadership come together to protect vulnerable communities."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {values.map((value) => (

            <Card
              key={value.title}
              hover
              padding="lg"
            >

              <h3 className="text-2xl font-bold text-blue-600">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {value.description}
              </p>

            </Card>

          ))}

        </div>

      </SectionContainer>

    </Section>
  );
}