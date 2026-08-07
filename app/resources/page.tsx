import PublicShell from "@/components/v2/PublicShell";
import { CTAButton, PageHero, Section } from "@/components/v2/Primitives";
import { resources } from "@/components/v2/data";
import { Download, FileText } from "lucide-react";

export default function ResourcesPage() {
  return (
    <PublicShell>
      <main>
        <PageHero
          eyebrow="Resources"
          title="Toolkits for volunteers, chapters, and awareness leaders."
          body="Download Project A.S.H.A.'s guides for prevention education, safety literacy, and community support."
        />
        <Section className="pt-0">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article key={resource.href} className="rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <FileText className="text-asha-green" />
                <p className="mt-8 rounded-full bg-asha-cloud px-4 py-2 text-sm font-black text-asha-green">PDF guide</p>
                <h2 className="font-display mt-5 text-2xl font-black text-asha-ink">{resource.title}</h2>
                <p className="mt-4 leading-8 text-asha-muted">{resource.description}</p>
                <a href={resource.href} download className="mt-8 inline-flex items-center gap-2 rounded-full bg-asha-green px-5 py-3 text-sm font-black text-white transition hover:bg-asha-blue-dark">
                  <Download size={16} />
                  Download
                </a>
              </article>
            ))}
          </div>
        </Section>
        <Section className="bg-white">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-asha-cloud p-8 md:p-12">
            <h2 className="font-display max-w-2xl text-3xl font-black text-asha-ink md:text-5xl">Need resources for a school, college, or NGO event?</h2>
            <div className="mt-8">
              <CTAButton href="/get-involved#support-request" tone="coral">Request support</CTAButton>
            </div>
          </div>
        </Section>
      </main>
    </PublicShell>
  );
}
