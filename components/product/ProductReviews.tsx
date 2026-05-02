'use client'

import type { Product } from '@/app/products/[slug]/page'

const REVIEWS: Record<string, Review[]> = {
	'hair-oil': [
		{ name: 'Kezia T.', rating: 5, text: 'My scalp feels so much better after just a week. The itchiness is completely gone.' },
		{ name: 'Simone A.', rating: 5, text: 'Lightweight and doesn\'t leave my hair greasy at all. Finally found something that actually works.' },
		{ name: 'Marcia B.', rating: 5, text: 'I\'ve been using this for a month and I can already see new growth. Genuinely impressed.' },
	],
	'hair-butter': [
		{ name: 'Tasha R.', rating: 5, text: 'Smells amazing and my hair stays moisturised for days. Won\'t use anything else.' },
		{ name: 'Aaliyah M.', rating: 5, text: 'No grease, no residue — just soft, healthy hair. Exactly what it says on the jar.' },
		{ name: 'Diane O.', rating: 5, text: 'I\'ve tried so many butters and this is the only one that doesn\'t weigh my curls down.' },
	],
}

type Review = {
	name: string
	rating: number
	text: string
}

export default function LmnProductReviews({ product }: { product: Product }) {
	if (!product) return null
	const reviews = REVIEWS[product.slug] ?? []
	if (!reviews.length) return null

	const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

	return (
		<section className="bg-[#FFFDF5] px-6 py-10 border-t border-[rgba(194,123,26,0.12)]">

			{/* header */}
			<div className="flex items-center justify-between mb-6">
				<div>
					<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-1">Reviews</p>
					<div className="flex items-center gap-2">
						<span className="text-[#E8A020] text-[18px] leading-none">{'★'.repeat(Math.round(avg))}</span>
						<span className="font-[family-name:var(--font-fraunces)] font-black text-[22px] text-[#2A1800] leading-none">{avg.toFixed(1)}</span>
						<span className="text-[12px] text-[#A06828]">({reviews.length})</span>
					</div>
				</div>
			</div>

			{/* review list */}
			<div className="flex flex-col gap-4">
				{reviews.map((r, i) => (
					<div key={i} className="bg-[#FBF4DC] rounded-xl p-4 border border-[rgba(194,123,26,0.1)]">
						<div className="flex items-center justify-between mb-2">
							<span className="text-[12px] font-bold text-[#2A1800]">{r.name}</span>
							<span className="text-[#E8A020] text-[13px] leading-none">{'★'.repeat(r.rating)}</span>
						</div>
						<p className="text-[13px] text-[#6B4010] leading-[1.65]">{r.text}</p>
					</div>
				))}
			</div>

		</section>
	)
}
