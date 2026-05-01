/// <reference types="astro/client" />

declare module '*?url' {
	const src: string;
	export default src;
}

interface ImportMetaEnv {
	readonly PUBLIC_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
