/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			red: "hsl(0, 100%, 66%)",
			white: "hsl(0, 0%, 100%)",
			lg: "hsl(270, 3%, 87%)",
			dg: "hsl(279, 6%, 55%)",
			vd: "hsl(278, 68%, 11%)",
			bone: "hsl(249, 99%, 64%)",
			btwo: "hsl(278, 94%, 30%)"
		},
		extend: {
			boxShadow:{
				"normal":'0 1px 2px 0 rgb(0 0 0 / .05)'
			}
		},
	},
	plugins: [],
}
