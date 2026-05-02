'use client'

import { useState } from 'react'
import type { Product } from '@/app/products/[slug]/page'

const TABS = ['Description', 'Ingredients', 'How to Use']

export default function LmnProductDetails({ product }: { product: Product }) {
	const [tab, setTab] = useState(0)

	return (
		<section className="bg-[#FBF4DC]">

			{/* tab bar */}
			<div className="flex border-b border-[rgba(194,123,26,0.15)]">
				{TABS.map((t, i) => (
					<button
						key={t}
						onClick={() => setTab(i)}
						className={`flex-1 py-4 text-[11px] font-bold tracking-[0.1em] uppercase transition-colors duration-200 ${
							tab === i
								? 'text-[#E8A020] border-b-2 border-[#E8A020]'
								: 'text-[#A06828]'
						}`}
					>
						{t}
					</button>
				))}
			</div>

			{/* tab content */}
			<div className="px-6 py-8">

				{tab === 0 && (
					<p className="text-[14px] text-[#6B4010] leading-[1.85] font-normal">
						{product.description}
					</p>
				)}

				{tab === 1 && (
					<div>
						<p className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#C27B1A] mb-3">Full Ingredients</p>
						<p className="text-[13px] text-[#6B4010] leading-[1.85]">{product.ingredients}</p>
						<p className="text-[11px] text-[#A06828] mt-4 italic">Ingredients listed in descending order of concentration.</p>
					</div>
				)}

				{tab === 2 && (
					<div>
						<p className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#C27B1A] mb-4">How to Use</p>
						<ol className="list-none space-y-4">
							{product.howToUse.map((step, i) => (
								<li key={i} className="flex gap-4 items-start">
									<span className="font-[family-name:var(--font-fraunces)] italic text-[22px] font-bold text-[#E8A020] leading-none w-6 shrink-0 mt-0.5">
										{i + 1}
									</span>
									<span className="text-[13px] text-[#6B4010] leading-[1.7]">{step}</span>
								</li>
							))}
						</ol>
					</div>
				)}

			</div>
		</section>
	)
}
