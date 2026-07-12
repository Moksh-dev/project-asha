export default function FooterBottom() {
  return (
    <div className="mt-16 border-t border-white/10 pt-8">

      <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Project A.S.H.A. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm">

          <button className="text-slate-400 transition hover:text-white">
            Privacy Policy
          </button>

          <button className="text-slate-400 transition hover:text-white">
            Terms & Conditions
          </button>

          <button className="text-slate-400 transition hover:text-white">
            Cookies
          </button>

        </div>

      </div>

    </div>
  );
}