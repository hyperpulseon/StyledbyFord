import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Different video IDs for mobile and desktop
  const mobileVideoId = "dQw4w9WgXcQ"; // Replace with your mobile/vertical video ID
  const desktopVideoId = "dQw4w9WgXcQ"; // Replace with your desktop/horizontal video ID

  const youtubeVideoId = isMobile ? mobileVideoId : desktopVideoId;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background Video Placeholder / Gradient */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-40 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black z-10 transition-colors duration-500"></div>
        {/* Using a fashion/style related abstract video or high-end image */}
        <img
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion Background"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6">
            My eye for style
          </h2>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide mb-12 text-black dark:text-white">
            Style is not about what you wear — <br />
            <span className="font-bold">it is a statement.</span>
          </h1>

          <p className="text-neutral-600 dark:text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            With my eye for detail and effortless style instinct, I create looks that are elevated, modern, and most importantly — impossible to overlook. I do not chase trends; I shape presence.
          </p>

          {/* Video Placeholder Area as described */}
          <div
            onClick={() => setIsVideoOpen(true)}
            className="mt-8 w-full max-w-md mx-auto aspect-[9/16] md:aspect-video bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group cursor-pointer overflow-hidden relative transition-colors duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Henry self-filming intro"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full border border-white/50 dark:border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <span className="absolute bottom-4 left-0 right-0 text-center text-xs tracking-widest uppercase text-white dark:text-neutral-400 drop-shadow-md pointer-events-none">Watch Intro</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-black to-transparent dark:from-white dark:to-transparent transition-colors duration-500"></div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full bg-black rounded-lg overflow-hidden shadow-2xl ${isMobile
                ? 'max-w-sm aspect-[9/16]'
                : 'max-w-5xl aspect-video'
                }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Embed */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
}