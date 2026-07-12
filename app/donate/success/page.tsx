import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero } from "@/components/v2/Primitives";

export default function DonationSuccessPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Donation"
          title="Payment success page is ready."
          body="This hidden route is prepared for the future donation gateway integration."
        >
          <CTAButton href="/" tone="coral">Return home</CTAButton>
        </PageHero>
      </main>
    </PublicShell>
  );
}
