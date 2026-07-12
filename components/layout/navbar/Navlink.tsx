"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`
        rounded-lg
        px-3
        py-2
        text-sm
        font-semibold
        transition-colors
        ${
          active
            ? "text-blue-600"
            : "text-slate-700 hover:text-white"
        }
      `}
    >
      {children}
    </Link>
  );
}