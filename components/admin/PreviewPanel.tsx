interface Props {
  section: string;
}

export default function PreviewPanel({ section }: Props) {
  return (
    <div className="h-[750px] overflow-y-auto rounded-3xl bg-white p-8 shadow-sm">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Live Preview
        </h2>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          {section}
        </span>

      </div>

      <div className="mt-8 flex h-[620px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">

        <div className="text-center">

          <h3 className="text-3xl font-bold text-white">
            Homepage Preview
          </h3>

          <p className="mt-3 text-slate-300">
            Live website preview will appear here.
          </p>

        </div>

      </div>

    </div>
  );
}