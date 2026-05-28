import Link from 'next/link';
import Image from 'next/image';

const IG_URL = 'https://instagram.com/lovemynaturaluk'

const POSTS = [
	{ img: '/posts/post1.PNG', caption: '' },
	{ img: '/posts/post2.PNG', caption: '' },
	{ img: '/posts/post3.PNG', caption: '' },
	{ img: '/posts/post4.PNG', caption: '' },
	{ img: '/posts/post5.PNG', caption: '' },
]

export default function LmnInstaFeed() {
	return (
		<section className="bg-[#FFFDF5] pt-16 pb-[72px] overflow-hidden">
			<div className="lmn-rev max-w-7xl mx-auto px-6 md:px-16 pb-7 flex items-end justify-between">
				<div>
					<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">On Instagram</p>
					<h2 className="font-[family-name:var(--font-fraunces)] font-black text-[30px] md:text-[42px] text-[#2A1800] leading-[1.05]">
						Real hair.<br /><em className="italic text-[#E8A020]">Real results.</em>
					</h2>
				</div>
				<Link href={IG_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#E8A020] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-2 rounded-full no-underline shrink-0">
					<svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
					Follow
				</Link>
			</div>

			<div className="lmn-rev md:max-w-7xl md:mx-auto md:px-16">
				<div className="flex gap-2.5 px-6 md:px-0 overflow-x-auto md:overflow-visible md:grid md:grid-cols-5 scroll-smooth [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [overscroll-behavior-x:contain]">
					{POSTS.map((p, i) => (
						<Link key={i} href={IG_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 w-[200px] md:w-auto [scroll-snap-align:start] rounded-lg overflow-hidden bg-[#F5E8BE] border border-[rgba(194,123,26,0.12)] no-underline block hover:scale-[1.02] active:scale-[0.97] transition-transform duration-200">
							<div className="w-[200px] md:w-full aspect-square overflow-hidden relative">
								<Image src={p.img} alt={p.caption || 'Instagram post'} fill sizes="(min-width: 768px) 20vw, 200px" className="object-cover" />
							</div>
							{p.caption && (
								<div className="p-3">
									<div className="flex items-center gap-2 mb-2">
										<div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold text-white shrink-0" style={{ background: 'linear-gradient(135deg,#E8A020,#C27B1A)' }}>
											L
										</div>
										<span className="text-[10px] font-bold text-[#2A1800] truncate">lovemynaturaluk</span>
									</div>
									<p className="text-[11px] text-[#6B4010] leading-[1.55] line-clamp-2">{p.caption}</p>
								</div>
							)}
						</Link>
					))}
				</div>
			</div>

			<Link href={IG_URL} target="_blank" rel="noopener noreferrer" className="lmn-rev block max-w-7xl mx-auto px-6 md:px-16 mt-6 no-underline">
				<div className="flex items-center gap-2 bg-[#F5E8BE] border border-[rgba(194,123,26,0.18)] rounded-full p-3.5">
					<span className="text-[18px]">📸</span>
					<div>
						<div className="text-[12px] font-bold text-[#2A1800]">See more on Instagram</div>
						<div className="text-[11px] text-[#C27B1A]">@lovemynaturaluk</div>
					</div>
					<span className="ml-auto text-[#C27B1A] opacity-50 text-[16px]">›</span>
				</div>
			</Link>
		</section>
	)
}
