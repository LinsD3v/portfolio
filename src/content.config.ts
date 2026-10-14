import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const urlSchema = z.union([z.string().trim().url(), z.literal('')]).optional().transform((value) => value || undefined);

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    status: z.enum(['experimental', 'in-development', 'concluded']).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    repoUrl: urlSchema,
    demoUrl: urlSchema,
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Gabriel Henrique'),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
