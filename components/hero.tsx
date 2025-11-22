"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CirclePlay } from "lucide-react"
import Link from "next/link"
import { VideoSection } from "@/components/video-section"
import { motion } from "framer-motion"
import { BackgroundPattern } from "@/components/background-pattern"

export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-34 overflow-hidden">
      <BackgroundPattern />
      <div className="text-center max-w-3xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#contact">
              Accepting New Clients <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter text-foreground"
        >
          StyledbyFORD
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-2xl md:text-3xl font-serif italic text-muted-foreground"
        >
          My eye for style
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:text-lg text-muted-foreground"
        >
          Style is not about what you wear - it is a statement. With my eye for detail and effortless style instinct, I create looks that are elevated, modern, and most importantly- impossible to overlook. I do not chase trends; I shape presence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link href="#process">
            <button className="px-12 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 uppercase tracking-widest text-sm">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 1, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-5/6 max-w-screen-xl mx-auto aspect-video bg-muted rounded-xl"
      >
        <VideoSection />
      </motion.div>
    </div>
  )
}
