interface ContentCardProps {
  title: string;
  value: string;
}

export default function ContentCard({
  title,
  value,
}: ContentCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <p className="text-sm font-medium text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>

    </div>
  );
}