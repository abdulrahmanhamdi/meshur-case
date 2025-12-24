export interface ProductVariantOption {
  title: string;
  value: string;
}

export interface ProductVariant {
  id: number;
  price: number;
  stock: number;
  barcode: string;
  sku: string;
  thumbnailIds: number[];
  options?: ProductVariantOption[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  parentCategoryId: number;
  brandId: number | null;
  variants: ProductVariant[];
  mainImage?: string; 
}