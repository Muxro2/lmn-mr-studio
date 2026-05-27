import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
  style: ["normal", "italic"],
})


export const metadata: Metadata = {
  title: 'Love My Natural Self Care',
  description: 'Natural hair care. Handcrafted in South London.',
  themeColor: '#C27B1A',
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
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
