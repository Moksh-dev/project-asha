import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

const blogs = [
  {
    title: "Ending Human Trafficking Starts With Awareness",
    author: "Founder",
    status: "Published",
    date: "02 Jul 2026",
  },
  {
    title: "Youth Can Change Society",
    author: "Editorial Team",
    status: "Draft",
    date: "30 Jun 2026",
  },
  {
    title: "Building Strong Chapters",
    author: "Delhi Chapter",
    status: "Published",
    date: "28 Jun 2026",
  },
  {
    title: "Volunteer Stories",
    author: "Mumbai Chapter",
    status: "Review",
    date: "25 Jun 2026",
  },
];

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Blogs
            </h1>

            <p className="mt-2 text-slate-300">
              Create, edit and publish blog articles.
            </p>

          </div>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            + New Blog
          </button>

        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-6 py-4 text-left">
                  Title
                </th>

                <th className="px-6 py-4 text-left">
                  Author
                </th>

                <th className="px-6 py-4 text-left">
                  Date
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-right">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {blogs.map((blog) => (

                <tr
                  key={blog.title}
                  className="border-t"
                >

                  <td className="px-6 py-5 font-semibold">
                    {blog.title}
                  </td>

                  <td className="px-6 py-5">
                    {blog.author}
                  </td>

                  <td className="px-6 py-5">
                    {blog.date}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        blog.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : blog.status === "Draft"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {blog.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-right">

                    <button className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200">
                      Edit
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}