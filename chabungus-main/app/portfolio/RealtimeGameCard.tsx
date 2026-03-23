"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GameWithEntry } from "./page";

export default function RealtimeGameCard({ initialData }: { initialData: GameWithEntry }) {
    const [playing, setPlaying] = useState<number>(initialData.playing);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const res = await fetch(`https://gamesrobloxcom-proxy.vercel.app/v1/games?universeIds=${initialData.id}`);
                const json = await res.json();
                if (json.data && json.data[0]) {
                    setPlaying(json.data[0].playing);
                }
            } catch (err) {
                console.error("Failed to poll CCU", err);
            }
        }, 30000);

        return () => clearInterval(interval);
    }, [initialData.id]);

    const gameUrl = `https://www.roblox.com/games/${initialData.entryInfo.id}`;

    return (
        <Link
            href={gameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-orange-500/10 bg-orange-500/5 transition-all hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] backdrop-blur-md flex flex-col block"
        >
            <div className="relative aspect-square w-full overflow-hidden bg-black/50 shrink-0">
                <Image
                    src={initialData.thumbnail}
                    alt={`Icon for ${initialData.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="truncate text-xl font-bold text-white group-hover:text-orange-300 transition-colors" title={initialData.name}>
                    {initialData.name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-zinc-400 truncate pr-2" title="Created by Chabungus LLC">
                        Created by Chabungus LLC
                    </p>
                    <div className="inline-block rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-semibold text-orange-400 border border-orange-500/20 shrink-0">
                        Ownership: {initialData.entryInfo.ownership}%
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 mt-auto">
                    <div className="rounded-lg bg-black/40 border border-orange-500/10 p-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">Active</p>
                        <p className="mt-1 text-lg font-mono text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {playing.toLocaleString()}
                        </p>
                    </div>
                    <div className="rounded-lg bg-black/40 border border-orange-500/10 p-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">Visits</p>
                        <p className="mt-1 text-lg font-mono text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                            {initialData.visits >= 1_000_000
                                ? `${(initialData.visits / 1_000_000).toFixed(1)}M`
                                : initialData.visits >= 1_000
                                    ? `${(initialData.visits / 1_000).toFixed(1)}K`
                                    : initialData.visits.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
