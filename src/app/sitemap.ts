import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meshur.co';
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/tr`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
  ];
}