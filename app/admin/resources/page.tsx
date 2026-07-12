import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

const resources = [
  {
    title: "Volunteer Handbook.pdf",
    category: "Guide",
    size: "2.4 MB",
    updated: "Today",
  },
  {
    title: "Brand Guidelines.pdf",
    category: "Branding",
    size: "6.1 MB",
    updated: "Yesterday",
  },
  {
    title: "Chapter Starter Kit.pdf",
    category: "Training",
    size: "8.3 MB",
    updated: "Last Week",
  },
  {
    title: "Awareness Posters.zip",
    category: "Media",
    size: "18 MB",
    updated: "2 Weeks Ago",
  },
];

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Resources
            </h1>

            <p className="mt-2 text-slate-300">
              Manage downloadable files and training materials.
            </p>

          </div>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Upload Resource
          </button>

        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-6 py-4 text-left">
                  Resource
                </th>

                <th className="px-6 py-4 text-left">
                  Category
                </th>

                <th className="px-6 py-4 text-left">
                  Size
                </th>

                <th className="px-6 py-4 text-left">
                  Updated
                </th>

                <th className="px-6 py-4 text-right">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {resources.map((resource) => (

                <tr
                  key={resource.title}
                  className="border-t"
                >

                  <td className="px-6 py-5 font-semibold">
                    {resource.title}
                  </td>

                  <td className="px-6 py-5">
                    {resource.category}
                  </td>

                  <td className="px-6 py-5">
                    {resource.size}
                  </td>

                  <td className="px-6 py-5">
                    {resource.updated}
                  </td>

                  <td className="px-6 py-5 text-right">

                    <button className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200">
                      Download
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