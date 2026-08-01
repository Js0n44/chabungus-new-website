import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chabungus LLC — Roblox Games by Js0n44",
  description:
    "Chabungus LLC has been developing and publishing Roblox games since 2022.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chabungus LLC — Roblox Games by Js0n44",
    description:
      "Chabungus LLC has been developing and publishing Roblox games since 2022.",
    url: "/",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.chabungus.com/#organization",
  name: "Chabungus LLC",
  legalName: "Chabungus LLC",
  alternateName: ["Chabungus", "Chabungus Games", "Js0n44 Studios"],
  url: "https://www.chabungus.com/",
  logo: "https://www.chabungus.com/ChabungusC2.png",
  foundingDate: "2022-04",
  description:
    "A Roblox game development and publishing company founded by Roblox developer Js0n44.",
  founder: {
    "@type": "Person",
    "@id": "https://www.chabungus.com/founder#person",
    name: "Js0n44",
  },
  sameAs: [
    "https://www.roblox.com/communities/14732225/chabungus-games",
    "https://github.com/Js0n44",
    "https://www.youtube.com/@Js0n44",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.chabungus.com/#website",
  url: "https://www.chabungus.com/",
  name: "Chabungus LLC",
  alternateName: "Chabungus",
  publisher: {
    "@id": "https://www.chabungus.com/#organization",
  },
};

export default function Home() {
  return (
    <main className="relative z-10 px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-5xl flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left">
        <div className="z-10 flex flex-1 flex-col items-center gap-6 md:items-start">
          <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-200 backdrop-blur-md">
            ✨ Sigma Game Creators
          </div>

          <h1 className="max-w-xl font-mono text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Roblox Game Development &amp; <span className="text-orange-400">Publishing</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Chabungus LLC has been developing and publishing Roblox games since 2022.
          </p>

          <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-8 text-base font-medium text-white transition-all hover:scale-105 hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full border border-orange-500/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:border-orange-500/50 hover:bg-orange-500/10"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="relative hidden w-full max-w-[280px] flex-1 items-center justify-center sm:max-w-md md:flex">
          <div className="absolute -inset-4 rounded-full bg-orange-800/20 opacity-50 blur-3xl" />
          <Image
            src="/image.png"
            alt="Chabungus LLC Roblox game development and publishing"
            width={500}
            height={500}
            className="relative h-auto w-full rounded-2xl border border-white/5 drop-shadow-[0_0_40px_rgba(249,115,22,0.3)]"
            priority
          />
        </div>
      </section>

      <section aria-labelledby="what-chabungus-does" className="mx-auto grid w-full max-w-5xl gap-6 py-16 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md">
          <h2 id="what-chabungus-does" className="font-mono text-2xl font-bold text-white">Roblox Games by Chabungus</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Chabungus develops original Roblox games designed for strong retention, replayability, social play, and sustainable monetization.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md">
          <h2 className="font-mono text-2xl font-bold text-white">Publishing</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            We work with Roblox developers on production, distribution, marketing, monetization, and long-term game growth.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md">
          <h2 className="font-mono text-2xl font-bold text-white">Founded by Js0n44</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Chabungus was founded in 2022 by Js0n44, an independent Roblox developer whose projects have reached the Roblox homepage and tens of thousands of concurrent players.
          </p>
        </div>
      </section>
    </main>
  );
}
