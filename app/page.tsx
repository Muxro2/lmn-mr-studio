'use client'

import { useEffect } from 'react'
import LmnNav from '@/components/home/LmnNav'
import LmnHero from '@/components/home/LmnHero'
import LmnTicker from '@/components/home/LmnTicker'
import LmnAbout from '@/components/home/LmnAbout'
import LmnProducts from '@/components/home/LmnProducts'
import LmnGallery from '@/components/home/LmnGallery'
import LmnOrder from '@/components/home/LmnOrder'
import LmnInstaFeed from '@/components/home/LmnInstaFeed'
import LmnFooter from '@/components/home/LmnFooter'

export default function Page() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.lmn-rev')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('lmn-rev--on'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="lmn-grain font-[family-name:var(--font-syne)] bg-[#FFFDF5] text-[#2A1800] overflow-x-hidden max-w-[430px] mx-auto relative">
      <LmnNav />
      <LmnHero />
      <LmnTicker />
      <LmnAbout />
      <LmnProducts />
      <LmnGallery />
      <LmnOrder />
      <LmnInstaFeed />
      <LmnFooter />
    </main>
  )
}
