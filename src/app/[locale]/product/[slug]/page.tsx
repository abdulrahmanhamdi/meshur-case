import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductService } from "@/services/productService";
import { getDictionary } from "@/i18n/get-dictionary";
import { Button } from "@/components/atoms/button";
import { TrustBar } from "@/components/organisms/trust-bar";
import { Heart, ShoppingCart, CheckCircle } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

/**
 * 1. توليد الميتاداتا الديناميكية (SEO & OpenGraph)
 */
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = await ProductService.getProductBySlug(slug);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Meşhur`,
    description: product.description,
    alternates: {
      canonical: `/${locale}/product/${slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description || "",
      images: [{ url: `https://picsum.photos/seed/${product.id}/800/600` }],
    },
  };
}

/**
 * 2. مكون صفحة المنتج (Server Component)
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;

  // جلب البيانات بالتوازي لتقليل وقت التحميل
  const [dict, product] = await Promise.all([
    getDictionary(locale),
    ProductService.getProductBySlug(slug),
  ]);

  if (!product) {
    notFound(); // توجيه لصفحة 404 إذا لم يوجد المنتج
  }

  // اختيار الخيار الأول كافتراضي (Default Variant)
  const defaultVariant = product.variants[0];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Schema.org JSON-LD للنتائج الغنية في جوجل */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": `https://picsum.photos/seed/${product.id}/800/600`,
            "offers": {
              "@type": "Offer",
              "price": defaultVariant.price,
              "priceCurrency": "TL",
              "availability": defaultVariant.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* الجانب الأيسر: معرض الصور */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-800">
              <Image
                src={`https://picsum.photos/seed/${product.id}/800/800`}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* صور مصغرة (Thumbnails) بناءً على thumbnailIds من الـ API */}
            <div className="flex gap-4">
              {defaultVariant.thumbnailIds.map((id) => (
                <div key={id} className="relative h-20 w-20 overflow-hidden rounded-lg border dark:border-gray-800">
                  <Image src={`https://picsum.photos/seed/${id}/200/200`} alt="thumb" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* الجانب الأيمن: تفاصيل المنتج */}
          <div className="flex flex-col">
            <nav className="mb-4 flex text-sm text-gray-500">
              <span>{dict.navigation.home}</span>
              <span className="mx-2">/</span>
              <span className="text-red-600 font-bold">{product.name}</span>
            </nav>

            <h1 className="text-3xl font-black text-gray-900 dark:text-white md:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {defaultVariant.price.toLocaleString()} TL
              </span>
              {defaultVariant.stock > 0 && (
                <span className="flex items-center gap-1 text-sm font-bold text-green-600">
                  <CheckCircle size={16} /> {dict.trustBar.delivery}
                </span>
              )}
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {product.description || "Bu ürün hakkında detaylı bilgi bulunmamaktadır."}
            </p>

            {/* قسم الخيارات (Variants Options) */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                {defaultVariant.options?.[0]?.title || "Seçenekler"}
              </h3>
              <div className="mt-3 flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className="rounded-full border-2 border-gray-200 px-6 py-2 text-sm font-bold transition-all hover:border-red-600 dark:border-gray-800 dark:text-white"
                  >
                    {variant.options?.[0]?.value}
                  </button>
                ))}
              </div>
            </div>

            {/* أزرار التفاعل */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="flex-1 gap-2 text-lg font-black">
                <ShoppingCart size={20} />
                {dict.productCard.addToCart}
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8">
                <Heart size={20} />
              </Button>
            </div>
            
            <div className="mt-10 border-t pt-10">
               <TrustBar dict={dict.trustBar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}