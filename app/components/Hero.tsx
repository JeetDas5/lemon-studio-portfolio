"use client";

import Image from "next/image";
import { Play, Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-full md:h-full -z-10 pointer-events-none"
      >
        <Image
          src="/plants/hero.svg"
          alt="Background Plant"
          fill
          className="object-cover md:object-contain object-top drop-shadow-2xl"
          priority
        />
      </motion.div>

      <div className="w-full px-6 md:px-12 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 mt-8 px-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl z-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Breath Natural
            </h1>
            <p className="text-white/80 mb-10 leading-relaxed text-lg font-light max-w-xl drop-shadow-md">
              Transform your living space with our hand-curated selection of premium indoor plants. Breathe clean, air-purifying oxygen while bringing the serene beauty of nature straight into your home or office.
            </p>

            <div className="flex items-center gap-6 mb-16">
              <button className="px-8 py-3.5 rounded-full glass text-white font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                Explore
              </button>
              <button className="flex items-center gap-3 text-white font-medium hover:text-white/80 hover:-translate-y-0.5 transition-all duration-300 group drop-shadow-md">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Play className="w-5 h-5 ml-1 fill-white" />
                </div>
                Live Demo...
              </button>
            </div>

            <div className="glass rounded-3xl p-5 flex flex-col gap-4 w-max hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 transition-all duration-300 backdrop-blur-md mx-auto md:mx-0">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-[#1a3824] shrink-0 border border-white/20">
                  <Image
                    src="/persons/alena.svg"
                    alt="Alena Padel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">
                    Alena Padel
                  </h4>
                  <div className="flex text-[#FFB800] text-[10px] gap-0.5">
                    <Star className="w-3 h-3 fill-[#FFB800]" />
                    <Star className="w-3 h-3 fill-[#FFB800]" />
                    <Star className="w-3 h-3 fill-[#FFB800]" />
                    <Star className="w-3 h-3 fill-[#FFB800]" />
                    <Star className="w-3 h-3 fill-[#FFB800]" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-white/60 max-w-[220px] leading-snug">
                Planto helped me find the perfect low-maintenance Jade Plant. My workspace feels so much more vibrant and alive now!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-auto flex justify-center md:block mt-24 md:mt-12 md:mr-4 perspective-1000 z-20"
          >
            <div className="glass rounded-b-[50px] rounded-t-[60px] py-6 px-8 md:px-12 pt-32 w-full max-w-[360px] sm:w-96 h-[450px] relative hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 backdrop-blur-xl group mx-auto md:mx-0">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[450px] h-[500px] ">
                <Image
                  src="/plants/plant7.svg"
                  alt="Calathea plant"
                  fill
                  className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.4)] filter contrast-125 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4"
                />
              </div>

              <div className="flex flex-col gap-1 z-10 relative mt-36">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                  Trendy House Plant
                </p>
                <div className="flex items-center justify-between mt-1 mb-6">
                  <h3 className="text-white/80 text-2xl tracking-tight">
                    Calathea Orbifolia
                  </h3>
                  <span className="text-white/80 text-2xl font-light leading-none">
                    ›
                  </span>
                </div>
                <button className="px-6 py-2.5 border border-white rounded-xl text-white text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-max shadow-sm cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mt-32 md:mt-16 mb-24 md:mb-32 flex justify-center relative z-10"
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
              Our Trendy plants
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-28 md:gap-36 w-full mx-auto pb-10">
          <div className="glass rounded-[40px] md:rounded-[125px] px-6 py-12 md:p-10 md:py-0 md:pr-16 flex flex-col md:flex-row items-center justify-between relative hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group backdrop-blur-2xl w-full">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-[320px] h-[280px] sm:max-w-[400px] sm:h-[350px] md:w-[600px] md:h-[550px] -mt-20 md:-mt-48 md:-ml-16 z-20"
            >
              <Image
                src="/plants/plant1.svg"
                alt="Jade Plant Dwarf"
                fill
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] filter contrast-125 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.15] group-hover:-rotate-3 group-hover:-translate-y-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-10 md:mt-0 flex-1 pl-4 md:pl-8 max-w-xl z-10 text-center md:text-left"
            >
              <h3 className="text-white text-3xl font-semibold mb-4 tracking-tight drop-shadow-sm">
                Jade Plant Dwarf
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                A compact, high-oxygen producing plant designed for office desks and bookshelves. It thrives in low-light environments with minimal watering.
              </p>
              <div className="text-white text-2xl font-bold mb-4 drop-shadow-sm">
                Rs. 599/-
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <button className="px-8 py-3.5 border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  Explore
                </button>
                <button className="w-[52px] h-[52px] border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="glass rounded-[40px] md:rounded-[125px] px-6 py-12 md:p-10 md:py-0 md:pl-32 flex flex-col-reverse md:flex-row items-center justify-between relative hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group backdrop-blur-2xl w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-10 md:mt-0 flex-1 pr-4 md:pr-8 max-w-xl z-10 text-center md:text-left"
            >
              <h3 className="text-white text-3xl font-semibold mb-4 tracking-tight drop-shadow-sm">
                Elegance Peace Lily
              </h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                An elegant, air-purifying companion featuring lush green foliage. Perfect for adding a fresh, rejuvenating touch to your study table.
              </p>
              <div className="text-white text-2xl font-bold mb-6 drop-shadow-sm">
                Rs. 599/-
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="px-8 py-3.5 border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  Buy Now
                </button>
                <button className="w-[52px] h-[52px] border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-[320px] h-[280px] sm:max-w-[400px] sm:h-[320px] md:w-[600px] md:h-[500px] -mt-20 md:-mt-32 md:-mr-16 z-20 transition-transform duration-700 ease-out group-hover:scale-[1.15] group-hover:rotate-3 group-hover:-translate-y-2"
            >
              <Image
                src="/plants/plant2.svg"
                alt="Elegance Peace Lily"
                fill
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] filter contrast-125 w-full h-full scale-125"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
