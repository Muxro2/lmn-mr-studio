'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import LmnCartDrawer from '@/components/CartDrawer'

export default function LmnNav() {
	const ref = useRef<HTMLElement>(null)
	const totalItems = useCartStore((s) => s.totalItems())
	const { drawerOpen, setDrawerOpen } = useCartStore()

	useEffect(() => {
		const fn = () => {
			const scrolled = window.scrollY > 60
			ref.current?.classList.toggle('bg-[#FFFDF5]/95', scrolled)
			ref.current?.classList.toggle('backdrop-blur-md', scrolled)
			ref.current?.classList.toggle('shadow-[0_1px_0_rgba(200,120,26,0.12)]', scrolled)
			ref.current?.classList.toggle('[&_.nav-logo]:text-[#2A1800]', scrolled)
			ref.current?.classList.toggle('[&_.nav-logo_small]:text-[#C27B1A]', scrolled)
		}
		window.addEventListener('scroll', fn, { passive: true })
		return () => window.removeEventListener('scroll', fn)
	}, [])

	return (
		<>
			<nav
				ref={ref}
				className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[200] flex justify-between items-center px-5 py-3.5 transition-all duration-300"
			>
				<div className="nav-logo font-[family-name:var(--font-fraunces)] font-black text-[13px] text-white tracking-[0.04em] uppercase leading-tight [text-shadow:0_1px_4px_rgba(0,0,0,0.25)]">
					Love My Natural
					<small className="block font-[family-name:var(--font-syne)] text-[8px] font-semibold tracking-[0.28em] uppercase text-white/70 not-italic">
						Self Care
					</small>
				</div>

				<button
					onClick={() => totalItems > 0 ? setDrawerOpen(true) : document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
					className="flex items-center gap-2 bg-[#E8A020] text-white font-[family-name:var(--font-syne)] text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-2.5 rounded-full transition-all duration-300"
				>
					{totalItems > 0 ? 'Basket' : 'Order Now'}
					{totalItems > 0 && (
						<span className="bg-white text-[#E8A020] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
							{totalItems}
						</span>
					)}
				</button>
			</nav>

			<LmnCartDrawer />
		</>
	)
}
