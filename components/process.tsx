import { FadeIn } from "./ui/fade-in"
import { ParallaxImage } from "./ui/parallax-image"
import { ScrollRevealLine } from "./ui/scroll-reveal"

export function Process() {
  return (
    <section id="process" className="py-24 md:py-10 bg-background relative">
      <ScrollRevealLine className="absolute top-0 left-0 w-full h-[1px]" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative w-full max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 border border-border translate-x-4 translate-y-4 z-0" />
            <ParallaxImage
              src="/man-in-luxury-suit-talking-on-phone-black-and-whit.jpg"
              alt="Henry on a call"
              width={600}
              height={800}
              containerClassName="aspect-[3/4] relative z-10"
              imageClassName="grayscale contrast-125"
            />
          </FadeIn>

          <div className="space-y-10 relative">
            {/* Decorative vertical line that grows on scroll */}
            <ScrollRevealLine
              direction="vertical"
              className="absolute -left-8 top-0 w-[1px] h-full hidden md:block"
              delay={0.2}
            />

            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">The StyledbyFORD Process</h2>
              <div className="w-20 h-[1px] bg-border mb-8" />
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-serif italic text-foreground/80">01. The Vibe Check</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We start with a conversation. Understanding your lifestyle, your goals, and the image you want to
                  project to the world.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif italic text-foreground/80">02. The Edit</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Refining what you have. We clear the clutter to make space for the exceptional.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif italic text-foreground/80">03. The Elevation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Curating new pieces that align with your elevated aesthetic. Strategic shopping that builds a
                  cohesive, powerful wardrobe.
                </p>
              </div>

              <div className="pt-8">
                <button className="text-sm uppercase tracking-widest border-b border-border pb-1 hover:border-foreground transition-colors">
                  Book The Vibe Check
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
