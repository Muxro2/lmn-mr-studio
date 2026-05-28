import type { Metadata } from "next"
import { Syne, Fraunces } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Love My Natural Self Care',
  description: 'Natural hair care. Handcrafted in South London.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#C27B1A" />
        <meta name="apple-mobile-web-app-title" content="Love My Natural" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
      </head>
      <body className={`${syne.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  )
}
