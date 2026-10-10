import type { Metadata, Viewport } from "next";
import { Archivo, Caveat } from "next/font/google";

import { book } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const title = `${book.title}: ${book.subtitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: book.description,
  authors: [{ name: book.author }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description: book.description,
    siteName: book.title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: book.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${caveat.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
