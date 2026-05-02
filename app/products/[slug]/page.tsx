import LmnProductHero from '@/components/product/ProductHero'
import LmnProductDetails from '@/components/product/ProductDetails'
import LmnProductReviews from '@/components/product/ProductReviews'
import LmnProductRelated from '@/components/product/ProductRelated'
import LmnNav from '@/components/home/LmnNav'
import LmnFooter from '@/components/home/LmnFooter'

// Placeholder data — swap for Shopify Storefront API fetch by slug
const PRODUCTS: Record<string, Product> = {
	'hair-oil': {
		slug: 'hair-oil',
		name: 'Hair Oil',
		subtitle: 'Growth & Moisture',
		price: '£12.00',
		volume: '120ml',
		description: 'A lightweight, golden blend of natural oils crafted to nourish your scalp and fuel hair growth from root to tip. Free from sulphates, parabens, and synthetic additives — just organic herbs and oils working the way nature intended.',
		images: [
			'/products/hairOil.png',
			'/products/hairOil.png',
			'/products/hairOil.png',
		],
		ingredients: 'Sunflower Oil, Castor Oil, Rosemary Extract, Peppermint Oil, Vitamin E, Lavender Essential Oil',
		howToUse: [
			'Section your hair and apply a few drops directly to the scalp.',
			'Massage in circular motions for 2–3 minutes to stimulate circulation.',
			'Work any excess oil through the lengths of your hair.',
			'Use 2–3 times per week for best results, or as needed.',
		],
		tags: ['Growth', 'Moisture', 'Scalp Care', 'Lightweight'],
		relatedSlug: 'hair-butter',
	},
	'hair-butter': {
		slug: 'hair-butter',
		name: 'Hair Butter',
		subtitle: 'Length & Retention',
		price: '£14.00',
		volume: '250ml',
		description: 'A rich, whipped butter that softens and smooths your strands without leaving them feeling heavy or greasy. Packed with organic butters and herbs that seal in moisture, reduce breakage, and support length retention naturally.',
		images: [
			'/products/hairButter.png',
			'/products/hairButter.png',
			'/products/hairButter.png',
		],
		ingredients: 'Shea Butter, Mango Butter, Coconut Oil, Aloe Vera Extract, Rosemary Oil, Castor Oil, Vitamin E',
		howToUse: [
			'Apply to freshly washed, damp hair for best absorption.',
			'Scoop a small amount and warm between your palms.',
			'Work through sections from mid-length to ends.',
			'Style as usual. Use daily or as a leave-in treatment.',
		],
		tags: ['Moisture Seal', 'Length Retention', 'Softening', 'No Grease'],
		relatedSlug: 'hair-oil',
	},
}

export type Product = {
	slug: string
	name: string
	subtitle: string
	price: string
	volume: string
	description: string
	images: string[]
	ingredients: string
	howToUse: string[]
	tags: string[]
	relatedSlug: string
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
	const {slug} = await params
	const product = PRODUCTS[slug]
	if (!product) return <div className="p-8 text-[#2A1800]">Product not found.</div>
	const related = PRODUCTS[product.relatedSlug]

	return (
		<main className="lmn-grain font-[family-name:var(--font-syne)] bg-[#FFFDF5] text-[#2A1800] overflow-x-hidden max-w-[430px] mx-auto relative">
			<LmnNav />
			<LmnProductHero product={product} />
			<LmnProductDetails product={product} />
			<LmnProductReviews product={product} />
			{related && <LmnProductRelated product={related} />}
			<LmnFooter />
		</main>
	)
}
