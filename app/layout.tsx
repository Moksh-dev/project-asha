import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Project ASHA",
  description:
    "Youth-led action against trafficking, child labour, gender inequality, and crimes against women.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        {children}
      </body>
    </html>
  );
}
