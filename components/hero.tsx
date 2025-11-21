"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16 pt-32">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-white/20 bg-white/10 text-white hover:bg-white/20"
          asChild
        >
          <Link href="#contact">
            Accepting New Clients <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-serif font-semibold tracking-tighter text-white">
          StyledbyFORD
        </h1>
        <p className="mt-6 md:text-lg text-white/80">
          Elevating your personal brand through curated wardrobe styling and luxury consultation.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base bg-white text-black hover:bg-gray-200" asChild>
            <Link href="#process">
              Explore the Process <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none border-white/30 text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="#contact">
              Book the Vibe Check
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto aspect-video bg-black/50 rounded-xl overflow-hidden relative border border-white/10">
        <img
          src="/luxury-runway-dark.png"
          alt="Fashion Runway"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </div>
  )
}
