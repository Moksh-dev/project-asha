import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ChapterCardProps {
  name: string;
  state: string;
  volunteers: number;
  description: string;
}

export default function ChapterCard({
  name,
  state,
  volunteers,
  description,
}: ChapterCardProps) {
  return (
    <Card
      hover
      padding="lg"
      className="h-full"
    >
      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-2xl font-bold text-white">
            {name}
          </h3>

          <p className="mt-2 text-slate-400">
            {state}
          </p>

        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {volunteers} Volunteers
        </span>

      </div>

      <p className="mt-6 leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-8">

        <Link href="/join">

          <Button>
            Join Chapter
          </Button>

        </Link>

      </div>

    </Card>
  );
}