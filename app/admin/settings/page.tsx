import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">

          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-2 text-slate-300">
            Configure your Project A.S.H.A. CMS.
          </p>

        </div>

        <div className="mt-10 grid gap-6">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold">
              Organization
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Organization Name
                </label>

                <input
                  defaultValue="Project A.S.H.A."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Website
                </label>

                <input
                  defaultValue="https://projectasha.org"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold">
              Admin Account
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Name
                </label>

                <input
                  defaultValue="Founder"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email
                </label>

                <input
                  defaultValue="founder@projectasha.org"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold">
              Security
            </h2>

            <div className="mt-6">

              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Change Password
              </button>

            </div>

          </div>

          <div className="flex justify-end">

            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
              Save Settings
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}