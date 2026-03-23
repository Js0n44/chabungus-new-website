import Image from "next/image";
import { fetchUniverseIdsFromPlaceIds, fetchGameData, fetchThumbnails, RobloxGameData, RobloxThumbnailData } from "../../lib/roblox";
import RealtimeGameCard from "./RealtimeGameCard";
import PortfolioGallery from "./PortfolioGallery";

const SHOW_ONLY_ALL = false;

export type GameEntry = {
    id: number;
    type: "developed" | "invested";
    ownership: number;
};

const PORTFOLIO_GAMES: GameEntry[] = [
    { id: 125090186759686, type: "developed", ownership: 20 },
    { id: 111705974403823, type: "developed", ownership: 50 },
    { id: 13612031101, type: "developed", ownership: 50 },
    { id: 81013050593070, type: "developed", ownership: 50 },
    { id: 118172129127511, type: "developed", ownership: 50 }
];

const MIN_CCU_THRESHOLD = 10;

export const revalidate = 60;

export type GameWithEntry = RobloxGameData & { entryInfo: GameEntry, thumbnail: string };

export default async function Portfolio() {
    let games: GameWithEntry[] = [];

    try {
        const placeIds = PORTFOLIO_GAMES.map(g => g.id);
        if (placeIds.length > 0) {
            const placeToUniverseData = await fetchUniverseIdsFromPlaceIds(placeIds);

            const resolvedGames = PORTFOLIO_GAMES.map(entry => {
                const match = placeToUniverseData.find((p: any) => p.placeId === entry.id);
                return {
                    ...entry,
                    universeId: match ? match.universeId : null
                };
            }).filter(g => g.universeId !== null);

            const universeIds = resolvedGames.map(g => g.universeId!);

            if (universeIds.length > 0) {
                const [gamesData, thumbsData] = await Promise.all([
                    fetchGameData(universeIds),
                    fetchThumbnails(universeIds)
                ]);

                games = gamesData
                    .map(game => {
                        const entryWithUniverse = resolvedGames.find(g => g.universeId === game.id)!;
                        const originalEntry = PORTFOLIO_GAMES.find(g => g.id === entryWithUniverse.id)!;
                        const thumb = thumbsData.find(t => t.targetId === game.id);

                        return {
                            ...game,
                            entryInfo: originalEntry,
                            thumbnail: thumb?.imageUrl || "https://placehold.co/512x512/1a1a1a/4ade80?text=Roblox+Game"
                        };
                    })
                    .filter(game => game.playing >= MIN_CCU_THRESHOLD);
            }
        }
    } catch (e) {
        console.error("Failed to load portfolio data", e);
    }

    const developedGames = games.filter(g => g.entryInfo.type === "developed");
    const investedGames = games.filter(g => g.entryInfo.type === "invested");

    return (
        <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center px-4 sm:px-6 py-12 sm:py-16 relative z-10">
            <div className="w-full max-w-6xl space-y-12 sm:space-y-16 text-center">

                <div className="flex flex-col items-center justify-center space-y-4">
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
                        Game Portfolio
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-300 max-w-lg mx-auto">
                        Performance transparency for acquisition inquiries.
                    </p>
                </div>

                {games.length === 0 ? (
                    <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/5 border-dashed backdrop-blur-sm">
                        <p className="text-orange-300 font-mono">Portfolio is currently empty.</p>
                        <p className="text-sm text-zinc-400">No games found meeting the expected CCU threshold.</p>
                    </div>
                ) : (
                    <PortfolioGallery games={games} showOnlyAll={SHOW_ONLY_ALL} />
                )}

            </div>
        </main>
    );
}

