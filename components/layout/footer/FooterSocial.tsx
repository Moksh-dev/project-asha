import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "#",
    icon: Youtube,
  },
];

export default function FooterSocial() {
  return (
    <div>

      <h3 className="text-lg font-bold text-white">
        Follow Us
      </h3>

      <div className="mt-5 flex gap-4">

        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.name}
              href={social.href}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <Icon size={20} />
            </Link>
          );
        })}

      </div>

    </div>
  );
}