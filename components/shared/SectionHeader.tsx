interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-24 max-w-4xl text-center"
          : "mb-20 max-w-4xl"
      }
    >
      {eyebrow && (
        <p
          className="mb-6 text-2xl text-[#165CC7]"
          style={{
            fontFamily: "var(--font-caveat)",
          }}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="text-5xl font-black leading-tight text-[#153B73] md:text-6xl"
        style={{
          fontFamily: "var(--font-heading)",
        }}
      >
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}