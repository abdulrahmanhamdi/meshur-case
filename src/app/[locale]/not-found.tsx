import Link from 'next/link';
import { Button } from '@/components/atoms/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">404</h1>
      <p className="mt-4 text-xl font-bold">Aradığınız sayfa bulunamadı!</p>
      <p className="mt-2 text-gray-500">Üzgünüz, aradığınız içerik silinmiş veya taşınmış olabilir.</p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Anasayfaya Dön</Button>
      </Link>
    </div>
  );
}