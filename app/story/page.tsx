'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import LmnNav from '@/components/home/LmnNav'
import LmnFooter from '@/components/home/LmnFooter'

const TIMELINE = [
	{ year: '2022', event: 'First batch made at home', desc: 'Elle creates the first version of the Hair Oil for personal use. Friends start asking for their own bottles.' },
	{ year: '2023', event: 'Brixton Market debut', desc: 'Love My Natural sets up its first market stall. Sells out within hours. The Hair Butter joins the range.' },
	{ year: '2024', event: 'Growing the community', desc: 'Regular stall dates established. Instagram following grows organically through customer word of mouth.' },
	{ year: '2025', event: 'Website launch', desc: 'Love My Natural goes online — making it easier than ever to shop the range and stay connected with the community.' },
]

const VALUES = [
	{ num: '01', title: 'Natural, always', desc: 'No sulphates. No parabens. No synthetic fillers. If we can\'t say what it is, it\'s not going in the bottle.' },
	{ num: '02', title: 'Made with intention', desc: 'Every product is handcrafted in small batches. We\'d rather make less and make it well.' },
	{ num: '03', title: 'Community first', desc: 'We exist because of our community. The Brixton stall, the DMs, the word of mouth — that\'s everything to us.' },
	{ num: '04', title: 'Celebrating natural hair', desc: 'Natural hair is beautiful as it is. Our job is to help it thrive — not to change it.' },
]

const BTS_IMGS = [
	{ src: '/stall/stall.png', alt: 'Stall setup' },
	{ src: '/stall/openButter.png', alt: 'Hair butter' },
	{ src: '/stall/productDisplay.png', alt: 'Products on display' },
	{ src: '/products/hairOil.png', alt: 'Hair oil' },
]

