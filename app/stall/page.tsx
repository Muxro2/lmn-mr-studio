'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import LmnNav from '@/components/home/LmnNav'
import LmnFooter from '@/components/home/LmnFooter'

const PRODUCTS = [
  { name: 'Hair Oil', sub: 'Growth & Moisture', price: '£12', emoji: '🫙' },
  { name: 'Hair Butter', sub: 'Length & Retention', price: '£14', emoji: '🧴' },
]

const INFO = [
  { icon: '📍', label: 'Where', value: 'Brixton Market, London SW9' },
  { icon: '📅', label: 'When', value: 'Dates announced on Instagram — follow us so you never miss out' },
  { icon: '⏰', label: 'Hours', value: '10am – 6pm when we\'re live' },
  { icon: '💳', label: 'Payment', value: 'Cash & card accepted' },
]

export default function StallPage() {
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

      {/* Hero */}
      <section className="relative min-h-[52vh] bg-[#E8A020] overflow-hidden flex flex-col justify-end pb-[52px] pt-[80px]">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 60% at 70% 0%, #F7CE72 0%, transparent 55%), radial-gradient(ellipse 80% 80% at 0% 100%, #C27B1A 0%, transparent 60%), #E8A020' }} />
        <div className="absolute rounded-full border border-white/[0.18] pointer-events-none w-[420px] h-[420px] -top-[180px] -right-[130px]" />
        <div className="absolute rounded-full border border-white/[0.18] bg-white/[0.06] pointer-events-none w-[280px] h-[280px] -top-[90px] -right-[60px]" />
        <div aria-hidden className="absolute -bottom-3 -right-2 font-[family-name:var(--font-fraunces)] font-black italic text-[100px] text-white/[0.06] leading-none pointer-events-none whitespace-nowrap">
          BRIXTON
        </div>
        <div className="relative z-[2] px-6">
          <p className="text-[9px] tracking-[0.35em] uppercase text-white/75 font-bold mb-3.5 opacity-0 [animation:var(--animate-lmn-fx0)]">
            Pop-Up Stall · South London
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] font-black text-[48px] leading-[0.92] text-white mb-[18px] opacity-0 [animation:var(--animate-lmn-fx1)]">
            Come find<br />
            <em className="italic text-[#FFFDF5]">us in</em><br />
            Brixton.
          </h1>
          <p className="text-[13px] text-white/70 leading-[1.75] max-w-[220px] font-normal opacity-0 [animation:var(--animate-lmn-fx2)]">
            Shop the full range in person, meet the maker, and treat your crown.
          </p>
        </div>
      </section>

      {/* Stall details */}
      <section className="bg-[#FBF4DC] px-6 py-[56px] relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-[30px] -right-[10px] font-[family-name:var(--font-fraunces)] font-black italic text-[120px] text-[rgba(200,120,26,0.06)] leading-none pointer-events-none whitespace-nowrap">
          SW9
        </div>
        <p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">Stall Info</p>
        <h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[34px] text-[#2A1800] leading-[1.05] mb-8">
          Everything you<br />need to <em className="italic text-[#E8A020]">know.</em>
        </h2>
        <div className="lmn-rev flex flex-col gap-0 border-t border-[rgba(194,123,26,0.15)]">
          {INFO.map(({ icon, label, value }) => (
            <div key={label} className="flex gap-4 items-start py-[18px] border-b border-[rgba(194,123,26,0.15)]">
              <span className="text-[20px] shrink-0 mt-0.5">{icon}</span>
              <div>
                <div className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#C27B1A] mb-1">{label}</div>
                <div className="text-[14px] text-[#2A1800] leading-[1.6]">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's at the stall */}
      <section className="bg-[#FFFDF5] px-6 py-[56px]">
        <p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">At the Stall</p>
        <h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[34px] text-[#2A1800] leading-[1.05] mb-8">
          Shop the full<br /><em className="italic text-[#E8A020]">range.</em>
        </h2>
        <div className="lmn-rev flex flex-col gap-4">
          {PRODUCTS.map(({ name, sub, price, emoji }) => (
            <div key={name} className="flex items-center gap-4 bg-[#FBF4DC] border border-[rgba(194,123,26,0.15)] rounded-[12px] px-5 py-4">
              <div className="w-[52px] h-[52px] rounded-full bg-[rgba(232,160,32,0.12)] flex items-center justify-center text-[24px] shrink-0">
                {emoji}
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#2A1800]">{name}</div>
                <div className="text-[11px] text-[#6B4010]">{sub}</div>
              </div>
              <div className="font-[family-name:var(--font-fraunces)] font-bold text-[18px] text-[#C27B1A]">{price}</div>
            </div>
          ))}
        </div>
        <p className="lmn-rev text-[12px] text-[#6B4010] mt-5 leading-[1.7]">
          All products are made in small batches — stock can sell out fast. Order online if you want to guarantee yours.
        </p>
        <Link
          href="/#products"
          className="lmn-rev mt-6 flex items-center justify-center gap-2 border border-[#E8A020] text-[#C27B1A] text-[11px] font-bold tracking-[0.14em] uppercase px-5 py-3.5 rounded-full no-underline"
        >
          Shop All Products
        </Link>
      </section>

      {/* Instagram CTA */}
      <section className="bg-[#E8A020] px-6 py-[56px] relative overflow-hidden before:content-[''] before:absolute before:-top-[100px] before:-right-[100px] before:w-[350px] before:h-[350px] before:rounded-full before:bg-white/[0.08] before:pointer-events-none">
        <div aria-hidden className="absolute -bottom-3 -right-2 font-[family-name:var(--font-fraunces)] font-black italic text-[80px] text-white/[0.07] leading-none pointer-events-none whitespace-nowrap">
          @lovemynatural
        </div>
        <p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-white/70 mb-4 relative z-[1]">Stay in the Loop</p>
        <h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[34px] text-white leading-[1.05] mb-4 relative z-[1]">
          Follow us for<br /><em className="italic">stall dates.</em>
        </h2>
        <p className="lmn-rev text-[13px] text-white/70 leading-[1.75] mb-8 relative z-[1]">
          We announce all upcoming market dates on Instagram. Follow us to be the first to know when we&apos;re live in Brixton.
        </p>
        <Link
          href="https://instagram.com/lovemynatural.selfcare"
          target="_blank"
          className="lmn-rev flex items-center justify-center gap-2.5 bg-white text-[#C27B1A] text-[12px] font-bold tracking-[0.1em] uppercase px-5 py-4 rounded-full no-underline relative z-[1]"
        >
          <span>📸</span>
          @lovemynatural.selfcare
        </Link>
      </section>

      <LmnFooter />
    </main>
  )
}
