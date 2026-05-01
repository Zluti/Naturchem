// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://naturchem.cz',
	integrations: [sitemap()],
	vite: {
		build: {
			// Zabránit data: URI u importů ?url — jinak hosting s CSP (img-src bez data:) rozbije náhledy.
			assetsInlineLimit: 0,
		},
	},
});