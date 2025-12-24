"use client"; 

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "@/i18n/get-dictionary"; 

export default function NotFound() {
  const pathname = usePathname();
  const [dict, setDict] = useState<any>(null);

  const locale = pathname.split("/")[1] || "tr"; 

  useEffect(() => {
    async function loadDict() {
      const data = await getDictionary(locale as any);
      setDict(data);
    }
    loadDict();
  }, [locale]);

  if (!dict) return null; 

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-black text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        {dict.errors?.notFound || "Page Not Found"}
      </p>
ؤ      <a href={`/${locale}`} className="mt-6 text-red-600 font-bold hover:underline">
        {dict.common?.backToHome || "Go Back Home"}
      </a>
    </div>
  );
}