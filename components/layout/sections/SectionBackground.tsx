import { ReactNode } from "react";

interface SectionBackgroundProps {
  children: ReactNode;
  variant?: "white" | "slate" | "blue" | "gradient";
}

export default function SectionBackground({
  children,
  variant = "white",
}: SectionBackgroundProps) {
  const backgrounds = {
    white: "bg-white",
    slate: "bg-slate-50",
    blue: "bg-blue-50",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-slate-100",
  };

  return (
    <div
      className={`
        w-full
        ${backgrounds[variant]}
      `}
    >
      {children}
    </div>
  );
}