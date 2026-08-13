"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Topbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const pages = ["dashboard", "website", "team", "media", "blogs", "resources", "forms", "analytics", "settings"];
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const match = pages.find((page) => page.includes(query.trim().toLowerCase()));
    if (match) router.push(`/admin/${match}`);
  };
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-300">
          Manage your entire website from one place.
        </p>

      </div>

      <div className="flex items-center gap-5">

        <form onSubmit={submit} className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className="w-56 border-none bg-transparent p-0 text-white outline-none"
          />

        </form>

        <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">

          <Bell
            size={20}
            className="text-slate-700"
          />

        </button>

        <div className="flex items-center gap-3">

          <Image src="/project-asha-logo.png" alt="Project ASHA" width={44} height={44} className="h-11 w-11 rounded-full bg-white object-contain" />

          <div>

            <p className="font-semibold text-white">
              Admin
            </p>

            <p className="text-sm text-slate-400">
              Founder
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}
