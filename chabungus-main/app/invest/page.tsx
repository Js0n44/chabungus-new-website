import Image from "next/image";

export default function Invest() {
    return (
        <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative z-10">
            <div className="w-full max-w-4xl space-y-12">

                <div className="space-y-6 text-center">
                    <div className="inline-flex items-center justify-center rounded-2xl sm:rounded-3xl bg-orange-500/10 p-3 sm:p-4 border border-orange-500/20 backdrop-blur-md mb-2">
                        <Image
                            src="/ChabungusC2.png"
                            alt="Chabungus Logo"
                            width={56}
                            height={56}
                            className="drop-shadow-[0_0_20px_rgba(249,115,22,0.4)] rounded-lg sm:rounded-xl"
                        />
                    </div>
                    <h1 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Capital & Growth Partnerships
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
                        If you have a Roblox game with strong retention but limited capital, Chabungus LLC may provide ad funding, marketing strategy, and algorithm optimization in exchange for equity or ownership percentage.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-orange-500/10 bg-orange-500/5 p-6 sm:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(249,115,22,0.05)]">
                        <h3 className="mb-4 text-lg sm:text-xl font-semibold text-white">What We Offer</h3>
                        <ul className="space-y-3 text-sm sm:text-base text-zinc-300">
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> Advertisement funding
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> Monetization restructuring
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> Retention optimization
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> Algorithm positioning strategy
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> Percentage-based investment agreements
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-orange-500/10 bg-orange-500/5 p-6 sm:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(249,115,22,0.05)]">
                        <h3 className="mb-4 text-lg sm:text-xl font-semibold text-white">How Chabungus Does Business</h3>
                        <p className="mb-4 text-xs sm:text-sm text-orange-300">To consider investing in your Roblox game, please provide the following:</p>
                        <ul className="space-y-3 text-sm sm:text-base text-zinc-300">
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> A link to your game for review.
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> Temporary access to live statistics.
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" /> The price or percentage you seek.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5 sm:p-6 text-center shadow-[0_0_20px_rgba(239,68,68,0.1)] backdrop-blur-sm">
                    <p className="text-sm sm:text-base text-red-200">
                        <span className="font-bold text-red-500">Important:</span> If we proceed with an investment, our main condition is that we become the group holder of the game to mitigate risk and ensure both parties benefit.
                    </p>
                </div>

            </div>
        </main>
    );
}
