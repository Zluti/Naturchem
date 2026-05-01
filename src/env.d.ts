/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_FORMSPREE_ENDPOINT?: string;
	/** Volitelné přepsání kořene webu (canonical, sitemap); jinak Astro `site` z buildu. */
	readonly PUBLIC_SITE_URL?: string;
	readonly SITE?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
