import Link from "next/link";
import { LockKeyhole, Mail } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#F5F9FF] px-5 py-12 text-[#0F172A]">
      <div className="w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#DDEBFF] bg-white shadow-[0_24px_80px_rgba(15,23,42,.1)] md:grid md:grid-cols-[.9fr_1.1fr]">
        <section className="bg-gradient-to-br from-[#1F5EFF] via-[#1877FF] to-[#00AEF0] p-8 text-white md:p-10">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/18 text-xl font-black backdrop-blur">
            A
          </div>
          <h1 className="font-display mt-28 text-4xl font-black leading-tight md:text-5xl">
            Project ASHA Admin OS
          </h1>
          <p className="mt-5 leading-8 text-white/82">
            Manage public content, chapters, volunteers, internal structure, and analytics from one clean control room.
          </p>
        </section>

        <section className="p-8 md:p-10">
          <p className="font-hand text-lg text-[#1F5EFF]">
            Founder access
          </p>
          <h2 className="font-display mt-3 text-3xl font-black">
            Sign in
          </h2>
          <p className="mt-3 text-[#475569]">
            Authentication is ready for Supabase wiring. Use official credentials once they are created.
          </p>

          <form className="mt-8 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-black text-[#475569]">Email</span>
              <span className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
                <Mail size={18} className="text-[#94A3B8]" />
                <input
                  type="email"
                  placeholder="founder@projectasha.org"
                  className="w-full bg-transparent font-semibold outline-none placeholder:text-[#94A3B8]"
                />
              </span>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-[#475569]">Password</span>
              <span className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
                <LockKeyhole size={18} className="text-[#94A3B8]" />
                <input
                  type="password"
                  placeholder="Create in Supabase Auth"
                  className="w-full bg-transparent font-semibold outline-none placeholder:text-[#94A3B8]"
                />
              </span>
            </label>

            <Link
              href="/admin/dashboard"
              className="mt-2 rounded-2xl bg-[#1F5EFF] px-5 py-4 text-center text-sm font-black text-white shadow-[0_14px_35px_rgba(31,94,255,.22)] transition hover:bg-[#184DD8]"
            >
              Open dashboard preview
            </Link>
          </form>

          <Link href="/" className="mt-8 inline-flex font-black text-[#1F5EFF] hover:underline">
            Back to website
          </Link>
        </section>
      </div>
    </main>
  );
}
