import Link from "next/link";
import Card from "@/components/ui/Card";

const categories = [
  "Awareness",
  "Youth Leadership",
  "Volunteers",
  "Chapters",
  "Events",
];

const recentPosts = [
  {
    title: "Ending Human Trafficking Starts With Awareness",
    slug: "ending-human-trafficking",
  },
  {
    title: "The Power of Youth Leadership",
    slug: "power-of-youth",
  },
  {
    title: "Communities Create Change",
    slug: "community-action",
  },
];

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">

      <Card
        title="Categories"
        padding="lg"
      >
        <div className="space-y-3">

          {categories.map((category) => (
            <button
              key={category}
              className="w-full rounded-xl bg-slate-100 px-4 py-3 text-left font-medium transition hover:bg-blue-100 hover:text-blue-700"
            >
              {category}
            </button>
          ))}

        </div>
      </Card>

      <Card
        title="Recent Posts"
        padding="lg"
      >
        <div className="space-y-5">

          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="block rounded-xl border border-white/10 p-4 transition hover:border-blue-600 hover:bg-blue-50"
            >
              <h4 className="font-semibold text-white">
                {post.title}
              </h4>
            </Link>
          ))}

        </div>
      </Card>

    </aside>
  );
}