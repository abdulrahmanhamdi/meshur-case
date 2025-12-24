"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, Globe, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { ThemeToggle } from "./theme-toggle";
import { Dictionary } from "@/i18n/get-dictionary";

interface NavbarProps {
  locale: string;
  dict: Dictionary;
}

export const Navbar = ({ locale, dict }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="text-2xl font-black tracking-tighter text-red-600">
              MEŞHUR
            </Link>
            <Button 
              variant="ghost" 
              className="hidden items-center gap-2 font-bold md:flex text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={20} />
              <span>{dict.navigation.categories}</span>
            </Button>
          </div>

          <div className="relative hidden max-w-xl flex-1 md:block">
            <input
              type="text"
              placeholder={dict.navigation.searchPlaceholder}
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-5 pr-12 text-sm text-gray-900 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white placeholder:text-gray-400"
            />
            <button className="absolute right-1.5 top-1.5 rounded-full bg-black p-1.5 text-white transition-transform hover:scale-105 dark:bg-red-600">
              <Search size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:gap-5">
            
            <ThemeToggle />

            <button 
              onClick={() => handleLanguageChange(locale === "tr" ? "en" : "tr")}
              className="flex items-center gap-1.5 text-[12px] font-bold uppercase transition-colors text-gray-900 dark:text-gray-300 hover:text-red-600 dark:hover:text-white"
            >
              <Globe size={18} />
              <span className="hidden sm:inline">{dict.navigation.language}</span>
            </button>

            <div className="hidden items-center gap-2 text-[12px] lg:flex">
              <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800 text-gray-900 dark:text-white">
                <User size={20} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-gray-900 dark:text-white">
                  {dict.navigation.login}
                </span>
                <span className="mt-1 text-gray-500 dark:text-gray-400">
                  {dict.navigation.orders}
                </span>
              </div>
            </div>

            {/* Shopping Cart */}
            <Link 
              href="#" 
              className="group relative rounded-full p-2 transition-colors text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ShoppingCart size={22} />
              <span className="absolute right-0 top-0 flex h-4 w-4 animate-bounce items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};