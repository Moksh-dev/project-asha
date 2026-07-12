interface Activity {
  title: string;
  time: string;
}

interface RecentActivityProps {
  activities?: Activity[];
}

export default function RecentActivity({
  activities = [
    {
      title: "Homepage updated",
      time: "2 mins ago",
    },
    {
      title: "New Chapter Added",
      time: "15 mins ago",
    },
    {
      title: "Gallery Updated",
      time: "1 hour ago",
    },
    {
      title: "Blog Published",
      time: "Today",
    },
  ],
}: RecentActivityProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-5"
          >
            <span className="font-medium text-slate-800">
              {activity.title}
            </span>

            <span className="text-sm text-slate-400">
              {activity.time}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}