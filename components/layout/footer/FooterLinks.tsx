import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

export default function FooterLinks({
  title,
  links,
}: FooterLinksProps) {
  return (
    <div>

      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">

        {links.map((link) => (
          <li key={link.href}>

            <Link
              href={link.href}
              className="text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>

          </li>
        ))}

      </ul>

    </div>
  );
}