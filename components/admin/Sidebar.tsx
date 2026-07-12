"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Users,
  Image,
  FileText,
  FolderOpen,
  BarChart3,
  Settings,
  ClipboardList,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Website Builder",
    href: "/admin/website",
    icon: Globe,
  },
  {
    name: "Organization",
    href: "/admin/team",
    icon: Users,
  },
  {
    name: "Gallery",
    href: "/admin/media",
    icon: Image,
  },
  {
    name: "Blogs",
    href: "/admin/blogs",
    icon: FileText,
  },
  {
    name: "Resources",
    href: "/admin/resources",
    icon: FolderOpen,
  },
  {
    name: "Applications",
    href: "/admin/forms",
    icon: ClipboardList,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white">

      <div className="border-b border-slate-800 p-8">

        <h1 className="text-3xl font-bold">
          A.S.H.A
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Founder OS
        </p>

      </div>

      <nav className="space-y-2 p-5">

        {menu.map((item) => {

          const Icon = item.icon;

          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span>{item.name}</span>

            </Link>
          );

        })}

      </nav>

    </aside>
  );
}