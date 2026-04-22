import Link from 'next/link'
import Image from 'next/image'

export default function LmnHero() {
	return (
		<section className="relative min-h-svh bg-[#E8A020] overflow-hidden flex flex-col justify-end pb-[52px]">
			<div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 60% at 70% 0%, #F7CE72 0%, transparent 55%), radial-gradient(ellipse 80% 80% at 0% 100%, #C27B1A 0%, transparent 60%), #E8A020' }} />
			<div className="absolute rounded-full border border-white/[0.18] pointer-events-none w-[420px] h-[420px] -top-[180px] -right-[130px]" />
			<div className="absolute rounded-full border border-white/[0.18] bg-white/[0.06] pointer-events-none w-[280px] h-[280px] -top-[90px] -right-[60px]" />
			<Image
				src="/products/hairOil.png"
				alt="Hair Oil"
				width={270}
				height={10}
				className="absolute -right-[18px] top-[50px] w-[270px] [filter:drop-shadow(0_30px_60px_rgba(150,80,0,0.3))] [animation:var(--animate-lmn-rise)]"
			/>
			<div className="relative z-[2] px-6">
				<p className="text-[9px] tracking-[0.35em] uppercase text-white/75 font-bold mb-3.5 opacity-0 [animation:var(--animate-lmn-fx0)]">
					Natural Hair Care · South London
				</p>
				<h1 className="font-[family-name:var(--font-fraunces)] font-black text-[52px] leading-[0.92] text-white mb-[18px] opacity-0 [animation:var(--animate-lmn-fx1)]">
					Your hair
					<span className="block italic text-[#FFFDF5] text-[64px]">deserves</span>
					the best.
				</h1>
				<p className="text-[13px] text-white/70 leading-[1.75] max-w-[200px] mb-7 font-normal opacity-0 [animation:var(--animate-lmn-fx2)]">
					Organic, handcrafted, made for natural hair. Only the good stuff.
				</p>
				<div className="flex gap-2.5 opacity-0 [animation:var(--animate-lmn-fx3)]">
					<Link href="#products" className="w-[50%] bg-white text-[#C27B1A] text-[11px] font-bold tracking-[0.1em] uppercase py-3.5 rounded-full text-center no-underline">
						Shop the Range
					</Link>
					
				</div>
			</div>
		</section>
	)
}
