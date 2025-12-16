import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "shreyank kadadi",
  description: "i do product at heidi.",
  openGraph: {
    title: "shreyank kadadi",
    description: "i do product at heidi.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "shreyank kadadi",
    description: "i do product at heidi.",
    creator: "@sk28832",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
