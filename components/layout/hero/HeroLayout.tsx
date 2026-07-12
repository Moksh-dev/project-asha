import { ReactNode } from "react";
import Container from "@/components/shared/Container";

interface HeroLayoutProps {
  children: ReactNode;
}

export default function HeroLayout({
  children,
}: HeroLayoutProps) {
  return (
    <section className="bg-white">

      <Container>

        <div className="grid min-h-[90vh] items-center gap-20 py-24 lg:grid-cols-2">

          {children}

        </div>

      </Container>

    </section>
  );
}