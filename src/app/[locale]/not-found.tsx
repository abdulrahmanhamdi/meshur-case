import Link from 'next/link'
import { getDictionary } from '@/i18n/get-dictionary'

export default async function NotFound({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const dict = await getDictionary(locale); // جلب النصوص بناءً على اللغة

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-black text-red-600">404</h1>
      <h2 className="text-2xl font-bold mt-4 dark:text-white">{dict.errors.notFoundTitle}</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
        {dict.errors.notFoundDescription}
      </p>
      <Link 
        href={`/${locale}`}
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors"
      >
        {dict.errors.backToHome}
      </Link>
    </div>
  )
}