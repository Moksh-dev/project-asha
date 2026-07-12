import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BuilderCardProps {
  title: string;
  description: string;
  href: string;
}

export default function BuilderCard({
  title,
  description,
  href,
}: BuilderCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

        <span className="text-2xl">📄</span>

      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-slate-300">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">

        Open Editor

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />

      </div>

    </Link>
  );
}