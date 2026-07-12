"use client";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  helperText?: string;
  disabled?: boolean;
}

export default function Switch({
  checked,
  onChange,
  label,
  helperText,
  disabled = false,
}: SwitchProps) {
  return (
    <div className="flex items-start justify-between gap-4">

      <div className="flex-1">

        {label && (
          <p className="font-semibold text-white">
            {label}
          </p>
        )}

        {helperText && (
          <p className="mt-1 text-sm text-slate-400">
            {helperText}
          </p>
        )}

      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          relative
          h-7
          w-12
          rounded-full
          transition-all
          duration-300
          ${
            checked
              ? "bg-blue-600"
              : "bg-slate-300"
          }
          ${
            disabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }
        `}
      >

        <span
          className={`
            absolute
            top-1
            h-5
            w-5
            rounded-full
            bg-white
            shadow-md
            transition-all
            duration-300
            ${
              checked
                ? "left-6"
                : "left-1"
            }
          `}
        />

      </button>

    </div>
  );
}