// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://naturchem.cz',
	build: {
		// `_astro` některé hostingy / CDN špatně obsluhují; `assets` je bez podtržítek.
		assets: 'assets',
	},
	integrations: [sitemap()],
	vite: {
		build: {
			// Zabránit data: URI u importů ?url — jinak hosting s CSP (img-src bez data:) rozbije náhledy.
			assetsInlineLimit: 0,
		},
	},
});