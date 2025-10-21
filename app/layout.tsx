import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "HolidayNest.uk - Luxury Travel & Holiday Rentals",
  description:
    "Experience luxury travel with HolidayNest.uk. Discover premium holiday rentals and exclusive destinations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfairDisplay.variable} ${poppins.variable} font-poppins antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
