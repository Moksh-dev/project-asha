interface StatItem {
  label: string;
  value: string;
}

interface StatsProps {
  items: StatItem[];
}

export default function Stats({
  items,
}: StatsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {items.map((item) => (

        <div
          key={item.label}
          className="rounded-3xl bg-white p-8 text-center shadow-sm"
        >

          <h3 className="text-4xl font-bold text-blue-600">
            {item.value}
          </h3>

          <p className="mt-3 text-slate-300">
            {item.label}
          </p>

        </div>

      ))}

    </div>
  );
}