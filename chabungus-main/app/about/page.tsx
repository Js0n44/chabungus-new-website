import Image from "next/image";

export default function About() {
    return (
        <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative z-10">
            <div className="w-full max-w-3xl space-y-8 sm:space-y-12 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="flex items-center justify-center rounded-2xl sm:rounded-3xl bg-orange-500/10 p-3 sm:p-4 border border-orange-500/20 backdrop-blur-md mb-2">
                        <Image
                            src="/ChabungusC2.png"
                            alt="Chabungus Logo"
                            width={56}
                            height={56}
                            className="drop-shadow-[0_0_20px_rgba(249,115,22,0.4)] rounded-lg sm:rounded-xl"
                        />
                    </div>
                    <h1 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        What Chabungus LLC Does
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 md:mx-0 mx-auto rounded-full" />
                </div>

                <div className="grid gap-6">
                    <section className="space-y-4 rounded-2xl border border-orange-500/10 bg-orange-500/5 p-6 sm:p-8 backdrop-blur-sm transition-all hover:bg-orange-500/10 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Game Development</h2>
                        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                            We build Roblox games designed to thrive. Not actively for sale, but available for the right offer.
                        </p>
                    </section>

                    <section className="space-y-4 rounded-2xl border border-orange-500/10 bg-orange-500/5 p-6 sm:p-8 backdrop-blur-sm transition-all hover:bg-orange-500/10 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Capital & Growth Investment</h2>
                        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                            We invest in promising games by funding advertisements, optimizing monetization and onboarding systems, and improving CCU.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
