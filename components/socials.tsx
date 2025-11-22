import { FadeIn } from "./ui/fade-in"
import { Instagram } from "lucide-react"
import Link from "next/link"

export function Socials() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <FadeIn className="flex justify-center gap-12 md:gap-24">
          <Link href="#" className="group flex flex-col items-center gap-4">
            <div className="p-4 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
              Instagram
            </span>
          </Link>

          <Link href="#" className="group flex flex-col items-center gap-4">
            <div className="p-4 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">Tt</div>
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
              TikTok
            </span>
          </Link>

          <Link href="#" className="group flex flex-col items-center gap-4">
            <div className="p-4 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">P</div>
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
              Pinterest
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
