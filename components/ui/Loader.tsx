interface LoaderProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

export default function Loader({
  text = "Loading...",
  size = "md",
}: LoaderProps) {
  const spinnerSize = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">

      <div
        className={`
          ${spinnerSize[size]}
          animate-spin
          rounded-full
          border-blue-600
          border-t-transparent
        `}
      />

      <p className="text-sm font-medium text-slate-300">
        {text}
      </p>

    </div>
  );
}