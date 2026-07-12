import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Project A.S.H.A. was founded with a vision to create awareness against human trafficking.",
  },
  {
    year: "2025",
    title: "Community Growth",
    description:
      "Volunteer teams expanded through schools, colleges and local communities.",
  },
  {
    year: "2026",
    title: "National Expansion",
    description:
      "Multiple chapters across India began organizing awareness campaigns and youth initiatives.",
  },
  {
    year: "Future",
    title: "Global Vision",
    description:
      "Building an international network of youth leaders working together for a trafficking-free world.",
  },
];

export default function Timeline() {
  return (
    <Section background="white">

      <SectionContainer>

        <SectionHeader
          eyebrow="Our Journey"
          title="The Story So Far"
          description="Every milestone represents another step toward creating safer communities."
        />

        <div className="space-y-8">

          {timeline.map((item) => (

            <Card
              key={item.year}
              hover
              padding="lg"
            >

              <div className="flex flex-col gap-6 md:flex-row md:items-center">

                <div className="min-w-[120px]">

                  <span className="rounded-full bg-blue-600 px-5 py-2 text-lg font-bold text-white">
                    {item.year}
                  </span>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {item.description}
                  </p>

                </div>

              </div>

            </Card>

          ))}

        </div>

      </SectionContainer>

    </Section>
  );
}