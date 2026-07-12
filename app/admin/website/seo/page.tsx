import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function SEOBuilder() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">

          <h1 className="text-4xl font-bold text-white">
            SEO Settings
          </h1>

          <p className="mt-2 text-slate-300">
            Manage your website's search engine optimization.
          </p>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <div className="space-y-6">

            <div>

              <label className="mb-2 block font-semibold text-slate-800">
                Website Title
              </label>

              <input
                defaultValue="Project A.S.H.A."
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold text-slate-800">
                Meta Description
              </label>

              <textarea
                rows={5}
                defaultValue="Project A.S.H.A. is a youth-led movement creating awareness against human trafficking through education, leadership and community action."
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold text-slate-800">
                Keywords
              </label>

              <input
                defaultValue="Project ASHA, Human Trafficking, NGO, Youth, Awareness, Volunteers"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold text-slate-800">
                Open Graph Image URL
              </label>

              <input
                defaultValue="/images/og-image.jpg"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold text-slate-800">
                Canonical URL
              </label>

              <input
                defaultValue="https://projectasha.org"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
              Save SEO Settings
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}