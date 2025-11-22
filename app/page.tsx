import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Process } from "@/components/process"
import { StyleMenu } from "@/components/style-menu"
import { Investment } from "@/components/investment"
import { Socials } from "@/components/socials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { StickyScrollContainer, StickySection } from "@/components/ui/sticky-scroll-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <Navbar />

      <StickyScrollContainer>
        <StickySection className="bg-black">
          <Hero />
        </StickySection>

        <StickySection className="bg-black">
          <Process />
        </StickySection>

        <StickySection className="bg-zinc-950">
          <StyleMenu />
        </StickySection>

        <StickySection className="bg-black">
          <Investment />
        </StickySection>

        <StickySection className="bg-zinc-900">
          <Socials />
        </StickySection>

        <StickySection className="bg-black">
          <Contact />
        </StickySection>
      </StickyScrollContainer>

      <Footer />
    </main>
  )
}
