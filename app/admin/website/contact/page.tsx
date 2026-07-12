import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function ContactBuilder() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <h1 className="mt-8 text-4xl font-bold">
          Contact Page Builder
        </h1>

        <p className="mt-2 text-slate-700">
          Manage contact information displayed on the website.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-semibold">
                Email Address
              </label>

              <input
                defaultValue="contact@projectasha.org"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Phone Number
              </label>

              <input
                defaultValue="+91 9876543210"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Address
              </label>

              <textarea
                rows={4}
                defaultValue="Project A.S.H.A Headquarters"
                className="w-full rounded-xl border border-slate-300 p-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Google Maps Link
              </label>

              <input
                defaultValue="https://maps.google.com/"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
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