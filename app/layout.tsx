import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { NoiseOverlay } from "@/components/ui/noise-overlay"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { Preloader } from "@/components/ui/preloader"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "StyledbyFORD | Luxury Personal Styling",
  description: "My eye for style. Luxury personal styling and wardrobe consultation.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans bg-black text-white antialiased selection:bg-white/20 selection:text-white`}
      >
        <Preloader />
        <CustomCursor />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  )
}
