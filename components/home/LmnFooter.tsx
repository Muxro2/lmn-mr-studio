import Link from 'next/link'

const LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Hair Oil', href: '/products/hair-oil' },
	{ label: 'Hair Butter', href: '/products/hair-butter' },
	{ label: 'Brixton Stall', href: '/stall' },
	{ label: 'Instagram', href: 'https://instagram.com/lovemynatural.selfcare', external: true },
	{ label: 'TikTok', href: 'https://tiktok.com/@lovemynatural', external: true },
]

export default function LmnFooter() {
	return (
		<footer className="bg-[#C27B1A] px-6 pt-10 pb-[52px] flex flex-col items-center gap-2">
			<div className="font-[family-name:var(--font-fraunces)] font-black italic text-[22px] text-white">Love My Natural</div>
			<div className="text-[9px] tracking-[0.28em] uppercase text-white/50">Self Care · South London</div>

			<nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5">
				{LINKS.map(({ label, href, external }) => (
					<Link
						key={label}
						href={href}
						target={external ? '_blank' : undefined}
						className="text-[11px] font-semibold text-white/60 hover:text-white no-underline transition-colors duration-150"
					>
						{label}
					</Link>
				))}
			</nav>

			<div className="text-[10px] text-white/30 mt-4">© 2026 Love My Natural Self Care. All rights reserved.</div>
		</footer>
	)
}
