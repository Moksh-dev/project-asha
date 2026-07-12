import Link from "next/link";
import Card from "@/components/ui/Card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  slug,
  image,
}: BlogCardProps) {
  return (
    <Card
      hover
      padding="none"
      className="overflow-hidden"
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover"
        />
      ) : (
        <div className="flex h-56 items-center justify-center bg-slate-200">
          <span className="font-semibold text-slate-400">
            Blog Image
          </span>
        </div>
      )}

      <div className="p-8">

        <div className="flex items-center gap-3 text-sm text-slate-400">

          <span>{date}</span>

          <span>•</span>

          <span>{author}</span>

        </div>

        <h2 className="mt-5 text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          {excerpt}
        </p>

        <Link
          href={`/blogs/${slug}`}
          className="mt-8 inline-block font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Read More →
        </Link>

      </div>

    </Card>
  );
}