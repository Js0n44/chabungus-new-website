import type { NextConfig } from "next";

// /cash is the live sale-rain page, served by a Cloudflare Worker.
const SALE_RAIN = "https://sale-rain.sale-rain.workers.dev";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            { source: "/cash", destination: `${SALE_RAIN}/cash/` },
            { source: "/cash/:path*", destination: `${SALE_RAIN}/cash/:path*` },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tr.rbxcdn.com",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            }
        ],
    },
};

export default nextConfig;
