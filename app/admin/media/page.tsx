import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

const media = [
  {
    name: "hero-banner.jpg",
    type: "Image",
    size: "2.4 MB",
    uploaded: "Today",
  },
  {
    name: "chapter-delhi.png",
    type: "Image",
    size: "1.1 MB",
    uploaded: "Yesterday",
  },
  {
    name: "awareness-poster.pdf",
    type: "PDF",
    size: "4.7 MB",
    uploaded: "3 days ago",
  },
  {
    name: "campaign-video.mp4",
    type: "Video",
    size: "26 MB",
    uploaded: "Last Week",
  },
];

export default function MediaPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Media Library
            </h1>

            <p className="mt-2 text-slate-300">
              Manage images, videos and documents used across the website.
            </p>

          </div>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Upload Media
          </button>

        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-6 py-4 text-left">
                  File Name
                </th>

                <th className="px-6 py-4 text-left">
                  Type
                </th>

                <th className="px-6 py-4 text-left">
                  Size
                </th>

                <th className="px-6 py-4 text-left">
                  Uploaded
                </th>

                <th className="px-6 py-4 text-right">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {media.map((file) => (

                <tr
                  key={file.name}
                  className="border-t"
                >

                  <td className="px-6 py-5 font-semibold">
                    {file.name}
                  </td>

                  <td className="px-6 py-5">
                    {file.type}
                  </td>

                  <td className="px-6 py-5">
                    {file.size}
                  </td>

                  <td className="px-6 py-5">
                    {file.uploaded}
                  </td>

                  <td className="px-6 py-5 text-right">

                    <button className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200">
                      View
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