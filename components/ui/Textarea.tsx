import { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Textarea({
  label,
  error,
  helperText,
  className = "",
  rows = 5,
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-semibold text-slate-800">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        {...props}
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-white
          placeholder:text-slate-400
          outline-none
          resize-y
          transition-all
          duration-200
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          }
          ${className}
        `}
      />

      {error ? (
        <p className="text-sm font-medium text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-sm text-slate-400">
          {helperText}
        </p>
      ) : null}

    </div>
  );
}