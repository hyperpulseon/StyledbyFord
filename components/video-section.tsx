"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Placeholder YouTube Video ID (Tom Ford SS24 or similar vibe)
  const videoId = "98B9qZzM9uM"

  return (
    <div className="w-full max-w-6xl mx-auto" ref={containerRef}>
      <FadeIn>
        <motion.div
          style={{ scale, opacity }}
          className="relative aspect-video w-full overflow-hidden bg-neutral-900 shadow-2xl shadow-white/5 rounded-xl"
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src="/fashion-photoshoot-styling-behind-scenes.jpg"
                  alt="Behind the scenes styling"
                  fill
                  className="object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-black/20" />

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/20 group-hover:border-white/50"
                >
                  <Play className="ml-1 h-8 w-8 text-white fill-white" />
                </motion.div>

                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-sm font-medium uppercase tracking-widest text-white/70 mb-2">
                    Behind the Scenes
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif text-white">The Styling Experience</h3>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 h-full w-full"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </FadeIn>
    </div>
  )
}
