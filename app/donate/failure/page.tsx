import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero } from "@/components/v2/Primitives";

export default function DonationFailurePage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Donation"
          title="Payment failure page is ready."
          body="This hidden route is prepared for failed or cancelled payment states after gateway integration."
        >
          <CTAButton href="/donate" tone="coral">Try again</CTAButton>
        </PageHero>
      </main>
    </PublicShell>
  );
}
