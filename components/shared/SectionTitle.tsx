interface Props {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-20 max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700">
        {badge}
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
        {title}

        {highlight && (
          <span className="text-blue-600">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {description}
        </p>
      )}

    </div>
  );
}