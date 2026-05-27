'use client'

import { useEffect } from 'react'

export default function LmnThemeColor() {
	useEffect(() => {
		const meta = document.querySelector('meta[name="theme-color"]')
		if (!meta) return

		const onScroll = () => {
			// hero is roughly 100vh — once past it switch to cream
			const pastHero = window.scrollY > window.innerHeight * 0.1
			meta.setAttribute('content', pastHero ? '#FFFDF5' : '#C27B1A')
		}

		// set amber immediately on mount
		meta.setAttribute('content', '#C27B1A')

		window.addEventListener('scroll', onScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', onScroll)
			// reset to cream when leaving the page
			meta.setAttribute('content', '#FFFDF5')
		}
	}, [])

	return null
}
