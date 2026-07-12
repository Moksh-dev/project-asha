import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

const users = [
  {
    name: "Founder",
    email: "founder@projectasha.org",
    role: "Founder",
    status: "Active",
  },
  {
    name: "Priya Sharma",
    email: "priya@projectasha.org",
    role: "Core Team",
    status: "Active",
  },
  {
    name: "Rahul Mehta",
    email: "rahul@projectasha.org",
    role: "Chapter Lead",
    status: "Active",
  },
  {
    name: "Ananya Singh",
    email: "ananya@projectasha.org",
    role: "Volunteer",
    status: "Pending",
  },
];

export default function UsersPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Users
            </h1>

            <p className="mt-2 text-slate-300">
              Manage founders, team members and volunteers.
            </p>

          </div>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            + Invite User
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
                  Role
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

              {users.map((user) => (

                <tr
                  key={user.email}
                  className="border-t"
                >

                  <td className="px-6 py-5 font-semibold">
                    {user.name}
                  </td>

                  <td className="px-6 py-5">
                    {user.email}
                  </td>

                  <td className="px-6 py-5">
                    {user.role}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-right">

                    <button className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200">
                      Edit
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