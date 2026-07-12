import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Story() {
  return (
    <Section background="slate">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Story"
          title="Every Movement Begins With One Decision"
          description="Project A.S.H.A. was born from the belief that awareness is the first step toward ending human trafficking. What started as an idea has grown into a youth-led movement driven by purpose, compassion and action."
        />

        <Card padding="lg">

          <div className="space-y-6 text-lg leading-8 text-slate-300">

            <p>
              We believe that young people have the power to transform
              communities when they are equipped with the right knowledge,
              leadership and opportunities.
            </p>

            <p>
              Through awareness campaigns, educational workshops, volunteer
              programs and community outreach, Project A.S.H.A. empowers
              students to become changemakers who create lasting social impact.
            </p>

            <p>
              Today, our mission continues to grow through dedicated chapters,
              passionate volunteers and meaningful partnerships working together
              for a future free from human trafficking.
            </p>

          </div>

        </Card>

      </SectionContainer>

    </Section>
  );
}