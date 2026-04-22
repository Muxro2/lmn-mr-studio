import Link from 'next/link';
import Image from 'next/image';

const POSTS = [
	{ img: '/posts/butterScoop.png', likes: 284, handle: 'lovemynatural.selfcare', initial: 'L', avatarStyle: undefined as React.CSSProperties | undefined, time: '2d', caption: 'My hair has never felt this moisturised 😭✨ the #hairbutter is something else fr' },
	{ img: '/posts/hair-2.png', likes: 412, handle: 'lovemynatural.selfcare', initial: 'L', avatarStyle: undefined as React.CSSProperties | undefined, time: '4d', caption: 'New batch just dropped 🌿 Hair Oil restocked — get yours before it sells out again #lovemynatural' },
	{ img: '/posts/butterShelf.png', likes: 197, handle: 'knatural_hair',          initial: 'K', avatarStyle: { background: 'linear-gradient(135deg,#C27B1A,#E8A020)' } as React.CSSProperties, time: '1w', caption: 'Obsessed with @lovemynatural.selfcare 🙌 length retention is actually real this time' },
	{ img: '/posts/hair.png', likes: 339, handle: 'lovemynatural.selfcare', initial: 'L', avatarStyle: undefined as React.CSSProperties | undefined, time: '1w', caption: 'Catch us at Brixton this weekend 📍 come smell test everything in person 😍 #brixton' },
	{ img: '/posts/butterOutdoor.png', likes: 521, handle: 'afro.anika',             initial: 'A', avatarStyle: { background: 'linear-gradient(135deg,#8B4513,#C27B1A)' } as React.CSSProperties, time: '2w', caption: "Can't believe the difference after 3 weeks using the oil. No more breakage!! @lovemynatural.selfcare 🙏🏾" },
]

export default function LmnInstaFeed() {
	return (
		<section className="bg-[#FFFDF5] pt-16 pb-[72px] overflow-hidden">
			<div className="lmn-rev px-6 pb-7 flex items-end justify-between">
				<div>
					<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">As seen on Instagram</p>
					<h2 className="font-[family-name:var(--font-fraunces)] font-black text-[30px] text-[#2A1800] leading-[1.05]">
						Real hair.<br /><em className="italic text-[#E8A020]">Real results.</em>
					</h2>
				</div>
				<Link href="https://instagram.com/lovemynatural.selfcare" target="_blank" className="flex items-center gap-1.5 bg-[#E8A020] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-2 rounded-full no-underline shrink-0">
					<svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
					Follow
				</Link>
			</div>

			<div className="lmn-rev flex gap-2.5 px-6 overflow-x-auto scroll-smooth [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				{POSTS.map((p, i) => (
					<Link key={i} href="https://instagram.com" target="_blank" className="shrink-0 w-[200px] [scroll-snap-align:start] rounded-lg overflow-hidden bg-[#F5E8BE] border border-[rgba(194,123,26,0.12)] no-underline block active:scale-[0.97] transition-transform duration-200">
						<div className="w-[200px] h-[200px] overflow-hidden relative">
							<Image src={p.img} alt="Instagram post" fill className="w-full h-full object-cover" />
							<div className="absolute bottom-2 right-2 bg-black/35 text-white text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm">
								♥ {p.likes}
							</div>
						</div>
						<div className="p-3">
							<div className="flex items-center gap-2 mb-2">
								<div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold text-white shrink-0" style={p.avatarStyle ?? { background: 'linear-gradient(135deg,#E8A020,#C27B1A)' }}>
									{p.initial}
								</div>
								<span className="text-[10px] font-bold text-[#2A1800]">{p.handle}</span>
								<span className="text-[9px] text-[#A06828] ml-auto">{p.time}</span>
							</div>
							<p className="text-[11px] text-[#6B4010] leading-[1.55] line-clamp-2">{p.caption}</p>
						</div>
					</Link>
				))}
			</div>

			<Link href="https://instagram.com/lovemynatural.selfcare" target="_blank" className="lmn-rev mx-6 mt-6 flex items-center gap-2 bg-[#F5E8BE] border border-[rgba(194,123,26,0.18)] rounded-full p-3.5 no-underline">
				<span className="text-[18px]">📸</span>
				<div><div className="text-[12px] font-bold text-[#2A1800]">See more on Instagram</div><div className="text-[11px] text-[#C27B1A]">@lovemynatural.selfcare</div></div>
				<span className="ml-auto text-[#C27B1A] opacity-50 text-[16px]">›</span>
			</Link>
		</section>
	)
}
