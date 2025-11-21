"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { CornerCross, DecorativeLine } from "@/components/ui/decorative"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center border-b border-white/5">
      {/* Decorative Elements */}
      <CornerCross className="top-8 left-8 md:top-12 md:left-12" />
      <CornerCross className="top-8 right-8 md:top-12 md:right-12" />
      <CornerCross className="bottom-8 left-8 md:bottom-12 md:left-12" />
      <CornerCross className="bottom-8 right-8 md:bottom-12 md:right-12" />

      <DecorativeLine className="top-24 left-0 opacity-30" />
      <DecorativeLine className="bottom-24 right-0 opacity-30" />
      <DecorativeLine vertical className="left-24 top-0 opacity-20 hidden md:block" />

      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* In a real app, this would be a <video> tag */}
        <img src="/luxury-runway-dark.png" alt="Fashion Background" className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight text-shimmer"
          >
            StyledbyFORD
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic text-gray-300">My eye for style</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-md font-light leading-relaxed">
              Elevating your personal brand through curated wardrobe styling and luxury consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <Link
              href="#process"
              className="px-8 py-4 border border-white/30 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-sm text-center relative overflow-hidden group"
            >
              <span className="relative z-10">Explore the Process</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 uppercase tracking-widest text-sm text-center border-shimmer"
            >
              Book the Vibe Check
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="w-6 h-6 text-white/50 animate-bounce" />
      </motion.div>
    </section>
  )
}
