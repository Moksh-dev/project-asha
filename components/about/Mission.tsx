import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Mission() {
  return (
    <Section background="white">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Mission"
          title="Creating Awareness. Empowering Youth. Building Safer Communities."
          description="Project A.S.H.A. believes that informed communities and empowered young leaders are the strongest force against human trafficking."
        />

        <div className="grid gap-8 md:grid-cols-3">

          <Card hover padding="lg">
            <h3 className="text-2xl font-bold text-white">
              Awareness
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Conduct workshops, campaigns and educational sessions that help
              people recognize and prevent human trafficking.
            </p>
          </Card>

          <Card hover padding="lg">
            <h3 className="text-2xl font-bold text-white">
              Action
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Encourage students and volunteers to lead meaningful initiatives
              that create measurable social impact.
            </p>
          </Card>

          <Card hover padding="lg">
            <h3 className="text-2xl font-bold text-white">
              Impact
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Build sustainable chapters across India that continue educating,
              supporting and empowering communities.
            </p>
          </Card>

        </div>

      </SectionContainer>

    </Section>
  );
}