import { ReactNode } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

interface AdminWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
}

export default function AdminWrapper({
  title,
  description,
  children,
  action,
}: AdminWrapperProps) {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8 flex items-end justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              {title}
            </h1>

            {description && (
              <p className="mt-2 text-slate-300">
                {description}
              </p>
            )}

          </div>

          {action}

        </div>

        <div className="mt-10">
          {children}
        </div>

      </section>

    </main>
  );
}