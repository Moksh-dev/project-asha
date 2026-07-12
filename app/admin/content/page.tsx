import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function ContentPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <h1 className="mt-8 text-4xl font-bold">
          Content Management
        </h1>

        <p className="mt-2 text-slate-700">
          Manage all website content from one place.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Homepage</h2>
            <p className="mt-3 text-slate-300">
              Edit homepage sections and content.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-slate-300">
              Update mission, vision and organization details.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Resources</h2>
            <p className="mt-3 text-slate-300">
              Manage downloadable resources and documents.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}