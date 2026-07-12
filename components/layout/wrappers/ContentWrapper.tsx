import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

export default function ContentWrapper({
  children,
}: ContentWrapperProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      {children}

    </div>
  );
}