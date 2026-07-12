import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change?: string;
}

export default function StatCard({
  title,
  value,
  change = "+12%",
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div className="rounded-2xl bg-blue-50 p-3 transition group-hover:bg-blue-600">

          <ArrowUpRight
            size={20}
            className="text-blue-600 group-hover:text-white"
          />

        </div>

      </div>

      <div className="mt-8 flex items-center gap-2">

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          {change}
        </span>

        <span className="text-sm text-slate-400">
          compared to last month
        </span>

      </div>

    </div>
  );
}