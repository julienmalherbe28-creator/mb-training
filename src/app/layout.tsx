import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Inter } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";
import { localBusinessSchema } from "@/lib/schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas-neue", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: `Coach running Chartres | ${brand.name}`, template: `%s | ${brand.name}` },
  description: brand.promise,
  metadataBase: new URL(brand.site.url || "http://localhost:3000"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${caveat.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
