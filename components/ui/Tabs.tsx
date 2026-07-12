"use client";

import { ReactNode } from "react";

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tab: string) => void;
  children?: ReactNode;
}

export default function Tabs({
  tabs,
  activeTab,
  onChange,
  children,
}: TabsProps) {
  return (
    <div>

      <div className="flex flex-wrap gap-3 rounded-2xl bg-slate-100 p-2">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`
              rounded-xl
              px-5
              py-3
              text-sm
              font-semibold
              transition-all
              duration-200
              ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-300 hover:bg-slate-200"
              }
            `}
          >
            {tab.label}
          </button>

        ))}

      </div>

      <div className="mt-6">

        {children}

      </div>

    </div>
  );
}