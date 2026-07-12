import PublicShell from "@/components/v2/PublicShell";
import { Field, PageHero, Section, SelectField, SubmitButton, TextArea } from "@/components/v2/Primitives";
import { donationCampaigns, hiddenDonationNotice } from "@/components/v2/data";
import { LockKeyhole, Wallet } from "lucide-react";

export default function DonatePage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Donation infrastructure"
          title="Prepared for a future campaign launch."
          body={hiddenDonationNotice}
        />
        <Section className="pt-0">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_.9fr]">
            <div className="grid gap-5">
              {donationCampaigns.map((campaign) => (
                <article key={campaign.title} className="rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft">
                  <Wallet className="text-asha-green" />
                  <h2 className="font-display mt-6 text-2xl font-black text-asha-ink">{campaign.title}</h2>
                  <p className="mt-4 leading-8 text-asha-muted">{campaign.body}</p>
                </article>
              ))}
            </div>
            <form className="rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft">
              <LockKeyhole className="text-asha-coral" />
              <h2 className="font-display mt-6 text-2xl font-black text-asha-ink">Donation Form Placeholder</h2>
              <div className="mt-6 grid gap-5">
                <Field label="Full name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@example.com" />
                <SelectField label="Amount" options={["Rs. 500", "Rs. 1,000", "Rs. 2,500", "Rs. 5,000", "Custom"]} />
                <TextArea label="Message" placeholder="Optional message" />
                <SubmitButton>Payment gateway coming soon</SubmitButton>
              </div>
            </form>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
