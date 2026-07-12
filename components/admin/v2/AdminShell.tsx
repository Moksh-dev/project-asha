"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { adminNav } from "./adminData";

export function AdminShell({
  title,
  subtitle,
  children,
  action,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="flex min-h-screen bg-[#F5F9FF] text-[#0F172A]">
      <aside className="sticky top-0 h-screen w-72 border-r border-[#DDEBFF] bg-white">
        <div className="border-b border-[#E2E8F0] p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1F5EFF] font-black text-white shadow-[0_12px_30px_rgba(31,94,255,.22)]">
              A
            </span>
            <div>
              <h1 className="text-xl font-black">ASHA Admin</h1>
              <p className="text-sm font-semibold text-[#64748B]">Founder OS</p>
            </div>
          </div>
        </div>
        <nav className="grid gap-1 p-4">
          {adminNav.map((item) => {
            const Icon = item.icon;
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black transition ${
                  active
                    ? "bg-[#1F5EFF] text-white shadow-[0_14px_35px_rgba(31,94,255,.2)]"
                    : "text-[#475569] hover:bg-[#F5F9FF] hover:text-[#1F5EFF]"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="min-w-0 flex-1 p-6 lg:p-8">
        <header className="rounded-[2rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,.06)]">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="font-hand text-lg text-[#1F5EFF]">Project ASHA</p>
              <h2 className="font-display mt-2 text-2xl font-black md:text-3xl">{title}</h2>
              <p className="mt-2 text-[#475569]">{subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
                <Search size={18} className="text-[#94A3B8]" />
                <input
                  placeholder="Search admin..."
                  className="w-48 bg-transparent text-sm font-semibold text-[#0F172A] outline-none placeholder:text-[#94A3B8]"
                />
              </label>
              <button className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F5F9FF] text-[#1F5EFF] transition hover:bg-[#1F5EFF] hover:text-white">
                <Bell size={18} />
              </button>
              {action}
            </div>
          </div>
        </header>
        <div className="mt-8">{children}</div>
      </section>
    </main>
  );
}

export function AdminCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[2rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,.06)] ${className}`}>
      {children}
    </div>
  );
}

export function AdminButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-2xl bg-[#1F5EFF] px-5 py-3 text-sm font-black text-white shadow-[0_14px_35px_rgba(31,94,255,.2)] transition hover:bg-[#184DD8]">
      {children}
    </button>
  );
}

export function StatusBadge({ value }: { value: string }) {
  const tone =
    value === "Active" || value === "Published" || value === "Approved"
      ? "bg-[#DCFCE7] text-[#16A34A]"
      : value === "Hidden" || value === "Pending" || value === "Onboarding"
        ? "bg-[#FEF3C7] text-[#F59E0B]"
        : "bg-[#DBEAFE] text-[#2563EB]";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ${tone}`}>
      {value}
    </span>
  );
}
