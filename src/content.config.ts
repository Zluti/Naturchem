import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const clanky = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/clanky' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional().default([]),
		draft: z.boolean().optional().default(false),
		coverSrc: z.string().optional(),
		coverAlt: z.string().optional(),
	}),
});

export const collections = { clanky };
