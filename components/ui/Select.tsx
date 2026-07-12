import { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  placeholder?: string;
  helperText?: string;
  error?: string;
}

export default function Select({
  label,
  options,
  placeholder,
  helperText,
  error,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-semibold text-slate-800">
          {label}
        </label>
      )}

      <select
        {...props}
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-white
          outline-none
          transition-all
          duration-200
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          }
          ${className}
        `}
      >

        {placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}

      </select>

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