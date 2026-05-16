import Link from 'next/link'
import Image from 'next/image'

export default function LmnStoryTeaser() {
	return (
		<section className="bg-[#2A1800] px-6 py-12 relative overflow-hidden">

			{/* decorative circle */}
			<div className="absolute -top-16 -right-16 w-[260px] h-[260px] rounded-full bg-[rgba(232,160,32,0.07)] pointer-events-none" />

			{/* founder photo — swap for real portrait */}
			<div className="lmn-rev w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[rgba(232,160,32,0.3)]"
				style={{ background: 'linear-gradient(160deg, #F7CE72 0%, #C27B1A 100%)' }}>
				<div className="w-full h-full flex items-center justify-center text-[28px]">🌿</div>
			</div>

			<p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#F7CE72] mb-3">Our Story</p>

			<blockquote className="lmn-rev font-[family-name:var(--font-fraunces)] font-bold italic text-[22px] leading-[1.35] text-white border-l-[3px] border-[#E8A020] pl-4 mb-5">
				&ldquo;I started this because I couldn&apos;t find anything that actually worked for my hair.&rdquo;
			</blockquote>

			<p className="lmn-rev text-[13px] text-white/50 leading-[1.75] font-normal mb-7">
				Love My Natural started in a South London kitchen. One batch of hair oil, shared with friends — and it grew from there.
			</p>

			<Link
				href="/story"
				className="lmn-rev inline-flex items-center gap-2 bg-[#E8A020] text-white font-bold text-[11px] tracking-[0.12em] uppercase px-6 py-3.5 rounded-full no-underline"
			>
				Read the full story
				<span className="text-[16px] leading-none">→</span>
			</Link>

		</section>
	)
}
