"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealLineProps {
  className?: string
  direction?: "horizontal" | "vertical"
  delay?: number
}

export function ScrollRevealLine({ className, direction = "horizontal", delay = 0 }: ScrollRevealLineProps) {
  return (
    <motion.div
      initial={{
        scaleX: direction === "horizontal" ? 0 : 1,
        scaleY: direction === "vertical" ? 0 : 1,
        opacity: 0,
      }}
      whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn("bg-white/10", direction === "horizontal" ? "origin-left" : "origin-top", className)}
    />
  )
}
