'use client'

import Link from 'next/link'

export default function LmnOrder() {
	const scrollToProducts = (e: React.MouseEvent) => {
		e.preventDefault()
		document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section id="order" className="bg-[#E8A020] px-6 py-[68px] relative overflow-hidden before:content-[''] before:absolute before:-top-[100px] before:-right-[100px] before:w-[350px] before:h-[350px] before:rounded-full before:bg-white/[0.08] before:pointer-events-none after:content-[''] after:absolute after:-bottom-[80px] after:-left-[80px] after:w-[250px] after:h-[250px] after:rounded-full after:bg-[rgba(194,123,26,0.15)] after:pointer-events-none">
			<div className="max-w-7xl mx-auto">
				<p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-white/70 mb-4">Get Yours</p>
				<h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[36px] md:text-[52px] text-white leading-[1.05] mb-8 relative z-[1]">
					Three ways<br className="md:hidden" /> to <em className="italic">order.</em>
				</h2>

				<div className="lmn-rev grid md:grid-cols-3 gap-0 md:gap-6 border-t border-white/20 md:border-0 relative z-[1]">

					<a onClick={scrollToProducts} href="#products" className="flex md:flex-col items-center md:items-start gap-3.5 md:gap-4 py-[18px] md:py-6 md:px-6 border-b md:border border-white/20 md:rounded-2xl md:bg-white/[0.08] no-underline cursor-pointer hover:bg-white/[0.14] transition-colors duration-200 md:backdrop-blur-sm">
						<span className="font-[family-name:var(--font-fraunces)] italic text-[12px] text-white/35 w-[22px] shrink-0">01</span>
						<div className="w-[42px] h-[42px] rounded-full bg-white/[0.18] flex items-center justify-center text-[18px] shrink-0">🛍️</div>
						<div className="flex-1 md:flex-none">
							<div className="text-[15px] font-bold text-white mb-0.5">Shop the Range</div>
							<div className="text-[11px] text-white/60">Browse our products above</div>
						</div>
						<span className="ml-auto md:hidden text-white/50 text-[18px]">→</span>
					</a>

					<Link href="https://instagram.com/lovemynatural.selfcare" target="_blank" className="flex md:flex-col items-center md:items-start gap-3.5 md:gap-4 py-[18px] md:py-6 md:px-6 border-b md:border border-white/20 md:rounded-2xl md:bg-white/[0.08] no-underline hover:bg-white/[0.14] transition-colors duration-200 md:backdrop-blur-sm">
						<span className="font-[family-name:var(--font-fraunces)] italic text-[12px] text-white/35 w-[22px] shrink-0">02</span>
						<div className="w-[42px] h-[42px] rounded-full bg-white/[0.18] flex items-center justify-center text-[18px] shrink-0">📸</div>
						<div className="flex-1 md:flex-none">
							<div className="text-[15px] font-bold text-white mb-0.5">Instagram DM</div>
							<div className="text-[11px] text-white/60">Message us to place your order</div>
						</div>
						<span className="ml-auto md:hidden text-white/50 text-[18px]">→</span>
					</Link>

					<Link href="/stall" className="flex md:flex-col items-center md:items-start gap-3.5 md:gap-4 py-[18px] md:py-6 md:px-6 border-b md:border border-white/20 md:rounded-2xl md:bg-white/[0.08] no-underline hover:bg-white/[0.14] transition-colors duration-200 md:backdrop-blur-sm">
						<span className="font-[family-name:var(--font-fraunces)] italic text-[12px] text-white/35 w-[22px] shrink-0">03</span>
						<div className="w-[42px] h-[42px] rounded-full bg-white/[0.18] flex items-center justify-center text-[18px] shrink-0">🏪</div>
						<div className="flex-1 md:flex-none">
							<div className="text-[15px] font-bold text-white mb-0.5">Brixton Stall</div>
							<div className="text-[11px] text-white/60">Come see us in person</div>
						</div>
						<span className="ml-auto md:hidden text-white/50 text-[18px]">→</span>
					</Link>

				</div>
			</div>
		</section>
	)
}
