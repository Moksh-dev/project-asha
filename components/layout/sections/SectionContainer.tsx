import { ReactNode } from "react";
import Container from "@/components/shared/Container";

interface SectionContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function SectionContainer({
  children,
  size = "xl",
}: SectionContainerProps) {
  return (
    <Container size={size}>
      <div className="space-y-20">
        {children}
      </div>
    </Container>
  );
}