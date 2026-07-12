import { ReactNode } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

interface DashboardWrapperProps {
  children: ReactNode;
}

export default function DashboardWrapper({
  children,
}: DashboardWrapperProps) {
  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">

          {children}

        </div>

      </section>

    </main>
  );
}