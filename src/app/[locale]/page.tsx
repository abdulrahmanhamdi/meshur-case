import { ProductService } from "@/services/productService";
import { ProductCard } from "@/components/molecules/product-card";
import { TrustBar } from "@/components/organisms/trust-bar";
import { Hero } from "@/components/organisms/hero";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * 1. Dynamic Metadata Generation
 * Optimizes SEO based on the selected locale and handles canonical links.
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
  };
}

/**
 * 2. HomePage Component (Server Component)
 * Utilizes React Server Components for optimal rendering performance and data fetching.
 */
export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  
  // Parallel Fetching: Retrieves dictionary and products simultaneously to reduce TBT (Total Blocking Time).
  const [dict, products] = await Promise.all([
    getDictionary(locale as "en" | "tr"),
    ProductService.getProducts()
  ]);

  return (
    <div className="flex flex-col gap-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Structured Data (JSON-LD) for enhanced search engine visibility */}
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

      {/* Hero Section - Translation and animations handled via dictionary props */}
      <Hero dict={dict.hero} />

      {/* Trust Bar Section */}
      <TrustBar dict={dict.trustBar} />

      <div className="container mx-auto px-4 pb-20">
        
        {/* Categories Bar - Responsive horizontal scroll with Dark/Light mode support */}
        <div className="my-8 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {dict.home.categories.map((category: string) => (
            <button
              key={category}
              className="whitespace-nowrap rounded-full border px-6 py-2 text-sm font-bold 
                        transition-all duration-200
                        bg-white border-gray-300 text-gray-900 
                        
                        dark:bg-gray-800 dark:border-gray-700 dark:text-white
                        
                        hover:bg-gray-50 dark:hover:bg-gray-700 
                        hover:border-red-500 hover:text-red-600
                        active:scale-95"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black uppercase tracking-widest text-gray-900 dark:text-white">
            {dict.home.discoverTitle}
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-red-600"></div>
        </div>

        {/* Product Grid - Utilizing Atomic Design via ProductCard molecule */}
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