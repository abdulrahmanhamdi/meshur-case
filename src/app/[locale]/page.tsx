import { ProductService } from "@/services/productService";
import { ProductCard } from "@/components/molecules/product-card";
import { TrustBar } from "@/components/organisms/trust-bar";
import { Hero } from "@/components/organisms/hero";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * 1. Dynamic Metadata Generation
 * Optimizes SEO by rendering dynamic title, description, and hreflang based on the locale.
 */
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr ? "Meşhur | Yöresel ve Meşhur Ürünler" : "Meşhur | Traditional & Famous Products",
    description: isTr ? "En meşhur lezzetler kapınıza gelsin." : "The most famous tastes delivered to your door.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'tr-TR': '/tr',
        'en-US': '/en',
      },
    },
    metadataBase: new URL('https://meshur.co'),
  };
}

/**
 * 2. HomePage Component (Server Component)
 */
export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  
  // Parallel data fetching for dictionary and products to improve performance
  const [dict, products] = await Promise.all([
    getDictionary(locale as "en" | "tr"),
    ProductService.getProducts()
  ]);

  return (
    <div className="flex flex-col gap-6">
      {/* Structured Data (JSON-LD) for Technical SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Meşhur",
            "url": "https://meshur.co",
          }),
        }}
      />

      {/* Hero Section */}
      <Hero dict={dict.hero} />

      {/* Trust Bar Section */}
      <TrustBar dict={dict.trustBar} />

      <div className="container mx-auto px-4 pb-20">
        
        {/* Categories Navigation Bar */}
        <div className="my-8 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {dict.home.categories.map((category: string) => (
            <button
              key={category}
              className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-gray-900 dark:text-white">
            {dict.home.discoverTitle}
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-red-600"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              dict={dict.productCard} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}