import Image from "next/image";
import { imgCard } from "../lib/figmaAssets";

export default function Spotlight() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="glass rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-80 relative">
          <Image src={imgCard} alt="spotlight" fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-4xl text-white font-semibold">We Have Small And Best O2 Plants Collection’s</h3>
          <p className="mt-4 text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mt-4 text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-full border glass text-white">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}