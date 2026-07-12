import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function NavigationBuilder() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <h1 className="mt-8 text-4xl font-bold">
          Navigation Builder
        </h1>

        <p className="mt-2 text-slate-700">
          Manage your website navigation and navbar buttons.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <div className="space-y-6">

            <div>

              <label className="mb-2 block font-semibold">
                Logo Text
              </label>

              <input
                defaultValue="Project A.S.H.A"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                Navigation Links
              </label>

              <textarea
                rows={5}
                defaultValue={`Home
About
Chapters
Gallery
Blogs
Contact`}
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                Primary Button Text
              </label>

              <input
                defaultValue="Join Us"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                Primary Button Link
              </label>

              <input
                defaultValue="/join"
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