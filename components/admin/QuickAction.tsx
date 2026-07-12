import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  href?: string;
}

export default function QuickAction({
  title,
  href = "#",
}: Props) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white p-5 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg"
    >
      <span className="font-semibold text-white">
        {title}
      </span>

      <ArrowRight
        size={18}
        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-white"
      />
    </Link>
  );
}