'use client'

import { useEffect } from 'react'

export default function LmnReveal() {
	useEffect(() => {
		const els = document.querySelectorAll<HTMLElement>('.lmn-rev')
		const io = new IntersectionObserver(
			(entries) => entries.forEach((e) => {
				if (e.isIntersecting) { e.target.classList.add('lmn-rev--on'); io.unobserve(e.target) }
			}),
			{ threshold: 0.1 }
		)
		els.forEach((el) => io.observe(el))
		return () => io.disconnect()
	}, [])

	return null
}
