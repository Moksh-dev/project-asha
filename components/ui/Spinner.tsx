interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Spinner({
  size = "md",
  className = "",
}: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-[3px]",
    lg: "h-10 w-10 border-4",
    xl: "h-16 w-16 border-4",
  };

  return (
    <div
      className={`
        inline-block
        animate-spin
        rounded-full
        border-blue-600
        border-t-transparent
        ${sizes[size]}
        ${className}
      `}
      aria-label="Loading"
      role="status"
    />
  );
}