"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavLink from "./Navlink";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

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

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50">

      <div className="mx-auto flex max-w-[1280px] items-center justify-between rounded-full border border-white/50 bg-white/45 px-8 py-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(37,99,235,.12)]">

        <Logo />

        <nav className="hidden items-center gap-2 lg:flex">

          {links.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

        <div className="hidden items-center gap-4 lg:flex">

          <Link href="/join">
            <Button variant="secondary">
              Join Us ✨
            </Button>
          </Link>

        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>

      </div>

    </header>
  );
}