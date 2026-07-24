import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";
import Sparkles from "./Sparkles";
import PageWrapper from "./components/PageWrapper";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chabungus LLC - Roblox",
  description: "Developing and shipping Roblox games.",
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
      <body className={`${lato.variable} font-sans antialiased bg-black text-white relative`}>
        <Sparkles />
        <Navigation />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
