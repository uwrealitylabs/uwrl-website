/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'5s': '330px',
			},
			typography(theme) {
				return {
					dark: {
						css: {
							color: theme("colors.gray.300"),
							'[class~="lead"]': {
								color: theme("colors.gray.400")
							},
							a: {
								color: theme("colors.gray.100")
							},
							strong: {
								color: theme("colors.gray.100")
							},
							"ul > li::before": {
								backgroundColor: theme("colors.gray.700")
							},
							hr: {
								borderColor: theme("colors.gray.800")
							},
							blockquote: {
								color: theme("colors.gray.100"),
								borderLeftColor: theme("colors.gray.800"),
							},
							h1: {
								color: theme("colors.gray.100")
							},
							h2: {
								color: theme("colors.gray.100")
							},
							h3: {
								color: theme("colors.gray.100")
							},
							h4: {
								color: theme("colors.gray.100")
							},
							code: {
								color: theme("colors.gray.100")
							},
							"a code": {
								color: theme("colors.gray.100")
							},
							pre: {
								color: theme("colors.gray.200"),
								backgroundColor: theme("colors.gray.800"),
							},
							thead: {
								color: theme("colors.gray.100"),
								borderBottomColor: theme("colors.gray.700"),
							},
							"tbody tr": {
								borderBottomColor: theme("colors.gray.800")
							},
						},
					},
				};
			},
			colors: {
				'lmao-yellow': '#fad67e',
			},
		},

	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
}