import { MetadataRoute } from 'next';
import { ProductService } from '@/services/productService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://meshur.co';
  const products = await ProductService.getProducts(); 

  const productUrls = products.flatMap((p) => [
    { url: `${baseUrl}/tr/product/${p.slug}`, lastModified: new Date() },
    { url: `${baseUrl}/en/product/${p.slug}`, lastModified: new Date() },
  ]);

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/tr`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
    ...productUrls,
  ];
}