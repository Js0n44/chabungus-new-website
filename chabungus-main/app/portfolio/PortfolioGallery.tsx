"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RealtimeGameCard from "./RealtimeGameCard";
import type { GameWithEntry } from "./page";

type Props = { games: GameWithEntry[], showOnlyAll?: boolean };

export default function PortfolioGallery({ games, showOnlyAll = false }: Props) {
    const [category, setCategory] = useState<"all" | "developed" | "invested">("all");

    const filtered =
        category === "all"
            ? games
            : games.filter(g => g.entryInfo.type === category);

    return (
        <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 border border-orange-500/10">
                        <button
                            className={`px-3 py-1 text-sm font-semibold rounded ${category === "all" ? "bg-orange-500/10 text-orange-300" : "text-zinc-300"}`}
                            onClick={() => setCategory("all")}
                        >
                            All
                        </button>
                        {!showOnlyAll && (
                            <>
                                <button
                                    className={`px-3 py-1 text-sm font-semibold rounded ${category === "developed" ? "bg-orange-500/10 text-orange-300" : "text-zinc-300"}`}
                                    onClick={() => setCategory("developed")}
                                >
                                    Created By Us
                                </button>
                                <button
                                    className={`px-3 py-1 text-sm font-semibold rounded ${category === "invested" ? "bg-orange-500/10 text-orange-300" : "text-zinc-300"}`}
                                    onClick={() => setCategory("invested")}
                                >
                                    Invested By Us
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="w-full">
                    {filtered.length === 0 ? (
                        <div className="flex h-48 flex-col items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/5 border-dashed backdrop-blur-sm">
                            <p className="text-orange-300 font-mono">Coming soon!</p>
                        </div>
                    ) : (
                        <motion.div layout className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
                            <AnimatePresence>
                                {filtered.map(game => (
                                    <motion.div layout key={game.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                                        <RealtimeGameCard initialData={game} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
