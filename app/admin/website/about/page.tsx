import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AboutBuilder() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <h1 className="mt-8 text-4xl font-bold">
          About Page Builder
        </h1>

        <p className="mt-2 text-slate-700">
          Edit the About page content.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <div className="space-y-6">

            <div>

              <label className="mb-2 block font-semibold">
                Vision Heading
              </label>

              <input
                defaultValue="Our Vision"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                Vision Description
              </label>

              <textarea
                rows={5}
                defaultValue="Write your vision here..."
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                Mission Heading
              </label>

              <input
                defaultValue="Our Mission"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                Mission Description
              </label>

              <textarea
                rows={5}
                defaultValue="Write your mission here..."
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white">
              Save Changes
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}