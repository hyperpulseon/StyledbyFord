"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CirclePlay } from "lucide-react"
import Link from "next/link"
import { VideoSection } from "@/components/video-section"

export function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#contact">
            Accepting New Clients <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter text-white">
          StyledbyFORD
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-serif italic text-white/90">
          My eye for style
        </h2>
        <p className="mt-6 md:text-lg text-white/80">
          Style is not about what you wear - it is a statement. With my eye for detail and effortless style instinct, I create looks that are elevated, modern, and most importantly- impossible to overlook. I do not chase trends; I shape presence.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="#process">
              Get Started <ArrowUpRight className="h-5! w-5!" />
            </Link>
          </Button>
        </div>
      </div>
      <VideoSection />
    </div>
  )
}
