import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";

export default function CTA() {
  return (
    <Section background="blue">

      <SectionContainer>

        <div className="rounded-3xl bg-blue-600 px-8 py-16 text-center text-white shadow-xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Join The Movement
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Together We Can Create A Safer Tomorrow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you want to volunteer, start a chapter, partner with us,
            or support our mission, every contribution helps us build a future
            free from human trafficking.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link href="/join">
              <Button
                variant="secondary"
                size="lg"
              >
                Become a Volunteer
              </Button>
            </Link>

            <Link href="/donate">
              <Button
                variant="outline"
                size="lg"
              >
                Donate Now
              </Button>
            </Link>

          </div>

        </div>

      </SectionContainer>

    </Section>
  );
}