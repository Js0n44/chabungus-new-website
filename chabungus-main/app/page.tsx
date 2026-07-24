import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chabungus LLC | Roblox Game Development & Publishing",
  description: "Chabungus LLC develops, publishes, and invests in Roblox games. Founded and owned by Roblox developer Js0n44.",
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.chabungus.com/#organization",
  name: "Chabungus LLC",
  legalName: "Chabungus LLC",
  alternateName: ["Chabungus", "Js0n44 Studios"],
  url: "https://www.chabungus.com",
  logo: "https://www.chabungus.com/ChabungusC2.png",
  foundingDate: "2022-04",
  description: "A Roblox game development, publishing, and investment company founded and owned by Js0n44.",
  founder: {
    "@id": "https://www.chabungus.com/founder#person",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-12 md:py-0 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left">
        <div className="flex flex-1 flex-col items-center gap-6 md:items-start z-10">
          <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-200 backdrop-blur-md">
            ✨ Sigma Game Creators
          </div>

          <h1 className="max-w-xl font-mono text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Roblox Game Development & <span className="text-orange-400">Publishing</span>
          </h1>

          <p className="max-w-lg text-base text-zinc-300 leading-relaxed font-sans sm:text-lg">
            We create really cool Roblox games, listed on our portfolio for you to see, as well as investing services for small games. Founded and owned by Roblox developer{" "}
            <Link href="/founder" className="font-medium text-orange-400 underline decoration-orange-400/40 underline-offset-4 transition-colors hover:text-orange-300">
              Js0n44
            </Link>.
          </p>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:w-auto pt-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-8 text-base font-medium text-white transition-all hover:scale-105 hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full border border-orange-500/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:bg-orange-500/10 hover:border-orange-500/50"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="relative hidden flex-1 items-center justify-center w-full max-w-[280px] sm:max-w-md md:flex">
          <div className="absolute -inset-4 rounded-full bg-orange-800/20 blur-3xl opacity-50" />
          <Image
            src="/image.png"
            alt="Chabungus LLC Roblox game development and publishing"
            width={500}
            height={500}
            className="relative drop-shadow-[0_0_40px_rgba(249,115,22,0.3)] rounded-2xl border border-white/5 w-full h-auto"
            priority
          />
        </div>
      </div>
    </main>
  );
}
