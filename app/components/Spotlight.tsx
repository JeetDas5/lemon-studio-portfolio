"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Spotlight() {
  const slides = [
    {
      title: "We Have Small And Best O2 Plants Collection’s",
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "/plants/plant7.svg",
    },
    {
      title: "Air Purifying & Aesthetic Plants For Your Workspace",
      desc1:
        "Enhance your concentration and style with our handpicked office plants designed to thrive in low light and filter common toxins.",
      desc2:
        "Our low-maintenance plants are perfect for apartments and busy professionals looking to add a touch of green to their home office.",
      image: "/plants/plant4.svg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeIndex];

  const plantVariants = {
    initial: { x: -280, opacity: 0, scale: 0.9 },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 75,
        damping: 15,
        delay: 0.1,
      },
    },
    exit: {
      x: -200,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.45,
        ease: "easeInOut" as const,
      },
    },
  };

  const textVariants = {
    initial: { x: 80, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: "easeOut" as const,
        delay: 0.05,
      },
    },
    exit: {
      x: -80,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn" as const,
      },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 relative z-10 overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mb-20 flex justify-center relative"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight px-6 py-2">
            Our Best o2
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative"
      >
        <div className="w-full relative bg-[#1e251a] border border-[#2e3728] rounded-[60px] px-6 py-12 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 min-h-[500px] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] hover:border-[#384332] transition-all duration-500 glass overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col lg:flex-row items-center lg:items-stretch gap-2 md:gap-12 lg:gap-16 w-full overflow-visible"
            >
              <div className="relative w-full lg:w-[42%] min-h-[220px] sm:min-h-[300px] lg:min-h-full flex items-end justify-center lg:justify-start overflow-visible">
                <motion.div
                  variants={plantVariants}
                  className="absolute left-1/2 lg:left-[-100px] -translate-x-1/2 lg:translate-x-0 -top-20 lg:-top-10 w-[80%] sm:w-[70%] lg:w-[150%] h-[120%] lg:h-[150%] pointer-events-none scale-125 sm:scale-135 lg:scale-150"
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-[0_30px_45px_rgba(0,0,0,0.6)] filter contrast-[1.05]"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={textVariants}
                className="flex-1 flex flex-col justify-center text-left py-4 z-10 w-full"
              >
                <h3 className="text-white font-semibold text-2xl md:text-[30px] leading-tight tracking-tight mb-6">
                  {currentSlide.title}
                </h3>
                <p className="text-white/70 text-[16px] md:text-[17px] leading-[1.65] font-light mb-6 font-sans">
                  {currentSlide.desc1}
                </p>
                <p className="text-white/70 text-[16px] md:text-[17px] leading-[1.65] font-light mb-8 font-sans">
                  {currentSlide.desc2}
                </p>

                <div className="flex flex-row items-center justify-between mt-auto pt-4 gap-6 w-full">
                  <button className="px-8 py-3 rounded-full border border-white/20 glass text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.02)] cursor-pointer">
                    Explore
                  </button>

                  <div className="flex items-center gap-6 text-white">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <svg
                        className="w-5 h-5 fill-none stroke-current"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <span className="text-sm font-semibold tracking-[0.2em] select-none text-white/90">
                      {String(activeIndex + 1).padStart(2, "0")}/
                      {String(slides.length).padStart(2, "0")}
                    </span>

                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                      aria-label="Next slide"
                    >
                      <svg
                        className="w-5 h-5 fill-none stroke-current"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
