'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { useRef, useEffect } from 'react'

export default function LmnCartDrawer() {
	const { items, drawerOpen, setDrawerOpen, removeItem, totalItems } = useCartStore()
	const drawerRef = useRef<HTMLDivElement>(null)
	const startY = useRef(0)
	const currentY = useRef(0)
	const isDragging = useRef(false)

	// lock body scroll when drawer is open
	useEffect(() => {
		if (drawerOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => { document.body.style.overflow = '' }
	}, [drawerOpen])

	// smooth open/close
	useEffect(() => {
		if (!drawerRef.current) return
		drawerRef.current.style.transition = 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)'
		drawerRef.current.style.transform = drawerOpen
			? 'translateX(-50%) translateY(0)'
			: 'translateX(-50%) translateY(100%)'
	}, [drawerOpen])

	const subtotal = items.reduce((sum, i) => {
		const price = parseFloat(i.price.replace('£', ''))
		return sum + price * i.quantity
	}, 0)

	const onTouchStart = (e: React.TouchEvent) => {
		startY.current = e.touches[0].clientY
		currentY.current = 0
		isDragging.current = true
		// cut transition so it follows finger instantly
		if (drawerRef.current) drawerRef.current.style.transition = 'none'
	}

	const onTouchMove = (e: React.TouchEvent) => {
		if (!isDragging.current) return
		const delta = e.touches[0].clientY - startY.current
		currentY.current = delta
		if (delta > 0 && drawerRef.current) {
			// resistance: feels natural, slows slightly at large distances
			const resistance = Math.pow(delta, 0.85)
			drawerRef.current.style.transform = `translateX(-50%) translateY(${resistance}px)`
		}
	}

	const onTouchEnd = () => {
		isDragging.current = false
		if (!drawerRef.current) return
		// spring release
		drawerRef.current.style.transition = 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)'
		if (currentY.current > 80) {
			drawerRef.current.style.transform = 'translateX(-50%) translateY(100%)'
			setTimeout(() => setDrawerOpen(false), 500)
		} else {
			drawerRef.current.style.transform = 'translateX(-50%) translateY(0)'
		}
		currentY.current = 0
	}

	return (
		<>
			{/* backdrop */}
			<div
				onClick={() => setDrawerOpen(false)}
				className={`fixed inset-0 z-[300] bg-black/40 transition-opacity duration-300 ${
					drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				}`}
			/>

			{/* drawer */}
			<div
				ref={drawerRef}
				style={{ transform: 'translateX(-50%) translateY(100%)', transition: 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)' }}
				className="fixed bottom-0 left-1/2 w-full max-w-[430px] z-[400] bg-[#FFFDF5] rounded-t-[20px]"
			>
				{/* handle */}
				<div
					className="flex justify-center items-center py-4 cursor-grab active:cursor-grabbing"
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
				>
					<div className="w-14 h-1.5 rounded-full bg-[rgba(42,24,0,0.18)]" />
				</div>

				{/* header */}
				<div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(194,123,26,0.12)]">
					<div>
						<p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#C27B1A]">Your Basket</p>
						<p className="font-[family-name:var(--font-fraunces)] font-black text-[22px] text-[#2A1800] leading-tight">
							{totalItems()} {totalItems() === 1 ? 'item' : 'items'}
						</p>
					</div>
					<button
						onClick={() => setDrawerOpen(false)}
						className="w-8 h-8 rounded-full bg-[#F5E8BE] flex items-center justify-center text-[#2A1800] text-[16px]"
					>
						✕
					</button>
				</div>

				{/* items */}
				<div className="px-6 py-4 max-h-[40svh] overflow-y-auto">
					{items.length === 0 ? (
						<p className="text-[13px] text-[#A06828] text-center py-8">Your basket is empty.</p>
					) : (
						<div className="flex flex-col gap-4">
							{items.map((item) => (
								<div key={item.slug} className="flex items-center gap-4">
									<div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#FBF4DC] shrink-0">
										<Image src={item.img} alt={item.name} fill sizes="64px" className="object-contain p-1" />
									</div>
									<div className="flex-1">
										<p className="font-[family-name:var(--font-fraunces)] font-black italic text-[16px] text-[#2A1800] leading-none mb-0.5">
											{item.name}
										</p>
										<p className="text-[11px] text-[#A06828]">{item.volume} · Qty {item.quantity}</p>
										<p className="font-[family-name:var(--font-fraunces)] font-black text-[15px] text-[#2A1800] mt-0.5">
											{item.price}
										</p>
									</div>
									<button
										onClick={() => removeItem(item.slug)}
										className="text-[#A06828] text-[12px] font-bold uppercase tracking-[0.08em] shrink-0"
									>
										Remove
									</button>
								</div>
							))}
						</div>
					)}
				</div>

				{/* footer */}
				{items.length > 0 && (
					<div className="px-6 pt-4 pb-8 border-t border-[rgba(194,123,26,0.12)]">
						<div className="flex items-center justify-between mb-5">
							<span className="text-[13px] font-bold text-[#2A1800]">Subtotal</span>
							<span className="font-[family-name:var(--font-fraunces)] font-black text-[22px] text-[#2A1800]">
								£{subtotal.toFixed(2)}
							</span>
						</div>
						<Link
							href="#order"
							onClick={() => setDrawerOpen(false)}
							className="block w-full bg-[#E8A020] text-white font-bold text-[12px] tracking-[0.14em] uppercase py-4 rounded-full text-center no-underline"
						>
							Checkout via Instagram
						</Link>
						<button
							onClick={() => setDrawerOpen(false)}
							className="block w-full mt-2.5 text-[#2A1800] font-bold text-[12px] tracking-[0.14em] uppercase py-3 text-center"
						>
							Continue Shopping
						</button>
					</div>
				)}
			</div>
		</>
	)
}
