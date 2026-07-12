interface PaperDividerProps {
  className?: string;
}

export default function PaperDivider({
  className = "",
}: PaperDividerProps) {
  return (
    <div
      className={`
        relative
        my-20
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="absolute rounded-full border border-white/10 bg-white px-4 py-2 shadow-sm">

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-blue-600" />

          <span className="h-2 w-2 rounded-full bg-slate-300" />

          <span className="h-2 w-2 rounded-full bg-blue-600" />

        </div>

      </div>

    </div>
  );
}