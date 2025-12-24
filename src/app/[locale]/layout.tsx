// src/app/[locale]/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css"; 
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ThemeProvider } from "@/components/theme-provider"; 
import { getDictionary } from "@/i18n/get-dictionary";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata = {
  metadataBase: new URL('https://meshur.co'),
  title: "Meşhur Pazaryeri",
  description: "Frontend Test Case",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "tr");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem
          disableTransitionOnChange
        >
          <Navbar locale={locale} dict={dict} />
          <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
