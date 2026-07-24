import type { Metadata } from "next";
import CountUp from "./CountUp";

export const metadata: Metadata = {
  title: "Founder | Chabungus LLC",
  description: "Meet Jason, the founder of Chabungus LLC, and the Roblox developer known as Js0n44.",
};

type RobloxProfile = {
  avatarUrl: string;
  profileUrl: string;
};

async function getRobloxProfile(): Promise<RobloxProfile> {
  const fallback = {
    avatarUrl: "/ChabungusC2.png",
    profileUrl: "https://www.roblox.com/search/users?keyword=Js0n44",
  };

  try {
    const userResponse = await fetch("https://users.roblox.com/v1/usernames/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernames: ["Js0n44"], excludeBannedUsers: true }),
      next: { revalidate: 86400 },
    });

    if (!userResponse.ok) return fallback;
    const userJson = await userResponse.json();
    const userId = userJson.data?.[0]?.id;
    if (!userId) return fallback;

    const profileUrl = `https://www.roblox.com/users/${userId}/profile`;
    const thumbnailResponse = await fetch(
      `https://thumbnails.roblox.com/v1/users/avatar?userIds=${userId}&size=420x420&format=Png&isCircular=false`,
      { next: { revalidate: 3600 } }
    );

    if (!thumbnailResponse.ok) return { ...fallback, profileUrl };
    const thumbnailJson = await thumbnailResponse.json();

    return {
      avatarUrl: thumbnailJson.data?.[0]?.imageUrl || fallback.avatarUrl,
      profileUrl,
    };
  } catch {
    return fallback;
  }
}

function VerifiedBadge() {
  return (
    <span
      className="verified-shimmer inline-flex h-6 w-6 shrink-0 items-center justify-center"
      aria-label="Roblox verified"
      title="Roblox verified"
    >
      <img
        src="/roblox-verified.svg"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
        aria-hidden="true"
      />
    </span>
  );
}

export default async function FounderPage() {
  const profile = await getRobloxProfile();

  return (
    <main className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <section>
            <div className="mb-5 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-200 backdrop-blur-md">
              Founder of Chabungus LLC
            </div>
            <h1 className="font-mono text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About the <span className="text-orange-400">Founder</span>
            </h1>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p>
                Initially called &quot;Js0n44 Studios&quot; before later rebranding, Chabungus was founded by Jason in April 2022 and incorporated as Chabungus LLC in February 2025. He has been creating on Roblox since 2020 and has helped bring <strong className="font-mono font-bold text-orange-400" aria-label="9 games"><span aria-hidden="true"><CountUp target={9} duration={1800} /> games</span></strong> to success on the Roblox homepage.
              </p>
              <p>
                Many of Jason&apos;s early successes were developed entirely single-handedly, establishing him as one of Roblox&apos;s strongest independent solo developers.
              </p>
              <p>
                Chabungus LLC&apos;s most successful game, created by Jason of{" "}
                <a href="https://www.chabungus.com" className="font-medium text-orange-400 underline decoration-orange-400/40 underline-offset-4 transition-colors hover:text-orange-300">
                  Chabungus LLC
                </a>{" "}
                and Michael of{" "}
                <a href="https://cacheflow.gg" target="_blank" rel="noopener noreferrer" className="font-medium text-orange-400 underline decoration-orange-400/40 underline-offset-4 transition-colors hover:text-orange-300">
                  Cache Flow
                </a>, peaked at more than{" "}
                <strong className="stadium-stat font-mono font-bold text-orange-400" aria-label="50,000 concurrent players, about an entire stadium online at once">
                  <span aria-hidden="true"><CountUp target={50000} duration={2600} /> concurrent players</span>
                  <span className="stadium-tooltip" role="tooltip">About an entire stadium online at once!</span>
                </strong>{" "}
                during the height of the Meccha Chameleon trend.
              </p>
            </div>
          </section>

          <div className="mx-auto w-full max-w-sm space-y-4">
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/[0.06] hover:shadow-[0_20px_70px_rgba(249,115,22,0.16)]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-orange-500/15 to-zinc-950">
                <div className="absolute inset-8 rounded-full bg-orange-500/20 blur-3xl" />
                <img
                  src={profile.avatarUrl}
                  alt="Js0n44 Roblox avatar"
                  width={420}
                  height={420}
                  className="relative aspect-square h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-5">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="truncate font-mono text-2xl font-bold text-white">Js0n44</span>
                  <VerifiedBadge />
                </div>
                <span className="shrink-0 text-sm font-medium text-orange-400 transition-colors group-hover:text-orange-300">
                  View on Roblox →
                </span>
              </div>
            </a>

            <details className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-colors open:border-orange-500/30 open:bg-orange-500/[0.05]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-zinc-200 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                <span>Social Media</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-5 w-5 shrink-0 text-orange-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="text-sm leading-relaxed text-zinc-400">
                  None. &quot;Social&quot; media is putrid filth. Short-form content is food for the weak.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
