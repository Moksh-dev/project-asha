import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import Avatar from "@/components/ui/Avatar";

const team = [
  {
    name: "Founder",
    role: "Founder & Vision Lead",
  },
  {
    name: "Core Team",
    role: "Operations & Strategy",
  },
  {
    name: "Chapter Leads",
    role: "Regional Leadership",
  },
  {
    name: "Volunteers",
    role: "Community Changemakers",
  },
];

export default function Team() {
  return (
    <Section background="slate">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Team"
          title="People Behind Project A.S.H.A."
          description="A growing network of passionate leaders and volunteers committed to creating awareness and driving meaningful change."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => (

            <Card
              key={member.name}
              hover
              padding="lg"
              className="text-center"
            >

              <div className="flex justify-center">

                <Avatar
                  name={member.name}
                  size="xl"
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {member.name}
              </h3>

              <p className="mt-2 font-semibold text-blue-600">
                {member.role}
              </p>

            </Card>

          ))}

        </div>

      </SectionContainer>

    </Section>
  );
}