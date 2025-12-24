import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-12 dark:bg-gray-950 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* العمود 1: معلومات الشركة */}
          <div>
            <h4 className="mb-4 font-bold uppercase text-sm">Şirket Bilgileri</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#">Hakkımızda</Link></li>
              <li><Link href="#">Kariyer</Link></li>
              <li><Link href="#">Basın</Link></li>
              <li><Link href="#" className="text-red-600 font-bold">Meşhur'un Ağaç Dikme Programı</Link></li>
            </ul>
          </div>

          {/* العمود 2: خدمة العملاء */}
          <div>
            <h4 className="mb-4 font-bold uppercase text-sm">Müşteri Hizmetleri</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#">İade Politikası</Link></li>
              <li><Link href="#">Nakliyat Bilgileri</Link></li>
              <li><Link href="#" className="text-red-600 italic">Şüpheli Faaliyetleri Bildirin</Link></li>
            </ul>
          </div>

          {/* العمود 3: المساعدة */}
          <div>
            <h4 className="mb-4 font-bold uppercase text-sm">Yardım</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#">Destek Merkezi</Link></li>
              <li><Link href="#">Güvenlik Merkezi</Link></li>
              <li><Link href="#">Mesafeli Satış Sözleşmesi</Link></li>
            </ul>
          </div>

          {/* العمود 4: تحميل التطبيق */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-900">
              <h4 className="mb-4 font-bold text-center md:text-left">Meşhur Uygulamasını İndir</h4>
              <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
                <Link href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
                  <div className="text-[10px]">İndirin</div>
                  <div className="text-sm font-bold">App Store</div>
                </Link>
                <Link href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
                  <div className="text-[10px]">İndirin</div>
                  <div className="text-sm font-bold">Google Play</div>
                </Link>
              </div>
              
              <div className="mt-6 flex justify-center md:justify-start gap-4 text-gray-600">
                <Instagram size={20} /> <Facebook size={20} /> <Twitter size={20} /> <Youtube size={20} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t py-6 text-center text-xs text-gray-500">
          © 2025 Meşhur Pazaryeri. Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};