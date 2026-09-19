"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [redirectError, setRedirectError] = useState("");
  useEffect(() => { setRedirectError(new URLSearchParams(window.location.search).get("error") ?? ""); }, []);
  const signIn = async (event: React.FormEvent) => {
    event.preventDefault(); setSending(true); setMessage("");
    try {
      const { error } = await supabaseBrowser.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=/admin/dashboard` } });
      setMessage(error ? error.message : "Check your email for the secure sign-in link.");
    } catch {
      setMessage("Could not reach Supabase. If this is the deployed site, add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to Vercel Production, then redeploy. If this is localhost, stop and restart the development server after saving .env.local.");
    } finally { setSending(false); }
  };
  return <main className="grid min-h-screen place-items-center bg-[#F5F9FF] px-5 py-12 text-[#0F172A]"><div className="w-full max-w-lg rounded-[2.5rem] border border-[#DDEBFF] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,.1)] md:p-10"><p className="font-hand text-lg text-[#1F5EFF]">Project ASHA</p><h1 className="font-display mt-3 text-4xl font-black">Admin sign in</h1><p className="mt-3 leading-7 text-[#475569]">Use your approved admin email. We will send a secure one-time sign-in link.</p><form onSubmit={signIn} className="mt-8 grid gap-4"><label className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3"><Mail size={18} className="text-[#94A3B8]"/><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full bg-transparent font-semibold outline-none" /></label><button disabled={sending} className="rounded-2xl bg-[#1F5EFF] px-5 py-4 text-sm font-black text-white disabled:opacity-60">{sending ? "Sending link…" : "Email me a sign-in link"}</button></form>{redirectError ? <p className="mt-5 rounded-2xl bg-[#FEE2E2] p-4 text-sm font-semibold text-[#B91C1C]">{redirectError === "not-authorized" ? "This email is signed in but is not yet approved as an admin. Add its Supabase user UUID to admin_users, then sign in again." : redirectError}</p> : null}{message ? <p className="mt-5 rounded-2xl bg-[#F5F9FF] p-4 text-sm font-semibold text-[#475569]">{message}</p> : null}<Link href="/" className="mt-8 inline-flex font-black text-[#1F5EFF] hover:underline">Back to website</Link></div></main>;
}
