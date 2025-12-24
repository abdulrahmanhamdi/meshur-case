"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { Button } from "@/components/atoms/button";
import { cn } from "@/util/cn";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.includes(product.id.toString());

  // Take the first variant to display the default price
  const defaultVariant = product.variants[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
    >
      {/* Favorite button */}
      <button
        onClick={() => toggleFavorite(product.id.toString())}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 shadow-sm backdrop-blur-sm transition-colors hover:bg-white dark:bg-black/50"
      >
        <Heart
          size={18}
          className={cn(
            "transition-colors",
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"
          )}
        />
      </button>

      {/* Product image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-900">
        <Image
          src={product.mainImage || `https://picsum.photos/seed/${product.id}/400/500`}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Green "Veril" badge as shown in the design */}
        <div className="absolute bottom-2 left-2 rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900 dark:text-green-100">
          VERIL
        </div>
      </div>

      {/* Product details */}
      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-800 dark:text-gray-200">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {defaultVariant.price.toLocaleString()} TL
            </span>
          </div>

          <Button 
            size="icon" 
            variant="outline"
            className="h-8 w-8 rounded-full border-gray-200 hover:border-red-600 hover:text-red-600 dark:border-gray-700"
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
