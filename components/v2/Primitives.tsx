import Link from "next/link";
import type { ComponentType, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(31,94,255,.12),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(0,174,240,.14),transparent_28%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          {eyebrow ? <p className="eyebrow-hand mb-5 text-asha-coral">{eyebrow}</p> : null}
          <h1 className="font-display text-balance text-4xl font-black leading-[1.02] text-asha-ink md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-asha-muted md:text-xl">{body}</p>
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <p className="eyebrow-hand mb-4 text-asha-coral">{eyebrow}</p> : null}
      <h2 className="font-display text-balance text-3xl font-black leading-tight text-asha-ink md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-asha-muted">{body}</p> : null}
    </div>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`px-5 py-20 md:px-8 md:py-28 ${className}`}>{children}</section>;
}

export function CTAButton({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light" | "coral";
}) {
  const styles = {
    dark: "bg-asha-green text-white hover:bg-asha-blue-dark",
    light: "border border-asha-green bg-white text-asha-green hover:bg-asha-cloud",
    coral: "bg-gradient-to-r from-asha-green to-asha-coral text-white hover:shadow-coral",
  };
  return (
    <Link href={href} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black shadow-soft transition hover:-translate-y-0.5 ${styles[tone]}`}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function IconCard({
  icon: Icon,
  title,
  body,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <article className="group rounded-[2rem] border border-asha-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-asha-cloud text-asha-green transition group-hover:bg-asha-green group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="font-display mt-7 text-xl font-black text-asha-ink md:text-2xl">{title}</h3>
      <p className="mt-4 leading-7 text-asha-muted">{body}</p>
    </article>
  );
}

export function Field(props: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-asha-ink">{label}</span>
      <input {...rest} className="w-full rounded-2xl border border-asha-line bg-white px-4 py-3 text-asha-ink outline-none transition placeholder:text-asha-soft focus:border-asha-green focus:ring-4 focus:ring-asha-green/10" />
    </label>
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-asha-ink">{label}</span>
      <textarea {...rest} className="min-h-32 w-full resize-y rounded-2xl border border-asha-line bg-white px-4 py-3 text-asha-ink outline-none transition placeholder:text-asha-soft focus:border-asha-green focus:ring-4 focus:ring-asha-green/10" />
    </label>
  );
}

export function SelectField(props: SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[] }) {
  const { label, options, ...rest } = props;
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-asha-ink">{label}</span>
      <select {...rest} className="w-full rounded-2xl border border-asha-line bg-white px-4 py-3 text-asha-ink outline-none transition focus:border-asha-green focus:ring-4 focus:ring-asha-green/10">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className="w-full rounded-full bg-asha-green px-6 py-4 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-asha-blue-dark">
      {children}
    </button>
  );
}

export function VisualTile({ label, gradient }: { label: string; gradient?: string }) {
  return (
    <div className="relative min-h-64 overflow-hidden rounded-[2rem] p-6 text-white shadow-soft" style={{ background: gradient ?? "linear-gradient(135deg,#1F5EFF,#00AEF0)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.32),transparent_24%),linear-gradient(180deg,transparent,rgba(0,0,0,.28))]" />
      <div className="font-display relative mt-36 text-2xl font-black">{label}</div>
    </div>
  );
}
