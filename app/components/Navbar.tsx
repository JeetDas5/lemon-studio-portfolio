"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-6 py-5 md:px-8 md:py-6 relative z-30">
      <div className="flex items-center gap-2">
        <div className="rounded-full overflow-hidden">
          <Image src="/plants/logo.png" alt="logo" width={32} height={32} />
        </div>
        <Link href="/" className="text-white text-2xl font-semibold">
          Planto.
        </Link>
      </div>

      {/* Desktop Navigation - Hidden on Mobile */}
      <nav className="hidden md:flex items-center gap-10 text-white/80">
        <Link href="#">Home</Link>
        <Link href="#" className="flex items-center">
          Plants Type
          <Image
            src="/icons/down.svg"
            alt="dropdown"
            width={6}
            height={6}
            className="inline-block ml-1"
          />
        </Link>
        <Link href="#">More</Link>
        <Link href="#">Contact</Link>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center gap-6 md:gap-10 text-white/80">
        <Link href="#" className="hover:opacity-85 transition-opacity">
          <Image src="/icons/search.svg" alt="search" width={18} height={18} />
        </Link>
        <Link href="#" className="hover:opacity-85 transition-opacity">
          <Image src="/icons/cart.svg" alt="cart" width={18} height={18} />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="hover:opacity-85 transition-opacity cursor-pointer focus:outline-none"
          aria-label="Open menu"
        >
          <Image src="/icons/menu.svg" alt="menu" width={18} height={18} />
        </button>
      </div>

      {/* Mobile Drawer (Sidebar) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            />
            {/* Sidebar content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#0c1f12]/95 border-l border-white/10 p-6 flex flex-col gap-10 z-50 md:hidden glass shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="rounded-full overflow-hidden">
                    <Image src="/plants/logo.png" alt="logo" width={28} height={28} />
                  </div>
                  <span className="text-white text-xl font-semibold">Planto.</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1 cursor-pointer focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links inside Sidebar */}
              <nav className="flex flex-col gap-8 text-[18px] text-white/80 font-sans tracking-wide">
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center justify-between"
                >
                  <span>Plants Type</span>
                  <Image
                    src="/icons/down.svg"
                    alt="dropdown"
                    width={8}
                    height={8}
                    className="-rotate-90 filter brightness-200"
                  />
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  More
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

