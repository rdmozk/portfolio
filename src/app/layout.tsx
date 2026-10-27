import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Erdem Ozkorkmaz — Ingénieur logiciel",
  description:
    "Ingénieur logiciel à Paris. Développement web, cloud, Infrastructure as Code et pilotage de projet.",
  openGraph: {
    title: "Erdem Ozkorkmaz — Ingénieur logiciel",
    description:
      "Développement web, cloud et Infrastructure as Code. Paris.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
