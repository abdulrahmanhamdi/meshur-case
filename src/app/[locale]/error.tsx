'use client';

import { useEffect } from 'react';
import { Button } from '@/components/atoms/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-bold text-red-600">Bir şeyler yanlış gitti!</h2>
      <p className="mt-2 text-gray-500">İşleminiz sırasında teknik bir hata oluştu.</p>
      <Button onClick={() => reset()} className="mt-6" variant="outline">
        Tekrar Dene
      </Button>
    </div>
  );
}