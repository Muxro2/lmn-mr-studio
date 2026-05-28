import { readFileSync } from 'fs'

const env = Object.fromEntries(
	readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
		.split('\n')
		.filter(l => l && !l.startsWith('#'))
		.map(l => l.split('=').map(s => s.trim()))
)

const STORE = 'buylovemynatural.myshopify.com'
const TOKEN = env.SHOPIFY_ADMIN_TOKEN
const PROFILE_ID = 'gid://shopify/CheckoutProfile/8253276544'

async function gql(query, variables = {}) {
	const res = await fetch(`https://${STORE}/admin/api/2024-10/graphql.json`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Shopify-Access-Token': TOKEN,
		},
		body: JSON.stringify({ query, variables }),
	})
	return res.json()
}

const UPSERT = `
mutation upsert($profileId: ID!, $input: CheckoutBrandingInput!) {
	checkoutBrandingUpsert(checkoutProfileId: $profileId, checkoutBrandingInput: $input) {
		userErrors { field message }
	}
}
`

async function main() {
	const input = {
		designSystem: {
			cornerRadius: { base: 8, small: 4, large: 16 },
			colors: {
				schemes: {
					scheme1: {
						base: {
							background: '#FFFDF5',
							text: '#2A1800',
							border: '#E8C87A',
							accent: '#E8A020',
						},
						control: {
							background: '#FBF4DC',
							text: '#2A1800',
							border: '#E8A020',
							accent: '#E8A020',
						},
						primaryButton: {
							background: '#E8A020',
							text: '#FFFFFF',
							border: '#E8A020',
						},
						secondaryButton: {
							background: '#FFFDF5',
							text: '#C27B1A',
							border: '#C27B1A',
						},
					},
				},
			},
		},
		customizations: {
			global: { cornerRadius: 'NONE', typography: { letterCase: 'NONE' } },
			primaryButton: {
				background: 'SOLID',
				cornerRadius: 'LARGE',
				typography: { weight: 'BOLD', letterCase: 'NONE' },
			},
			secondaryButton: {
				cornerRadius: 'LARGE',
				typography: { letterCase: 'NONE' },
			},
			control: {
				border: 'FULL',
				labelPosition: 'INSIDE',
				cornerRadius: 'BASE',
			},
		},
	}

	console.log('Applying branding to', STORE, '...')
	const result = await gql(UPSERT, { profileId: PROFILE_ID, input })

	if (result.errors) { console.error('GraphQL errors:', result.errors); process.exit(1) }

	const userErrors = result.data?.checkoutBrandingUpsert?.userErrors
	if (userErrors?.length) {
		console.error('User errors:')
		userErrors.forEach(e => console.error(' -', e.field, ':', e.message))
	} else {
		console.log('✓ Checkout branding applied successfully')
	}
}

main()
