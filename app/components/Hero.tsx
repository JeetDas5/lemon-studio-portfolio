import Image from "next/image";
import { Play, Star, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-full md:h-full -z-10 pointer-events-none opacity-80">
        <Image
          src="/plants/hero.svg"
          alt="Background Plant"
          fill
          className="object-cover md:object-contain object-top drop-shadow-2xl"
          priority
        />
      </div>

      <div className="w-full px-12 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 mt-8 px-2">
          <div className="max-w-3xl animate-fade-in-up z-20">
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Breath Natural
            </h1>
            <p className="text-white/80 mb-10 leading-relaxed text-lg font-light max-w-xl drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

            <div className="glass rounded-4xl p-4 flex gap-4 items-center w-max hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-[#1a3824] shrink-0 border border-white/20">
                <Image
                  src="/persons/alena.svg"
                  alt="Alisa Padel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-4">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-white font-medium text-sm">
                    Alena Padel
                  </h4>
                </div>
                <div className="flex text-[#FFB800] text-[10px] mb-1.5 gap-0.5">
                  <Star className="w-3 h-3 fill-[#FFB800]" />
                  <Star className="w-3 h-3 fill-[#FFB800]" />
                  <Star className="w-3 h-3 fill-[#FFB800]" />
                  <Star className="w-3 h-3 fill-[#FFB800]" />
                  <Star className="w-3 h-3 fill-[#FFB800]" />
                </div>
                <p className="text-[11px] text-white/60 max-w-[220px] leading-snug">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 md:mt-12 md:mr-4 perspective-1000 z-20">
            <div className="glass rounded-b-[50px] rounded-t-[60px] py-6 px-12 pt-32 w-96 h-[450px] relative hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 backdrop-blur-xl group">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[450px] h-[500px] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4">
                <Image
                  src="/plants/plant7.svg"
                  alt="Calathea plant"
                  fill
                  className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.4)] filter contrast-125"
                />
              </div>

              <div className="flex flex-col gap-1 z-10 relative mt-36">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                  Trendy House Plant
                </p>
                <div className="flex items-center justify-between mt-1 mb-6">
                  <h3 className="text-white/80 text-2xl tracking-tight">
                    Calathea plant
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
          </div>
        </div>

        <div className="w-full mt-32 md:mt-16 mb-24 md:mb-32 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight">
            Our Trendy plants
          </h2>
        </div>

        <div className="flex flex-col gap-28 md:gap-36 w-full mx-auto pb-10">
          <div className="glass rounded-[8rem] p-6 md:p-4 flex flex-col md:flex-row items-center justify-between relative hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group backdrop-blur-2xl md:w-[92%]">
            <div className="relative w-[600px] h-[550px] -mt-40 md:-mt-48 md:-ml-16 z-20 transition-transform duration-700 ease-out group-hover:scale-[1.15] group-hover:-rotate-3 group-hover:-translate-y-2">
              <Image
                src="/plants/plant1.svg"
                alt="Desk Plant"
                fill
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] filter contrast-125 w-[600px] h-[550px] scale-110"
              />
            </div>

            <div className="mt-10 md:mt-0 flex-1 pl-4 md:pl-8 max-w-xl z-10">
              <h3 className="text-white text-3xl font-semibold mb-4 tracking-tight drop-shadow-sm">
                For Small Desk AI Plant
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="text-white text-2xl font-bold mb-4 drop-shadow-sm">
                Rs. 599/-
              </div>
              <div className="flex items-center gap-3">
                <button className="px-8 py-3.5 border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  Explore
                </button>
                <button className="w-[52px] h-[52px] border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="glass rounded-[3rem] p-6 md:p-10 md:pl-16 flex flex-col-reverse md:flex-row items-center justify-between relative ml-auto hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group backdrop-blur-2xl md:w-[92%]">
            <div className="mt-10 md:mt-0 flex-1 pr-4 md:pr-8 max-w-xl z-10">
              <h3 className="text-white text-3xl font-semibold mb-4 tracking-tight drop-shadow-sm">
                For Fresh Desk AI Plant
              </h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="text-white text-2xl font-bold mb-6 drop-shadow-sm">
                Rs. 599/-
              </div>
              <div className="flex items-center gap-4">
                <button className="px-8 py-3.5 border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  Buy Now
                </button>
                <button className="w-[52px] h-[52px] border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative w-[600px] h-[550px] -mt-40 md:-mt-48 md:-ml-16 z-20 transition-transform duration-700 ease-out group-hover:scale-[1.15] group-hover:-rotate-3 group-hover:-translate-y-2">
              <Image
                src="/plants/plant2.svg"
                alt="Desk Plant"
                fill
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] filter contrast-125 w-[600px] h-[550px] scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
