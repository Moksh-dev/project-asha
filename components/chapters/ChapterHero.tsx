import HeroButtons from "@/components/layout/hero/HeroButtons";
import HeroContent from "@/components/layout/hero/HeroContent";
import HeroImage from "@/components/layout/hero/HeroImage";
import HeroLayout from "@/components/layout/hero/HeroLayout";

export default function ChapterHero() {
  return (
    <HeroLayout>

      <HeroContent
        badge="Our Chapters"
        title="Creating Change Across India"
        subtitle="Our chapters are led by passionate students and young leaders who organize awareness campaigns, workshops, community outreach and social impact initiatives."
      >

        <HeroButtons
          primaryText="Start a Chapter"
          primaryHref="/join"
          secondaryText="Become a Volunteer"
          secondaryHref="/join"
        />

      </HeroContent>

      <HeroImage />

    </HeroLayout>
  );
}