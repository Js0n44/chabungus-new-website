"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PAGE_REVEAL_EVENT = "chabungus:page-reveal-complete";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)", y: 10 }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
                window.dispatchEvent(new Event(PAGE_REVEAL_EVENT));
            }}
        >
            {children}
        </motion.div>
    );
}
