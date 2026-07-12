"use client";

import { useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import SectionList from "@/components/admin/SectionList";
import PropertyPanel from "@/components/admin/PropertyPanel";
import PreviewPanel from "@/components/admin/PreviewPanel";

export default function HomepageBuilder() {
  const [selected, setSelected] = useState("Hero");

  const sections = [
    "Hero",
    "Mission",
    "Impact",
    "Story",
    "CTA",
    "Chapters",
  ];

  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">

          <h1 className="text-4xl font-bold text-white">
            Homepage Builder
          </h1>

          <p className="mt-2 text-slate-700">
            Edit every section of your homepage visually.
          </p>

        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">

          <div className="col-span-2">

            <SectionList
              sections={sections}
              selected={selected}
              setSelected={setSelected}
            />

          </div>

          <div className="col-span-5">

            <PropertyPanel
              section={selected}
            />

          </div>

          <div className="col-span-5">

            <PreviewPanel
              section={selected}
            />

          </div>

        </div>

      </section>

    </main>
  );
}