import Image from "next/image";
import { imgNagy, imgRose1 } from "../lib/figmaAssets";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-8 py-12">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={imgNagy} alt="bg" fill className="object-cover opacity-90" />
        </div>
        <div className="flex items-start gap-10">
          <div className="flex-1 py-16">
            <h2 className="text-6xl font-semibold text-white leading-tight">Breath Natural</h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button className="px-6 py-3 rounded-full border border-white/60 glass text-white">Explore</button>
              <button className="px-6 py-3 rounded-full bg-white/6 text-white">Live Demo...</button>
            </div>
          </div>
          <div className="w-96 py-16">
            <div className="bg-white/6 glass border rounded-xl p-6">
              <div className="w-full h-48 relative rounded-lg overflow-hidden">
                <Image src={imgRose1} alt="plant" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white text-xl">Calathea plant</h3>
              <p className="mt-2 text-white/80">Trendy House Plant</p>
              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-2 border rounded-md text-white glass">Buy Now</button>
                <button className="px-3 py-2 border rounded-md text-white/80"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}