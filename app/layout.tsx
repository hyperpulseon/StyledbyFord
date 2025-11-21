import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NoiseOverlay } from "@/components/ui/noise-overlay"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "StyledbyFORD | Luxury Personal Styling",
  description: "Elevate your personal brand with curated wardrobe styling and luxury consultation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-black text-white antialiased selection:bg-white/20 selection:text-white`}
      >
        <SmoothScrollProvider>
          <NoiseOverlay />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
