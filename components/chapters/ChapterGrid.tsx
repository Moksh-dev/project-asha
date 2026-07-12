import ChapterCard from "./ChapterCard";

interface Chapter {
  name: string;
  state: string;
  volunteers: number;
  description: string;
}

interface ChapterGridProps {
  chapters: Chapter[];
}

export default function ChapterGrid({
  chapters,
}: ChapterGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {chapters.map((chapter) => (

        <ChapterCard
          key={chapter.name}
          name={chapter.name}
          state={chapter.state}
          volunteers={chapter.volunteers}
          description={chapter.description}
        />

      ))}

    </div>
  );
}