import Image from 'next/image'
import Link from 'next/link'

const IMGS = [
	{ src: '/Assets/FrontOnShotOfStallNoPeople.png',         alt: 'Brixton stall',         wide: true  },
	{ src: '/Assets/DisplayDepthOfFieldShot.jpg',            alt: 'Product display',        wide: false },
	{ src: '/Assets/CloseUpOfButterAndOils.jpg',             alt: 'Hair butter & oils',     wide: false },
	{ src: '/Assets/AllThreeProductsInFrontOfGreenary.jpg',  alt: 'Full product range',     wide: true  },
]

export default function LmnGallery() {
	return (
		<section className="bg-[#F5E8BE] pt-16 pb-16 overflow-hidden">

			<div className="lmn-rev max-w-7xl mx-auto px-6 md:px-16 pb-6">
				<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-3">At the Stall</p>
				<div className="flex items-end justify-between gap-4">
					<h2 className="font-[family-name:var(--font-fraunces)] font-black text-[34px] md:text-[48px] text-[#2A1800] leading-[1.05]">
						See us<br /><em className="italic text-[#E8A020]">in person.</em>
					</h2>
					<Link
						href="/stall"
						className="shrink-0 text-[10px] font-bold tracking-[0.1em] uppercase text-[#C27B1A] border border-[rgba(194,123,26,0.3)] rounded-full px-4 py-2 no-underline mb-1"
					>
						See more →
					</Link>
				</div>
			</div>

			<div
				className="lmn-rev max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 [grid-template-rows:200px_260px_200px] md:[grid-template-rows:380px]"
			>
				{IMGS.map((g, i) => (
					<div
						key={g.src}
						className={`relative overflow-hidden ${
							g.wide
								? 'col-span-2 md:col-span-1 rounded-2xl'
								: i === 1
								? 'rounded-tl-2xl rounded-bl-2xl rounded-tr-lg rounded-br-lg md:rounded-2xl'
								: 'rounded-tr-2xl rounded-br-2xl rounded-tl-lg rounded-bl-lg md:rounded-2xl'
						}`}
					>
						<Image
							src={g.src}
							alt={g.alt}
							fill
							sizes={g.wide ? '(max-width: 768px) 100vw, 25vw' : '(max-width: 768px) 50vw, 25vw'}
							className="object-cover transition-transform duration-700 hover:scale-[1.04]"
						/>
						<div className="absolute inset-0 bg-[rgba(194,123,26,0.06)]" />
					</div>
				))}
			</div>

			<div className="lmn-rev max-w-7xl mx-auto px-6 md:px-16 mt-5">
				<Link
					href="/stall"
					className="flex items-center gap-4 bg-[#2A1800] rounded-2xl px-5 py-4 no-underline hover:bg-[#3a2200] transition-colors duration-200"
				>
					<div className="w-10 h-10 rounded-full bg-[#E8A020] flex items-center justify-center text-[18px] shrink-0">
						🏪
					</div>
					<div className="flex-1">
						<div className="text-[13px] font-bold text-white leading-tight">Brixton Market, SW9</div>
						<div className="text-[11px] text-white/50 mt-0.5">See upcoming dates & stall info</div>
					</div>
					<span className="text-[#E8A020] text-[20px] opacity-70">›</span>
				</Link>
			</div>

		</section>
	)
}
