// src/__tests__/product.test.ts
import { ProductService } from '@/services/productService';

describe('ProductService Logic', () => {
  it('should return all products from the mock data', async () => {
    const products = await ProductService.getProducts();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('should fetch a single product by its slug correctly', async () => {
    const products = await ProductService.getProducts();
    const firstProduct = products[0];
    const product = await ProductService.getProductBySlug(firstProduct.slug);
    
    expect(product).toBeDefined();
    expect(product?.id).toBe(firstProduct.id);
  });
});