import { InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  helperText?: string;
}

export default function Checkbox({
  label,
  helperText,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3">

      <input
        type="checkbox"
        className={`
          mt-1
          h-5
          w-5
          rounded
          border-slate-300
          text-blue-600
          focus:ring-2
          focus:ring-blue-500
          ${className}
        `}
        {...props}
      />

      <div>

        <p className="font-medium text-white">
          {label}
        </p>

        {helperText && (
          <p className="mt-1 text-sm text-slate-400">
            {helperText}
          </p>
        )}

      </div>

    </label>
  );
}