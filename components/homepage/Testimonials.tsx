import Card from "@/components/ui/Card";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import Avatar from "@/components/ui/Avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Volunteer",
    message:
      "Project A.S.H.A. gave me an opportunity to contribute towards a meaningful cause while developing leadership and communication skills.",
  },
  {
    name: "Rahul Verma",
    role: "Chapter Lead",
    message:
      "Leading a chapter has been one of the most rewarding experiences. We have impacted hundreds of students through awareness campaigns.",
  },
  {
    name: "Ananya Singh",
    role: "Student Volunteer",
    message:
      "The workshops completely changed my understanding of human trafficking and inspired me to become an active changemaker.",
  },
];

export default function Testimonials() {
  return (
    <Section background="slate">

      <SectionContainer>

        <SectionHeader
          eyebrow="Testimonials"
          title="Voices From Our Community"
          description="Hear from volunteers and leaders who are creating impact through Project A.S.H.A."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((testimonial) => (

            <Card
              key={testimonial.name}
              hover
              padding="lg"
            >

              <div className="flex items-center gap-4">

                <Avatar
                  name={testimonial.name}
                  size="lg"
                />

                <div>

                  <h3 className="font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-blue-600">
                    {testimonial.role}
                  </p>

                </div>

              </div>

              <p className="mt-6 leading-7 text-slate-300 italic">
                "{testimonial.message}"
              </p>

            </Card>

          ))}

        </div>

      </SectionContainer>

    </Section>
  );
}