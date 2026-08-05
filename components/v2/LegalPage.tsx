import PublicShell from "./PublicShell";
import { PageHero, Section } from "./Primitives";

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <PublicShell><main><PageHero eyebrow={eyebrow} title={title} body={intro} /><Section className="bg-white pt-0"><article className="mx-auto max-w-4xl rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft md:p-10"><div className="prose prose-slate max-w-none text-asha-muted [&_h2]:font-display [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-asha-ink [&_p]:leading-8 [&_li]:leading-8">{children}</div></article></Section></main></PublicShell>;
}
