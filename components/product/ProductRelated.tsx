import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/app/products/[slug]/page'

export default function LmnProductRelated({ product }: { product: Product }) {
	return (
		<section className="bg-[#FFFDF5] px-6 py-12">
			<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-4">You Might Also Like</p>
			<h2 className="font-[family-name:var(--font-fraunces)] font-black text-[28px] text-[#2A1800] leading-[1.05] mb-6">
				Complete your<br /><em className="italic text-[#E8A020]">routine.</em>
			</h2>

			<Link href={`/products/${product.slug}`} className="flex items-center gap-4 bg-[#FBF4DC] border border-[rgba(194,123,26,0.15)] rounded-xl p-4 no-underline active:scale-[0.98] transition-transform duration-150">
				<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#F5E8BE] shrink-0">
					<Image src={product.images[0]} alt={product.name} fill className="object-contain p-2" />
				</div>
				<div className="flex-1">
					<p className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#C27B1A] mb-1">{product.subtitle}</p>
					<p className="font-[family-name:var(--font-fraunces)] font-black italic text-[22px] text-[#2A1800] leading-none mb-2">{product.name}</p>
					<p className="font-[family-name:var(--font-fraunces)] font-black text-[18px] text-[#2A1800]">{product.price}</p>
				</div>
				<div className="text-[#C27B1A] text-[22px] opacity-60">›</div>
			</Link>
		</section>
	)
}
