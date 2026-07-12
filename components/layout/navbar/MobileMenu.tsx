"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Chapters", href: "/chapters" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resources", href: "/resources" },
  { name: "Blogs", href: "/blogs" },
  { name: "Join", href: "/join" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">

      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl p-2 hover:bg-slate-100"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-4 w-full border-t border-white/10 bg-white shadow-xl">

          <nav className="flex flex-col p-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-4 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {link.name}
              </Link>
            ))}

          </nav>

        </div>
      )}

    </div>
  );
}