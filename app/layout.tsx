import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "shreyank kadadi",
  description: "enthusiast of healthtech and emergent technologies. i currently do product at heidi.",
  openGraph: {
    title: "shreyank kadadi",
    description: "enthusiast of healthtech and emergent technologies. i currently do product at heidi.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "shreyank kadadi",
    description: "enthusiast of healthtech and emergent technologies. i currently do product at heidi.",
    creator: "@sk28832",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={shipporiMincho.variable}>
      <body>{children}</body>
    </html>
  );
}
