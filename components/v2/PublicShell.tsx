"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { contactDetails, footerColumns, getCurrentYear, navLinks } from "./data";

const footerTagline = ["Awareness", "Safety", "Hope", "Action"];

function LogoMark() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Project ASHA home">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-asha-green text-sm font-black text-white shadow-soft transition group-hover:scale-105">
        A
      </span>
      <span className="leading-none">
        <span className="font-display block text-lg font-black leading-none text-asha-green">A.S.H.A.</span>
        <span className="block text-[11px] font-black uppercase text-asha-muted">Project</span>
      </span>
    </Link>
  );
}

export function PublicNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/82 px-4 py-3 shadow-soft backdrop-blur-2xl md:px-6">
        <LogoMark />
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-asha-green text-white" : "text-asha-muted hover:bg-asha-cloud hover:text-asha-green"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/get-involved#volunteer" className="hidden rounded-full bg-gradient-to-r from-asha-green to-asha-coral px-5 py-3 text-sm font-black text-white shadow-coral transition hover:-translate-y-0.5 lg:inline-flex">
          Start helping
        </Link>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full bg-asha-cloud text-asha-ink lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/80 bg-white p-3 shadow-soft lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-bold text-asha-muted hover:bg-asha-cloud hover:text-asha-green"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="bg-asha-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <LogoMark />
          <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
            A youth-led social impact platform building awareness, chapters, partnerships, and action against exploitation across India.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {footerTagline.map((word) => (
              <span
                key={word}
                className="font-hand rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base text-white"
              >
                {word}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {contactDetails.map((detail) => (
              <span key={detail} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                {detail}
              </span>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="font-black">{column.title}</h3>
            <div className="mt-5 grid gap-3">
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/55">
        © {getCurrentYear()} Project ASHA. Built for hope, safety, and collective action.
      </div>
    </footer>
  );
}

export default function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNav />
      {children}
      <PublicFooter />
    </>
  );
}
