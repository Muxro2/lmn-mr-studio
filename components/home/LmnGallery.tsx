import Image from 'next/image'
import Link from 'next/link'

const IMGS = [
	{ src: '/stall/stall.png',          alt: 'Brixton stall', wide: true  },
	{ src: '/stall/productDisplay.png', alt: 'Products',      wide: false },
	{ src: '/stall/openButter.png',     alt: 'Hair butter',   wide: false },
	{ src: '/stall/naturalHair.png',    alt: 'Natural hair',  wide: true  },
]

export default function LmnGallery() {
	return (
		<section className="bg-[#F5E8BE] pt-16 pb-[72px] overflow-hidden">
			<div className="lmn-rev px-6 pb-[26px]">
				<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">At the Stall</p>
				<h2 className="font-[family-name:var(--font-fraunces)] font-black text-[34px] text-[#2A1800] leading-[1.05]">
					See us<br /><em className="italic text-[#E8A020]">in person.</em>
				</h2>
			</div>

			<div
				className="lmn-rev px-6 grid grid-cols-2 gap-[5px]"
				style={{ gridTemplateRows: '180px 250px 180px' }}
			>
				{IMGS.map((g) => (
					<div key={g.src} className={`relative overflow-hidden rounded-[5px]${g.wide ? ' col-span-2' : ''}`}>
						<Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-500 active:scale-[1.05]" />
					</div>
				))}
			</div>

			<Link href="/stall" className="lmn-rev mx-6 mt-5 flex items-center gap-3 bg-[rgba(194,123,26,0.1)] border border-[rgba(194,123,26,0.18)] rounded-full px-5 py-3.5 no-underline">
				<span className="text-[18px]">🏪</span>
				<div>
					<div className="text-[12px] font-bold text-lmn-tx">Brixton Market, SW9</div>
					<div className="text-[11px] text-lmn-t">See stall info & dates</div>
				</div>
				<span className="ml-auto text-lmn-t opacity-50 text-[16px]">›</span>
			</Link>
		</section>
	)
}