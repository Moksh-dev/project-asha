import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: "white" | "slate" | "blue";
}

export default function Section({
  children,
  background = "white",
  className = "",
  ...props
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    slate: "bg-[#F8FBFF]",
    blue: "bg-[#EDF6FF]",
  };

  return (
    <section
      {...props}
      className={`
        py-32
        lg:py-40
        ${backgrounds[background]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}