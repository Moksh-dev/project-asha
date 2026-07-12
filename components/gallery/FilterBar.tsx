"use client";

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onChange: (filter: string) => void;
}

export default function FilterBar({
  filters,
  activeFilter,
  onChange,
}: FilterBarProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-4">

      {filters.map((filter) => (

        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`
            rounded-full
            px-6
            py-3
            text-sm
            font-semibold
            transition-all
            duration-200
            ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700 shadow-sm hover:bg-slate-100"
            }
          `}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}