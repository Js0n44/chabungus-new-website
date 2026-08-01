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
  metadataBase: new URL("https://www.chabungus.com"),
  title: {
    default: "Chabungus LLC — Roblox Games by Js0n44",
    template: "%s | Chabungus LLC",
  },
  description:
    "Chabungus LLC is an independent Roblox game development, publishing, and investment company founded by Roblox developer Js0n44.",
  applicationName: "Chabungus LLC",
  authors: [{ name: "Chabungus LLC", url: "https://www.chabungus.com" }],
  creator: "Chabungus LLC",
  publisher: "Chabungus LLC",
  keywords: [
    "Chabungus",
    "Chabungus LLC",
    "Chabungus Games",
    "Js0n44",
    "Roblox developer",
    "Roblox game development",
    "Roblox game publisher",
    "Roblox games",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Chabungus LLC",
    title: "Chabungus LLC — Roblox Games by Js0n44",
    description:
      "Roblox game development, publishing, and investment from Chabungus LLC, founded by Js0n44.",
    url: "https://www.chabungus.com",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 500,
        height: 500,
        alt: "Chabungus LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chabungus LLC — Roblox Games by Js0n44",
    description:
      "Roblox game development, publishing, and investment from Chabungus LLC, founded by Js0n44.",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
