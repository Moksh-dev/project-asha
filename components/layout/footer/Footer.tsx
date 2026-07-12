import Link from "next/link";
import Logo from "../navbar/Logo";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Chapters", href: "/chapters" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resources", href: "/resources" },
];

const getInvolved = [
  { name: "Join Us", href: "/join" },
  { name: "Donate", href: "/donate" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[#0F172A] text-white">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[140px]" />
<div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-400/20 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-8 py-24">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>

            <Logo />

            <p className="mt-6 leading-7 text-slate-300">
              Project A.S.H.A. is a youth-led movement working to create
              awareness against human trafficking through education,
              leadership and community action.
            </p>

          </div>

          <div>

            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="text-lg font-bold text-white">
              Get Involved
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {getInvolved.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="text-lg font-bold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-slate-300">

              <p>contact@projectasha.org</p>

              <p>India</p>

              <p>Building Hope. Inspiring Action.</p>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Project A.S.H.A. All rights reserved.
          </p>

          <p>
            Designed with ❤️ for social impact.
          </p>

        </div>

      </div>

    </footer>
  );
}