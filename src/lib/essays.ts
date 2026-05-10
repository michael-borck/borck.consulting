import { getCollection, type CollectionEntry } from 'astro:content';

const isLive = (publishDate: Date) => {
  if (import.meta.env.DEV) return true;
  return publishDate.valueOf() <= Date.now();
};

export const getPublishedEssays = async (): Promise<CollectionEntry<'essays'>[]> => {
  const essays = await getCollection('essays', ({ data }) =>
    !data.draft && isLive(data.publishDate)
  );
  return essays.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
};
