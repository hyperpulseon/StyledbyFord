import { FadeIn } from "./ui/fade-in"
import { ScrollRevealLine } from "./ui/scroll-reveal"

export function Investment() {
  return (
    <section id="investment" className="py-24 md:py-32 bg-black relative">
      <ScrollRevealLine className="absolute top-0 left-0 w-full h-[1px]" />

      <div className="container mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">The Investment</h2>
          <div className="w-full h-[1px] bg-white/10" />
        </FadeIn>

        {/* Changed to a structured grid with borders for a more editorial/luxury feel */}
        <div className="grid md:grid-cols-3 relative">
          {/* Animated Grid Lines */}
          <ScrollRevealLine className="absolute top-0 left-0 w-full h-[1px] z-10" delay={0.2} />
          <ScrollRevealLine direction="vertical" className="absolute top-0 left-0 w-[1px] h-full z-10" delay={0.3} />
          <ScrollRevealLine
            direction="vertical"
            className="absolute top-0 left-1/3 w-[1px] h-full z-10 hidden md:block"
            delay={0.4}
          />
          <ScrollRevealLine
            direction="vertical"
            className="absolute top-0 left-2/3 w-[1px] h-full z-10 hidden md:block"
            delay={0.5}
          />
          <ScrollRevealLine direction="vertical" className="absolute top-0 right-0 w-[1px] h-full z-10" delay={0.6} />
          <ScrollRevealLine className="absolute bottom-0 left-0 w-full h-[1px] z-10" delay={0.7} />

          {/* Column 1: Essentials */}
          <div className="border-r border-b border-white/5 md:border-none">
            <FadeIn delay={0.1} className="h-full flex flex-col">
              <div className="p-8 md:p-10 border-b border-white/10 flex-1 hover:bg-white/5 transition-colors duration-500 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4 relative z-10">Consultation</p>
                <h3 className="text-3xl font-serif mb-4 relative z-10">The Vibe Check</h3>
                <p className="text-xl font-serif mb-4 text-white/80 relative z-10">Complimentary</p>
                <p className="text-gray-500 font-light text-sm leading-relaxed relative z-10">
                  30-min call overview to discuss your style goals and needs.
                </p>
              </div>

              <div className="p-8 md:p-10 flex-1 hover:bg-white/5 transition-colors duration-500 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4 relative z-10">Wardrobe Edit</p>
                <h3 className="text-3xl font-serif mb-4 relative z-10">Closet Confessions</h3>
                <p className="text-xl font-serif mb-4 text-white/80 relative z-10">
                  $300 <span className="text-sm text-gray-500 font-sans">/ 2 hours</span>
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-light relative z-10">
                  <li>+$75 per extra hour</li>
                  <li>Includes digital recap</li>
                  <li>Donation coordination</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Column 2: Packages */}
          <div className="border-r border-b border-white/5 md:border-none">
            <FadeIn
              delay={0.2}
              className="h-full p-8 md:p-10 hover:bg-white/5 transition-colors duration-500 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-8 relative z-10">Packages</p>
              <h3 className="text-3xl font-serif mb-10 relative z-10">Style Elevation</h3>

              <div className="space-y-10 relative z-10">
                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl group-hover:text-white transition-colors text-white/90">
                      Mini Elevation
                    </h4>
                    <span className="text-lg text-white/60">$200</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    1.5 hours • 3 styled outfits • Digital lookbook
                  </p>
                </div>

                <div className="group pt-8 border-t border-white/5">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl group-hover:text-white transition-colors text-white/90">
                      Signature Elevation
                    </h4>
                    <span className="text-lg text-white/60">$300</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    3 hours • 6–8 outfits • Digital lookbook • Shopping recs
                  </p>
                </div>

                <div className="group pt-8 border-t border-white/5">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl group-hover:text-white transition-colors text-white/90">
                      Deluxe Elevation
                    </h4>
                    <span className="text-lg text-white/60">$500</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    5 hours • 12+ outfits • Comprehensive lookbook • Investment piece guide
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Column 3: Specialized & Full */}
          <div className="border-r border-b border-white/5 md:border-none flex flex-col">
            <FadeIn
              delay={0.3}
              className="flex-1 p-8 md:p-10 border-b border-white/10 hover:bg-white/5 transition-colors duration-500 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-8 relative z-10">Events & Shopping</p>
              <h3 className="text-3xl font-serif mb-10 relative z-10">Specialized</h3>

              <div className="space-y-8 relative z-10">
                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg group-hover:text-white transition-colors text-white/90">
                      The Grand Entrance
                    </h4>
                    <span className="text-base text-white/60">$250</span>
                  </div>
                  <p className="text-xs text-gray-500">Per event look • On-site support +$200</p>
                </div>

                <div className="group pt-6 border-t border-white/5">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg group-hover:text-white transition-colors text-white/90">
                      Pose-Ready
                    </h4>
                    <span className="text-base text-white/60">$250–$400</span>
                  </div>
                  <p className="text-xs text-gray-500">Photo shoot styling • On-set support $100/hr</p>
                </div>

                <div className="group pt-6 border-t border-white/5">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg group-hover:text-white transition-colors text-white/90">
                      The Power Shop
                    </h4>
                    <span className="text-base text-white/60">$300</span>
                  </div>
                  <p className="text-xs text-gray-500">2 hours • +$75 per extra hour</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="p-8 md:p-10 bg-white text-black relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-60">Complete Overhaul</p>
                <h3 className="text-3xl font-serif mb-2">The Full Experience</h3>
                <p className="text-4xl font-serif mb-4">$1,000</p>
                <p className="text-sm font-light opacity-80 leading-relaxed">
                  The ultimate style transformation. A comprehensive journey to redefine your personal brand.
                </p>
              </div>
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
