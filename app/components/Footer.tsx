import Image from "next/image";
import { imgPlant1 } from "../lib/figmaAssets";

export default function Footer() {
  return (
    <footer className="w-full mt-16 py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-8 flex items-start justify-between gap-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image src={imgPlant1} alt="logo" width={48} height={48} />
          </div>
          <div>
            <h5 className="text-white text-xl">Planto.</h5>
            <p className="text-white/80 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="text-white/80 grid grid-cols-3 gap-8">
          <div>
            <h6 className="text-white">Quick Links</h6>
            <ul className="mt-4 space-y-2">
              <li>Home</li>
              <li>Type’s Of plant’s</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}