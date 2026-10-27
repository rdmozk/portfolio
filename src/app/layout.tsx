import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erdem Ozkorkmaz — Ingénieur logiciel",
  description:
    "CV et portfolio d’Erdem Ozkorkmaz, ingénieur logiciel à Paris — Equans, Epitech Cloud.",
  openGraph: {
    title: "Erdem Ozkorkmaz — Ingénieur logiciel",
    description:
      "CV et portfolio d’Erdem Ozkorkmaz, ingénieur logiciel à Paris.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${figtree.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
