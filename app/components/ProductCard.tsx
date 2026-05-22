"use client";

import Image, { StaticImageData } from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({
  title,
  price,
  img,
  index = 0,
}: {
  title: string;
  price: string;
  img: StaticImageData;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      className="glass rounded-b-[45px] rounded-t-[60px] p-6 sm:p-8 pt-32 w-full h-[460px] bg-[#272f22] border border-white/5 mx-auto relative hover:-translate-y-3 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group mt-28 flex flex-col justify-between"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[130%] sm:w-[150%] h-[380px] sm:h-[420px] transition-transform duration-700 ease-out group-hover:-translate-y-4">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] filter contrast-110"
        />
      </div>

      <div className="flex flex-col z-10 md:mt-44 relative h-full justify-end pb-2">
        <h3 className="text-white mt-22 md:mt-2 text-[28px] font-medium tracking-tight mb-4">
          {title}
        </h3>
        <p className="text-white/60 text-[15px] leading-relaxed font-light mb-8 max-w-[260px]">
          Easy-to-grow, pet-safe, and highly effective at naturally cleaning
          indoor air.
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-white text-[26px] font-medium tracking-wide">
            {price}
          </span>
          <button className="w-[50px] h-[50px] border border-white/30 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 shadow-sm cursor-pointer group-hover:bg-white/5">
            <ShoppingBag className="w-[22px] h-[22px] stroke-[1.5]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
