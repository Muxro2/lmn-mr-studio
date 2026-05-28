'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'
import CartDrawer from '@/components/CartDrawer'

export default function LmnNav({ forceOpaque = false }: { forceOpaque?: boolean }) {
 const ref = useRef<HTMLElement>(null)
 const router = useRouter()
 const totalItems = useCartStore((s) => s.totalItems())
 const { setDrawerOpen } = useCartStore()

	useEffect(() => {
		if (forceOpaque && ref.current) {
			ref.current.classList.add('bg-[#FFFDF5]/95', 'backdrop-blur-md', 'shadow-[0_1px_0_rgba(200,120,26,0.12)]', '[&_.nav-logo]:text-[#2A1800]', '[&_.nav-logo_small]:text-[#C27B1A]')
		}

		const fn = () => {
			const scrolled = window.scrollY > 60
			ref.current?.classList.toggle('bg-[#FFFDF5]/95', scrolled || forceOpaque)
			ref.current?.classList.toggle('backdrop-blur-md', scrolled || forceOpaque)
			ref.current?.classList.toggle('shadow-[0_1px_0_rgba(200,120,26,0.12)]', scrolled || forceOpaque)
			ref.current?.classList.toggle('[&_.nav-logo]:text-[#2A1800]', scrolled || forceOpaque)
			ref.current?.classList.toggle('[&_.nav-logo_small]:text-[#C27B1A]', scrolled || forceOpaque)
		}

		fn()

		window.addEventListener('scroll', fn, { passive: true })
		return () => window.removeEventListener('scroll', fn)
	}, [forceOpaque])

 const handleOrderClick = () => {
	 if (totalItems > 0) {
		 setDrawerOpen(true)
	 } else if (window.location.pathname === '/') {
		 document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
	 } else {
		 router.push('/#products')
	 }
 }

 return (
	 <>
		 <nav
			 ref={ref}
			 className="fixed top-0 left-0 right-0 z-[200] flex justify-center px-5 md:px-8 py-3.5 transition-all duration-300"
		 >
			 <div className="w-full max-w-7xl flex justify-between items-center">
				 <Link href="/" className="nav-logo font-[family-name:var(--font-fraunces)] font-black text-[13px] text-white tracking-[0.04em] uppercase leading-tight [text-shadow:0_1px_4px_rgba(0,0,0,0.25)] no-underline">
					Love My Natural
					<small className="block font-[family-name:var(--font-syne)] text-[8px] font-semibold tracking-[0.28em] uppercase text-white/70 not-italic">
						Self Care
					</small>
				 </Link>

				 <div className="hidden md:flex items-center gap-8">
					 <Link href="/#products" className="nav-logo text-white text-[10px] font-bold tracking-[0.14em] uppercase no-underline opacity-80 hover:opacity-100 transition-opacity">Shop</Link>
					 <Link href="/story" className="nav-logo text-white text-[10px] font-bold tracking-[0.14em] uppercase no-underline opacity-80 hover:opacity-100 transition-opacity">Our Story</Link>
					 <Link href="/stall" className="nav-logo text-white text-[10px] font-bold tracking-[0.14em] uppercase no-underline opacity-80 hover:opacity-100 transition-opacity">Find Us</Link>
				 </div>

				 <button
					 onClick={handleOrderClick}
					 className="flex items-center gap-2 bg-[#E8A020] text-white font-[family-name:var(--font-syne)] text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-2.5 rounded-full transition-all duration-300"
				 >
					 {totalItems > 0 ? 'Basket' : 'Order Now'}
					 {totalItems > 0 && (
						 <span className="bg-white text-[#E8A020] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
							 {totalItems}
						 </span>
					 )}
				 </button>
			 </div>
		 </nav>

		 <CartDrawer />
	 </>
 )
}
