import { ReactNode } from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white px-8 py-20 text-center">

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">

        <Inbox
          size={36}
          className="text-slate-400"
        />

      </div>

      <h2 className="mt-8 text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 max-w-md leading-7 text-slate-300">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}

    </div>
  );
}