import { ReactNode } from "react";

interface HeroContentProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export default function HeroContent({
  badge,
  title,
  subtitle,
  children,
}: HeroContentProps) {
  return (
    <div className="max-w-3xl">

      {badge && (
        <span className="rounded-full bg-[#EAF3FF] px-5 py-2 text-sm font-semibold text-[#165CC7]">
          {badge}
        </span>
      )}

      <h1
className="mt-8 text-6xl font-black leading-[1.05] text-[#163A73] lg:text-7xl"
style={{fontFamily:"var(--font-heading)"}}
>
        {title}
      </h1>

      <p className="mt-8 text-xl leading-9 text-slate-300">
        {subtitle}
      </p>

      {children && (
        <div className="mt-12 flex gap-5">
          {children}
        </div>
      )}

    </div>
  );
}