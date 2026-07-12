import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  description?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({
  children,
  title,
  description,
  padding = "md",
  hover = true,
  className = "",
  ...props
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-5",
    md: "p-8",
    lg: "p-10",
  };

  return (
    <div
      {...props}
      className={`
        group
        overflow-hidden
        rounded-[28px]
        border border-[#DCEAFE]
        bg-white/95
        backdrop-blur-xl
        shadow-[0_15px_45px_rgba(37,99,235,0.08)]
        transition-all
        duration-300

        ${
          hover
            ? "hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)]"
            : ""
        }

        ${paddings[padding]}
        ${className}
      `}
    >
      {(title || description) && (
        <div className="mb-8">

          {title && (
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-3 leading-8 text-slate-300">
              {description}
            </p>
          )}

        </div>
      )}

      {children}
    </div>
  );
}