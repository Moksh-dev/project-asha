import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export default function Container({
  children,
  size = "lg",
  className = "",
  ...props
}: ContainerProps) {
  const widths = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-[1280px]",
    full: "max-w-full",
  };

  return (
    <div
      {...props}
      className={`
        mx-auto
        w-full
        px-6
        md:px-8
        xl:px-10
        ${widths[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}