import Link from 'next/link'
import Image from 'next/image'

const PRODUCTS = [
	{
		slug: 'hair-oil',
		name: ['Hair', 'Oil'], sub: 'Growth & Moisture', vol: '120ml', price: '£12',
		img: '/products/hairOil.png', alt: 'Hair Oil – Growth & Moisture',
		benefits: ['Soothes dry, itchy scalp', 'Reduces breakage', 'Boosts hair growth', 'Lightweight, non-greasy'],
		bannerHeight: 'min-h-[320px]',
		imgHeight: 'h-[320px]',
	},
	{
		slug: 'hair-butter',
		name: ['Hair', 'Butter'], sub: 'Length & Retention', vol: '250ml', price: '£14',
		img: '/products/hairButter.png', alt: 'Hair Butter – Length & Retention',
		benefits: ['Softens & smooths', 'No greasy feeling', 'Organic herbs & butters', 'Seals in moisture'],
		bannerHeight: 'min-h-[240px]',
		imgHeight: 'h-[240px]',
	},
]

export default function LmnProducts() {
	return (
		<section id="products" className="bg-[#FFFDF5] pt-[68px] pb-[76px] overflow-hidden">
			<div className="lmn-rev px-6 pb-11">
				<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">The Range</p>
				<h2 className="font-[family-name:var(--font-fraunces)] font-black text-[36px] text-[#2A1800] leading-[1.05]">
					Two products.<br /><em className="italic text-[#E8A020]">Total results.</em>
				</h2>
			</div>

			{PRODUCTS.map((p) => (
				<div key={p.alt} className="lmn-rev mb-14 relative overflow-hidden">

					<div className={`ml-6 rounded-l-lg bg-[#E8A020] relative overflow-hidden ${p.bannerHeight}`}>
						<div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full bg-white/[0.12] pointer-events-none" />
						<div className="absolute -bottom-[40px] -left-[40px] w-[140px] h-[140px] rounded-full bg-[rgba(194,123,26,0.15)] pointer-events-none" />

						<div className="flex items-end">
							<div className="p-7 flex-1">
								<div className="font-[family-name:var(--font-fraunces)] font-black italic text-[48px] text-white leading-[0.9] mb-1.5 relative z-[1]">
									{p.name[0]}<br />{p.name[1]}
								</div>
								<div className="text-[9px] tracking-[0.28em] uppercase text-white/65 font-bold mb-4 relative z-[1]">{p.sub}</div>
								<span className="inline-block bg-white/20 text-white text-[9px] font-bold tracking-[0.1em] px-3 py-[5px] rounded-full relative z-[1]">{p.vol}</span>
							</div>
							<div className={`relative w-[140px] ${p.imgHeight} shrink-0 z-[1]`}>
								<Image src={p.img} alt={p.alt} fill className="object-contain object-bottom" />
							</div>
						</div>
					</div>

					<div className="px-6 pt-5">
						<div className="font-[family-name:var(--font-fraunces)] font-black text-[34px] text-[#2A1800] leading-none mb-3">{p.price}</div>
						<ul className="list-none mb-4">
							{p.benefits.map((b) => (
								<li key={b} className="text-[12px] text-[#6B4010] leading-[1.55] py-[5px] border-b border-[#F5E8BE] flex gap-1.5 items-start before:content-['→'] before:text-[#E8A020] before:text-[10px] before:mt-0.5 before:shrink-0">
									{b}
								</li>
							))}
						</ul>
						<Link href={`/products/${p.slug}`} className="block w-full bg-[#C27B1A] text-white text-[10px] font-bold tracking-[0.12em] uppercase py-[13px] rounded-full text-center no-underline">
							View Product
						</Link>
					</div>

				</div>
			))}
		</section>
	)
}
