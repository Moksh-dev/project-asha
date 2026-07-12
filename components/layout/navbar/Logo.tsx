import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: {
      logo: 42,
      title: "text-xl",
    },
    md: {
      logo: 52,
      title: "text-2xl",
    },
    lg: {
      logo: 62,
      title: "text-3xl",
    },
  };

  return (
    <Link
      href="/"
      className="group flex items-center gap-4"
    >
      <Image
        src="/logos/Logo.png"
        alt="Project A.S.H.A."
        width={sizes[size].logo}
        height={sizes[size].logo}
        className="transition duration-300 group-hover:scale-110"
        priority
      />

      <div>

        <h1
          className={`font-extrabold tracking-tight text-[#165CC7] ${sizes[size].title}`}
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          A.S.H.A.
        </h1>

        <p
          className="text-base text-[#4C82D2]"
          style={{
            fontFamily: "var(--font-caveat)",
          }}
        >
          building hope together ✨
        </p>

      </div>

    </Link>
  );
}