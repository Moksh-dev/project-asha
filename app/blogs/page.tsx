import Link from "next/link";

const blogs = [
  {
    slug: "ending-human-trafficking",
    title: "Ending Human Trafficking Starts With Awareness",
    excerpt:
      "Discover how awareness and youth leadership can help combat human trafficking.",
    date: "July 2026",
  },
  {
    slug: "power-of-youth",
    title: "The Power of Youth Leadership",
    excerpt:
      "How student-led initiatives are creating measurable social impact across India.",
    date: "June 2026",
  },
  {
    slug: "community-action",
    title: "Communities Create Change",
    excerpt:
      "Why every local community plays an important role in prevention and awareness.",
    date: "May 2026",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="mx-auto max-w-[1280px] px-6 py-20">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-white">
            Latest Blogs
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            Stories, updates and awareness articles from Project A.S.H.A.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog) => (

            <article
              key={blog.slug}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <p className="text-sm font-semibold text-blue-600">
                {blog.date}
              </p>

              <h2 className="mt-4 text-2xl font-bold text-white">
                {blog.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                {blog.excerpt}
              </p>

              <Link
                href={`/blogs/${blog.slug}`}
                className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Read Article
              </Link>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}