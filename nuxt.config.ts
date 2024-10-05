// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-09-25",
	nitro: {
		rollupConfig: {
			external: ["cloudflare:sockets"],
		}
	},
	devtools: { enabled: false }
})
