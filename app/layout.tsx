import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Se renombra index.css a globals.css
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trazo Studio | Diseño y Desarrollo Web de Experiencias Digitales",
  description: "En Trazo Studio creamos sitios web y aplicaciones extraordinarias que cautivan, convierten y elevan tu marca. Portfolio premium de desarrollo web.",
  authors: [{ name: "Trazo Studio" }],
  metadataBase: new URL("https://URL-DE-TU-WEB.com"), // Reemplaza con tu URL
  openGraph: {
    title: "Trazo Studio | Diseño y Desarrollo Web",
    description: "Creamos experiencias digitales extraordinarias que transforman ideas en realidades impactantes.",
    url: "https://URL-DE-TU-WEB.com",
    siteName: "Trazo Studio",
    images: [
      {
        url: "/logo-og.png", // Asegúrate de tener esta imagen en /public
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
    // site: "@TuUsuarioDeTwitter", // Descomenta si tienes usuario de Twitter
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
