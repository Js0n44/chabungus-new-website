const PROXY_BASE = "https://gamesrobloxcom-proxy.vercel.app";
const THUMB_BASE = "https://thumbnailsrobloxcom-proxy.vercel.app";
const ACTUAL_THUMB_BASE = "https://thumbnailsrobloxcom.vercel.app";

export interface RobloxGameData {
    id: number;
    rootPlaceId: number;
    name: string;
    description: string;
    sourceName: string;
    sourceDescription: string;
    creator: {
        id: number;
        name: string;
        type: string;
        isRNVAccount: boolean;
        hasVerifiedBadge: boolean;
    };
    price: number;
    allowedGearGenres: string[];
    allowedGearCategories: string[];
    isGenreEnforced: boolean;
    copyingAllowed: boolean;
    playing: number;
    visits: number;
    maxPlayers: number;
    created: string;
    updated: string;
    studioAccessToApisAllowed: boolean;
    createVipServersAllowed: boolean;
    universeAvatarType: string;
    genre: string;
    genre_l1: string;
    genre_l2: string;
    isAllGenre: boolean;
    isFavoritedByUser: boolean;
    favoritedCount: number;
}

export interface RobloxThumbnailData {
    targetId: number;
    state: string;
    imageUrl: string;
    version: string;
}

export async function fetchGameData(ids: number[]): Promise<RobloxGameData[]> {
    if (!ids.length) return [];
    try {
        const res = await fetch(`${PROXY_BASE}/v1/games?universeIds=${ids.join(",")}`, { next: { revalidate: 60 } });
        if (!res.ok) throw new Error("Failed to fetch game data");
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Error fetching game data:", error);
        return [];
    }
}

export async function fetchThumbnails(ids: number[]): Promise<RobloxThumbnailData[]> {
    if (!ids.length) return [];
    const payload = ids.map(id => ({
        requestId: `${id}::GameIcon:512x512:png:regular`,
        type: "GameIcon",
        targetId: Number(id),
        size: "512x512",
        format: "png",
        isCircular: false
    }));

    try {
        const res = await fetch(`${ACTUAL_THUMB_BASE}/v1/batch`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            next: { revalidate: 60 }
        });
        if (!res.ok) throw new Error("Failed to fetch thumbnails");
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Error fetching thumbnails:", error);
        return [];
    }
}

export async function fetchUniverseIdsFromPlaceIds(placeIds: number[]): Promise<Array<{ placeId: number, universeId: number }>> {
    if (!placeIds.length) return [];

    try {
        const res = await fetch(`${PROXY_BASE}/v1/games/multiget-place-details?placeIds=${placeIds.join(",")}`, {
            next: { revalidate: 60 },
            headers: { "Accept": "application/json" }
        });

        if (res.ok) {
            const json = await res.json();
            if (Array.isArray(json)) {
                return json.map((item: any) => ({
                    placeId: item.placeId,
                    universeId: item.universeId
                }));
            }
        }

        console.warn("Batch universe resolution failed, falling back to individual lookups");
    } catch (error) {
        console.error("Error in batch universe fetch:", error);
    }

    const results: Array<{ placeId: number, universeId: number }> = [];
    for (const placeId of placeIds) {
        if (placeId <= 100) continue;

        try {
            const res = await fetch(`https://apis.roblox.com/universes/v1/places/${placeId}/universe`, {
                next: { revalidate: 3600 }
            });
            if (res.ok) {
                const json = await res.json();
                if (json.universeId) {
                    results.push({ placeId, universeId: json.universeId });
                }
            }
        } catch (e) {
            console.error(`Failed to resolve place ${placeId}:`, e);
        }
    }
    return results;
}
