"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Maxn Raval",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: "/persons/person1.svg",
    },
    {
      name: "Venely K",
      text: "Excellent plant quality and fast delivery. The customer service was also super helpful, guiding me to pick the perfect soil and pot.",
      image: "/persons/person2.svg",
    },
    {
      name: "Lii Thakur",
      text: "Great designs and customer service — I'll buy again. Highly recommend the Calathea plant for any modern office environment.",
      image: "/persons/person3.svg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 relative z-10">
      {/* Section Title with Brackets */}
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
            Customer Review
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.18 }}
            className="rounded-[60px] p-6 sm:p-10 bg-[#1e251a] border border-[#2e3728] relative hover:-translate-y-2.5 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)] hover:border-[#384332] transition-all duration-500 flex flex-col justify-between h-full group glass"
          >
            <div className="flex flex-col gap-8 h-full">
              <div className="flex items-center gap-5">
                <div className="w-[88px] h-[88px] rounded-full overflow-hidden relative shrink-0 shadow-[0_6px_16px_rgba(0,0,0,0.4)]">
                  <Image
                    src={r.image}
                    alt={r.name}
                    width={248}
                    height={268}
                    style={{
                      width: "281.8%",
                      height: "304.5%",
                      maxWidth: "none",
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                    className="transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-bold text-[24px] tracking-tight leading-tight">
                    {r.name}
                  </h4>

                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg
                      className="w-[18px] h-[18px] fill-[#FFB800] text-[#FFB800]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {/* Star 2 */}
                    <svg
                      className="w-[18px] h-[18px] fill-[#FFB800] text-[#FFB800]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {/* Star 3 */}
                    <svg
                      className="w-[18px] h-[18px] fill-[#FFB800] text-[#FFB800]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {/* Star 4 */}
                    <svg
                      className="w-[18px] h-[18px] fill-[#FFB800] text-[#FFB800]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {/* Star 5 - Half Star */}
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id={`half-star-${idx}`}>
                          <stop offset="50%" stopColor="#FFB800" />
                          <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        fill={`url(#half-star-${idx})`}
                        stroke="#FFB800"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="mt-2 grow">
                <p className="text-white/80 text-[17px] leading-[1.65] font-normal tracking-wide pl-1">
                  {r.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
