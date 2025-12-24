"use client";

import { motion } from "framer-motion";

interface HeroProps {
  dict: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const Hero = ({ dict }: HeroProps) => {
  return (
    <section className="relative h-[350px] w-full overflow-hidden bg-red-600 md:h-[450px] dark:bg-red-900">
      
      {/* Visual background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        
        {/* Main Title with slide-down animation */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-black uppercase tracking-tighter md:text-7xl"
        >
          {dict.title}
        </motion.h1>

        {/* Subtitle with fade-in effect */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg font-medium opacity-90 md:text-2xl"
        >
          {dict.subtitle}
        </motion.p>

        {/* CTA Button with scale-up and interactive hover states */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <button className="mt-10 rounded-full bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-red-600 transition-all hover:scale-105 hover:bg-gray-100 active:scale-95 md:text-base dark:bg-gray-900 dark:text-white">
            {dict.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
};