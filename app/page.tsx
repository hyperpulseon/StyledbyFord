import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Process } from "@/components/process"
import { StyleMenuSticky } from "@/components/style-menu-sticky"
import { Investment } from "@/components/investment"
import { Socials } from "@/components/socials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Process />
      <StyleMenuSticky />
      <Investment />
      <Socials />
      <Contact />
      <Footer />
    </main>
  )
}