export default function StoryPage() {
	const revRefs = useRef<HTMLElement[]>([])

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

			{/* ── PAGE HEADER ── */}
			<header className="pt-[70px] relative overflow-hidden min-h-[400px] flex flex-col justify-end">
				<div
					className="absolute inset-0 bg-cover bg-[center_20%]"
					style={{ backgroundImage: "url('/stall/stall.png')" }}
				/>
				<div
					className="absolute inset-0"
					style={{ background: 'linear-gradient(to bottom, rgba(42,24,0,0.1) 0%, rgba(42,24,0,0.2) 50%, rgba(42,24,0,0.88) 100%)' }}
				/>
				<div className="relative z-[2] px-6 pb-9 pt-7">
					<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-white/60 mb-2.5">Our Story</p>
					<h1 className="font-[family-name:var(--font-fraunces)] font-black text-[44px] leading-[0.92] text-white mb-3.5">
						Built from
						<em className="italic text-[#F7CE72] block">the heart.</em>
					</h1>
					<p className="text-[12px] text-white/55 font-semibold tracking-[0.1em] uppercase">
						Elle · Founder, Love My Natural
					</p>
				</div>
			</header>

			{/* ── INTRO ── */}
			<section className="bg-[#FBF4DC] px-6 py-10">
				<p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-3.5">In Her Words</p>
				<blockquote className="lmn-rev font-[family-name:var(--font-fraunces)] font-bold italic text-[22px] leading-[1.35] text-[#2A1800] border-l-[3px] border-[#E8A020] pl-4 mb-6">
					&ldquo;I started this because I couldn&apos;t find anything that actually worked for my hair without a list of ingredients I couldn&apos;t pronounce.&rdquo;
				</blockquote>
				<div className="lmn-rev text-[14px] text-[#6B4010] leading-[1.85] font-normal space-y-3.5">
					<p>Elle grew up watching the women in her family care for their natural hair with kitchen remedies and passed-down knowledge. When she moved to South London, she struggled to find products that honoured that tradition — things that were genuinely natural, genuinely effective, and made with people like her in mind.</p>
					<p>So she made her own.</p>
				</div>
			</section>

			{/* ── FOUNDER PHOTO ── */}
			{/* swap for <Image> with real founder portrait when available */}
			<div className="w-full aspect-[4/3] overflow-hidden relative bg-[#F5E8BE] flex items-center justify-center text-[48px]"
				style={{ background: 'linear-gradient(160deg, #F7CE72 0%, #C27B1A 100%)' }}>
				🌿
			</div>
			<div className="bg-[#2A1800] px-6 py-3.5">
				<p className="text-[11px] text-white/50 italic tracking-[0.05em]">Elle at the Brixton Market stall · 2024</p>
			</div>

			{/* ── ORIGIN ── */}
			<section className="bg-[#FFFDF5] px-6 py-10">
				<p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-3.5">How It Started</p>
				<h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[30px] text-[#2A1800] leading-[1.05] mb-5">
					From the kitchen<br />to <em className="italic text-[#E8A020]">Brixton Market.</em>
				</h2>
				<div className="lmn-rev text-[14px] text-[#6B4010] leading-[1.85] font-normal space-y-3.5">
					<p>It started small — a batch of hair oil made at home, given to friends and family who kept asking what she was using. Word spread quickly. Within a few months, Elle had a stall at Brixton Market and a small but loyal community of customers who&apos;d come back every week.</p>
					<p>Love My Natural was never meant to be a business at first. It was a solution. A way of saying: your hair deserves better, and better shouldn&apos;t cost the earth or come with a chemistry lesson on the label.</p>
					<p>Every product is still made by hand. Every ingredient is chosen with intention. That hasn&apos;t changed since the first batch, and it won&apos;t.</p>
				</div>
			</section>

			{/* ── TIMELINE ── */}
			<section className="bg-[#FBF4DC] px-6 py-10">
				<h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[28px] text-[#2A1800] leading-[1.05] mb-7">
					The <em className="italic text-[#E8A020]">journey</em><br />so far.
				</h2>
				<div className="lmn-rev relative pl-5">
					<div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-sm bg-[rgba(194,123,26,0.2)]" />
					{TIMELINE.map((item) => (
						<div key={item.year} className="relative pl-5 mb-7 last:mb-0">
							<div className="absolute left-[-21px] top-1 w-[10px] h-[10px] rounded-full bg-[#E8A020] border-2 border-[#FBF4DC]" />
							<p className="text-[9px] font-[800] tracking-[0.2em] uppercase text-[#C27B1A] mb-1">{item.year}</p>
							<p className="text-[13px] font-bold text-[#2A1800] mb-1">{item.event}</p>
							<p className="text-[12px] text-[#6B4010] leading-[1.6]">{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* ── VALUES ── */}
			<section className="bg-[#2A1800] px-6 py-10 relative overflow-hidden">
				<div className="absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full bg-[rgba(232,160,32,0.07)] pointer-events-none" />
				<p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#F7CE72] mb-3.5">What We Stand For</p>
				<h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[30px] text-white leading-[1.05] mb-7">
					Our <em className="italic text-[#F7CE72]">values.</em>
				</h2>
				<div className="lmn-rev border-t border-white/[0.07]">
					{VALUES.map((v) => (
						<div key={v.num} className="flex gap-4 items-start py-[18px] border-b border-white/[0.07]">
							<span className="font-[family-name:var(--font-fraunces)] italic text-[13px] text-white/20 w-5 shrink-0 mt-0.5">{v.num}</span>
							<div>
								<div className="text-[14px] font-bold text-white mb-1">{v.title}</div>
								<div className="text-[12px] text-white/50 leading-[1.6]">{v.desc}</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ── BEHIND THE SCENES ── */}
			<section className="bg-[#F5E8BE] pt-10 pb-10 overflow-hidden">
				<div className="lmn-rev px-6 pb-5">
					<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-3.5">Behind the Scenes</p>
					<h2 className="font-[family-name:var(--font-fraunces)] font-black text-[28px] text-[#2A1800] leading-[1.05]">
						How it&apos;s<br /><em className="italic text-[#E8A020]">made.</em>
					</h2>
				</div>
				<div className="lmn-rev flex gap-2.5 px-6 overflow-x-auto [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{BTS_IMGS.map((img) => (
						<div key={img.src} className="shrink-0 w-[200px] h-[250px] rounded-[10px] overflow-hidden bg-[#C27B1A] [scroll-snap-align:start]">
							<img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
						</div>
					))}
				</div>
			</section>

			{/* ── CTA ── */}
			<section className="bg-[#E8A020] px-6 py-12 relative overflow-hidden">
				<div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full bg-white/[0.08] pointer-events-none" />
				<h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[32px] text-white leading-[1.05] mb-2.5">
					Try it for<br /><em className="italic">yourself.</em>
				</h2>
				<p className="lmn-rev text-[13px] text-white/70 leading-[1.7] mb-7">Two products. Made with care. For hair like yours.</p>
				<div className="lmn-rev flex flex-col gap-2.5">
					<Link href="/#products" className="block bg-white text-[#C27B1A] font-bold text-[11px] tracking-[0.12em] uppercase py-3.5 rounded-full text-center no-underline">
						Shop the Range
					</Link>
					<Link href="/stall" className="block bg-black/[0.12] text-white font-bold text-[11px] tracking-[0.12em] uppercase py-3.5 rounded-full text-center no-underline">
						Visit Us in Brixton
					</Link>
				</div>
			</section>

			<LmnFooter />
		</main>
	)
}
