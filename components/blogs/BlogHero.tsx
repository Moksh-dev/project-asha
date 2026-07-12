import HeroButtons from "@/components/layout/hero/HeroButtons";
import HeroContent from "@/components/layout/hero/HeroContent";
import HeroImage from "@/components/layout/hero/HeroImage";
import HeroLayout from "@/components/layout/hero/HeroLayout";

export default function BlogHero() {
  return (
    <HeroLayout>

      <HeroContent
        badge="Project A.S.H.A. Blog"
        title="Stories That Inspire Change"
        subtitle="Read insights, awareness articles, volunteer stories and updates from Project A.S.H.A. as we work together to create safer communities."
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