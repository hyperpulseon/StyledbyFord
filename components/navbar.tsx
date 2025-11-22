"use client"

import { useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "The Process", href: "#process" },
  { name: "The Style Menu", href: "#style-menu" },
  { name: "The Investment", href: "#investment" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-wider z-50 relative">
          StyledbyFORD
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button className="z-50 text-foreground">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r border-border w-full max-w-[300px]">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation links for mobile devices
              </SheetDescription>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navItems.map((item) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
