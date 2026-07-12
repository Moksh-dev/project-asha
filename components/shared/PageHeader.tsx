import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  action?: ReactNode;
  align?: "left" | "center";
}

export default function PageHeader({
  title,
  description,
  badge,
  action,
  align = "left",
}: PageHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "text-center"
          : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      }
    >
      <div className={align === "center" ? "mx-auto max-w-3xl" : ""}>

        {badge && (
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {badge}
          </span>
        )}

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {description}
          </p>
        )}

      </div>

      {action && align === "left" && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}