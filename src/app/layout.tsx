import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cony - Premium Device Connectivity Solutions",
  description:
    "Experience next-generation device connectivity with Cony's premium cables. Engineered for performance, durability, and style.",
  keywords: [
    "USB cables",
    "device connectivity",
    "premium cables",
    "charging cables",
    "tech accessories",
  ],
  authors: [{ name: "Cony" }],
  openGraph: {
    title: "Cony - Premium Device Connectivity Solutions",
    description:
      "Experience next-generation device connectivity with Cony's premium cables.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
