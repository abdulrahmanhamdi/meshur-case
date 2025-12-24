import { ProductService } from "@/services/productService";
import { ProductCard } from "@/components/molecules/product-card";
import { TrustBar } from "@/components/organisms/trust-bar";
import { Hero } from "@/components/organisms/hero";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const products = await ProductService.getProducts();

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      <div className="container mx-auto px-4 pb-20">
        {/* 3. Categories Bar (simple example) */}
        <div className="my-8 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {["All", "Electronics", "Home & Furniture", "Women", "Cosmetics"].map((cat) => (
            <button
              key={cat}
              className="whitespace-nowrap rounded-full border px-6 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4. Product Grid */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider dark:text-white">
            DISCOVER ON MEŞHUR
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
