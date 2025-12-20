import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eldwynhide | Luxury Leather Goods",
  description:
    "Discover timeless leather craftsmanship. Handcrafted bags, wallets, and accessories made from the finest materials.",
  keywords: [
    "leather goods",
    "luxury bags",
    "handcrafted wallets",
    "leather accessories",
    "artisan leather",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
