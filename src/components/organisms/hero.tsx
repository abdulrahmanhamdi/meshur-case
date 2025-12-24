import { Button } from "@/components/atoms/button";

export const Hero = () => {
  return (
    <section className="relative h-[300px] w-full overflow-hidden bg-red-600 md:h-[400px]">
      <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">YILBAŞI PROMO KODLARI</h1>
        <p className="mt-4 text-lg md:text-2xl">Daha az harca, daha çok gülümse!</p>
        <Button className="mt-8 bg-white text-red-600 hover:bg-gray-100" size="lg">
          ALIŞVERİŞE BAŞLA
        </Button>
      </div>
      {/* يمكن إضافة صور الثلج والزينة هنا كخلفية */}
    </section>
  );
};