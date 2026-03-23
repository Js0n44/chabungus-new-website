import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-12 md:py-0 relative z-10">
      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left">
        <div className="flex flex-1 flex-col items-center gap-6 md:items-start z-10">
          <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-200 backdrop-blur-md">
            ✨ Sigma Game Creators
          </div>

          <h1 className="max-w-xl font-mono text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Roblox Game Creation & <span className="text-orange-400">Ad funding.</span>
          </h1>

          <p className="max-w-lg text-base text-zinc-300 leading-relaxed font-sans sm:text-lg">
            We create really cool Roblox games, listed on our portfolio for you to see, as well as investing services for small games. 
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
            alt="Chabungus Hero"
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
