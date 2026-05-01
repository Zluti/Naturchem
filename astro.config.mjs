// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

/** Canonical / sitemap — na Vercelu z `VERCEL_URL`, jinak `PUBLIC_SITE_URL`, lokálně localhost. */
function resolveSite() {
	const explicit = process.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
	if (explicit) return explicit;
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return 'http://localhost:4321';
}

// https://astro.build/config
export default defineConfig({
	site: resolveSite(),
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