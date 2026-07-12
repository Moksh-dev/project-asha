"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: "sm" | "md" | "lg";
}

export default function Drawer({
  open,
  onClose,
  title,
  children,
  width = "md",
}: DrawerProps) {
  if (!open) return null;

  const widths = {
    sm: "w-[350px]",
    md: "w-[500px]",
    lg: "w-[700px]",
  };

  return (
    <div className="fixed inset-0 z-50">

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <aside
        className={`
          absolute
          right-0
          top-0
          h-screen
          ${widths[width]}
          bg-white
          shadow-2xl
          flex
          flex-col
        `}
      >

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {children}

        </div>

      </aside>

    </div>
  );
}