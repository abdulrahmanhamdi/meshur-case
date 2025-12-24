import productsData from '@/data/products.json';
import { Product } from '@/types/product';

export const ProductService = {
  // Fetch all products
  getProducts: async (): Promise<Product[]> => {
    // Simulate network delay (500ms)
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Add a random image for each product (because the API provides IDs only)
    return (productsData as Product[]).map(product => ({
      ...product,
      mainImage: `https://picsum.photos/seed/${product.id}/400/500`
    }));
  },

  // Fetch a single product by slug (required in OpenAPI)
  getProductBySlug: async (slug: string): Promise<Product | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const products = productsData as Product[];
    return products.find(p => p.slug === slug);
  }
};
