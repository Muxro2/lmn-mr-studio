'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'
import type { Product } from '@/app/products/[slug]/page'

export default function LmnProductHero({ product }: { product: Product }) {
	const [active, setActive] = useState(0)
	const [added, setAdded] = useState(false)
	const addItem = useCartStore((s) => s.addItem)

	const handleAddToCart = () => {
		addItem({
			slug: product.slug,
			name: product.name,
			price: product.price,
			volume: product.volume,
			img: product.images[0],
		})
		setAdded(true)
		setTimeout(() => setAdded(false), 2500)
	}

	return (
		<section className="bg-[#FFFDF5] pt-[70px]">

			{/* main image */}
			<div className="relative w-full aspect-square bg-[#FBF4DC] overflow-hidden">
				<Image
					src={product.images[active]}
					alt={product.name}
					fill
					sizes="430px"
					className="object-contain p-8 transition-opacity duration-300"
				/>
				<div className="absolute top-4 left-4 bg-[#E8A020] text-white text-[9px] font-bold tracking-[0.14em] uppercase px-3 py-1.5 rounded-full">
					{product.volume}
				</div>
			</div>

			{/* thumbnails */}
			{product.images.length > 1 && (
				<div className="flex gap-2 px-6 pt-3">
					{product.images.map((img, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
								active === i ? 'border-[#E8A020]' : 'border-transparent'
							}`}
						>
							<Image src={img} alt={`${product.name} view ${i + 1}`} fill sizes="64px" className="object-contain p-1 bg-[#FBF4DC]" />
						</button>
					))}
				</div>
			)}

			{/* name, price, ctas */}
			<div className="px-6 pt-6 pb-8">
				<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A] mb-2">{product.subtitle}</p>
				<h1 className="font-[family-name:var(--font-fraunces)] font-black italic text-[42px] text-[#2A1800] leading-[0.95] mb-4">
					{product.name}
				</h1>

				<div className="flex flex-wrap gap-1.5 mb-5">
					{product.tags.map((t) => (
						<span key={t} className="bg-[rgba(232,160,32,0.1)] border border-[rgba(194,123,26,0.2)] text-[#C27B1A] text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-[5px] rounded-full">
							{t}
						</span>
					))}
				</div>

				<div className="flex items-center justify-between mb-6">
					<span className="font-[family-name:var(--font-fraunces)] font-black text-[38px] text-[#2A1800] leading-none">
						{product.price}
					</span>
					<span className="text-[12px] text-[#A06828]">{product.volume}</span>
				</div>

				{/* Add to cart — changes state after click */}
				<button
					onClick={handleAddToCart}
					className={`w-full font-bold text-[12px] tracking-[0.14em] uppercase py-4 rounded-full transition-all duration-300 active:scale-[0.98] ${
						added
							? 'bg-[#2D6A2D] text-white'
							: 'bg-[#E8A020] text-white'
					}`}
				>
					{added ? '✓ Added to Cart' : 'Add to Cart'}
				</button>
			
			</div>
		</section>
	)
}
