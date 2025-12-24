import { ShieldCheck, CreditCard, Truck } from "lucide-react";

export const TrustBar = () => {
  const items = [
    { icon: <ShieldCheck size={20} />, text: "Güvenlik Gizlilik" },
    { icon: <CreditCard size={20} />, text: "Güvenli Ödemeler" },
    { icon: <Truck size={20} />, text: "Teslimat Garantisi" },
  ];

  return (
    <div className="bg-green-600 py-3 text-white">
      <div className="container mx-auto flex flex-wrap justify-around gap-4 px-4 text-sm font-medium">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};