"use client";

import { useState } from "react";
import { AdminButton, AdminCard, AdminShell } from "@/components/admin/v2/AdminShell";

export default function SupabaseSetupPage() {
  const [message, setMessage] = useState("Complete the SQL and first-admin steps in supabase/SETUP.md before running the import.");
  const [running, setRunning] = useState(false);
  const migrate = async () => { setRunning(true); try { const response = await fetch("/api/admin/migrate", { method: "POST" }); const body = await response.json(); if (!response.ok) throw new Error(body.error ?? "Migration failed."); setMessage(`Import complete: ${body.uploaded} existing images and documents are now in Supabase Storage.`); } catch (error) { setMessage(error instanceof Error ? error.message : "Migration failed."); } finally { setRunning(false); } };
  return <AdminShell title="Supabase setup" subtitle="Finish the one-time connection, then import the current public website into the database and media library."><AdminCard className="max-w-3xl"><h3 className="text-2xl font-black">One-time content import</h3><ol className="mt-5 grid list-decimal gap-3 pl-5 leading-7 text-[#475569]"><li>Run the SQL migration file in the Supabase SQL Editor.</li><li>Sign in through the Admin login page, then add your account as an Admin.</li><li>Return here and import the current website content and public files.</li></ol><AdminButton onClick={() => void migrate()}>{running ? "Importing…" : "Import current website to Supabase"}</AdminButton><p className="mt-5 rounded-2xl bg-[#F5F9FF] p-4 text-sm font-semibold text-[#475569]">{message}</p></AdminCard></AdminShell>;
}
