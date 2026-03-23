"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/invest", label: "Invest" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ChabungusC2.png"
            alt="Chabungus Logo"
            width={32}
            height={32}
            className="rounded-lg drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
          />
          <span className="text-xl font-bold tracking-tighter text-white">Chabungus</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-8 md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-white ${isActive(link.href) ? 'text-orange-500' : 'text-zinc-300'}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/kFeZyyzAde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            Discord
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={`hidden sm:inline-block rounded-full px-5 py-2 text-sm font-medium text-white transition-all ${isActive('/contact') ? 'bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'bg-zinc-800 hover:bg-zinc-700'}`}
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-5">
              <span className={`absolute left-0 top-1 h-0.5 w-5 bg-current transition-transform ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-2.5 h-0.5 w-5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-transform ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${isActive(link.href) ? 'bg-orange-500/10 text-orange-500' : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://discord.gg/kFeZyyzAde"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                Discord
              </a>
              <Link
                href="/contact"
                className={`mt-4 rounded-xl px-4 py-4 text-center text-base font-bold text-white transition-all sm:hidden ${isActive('/contact') ? 'bg-orange-600' : 'bg-zinc-800'}`}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

