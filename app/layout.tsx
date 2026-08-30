import type { Metadata } from "next";
import { Archivo, Bodoni_Moda, Newsreader } from "next/font/google";
import { site, book } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${book.title} — le livre`,
  description:
    "BXLM, de Tayino Chérubin & Dido Lakama : le récit de première main du 7 juin 2020 à Bruxelles. E-book et version papier, pour les organismes pédagogiques.",
  keywords: [
    "BXLM",
    "Black Lives Matter Bruxelles",
    "7 juin 2020",
    "négrophobie",
    "éducation à la citoyenneté",
    "outil pédagogique",
    "Teddy Mazina",
  ],
  authors: [{ name: book.authors }],
  openGraph: {
    title: `${book.title} — le livre`,
    description:
      "Le récit de première main de la plus grande mobilisation contre la négrophobie de l’histoire belge.",
    url: site.url,
    siteName: "BXLM",
    locale: "fr_BE",
    type: "book",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Manifestation du 7 juin 2020 devant le Palais de Justice de Bruxelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${book.title} — le livre`,
    description:
      "Le récit de première main de la plus grande mobilisation contre la négrophobie de l’histoire belge.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${bodoni.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
