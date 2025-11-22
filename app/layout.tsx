import type React from "react"
import type { Metadata } from "next"
import { Inter, Bodoni_Moda } from "next/font/google"
import "./globals.css"
import { NoiseOverlay } from "@/components/ui/noise-overlay"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bodoni.variable} font-sans bg-black text-white antialiased selection:bg-white/20 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <NoiseOverlay />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
