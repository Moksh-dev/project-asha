"use client";

interface Props {
  section: string;
}

export default function PropertyPanel({ section }: Props) {
  return (
    <div className="h-[750px] overflow-y-auto rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-white">
        {section} Settings
      </h2>

      <p className="mt-2 text-slate-300">
        Edit this section.
      </p>

      <div className="mt-8 space-y-6">

        <Input label="Heading" value={section} />

        <TextArea
          label="Description"
          value="Edit content here..."
        />

        <Input label="Primary Button" value="Learn More" />

        <Input label="Secondary Button" value="Join Now" />

        <button className="w-full rounded-xl border-2 border-dashed border-slate-300 py-8 font-semibold text-slate-300 hover:bg-slate-50">
          Replace Image
        </button>

      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold text-white">
        Save Changes
      </button>

    </div>
  );
}

function Input({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-slate-800">
        {label}
      </label>

      <input
        defaultValue={value}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-slate-800">
        {label}
      </label>

      <textarea
        rows={5}
        defaultValue={value}
        className="w-full rounded-xl border border-slate-300 p-4"
      />
    </div>
  );
}