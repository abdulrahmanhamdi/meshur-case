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

  /**
   * Switches the application language by updating the locale prefix in the URL
   */
  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo and Main Menu Trigger */}
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="text-2xl font-black text-red-600">
              MEŞHUR
            </Link>
            <Button variant="ghost" className="hidden gap-2 md:flex">
              <Menu size={20} />
              <span className="font-bold">Kategoriler</span>
            </Button>
          </div>

          {/* Search Engine Component */}
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

          {/* User Actions, Support, and Localization */}
          <div className="flex items-center gap-2 lg:gap-6">
            
            {/* Account & Orders */}
            <Link href="#" className="hidden items-center gap-1 text-[12px] hover:text-red-600 lg:flex">
              <User size={20} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold">Oturum aç/Kaydol</span>
                <span className="text-gray-500">Siparişler ve Hesap</span>
              </div>
            </Link>

            {/* Support Center */}
            <Link href="#" className="flex items-center gap-1 text-[12px] hover:text-red-600">
              <Headset size={20} />
              <span className="hidden font-bold lg:inline">Destek</span>
            </Link>

            {/* Language Switcher */}
            <button 
              onClick={() => handleLanguageChange(locale === "tr" ? "en" : "tr")}
              className="flex items-center gap-1 text-[12px] font-bold uppercase hover:text-red-600"
            >
              <Globe size={18} />
              {locale === "tr" ? "Türkçe" : "English"}
            </button>

            {/* Cart Icon with Badge */}
            <Link href="#" className="relative p-2">
              <ShoppingCart size={24} />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Secondary Navigation (Bestsellers, New Arrivals, etc.) */}
        <nav className="mt-4 hidden items-center gap-8 text-sm font-bold md:flex">
          <Link href="#" className="flex items-center gap-1 hover:text-red-600 transition-colors">
             <span className="text-red-600">🔥</span> En Çok Satan Ürünler
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-red-600 transition-colors">
             <span className="text-yellow-500">⭐</span> 5 Yıldızlı
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors">Yeni Gelenler</Link>
        </nav>
      </div>
    </header>
  );
};