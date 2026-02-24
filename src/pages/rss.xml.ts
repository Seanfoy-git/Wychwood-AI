import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';

export async function GET() {
  const posts = await getCollection('insights');

  return rss({
    title: 'Wychwood Partners — Insights',
    description: 'Frameworks and practical notes on scaling execution.',
    site: SITE.url,
    items: posts
      .filter((post) => !post.data.draft)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishDate,
        link: `/insights/${post.slug}/`,
      })),
  });
}
