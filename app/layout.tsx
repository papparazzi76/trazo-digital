import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ruta corregida
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trazo Studio | Diseño y Desarrollo Web de Experiencias Digitales",
  description: "En Trazo Studio creamos sitios web y aplicaciones extraordinarias que cautivan, convierten y elevan tu marca. Portfolio premium de desarrollo web.",
  authors: [{ name: "Trazo Studio" }],
  metadataBase: new URL("https://trazo-digital.vercel.app"), 
  openGraph: {
    title: "Trazo Studio | Diseño y Desarrollo Web",
    description: "Creamos experiencias digitales extraordinarias que transforman ideas en realidades impactantes.",
    url: "https://trazo-digital.vercel.app",
    siteName: "Trazo Studio",
    images: [
      {
        url: "/logo-og.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trazo Studio | Diseño y Desarrollo Web",
    description: "Creamos experiencias digitales extraordinarias que transforman ideas en realidades impactantes.",
    images: ["/logo-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
