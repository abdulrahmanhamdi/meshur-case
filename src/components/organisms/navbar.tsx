"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, Headset, Globe, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/atoms/button";

interface NavbarProps {
  locale: string;
  dict: any; // Consider defining a strict interface for your dictionary later
}

export const Navbar = ({ locale, dict }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Switches the language while preserving the current route path
   */
  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo and Translated Categories Trigger */}
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="text-2xl font-black text-red-600">
              MEŞHUR
            </Link>
            <Button variant="ghost" className="hidden gap-2 md:flex">
              <span className="font-bold">{dict.navigation.categories}</span>
              <Menu size={20} />
            </Button>
          </div>

          {/* Search Bar with Dynamic Placeholder */}
          <div className="relative hidden max-w-xl flex-1 md:block">
            <input
              type="text"
              placeholder={dict.navigation.searchPlaceholder}
              className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-12 focus:border-red-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
            />
            <button className="absolute right-1 top-1 rounded-full bg-black p-1.5 text-white transition-colors hover:bg-gray-800">
              <Search size={18} />
            </button>
          </div>

          {/* Action Icons and Internationalization */}
          <div className="flex items-center gap-2 lg:gap-6">
            
            {/* User Account & Orders */}
            <div className="hidden items-center gap-1 text-[12px] lg:flex">
              <User size={20} />
              <div className="flex flex-col leading-tight cursor-default">
                <span className="font-bold">{dict.navigation.login}</span>
                <span className="text-gray-500">{dict.navigation.orders}</span>
              </div>
            </div>

            {/* Support Center */}
            <div className="flex items-center gap-1 text-[12px] font-bold cursor-pointer hover:text-red-600 transition-colors">
              <Headset size={20} />
              <span className="hidden lg:inline">{dict.navigation.support}</span>
            </div>

            {/* Dynamic Language Switcher */}
            <button 
              onClick={() => handleLanguageChange(locale === "tr" ? "en" : "tr")}
              className="flex items-center gap-1 text-[12px] font-bold uppercase hover:text-red-600 transition-colors"
            >
              <Globe size={18} />
              {dict.navigation.language}
            </button>

            {/* Shopping Cart with Item Counter */}
            <Link href="#" className="relative p-2">
              <ShoppingCart size={24} />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};