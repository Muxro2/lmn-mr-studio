import { create } from 'zustand'

type CartItem = {
	slug: string
	name: string
	price: string
	volume: string
	img: string
	quantity: number
	variantId: string  // ← new
}

type CartStore = {
	items: CartItem[]
	drawerOpen: boolean
	setDrawerOpen: (open: boolean) => void
	addItem: (item: Omit<CartItem, 'quantity'>) => void
	removeItem: (slug: string) => void
	clearCart: () => void
	totalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
	items: [],
	drawerOpen: false,

	setDrawerOpen: (open) => set({ drawerOpen: open }),

	addItem: (item) => {
		const existing = get().items.find((i) => i.slug === item.slug)
		if (existing) {
			set((state) => ({
				items: state.items.map((i) =>
					i.slug === item.slug ? { ...i, quantity: i.quantity + 1 } : i
				),
			}))
		} else {
			set((state) => ({ items: [...state.items, { ...item, quantity: 1 }] }))
		}
		set({ drawerOpen: true })
	},

	removeItem: (slug) =>
		set((state) => ({ items: state.items.filter((i) => i.slug !== slug) })),

	clearCart: () => set({ items: [] }),

	totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}))
