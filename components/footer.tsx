import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif tracking-wider text-foreground">StyledbyFORD</div>

        <div className="text-xs text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} StyledbyFORD. All rights reserved.
        </div>

        <div className="flex gap-6">
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="font-bold text-lg leading-none">Tt</span>
            <span className="sr-only">TikTok</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
