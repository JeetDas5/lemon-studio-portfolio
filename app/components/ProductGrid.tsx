"use client";

import ProductCard from "./ProductCard";
import plant1 from "@/public/plants/plant1.svg";
import plant3 from "@/public/plants/plant3.svg";
import plant4 from "@/public/plants/plant4.svg";
import plant5 from "@/public/plants/plant5.svg";
import plant6 from "@/public/plants/plant6.svg";
import plant7 from "@/public/plants/plant7.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductGrid() {
  const products = [
    { title: "Calathea plant", price: "Rs. 309/-", img: plant7 },
    { title: "Desk plant", price: "Rs. 359/-", img: plant1 },
    { title: "Calathea ai plant", price: "Rs. 399/-", img: plant3 },
    { title: "Cal 874 plant", price: "Rs. 259/-", img: plant4 },
    { title: "Show plant", price: "Rs. 759/-", img: plant5 },
    { title: "Calat 02 plant", price: "Rs. 659/-", img: plant6 },
  ];
  return (
    <section className="w-full mx-auto px-4 sm:px-8 py-20 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mb-16 flex justify-center relative"
      >
        <div className="relative inline-block">
          <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none">
            <Image
              src="/vectors/top-right.svg"
              alt="Decor"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute -bottom-2 left-0 w-10 h-10 pointer-events-none">
            <Image
              src="/vectors/left-bottom.svg"
              alt="Decor"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight px-4">
            Our Top Selling
          </h2>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product, idx) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            img={product.img}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
