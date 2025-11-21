"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Placeholder YouTube Video ID
  const videoId = "98B9qZzM9uM"

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative w-full min-h-[300px] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl shadow-white/5 rounded-xl ${isMobile ? 'aspect-square max-w-md mx-auto' : 'aspect-video'
          }`}
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
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
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
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {isMobile ? (
                <div className="relative h-full w-full">
                  <video
                    ref={videoRef}
                    src="/introvideo.mp4"
                    loop
                    muted={isMuted}
                    playsInline
                    className="h-full w-full object-cover"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />

                  {/* Custom Video Controls */}
                  <AnimatePresence>
                    {showControls && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <button
                            onClick={handlePlayPause}
                            className="text-white hover:text-white/70 transition-colors"
                          >
                            {isVideoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                          </button>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={handleMuteToggle}
                              className="text-white hover:text-white/70 transition-colors"
                            >
                              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                            </button>
                            <button
                              onClick={handleFullscreen}
                              className="text-white hover:text-white/70 transition-colors"
                            >
                              <Maximize className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
