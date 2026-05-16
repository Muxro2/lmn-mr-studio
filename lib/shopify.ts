import { createStorefrontApiClient } from '@shopify/storefront-api-client'

export const shopifyClient = createStorefrontApiClient({
	storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
	apiVersion: '2024-10',
	publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
})

// ── Fetch a single product by handle ──────────────────────────────────────
export async function getProductByHandle(handle: string) {
	const query = `
		query GetProduct($handle: String!) {
			productByHandle(handle: $handle) {
				id
				title
				handle
				descriptionHtml
				variants(first: 1) {
					edges {
						node {
							id
							price {
								amount
								currencyCode
							}
							availableForSale
						}
					}
				}
				images(first: 5) {
					edges {
						node {
							url
							altText
						}
					}
				}
			}
		}
	`
	const { data, errors } = await shopifyClient.request(query, {
		variables: { handle },
	})

	if (errors) console.error('Shopify error:', errors)
	return data?.productByHandle ?? null
}

// ── Create a Shopify cart and return checkout URL ──────────────────────────
export async function createCart(lines: { merchandiseId: string; quantity: number }[]) {
	const mutation = `
		mutation CreateCart($lines: [CartLineInput!]!) {
			cartCreate(input: { lines: $lines }) {
				cart {
					id
					checkoutUrl
				}
				userErrors {
					field
					message
				}
			}
		}
	`
	const { data, errors } = await shopifyClient.request(mutation, {
		variables: { lines },
	})

	if (errors) console.error('Shopify cart error:', errors)
	return data?.cartCreate?.cart ?? null
}
