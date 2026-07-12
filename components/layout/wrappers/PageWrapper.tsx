import { ReactNode } from "react";
import Container from "@/components/shared/Container";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({
  children,
}: PageWrapperProps) {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <Container>

        <div className="pt-36 pb-16">

          {children}

        </div>

      </Container>

      <Footer />

    </main>
  );
}