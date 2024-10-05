// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-09-25",
	future: { compatibilityVersion : 4 },
	nitro: {
		rollupConfig: {
			external: ["cloudflare:sockets", "pg-native"],
		}
	},
	devtools: { enabled: false }
})
