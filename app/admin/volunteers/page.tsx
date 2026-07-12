import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

const volunteers = [
  {
    name: "Aarav Sharma",
    email: "aarav@gmail.com",
    chapter: "Delhi",
    status: "Approved",
  },
  {
    name: "Priya Patel",
    email: "priya@gmail.com",
    chapter: "Mumbai",
    status: "Pending",
  },
  {
    name: "Rohan Verma",
    email: "rohan@gmail.com",
    chapter: "Hyderabad",
    status: "Approved",
  },
  {
    name: "Ananya Singh",
    email: "ananya@gmail.com",
    chapter: "Lucknow",
    status: "Rejected",
  },
];

export default function VolunteersPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Volunteers
            </h1>

            <p className="mt-2 text-slate-300">
              Manage volunteer registrations and approvals.
            </p>

          </div>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Export CSV
          </button>

        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-6 py-4 text-left">
                  Name
                </th>

                <th className="px-6 py-4 text-left">
                  Email
                </th>

                <th className="px-6 py-4 text-left">
                  Chapter
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

              {volunteers.map((volunteer) => (

                <tr
                  key={volunteer.email}
                  className="border-t"
                >

                  <td className="px-6 py-5 font-semibold">
                    {volunteer.name}
                  </td>

                  <td className="px-6 py-5">
                    {volunteer.email}
                  </td>

                  <td className="px-6 py-5">
                    {volunteer.chapter}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        volunteer.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : volunteer.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {volunteer.status}
                    </span>

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