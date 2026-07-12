interface ContentTableProps {
  title: string;
}

export default function ContentTable({
  title,
}: ContentTableProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Section
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Last Updated
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t">

              <td className="px-6 py-4">Homepage</td>

              <td className="px-6 py-4">Today</td>

              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Published
                </span>
              </td>

            </tr>

            <tr className="border-t">

              <td className="px-6 py-4">About</td>

              <td className="px-6 py-4">Yesterday</td>

              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Published
                </span>
              </td>

            </tr>

            <tr className="border-t">

              <td className="px-6 py-4">Contact</td>

              <td className="px-6 py-4">3 days ago</td>

              <td className="px-6 py-4">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                  Draft
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}