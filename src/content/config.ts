import { defineCollection, z } from 'astro:content';

const base = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

export const collections = {
  insights: defineCollection({
    type: 'content',
    schema: base.extend({
      author: z.string().default('Wychwood Partners'),
    }),
  }),

  frameworks: defineCollection({
    type: 'content',
    schema: base.extend({
      frameworkName: z.string().optional(),
      order: z.number().optional(),
      cta: z
        .object({
          label: z.string(),
          href: z.string(),
        })
        .optional(),
    }),
  }),

  'case-studies': defineCollection({
    type: 'content',
    schema: base.extend({
      client: z.string().optional(),
      industry: z.string().optional(),
      stage: z.string().optional(),
      outcomes: z.array(z.string()).default([]),
    }),
  }),
};
