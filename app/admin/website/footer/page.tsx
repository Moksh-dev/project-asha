import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function FooterBuilder() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <h1 className="mt-8 text-4xl font-bold">
          Footer Builder
        </h1>

        <p className="mt-2 text-slate-700">
          Manage your website footer and social media links.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-semibold">
                Footer Title
              </label>

              <input
                defaultValue="Project A.S.H.A"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Footer Description
              </label>

              <textarea
                rows={4}
                defaultValue="Together we can build a future free from human trafficking."
                className="w-full rounded-xl border border-slate-300 p-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Facebook Link
              </label>

              <input
                defaultValue="https://facebook.com/"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Instagram Link
              </label>

              <input
                defaultValue="https://instagram.com/"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                LinkedIn Link
              </label>

              <input
                defaultValue="https://linkedin.com/"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
              Save Changes
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}