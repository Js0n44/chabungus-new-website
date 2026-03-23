import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";
import Sparkles from "./Sparkles";
import PageWrapper from "./components/PageWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chabungus LLC - Roblox",
  description: "We develop and invest in Roblox games, boosting retention and revenue.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-black text-white relative`}>
        <Sparkles />
        <Navigation />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
