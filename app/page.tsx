import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Process } from "@/components/process"
import { StyleMenu } from "@/components/style-menu"
import { Investment } from "@/components/investment"
import { Socials } from "@/components/socials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <Hero />
      <VideoSection />
      <Process />
      <StyleMenu />
      <Investment />
      <Socials />
      <Contact />
      <Footer />
    </main>
  )
}
