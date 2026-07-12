"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
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

        <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-56 border-none bg-transparent p-0 text-white outline-none"
          />

        </div>

        <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">

          <Bell
            size={20}
            className="text-slate-700"
          />

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            A
          </div>

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