"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, Headset, Globe, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { useFavoriteStore } from "@/store/useFavoriteStore";

export const Navbar = ({ locale, dict }: { locale: string; dict: any }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { favorites } = useFavoriteStore();

  // دالة تغيير اللغة
  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      {/* الجزء العلوي: التنقل والبحث */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* 1. الشعار والقائمة (Kategoriler) */}
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="text-2xl font-black text-red-600">
              MEŞHUR
            </Link>
            <Button variant="ghost" className="hidden gap-2 md:flex">
              <Menu size={20} />
              <span className="font-bold">Kategoriler</span>
            </Button>
          </div>

          {/* 2. محرك البحث (مطابق للصورة تماماً) */}
          <div className="relative hidden max-w-xl flex-1 md:block">
            <input
              type="text"
              placeholder="Meşhur'da ara..."
              className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-12 focus:border-red-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
            />
            <button className="absolute right-1 top-1 rounded-full bg-black p-1.5 text-white transition-colors hover:bg-gray-800">
              <Search size={18} />
            </button>
          </div>

          {/* 3. أيقونات الحساب والدعم واللغة */}
          <div className="flex items-center gap-2 lg:gap-6">
            <Link href="#" className="hidden items-center gap-1 text-[12px] hover:text-red-600 lg:flex">
              <User size={20} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold">Oturum aç/Kaydol</span>
                <span className="text-gray-500">Siparişler ve Hesap</span>
              </div>
            </Link>

            <Link href="#" className="flex items-center gap-1 text-[12px] hover:text-red-600">
              <Headset size={20} />
              <span className="hidden font-bold lg:inline">Destek</span>
            </Link>

            {/* تبديل اللغة */}
            <button 
              onClick={() => handleLanguageChange(locale === "tr" ? "en" : "tr")}
              className="flex items-center gap-1 text-[12px] font-bold uppercase hover:text-red-600"
            >
              <Globe size={18} />
              {locale === "tr" ? "Türkçe" : "English"}
            </button>

            {/* أيقونة السلة (مع عدد العناصر) */}
            <Link href="#" className="relative p-2">
              <ShoppingCart size={24} />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* روابط التنقل السفلية (En Çok Satanlar, v.s) */}
        <nav className="mt-4 hidden items-center gap-8 text-sm font-bold md:flex">
          <Link href="#" className="flex items-center gap-1 hover:text-red-600">
             <span className="text-red-600">🔥</span> En Çok Satan Ürünler
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-red-600">
             <span className="text-yellow-500">⭐</span> 5 Yıldızlı
          </Link>
          <Link href="#" className="hover:text-red-600">Yeni Gelenler</Link>
        </nav>
      </div>
    </header>
  );
};