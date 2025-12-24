import { ProductService } from "@/services/productService";
import { ProductCard } from "@/components/molecules/product-card";
import { TrustBar } from "@/components/organisms/trust-bar";
import { Hero } from "@/components/organisms/hero";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * 1. Generate Metadata for SEO
 */
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr ? "Meşhur | Yöresel ve Meşhur Ürünler" : "Meşhur | Traditional & Famous Products",
    description: isTr ? "En meşhur lezzetler kapınıza gelsin." : "The most famous tastes delivered to your door.",
    openGraph: {
      images: ['/og-image.jpg'],
    },
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
 * 2. HomePage Component
 */
export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const products = await ProductService.getProducts();

  return (
    <div className="flex flex-col gap-6">
      {/* JSON-LD Structured Data 
          This helps Google understand your site search and site name.
          It doesn't render anything visible on the UI.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Meşhur",
            "url": "https://meshur.co",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://meshur.co/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      <div className="container mx-auto px-4 pb-20">
        {/* 3. Categories Bar */}
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

        {/* 4. Product Grid Section */}
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