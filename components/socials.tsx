import { FadeIn } from "./ui/fade-in"
import { Instagram } from "lucide-react"
import Link from "next/link"

export function Socials() {
  return (
    <section className="py-20 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <FadeIn className="flex justify-center gap-12 md:gap-24">
          <Link href="#" className="group flex flex-col items-center gap-4">
            <div className="p-4 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
              Instagram
            </span>
          </Link>

          <Link href="#" className="group flex flex-col items-center gap-4">
            <div className="p-4 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">Tt</div>
            </div>
            <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
              TikTok
            </span>
          </Link>

          <Link href="#" className="group flex flex-col items-center gap-4">
            <div className="p-4 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">P</div>
            </div>
            <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
              Pinterest
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
