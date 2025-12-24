import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Dictionary } from "@/i18n/get-dictionary";

interface FooterProps {
  dict: Dictionary;
}

export const Footer = ({ dict }: FooterProps) => {
  return (
    <footer className="border-t bg-white pt-12 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5 text-left">
          
          {/* Column 1: Company Information */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase">{dict?.footer?.companyInfo || "Company Info"}</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-red-600 transition-colors">{dict.footer.aboutUs}</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">{dict.footer.careers}</Link></li>
              <li><Link href="#" className="font-bold text-red-600 hover:opacity-80 transition-opacity">{dict.footer.treeProgram}</Link></li>
            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase">{dict.footer.customerService}</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-red-600 transition-colors">{dict.footer.refundPolicy}</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">{dict.footer.shippingInfo}</Link></li>
              <li><Link href="#" className="hover:text-red-600 italic text-red-500 transition-colors">{dict.footer.reportSuspicious}</Link></li>
            </ul>
          </div>

          {/* Column 3: Help & Support */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase">{dict.footer.help}</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-red-600 transition-colors">{dict.footer.supportCenter}</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">{dict.footer.securityCenter}</Link></li>
              <li><Link href="#" className="hover:text-red-600 transition-colors">{dict.footer.salesContract}</Link></li>
            </ul>
          </div>

          {/* Column 4: App Downloads & Social Engagement */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h4 className="mb-4 font-bold text-gray-900 dark:text-white">{dict.footer.downloadApp}</h4>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[10px] leading-none opacity-70">Download on</span>
                    <span className="text-sm font-bold leading-tight">App Store</span>
                  </div>
                </Link>
                <Link href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[10px] leading-none opacity-70">Get it on</span>
                    <span className="text-sm font-bold leading-tight">Google Play</span>
                  </div>
                </Link>
              </div>
              
              <div className="mt-6 flex gap-5 text-gray-500">
                <Instagram size={20} className="hover:text-red-600 cursor-pointer transition-colors" />
                <Facebook size={20} className="hover:text-blue-600 cursor-pointer transition-colors" />
                <Twitter size={20} className="hover:text-black cursor-pointer transition-colors" />
                <Youtube size={20} className="hover:text-red-700 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 border-t py-8 text-center text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          © 2025 Meşhur Pazaryeri. {dict.footer.allRightsReserved}
        </div>
      </div>
    </footer>
  );
};