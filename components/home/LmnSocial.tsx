import Link from 'next/link'

export default function LmnSocial() {
	return (
		<section className="bg-[#FBF4DC] px-6 py-16">
			<p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">Follow Along</p>
			<h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[36px] text-[#2A1800] leading-[1.05] mb-2.5">
				Join the<br /><em className="italic text-[#E8A020]">community.</em>
			</h2>
			<p className="lmn-rev text-[13px] text-[#6B4010] leading-[1.75] font-normal mb-7">
				Real results, new drops, behind-the-scenes. Follow us and be first to know.
			</p>
			<div className="lmn-rev flex flex-col gap-2.5">
				<Link href="https://instagram.com/lovemynatural.selfcare" target="_blank" className="flex items-center gap-3.5 bg-[#F5E8BE] border border-[rgba(194,123,26,0.15)] rounded-full px-5 py-3.5 no-underline">
					<div className="w-9 h-9 rounded-full bg-[#E8A020] flex items-center justify-center text-[18px] shrink-0">📸</div>
					<div><div className="text-[13px] font-bold text-[#2A1800]">Instagram</div><div className="text-[11px] text-[#A06828] mt-0.5">@lovemynatural.selfcare</div></div>
					<span className="ml-auto text-[#C27B1A] text-[18px] opacity-60">›</span>
				</Link>
				<Link href="https://tiktok.com/@lovemynatural" target="_blank" className="flex items-center gap-3.5 bg-[#F5E8BE] border border-[rgba(194,123,26,0.15)] rounded-full px-5 py-3.5 no-underline">
					<div className="w-9 h-9 rounded-full bg-[#E8A020] flex items-center justify-center text-[18px] shrink-0">🎵</div>
					<div><div className="text-[13px] font-bold text-[#2A1800]">TikTok</div><div className="text-[11px] text-[#A06828] mt-0.5">@lovemynatural</div></div>
					<span className="ml-auto text-[#C27B1A] text-[18px] opacity-60">›</span>
				</Link>
			</div>
		</section>
	)
}
