import { ReactNode } from "react";

interface SectionGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export default function SectionGrid({
  children,
  columns = 3,
  gap = "lg",
}: SectionGridProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-8",
    md: "gap-10",
    lg: "gap-12",
  };

  return (
    <div
      className={`
        grid
        ${columnClasses[columns]}
        ${gapClasses[gap]}
      `}
    >
      {children}
    </div>
  );
}