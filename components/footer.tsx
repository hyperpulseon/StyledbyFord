import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif tracking-wider">StyledbyFORD</div>

        <div className="text-xs text-gray-600 uppercase tracking-widest">
          © {new Date().getFullYear()} StyledbyFORD. All rights reserved.
        </div>

        <div className="flex gap-6">
          <Link href="#" className="text-gray-500 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-white transition-colors">
            <span className="font-bold text-lg leading-none">Tt</span>
            <span className="sr-only">TikTok</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
