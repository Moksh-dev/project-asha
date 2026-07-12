import HeroButtons from "@/components/layout/hero/HeroButtons";
import HeroContent from "@/components/layout/hero/HeroContent";
import HeroImage from "@/components/layout/hero/HeroImage";
import HeroLayout from "@/components/layout/hero/HeroLayout";

export default function Hero() {
  return (
    <HeroLayout>

      <HeroContent
        badge="About Project A.S.H.A."
        title="A Youth Movement Creating Hope Through Action."
        subtitle="Project A.S.H.A. empowers young people to raise awareness against human trafficking, build safer communities, and inspire lasting social change."
      >

        <HeroButtons
          primaryText="Join Our Mission"
          primaryHref="/join"
          secondaryText="Explore Chapters"
          secondaryHref="/chapters"
        />

      </HeroContent>

      <HeroImage />

    </HeroLayout>
  );
}