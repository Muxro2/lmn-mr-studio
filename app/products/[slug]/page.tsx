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
		description: 'A handmade golden blend of natural oils crafted to nourish your scalp and fuel hair growth from root to tip. Versatile enough to use as a scalp oil, hair sealer, or deep treatment.',
		ingredients: 'Avocado oil, castor oil, jojoba oil, black seed oil, coconut oil, rosemary oil, peppermint oil, amla powder, hibiscus leaves & fenugreek',
		howToUse: [
			'Scalp oil: Apply 2–3x a week and massage in.',
			'Hair sealer: Use on damp hair after moisturising to lock it all in.',
			'Pre-poo or hot oil treatment: Warm slightly and massage into scalp and strands before washing, then cover with a cap for 20+ minutes for a deep treatment.',
		],
		tags: ['Growth', 'Moisture', 'Scalp Care', 'Handmade'],
		benefits: ['Stimulates scalp circulation', 'Seals in moisture', 'Strengthens & reduces breakage', 'Handmade with natural ingredients'],
		relatedSlug: 'hair-butter',
	},
	'hair-butter': {
		subtitle: 'Length & Retention',
		volume: '250ml',
		description: 'A rich, whipped butter packed with natural butters, oils, and herbs to deeply moisturise and soften your strands. Perfect for wash days and in-between re-hydration.',
		ingredients: 'Shea butter, mango butter, jojoba oil, avocado oil, glycerin, coconut oil, beeswax, fenugreek, moriga, hibiscus & amla powder',
		howToUse: [
			'For best results, use on damp clean hair.',
			'Rub between dry palms before applying liberally through damp hair.',
			'Brush through from root to tip to distribute product evenly.',
			'Style as desired.',
			'Can also be used to re-hydrate in between wash days.',
		],
		tags: ['Moisture Seal', 'Length Retention', 'Softening', 'Wash Day'],
		benefits: ['Deeply moisturises & softens', 'Seals in hydration', 'Enriched with herbs & butters', 'Great for in-between wash days'],
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
			: content.volume === '120ml' ? '£10.00' : '£12.00',
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
			<LmnNav forceOpaque/>
			<LmnProductHero product={product} />
			<LmnProductDetails product={product} />
			<LmnProductReviews product={product} />
			{related && <LmnProductRelated product={related} />}
			<LmnFooter />
		</main>
	)
}
