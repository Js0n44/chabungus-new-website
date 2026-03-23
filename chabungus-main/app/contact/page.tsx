import Image from "next/image";

export default function Contact() {
    return (
        <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative z-10">
            <div className="w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl border border-orange-500/20 bg-orange-500/5 shadow-[0_0_40px_rgba(249,115,22,0.1)] backdrop-blur-xl">
                <div className="p-6 sm:p-10 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center rounded-2xl sm:rounded-3xl bg-orange-500/10 p-3 sm:p-4 border border-orange-500/20 backdrop-blur-md mb-6">
                        <Image
                            src="/ChabungusC2.png"
                            alt="Chabungus Logo"
                            width={56}
                            height={56}
                            className="drop-shadow-[0_0_20px_rgba(249,115,22,0.4)] rounded-lg sm:rounded-xl"
                        />
                    </div>
                    <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Contact
                    </h1>
                    <p className="mb-8 text-sm sm:text-base text-zinc-300">
                        Interested in an investment, acquisition, or partnership? Get in touch with us.
                    </p>

                    <div className="mb-8 flex flex-col items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-orange-950/30 border border-orange-500/10 p-5 sm:p-6 w-full shadow-inner">
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-orange-400">Discord</span>
                        <span className="text-xl sm:text-2xl font-semibold text-white">@js0n44</span>
                    </div>

                    <a
                        href="https://discord.gg/kFeZyyzAde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 text-base font-medium text-white transition-all hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-[1.02]"
                    >
                        Join Server
                    </a>
                </div>
            </div>
        </main>
    );
}
