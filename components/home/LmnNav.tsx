'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function LmnNav() {
	const ref = useRef<HTMLElement>(null)

	useEffect(() => {
		const fn = () => {
			ref.current?.classList.toggle('bg-[#FFFDF5]/95', window.scrollY > 60)
			ref.current?.classList.toggle('backdrop-blur-md', window.scrollY > 60)
			ref.current?.classList.toggle('shadow-[0_1px_0_rgba(200,120,26,0.12)]', window.scrollY > 60)
		}
		window.addEventListener('scroll', fn, { passive: true })
		return () => window.removeEventListener('scroll', fn)
	}, [])

	return (
		<nav ref={ref} className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[200] flex justify-between items-center px-5 py-3.5 transition-all duration-300">
			<div className="font-[family-name:var(--font-fraunces)] font-black text-[13px] text-[#2A1800] tracking-[0.04em] uppercase leading-tight">
				Love My Natural
				<small className="block font-[family-name:var(--font-syne)] text-[8px] font-semibold tracking-[0.28em] uppercase text-[#C27B1A] not-italic">
					Self Care
				</small>
			</div>
			<Link href="#order" className="bg-[#E8A020] text-white font-[family-name:var(--font-syne)] text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-2.5 rounded-full no-underline">
				Order Now
			</Link>
		</nav>
	)
}
