import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
  primary:
    "rounded-full bg-gradient-to-r from-[#1565D8] to-[#4FA4F5] text-white shadow-[0_12px_30px_rgba(37,99,235,.25)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,99,235,.35)]",

  secondary:
    "rounded-full bg-slate-900 text-white hover:bg-slate-800",

  outline:
    "rounded-full border border-blue-200 bg-white text-blue-700 hover:bg-blue-50",

  danger:
    "rounded-full bg-red-600 text-white",

  ghost:
    "rounded-full bg-transparent text-blue-700 hover:bg-blue-50",
};

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-semibold
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}