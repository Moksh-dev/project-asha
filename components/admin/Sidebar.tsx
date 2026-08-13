"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Users,
  Image as ImageIcon,
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
    icon: ImageIcon,
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

        <Image src="/project-asha-logo.png" alt="Project ASHA" width={96} height={96} className="h-16 w-16 rounded-2xl bg-white object-contain" />

        <p className="mt-2 text-sm text-slate-400">
          Private control room
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
