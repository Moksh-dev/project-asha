import HeroButtons from "@/components/layout/hero/HeroButtons";
import HeroContent from "@/components/layout/hero/HeroContent";
import HeroImage from "@/components/layout/hero/HeroImage";
import HeroLayout from "@/components/layout/hero/HeroLayout";

export default function Hero() {
  return (
    <HeroLayout>

      <HeroContent
        badge="Project A.S.H.A."
        title="Building Hope. Inspiring Action. Creating Change."
        subtitle="Project A.S.H.A. is a youth-led movement dedicated to preventing human trafficking through awareness, education, leadership and community-driven action. Together, we empower young people to build safer communities across India."
      >

        <HeroButtons
          primaryText="Join Our Mission"
          primaryHref="/join"
          secondaryText="Learn More"
          secondaryHref="/about"
        />

      </HeroContent>

      <HeroImage />

    </HeroLayout>
  );
}