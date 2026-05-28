const TAGS = ['No Sulphates', 'No Parabens', 'Organic Only', 'Handcrafted', 'Black Owned']

export default function LmnAbout() {
	return (
		<section className="bg-[#FBF4DC] px-6 py-[68px] relative overflow-hidden">
			<div aria-hidden className="absolute -bottom-[30px] -right-[10px] font-[family-name:var(--font-fraunces)] font-black italic text-[120px] text-[rgba(200,120,26,0.06)] leading-none pointer-events-none whitespace-nowrap">
				LMN
			</div>
			<div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">
				<div>
					<p className="lmn-rev text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">The Brand</p>
					<h2 className="lmn-rev font-[family-name:var(--font-fraunces)] font-black text-[38px] md:text-[52px] text-[#2A1800] leading-[1.05] mb-5 md:mb-0">
						Made with love.<br />Built for <em className="italic text-[#E8A020]">your crown.</em>
					</h2>
				</div>
				<div>
					<p className="lmn-rev text-[14px] md:text-[16px] text-[#6B4010] leading-[1.85] font-normal mb-[30px]">
						Started in South London, Love My Natural Self Care exists to celebrate natural hair.
						Every drop, every scoop — handmade using only organic herbs, oils, and butters.
						No shortcuts. No synthetics. Just your hair, at its best.
					</p>
					<div className="lmn-rev flex flex-wrap gap-2">
						{TAGS.map((t) => (
							<span key={t} className="bg-[rgba(232,160,32,0.1)] border border-[rgba(194,123,26,0.2)] text-[#C27B1A] text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-[7px] rounded-full">
								{t}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
