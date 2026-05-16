import { getProductByHandle } from '@/lib/shopify'
import LmnNav from '@/components/home/LmnNav'
import LmnFooter from '@/components/home/LmnFooter'
import LmnProductHero from '@/components/product/ProductHero'
import LmnProductDetails from '@/components/product/ProductDetails'
import LmnProductReviews from '@/components/product/ProductReviews'
import LmnProductRelated from '@/components/product/ProductRelated'

// Static product content — description, benefits, how to use etc
const PRODUCT_CONTENT: Record<string, {
	subtitle: string
	volume: string
	description: string
	ingredients: string
	howToUse: string[]
	tags: string[]
	benefits: string[]
	relatedSlug: string
}> = {
	'hair-oil': {
		subtitle: 'Growth & Moisture',
		volume: '120ml',
		description: 'A lightweight, golden blend of natural oils crafted to nourish your scalp and fuel hair growth from root to tip. Free from sulphates, parabens, and synthetic additives.',
		ingredients: 'Sunflower Oil, Castor Oil, Rosemary Extract, Peppermint Oil, Vitamin E, Lavender Essential Oil',
		howToUse: [
			'Section your hair and apply a few drops directly to the scalp.',
			'Massage in circular motions for 2–3 minutes to stimulate circulation.',
			'Work any excess oil through the lengths of your hair.',
			'Use 2–3 times per week for best results.',
		],
		tags: ['Growth', 'Moisture', 'Scalp Care', 'Lightweight'],
		benefits: ['Soothes dry, itchy scalp', 'Reduces breakage', 'Boosts hair growth', 'Lightweight, non-greasy'],
		relatedSlug: 'hair-butter',
	},
	'hair-butter': {
		subtitle: 'Length & Retention',
		volume: '250ml',
		description: 'A rich, whipped butter that softens and smooths your strands without leaving them feeling heavy or greasy. Packed with organic butters and herbs.',
		ingredients: 'Shea Butter, Mango Butter, Coconut Oil, Aloe Vera Extract, Rosemary Oil, Castor Oil, Vitamin E',
		howToUse: [
			'Apply to freshly washed, damp hair for best absorption.',
			'Scoop a small amount and warm between your palms.',
			'Work through sections from mid-length to ends.',
			'Style as usual. Use daily or as a leave-in treatment.',
		],
		tags: ['Moisture Seal', 'Length Retention', 'Softening', 'No Grease'],
		benefits: ['Softens & smooths', 'No greasy feeling', 'Organic herbs & butters', 'Seals in moisture'],
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
	benefits: string[]
	relatedSlug: string
	variantId: string
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params

	const content = PRODUCT_CONTENT[slug]
	if (!content) return <div className="p-8">Product not found.</div>

	// fetch live data from Shopify
	const shopifyProduct = await getProductByHandle(slug)

	const product: Product = {
		slug,
		name: shopifyProduct?.title ?? slug.replace('-', ' '),
		price: shopifyProduct
			? `£${parseFloat(shopifyProduct.variants.edges[0].node.price.amount).toFixed(2)}`
			: content.volume === '120ml' ? '£12.00' : '£14.00',
		images: shopifyProduct
			? shopifyProduct.images.edges.map((e: any) => e.node.url)
			: [`/products/${slug === 'hair-oil' ? 'hairOil' : 'hairButter'}.png`],
		variantId: shopifyProduct?.variants.edges[0].node.id ?? '',
		...content,
	}

	const relatedContent = PRODUCT_CONTENT[content.relatedSlug]
	const relatedShopify = await getProductByHandle(content.relatedSlug)
	const related: Product | null = relatedContent && relatedShopify ? {
		slug: content.relatedSlug,
		name: relatedShopify.title,
		price: `£${parseFloat(relatedShopify.variants.edges[0].node.price.amount).toFixed(2)}`,
		images: relatedShopify.images.edges.map((e: any) => e.node.url),
		variantId: relatedShopify.variants.edges[0].node.id,
		...relatedContent,
	} : null

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
