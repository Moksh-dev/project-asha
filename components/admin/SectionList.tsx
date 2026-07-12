"use client";

interface SectionListProps {
  sections: string[];
  selected: string;
  setSelected: (section: string) => void;
}

export default function SectionList({
  sections,
  selected,
  setSelected,
}: SectionListProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Sections
      </h2>

      <div className="space-y-3">

        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setSelected(section)}
            className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
              selected === section
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {section}
          </button>
        ))}

      </div>

    </div>
  );
}