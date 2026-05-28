'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function LmnHero() {
	const [loaded, setLoaded] = useState(false)

	return (
		<section className="relative h-svh bg-[#E8A020] overflow-hidden">
			<div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 60% at 70% 0%, #F7CE72 0%, transparent 55%), radial-gradient(ellipse 80% 80% at 0% 100%, #C27B1A 0%, transparent 60%), #E8A020' }} />
			<div className="absolute rounded-full border border-white/[0.18] pointer-events-none w-[420px] h-[420px] -top-[180px] -right-[130px] md:w-[700px] md:h-[700px] md:-top-[300px] md:-right-[250px]" />
			<div className="absolute rounded-full border border-white/[0.18] bg-white/[0.06] pointer-events-none w-[280px] h-[280px] -top-[90px] -right-[60px] md:w-[480px] md:h-[480px] md:-top-[150px] md:-right-[120px]" />

			{/* Desktop: 2-col layout */}
			<div className="relative z-[2] max-w-7xl mx-auto h-full flex flex-col md:flex-row md:items-center">
				<div className="flex-1 flex flex-col justify-end md:justify-center px-6 md:px-16 pb-[52px] md:pb-0 pt-20 md:pt-0">
					<p className="text-[9px] tracking-[0.35em] uppercase text-white/75 font-bold mb-3.5 opacity-0 [animation:var(--animate-lmn-fx0)]">
						Natural Hair Care · South London
					</p>
					<h1 className="font-[family-name:var(--font-fraunces)] font-black text-[52px] md:text-[68px] lg:text-[80px] leading-[0.92] text-white mb-[18px] opacity-0 [animation:var(--animate-lmn-fx1)]">
						Your hair
						<span className="block italic text-white text-[64px] md:text-[84px] lg:text-[100px]" style={{ textShadow: '0 0 30px rgba(255,255,255,0.4)' }}>deserves</span>
						the best.
					</h1>
					<p className="text-[13px] md:text-[15px] text-white/70 leading-[1.75] max-w-[200px] md:max-w-[300px] mb-7 font-normal opacity-0 [animation:var(--animate-lmn-fx2)]">
						Organic, handcrafted, made for natural hair. Only the good stuff.
					</p>
					<div className="flex flex-col md:flex-row gap-2.5 opacity-0 [animation:var(--animate-lmn-fx3)] max-w-[200px] md:max-w-none">
						<Link href="#products" className="bg-white text-[#C27B1A] text-[11px] font-bold tracking-[0.1em] uppercase py-3.5 md:px-8 rounded-full text-center no-underline">
							Shop the Range
						</Link>
						<Link href="/stall" className="bg-[#2A1800]/40 border border-white/35 text-white text-[11px] font-bold tracking-[0.1em] uppercase py-3.5 md:px-8 rounded-full text-center no-underline backdrop-blur-sm">
							Find our Stall
						</Link>
					</div>
				</div>

				{/* Desktop image — top visible, bottom clips */}
				<div className="hidden md:flex flex-1 items-start justify-center overflow-hidden h-full pt-20">
					<Image
						src="/products/hairOil.png"
						alt="Hair Oil"
						width={400}
						height={600}
						priority
						sizes="(min-width: 1024px) 320px, 260px"
						onLoad={() => setLoaded(true)}
						className={`w-[260px] lg:w-[320px] transition-none ${
							loaded ? '[animation:var(--animate-lmn-rise)]' : 'opacity-0'
						}`}
					/>
				</div>
			</div>

			{/* Mobile-only absolute image */}
			<Image
				src="/products/hairOil.png"
				alt="Hair Oil"
				width={290}
				height={500}
				priority
				sizes="290px"
				onLoad={() => setLoaded(true)}
				className={`md:hidden absolute -right-[41px] top-[40px] w-[290px] transition-none ${
					loaded ? '[animation:var(--animate-lmn-rise)]' : 'opacity-0'
				}`}
			/>
		</section>
	)
}
