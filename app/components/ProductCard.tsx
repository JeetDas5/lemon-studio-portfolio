import Image from "next/image";

export default function ProductCard({ title, price, img }: { title: string; price: string; img: string }) {
  return (
    <div className="glass rounded-2xl p-6 w-full max-w-sm">
      <div className="w-full h-56 relative rounded-lg overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <h4 className="mt-4 text-white text-xl">{title}</h4>
      <p className="mt-2 text-white/80">{price}</p>
      <div className="mt-4 flex items-center justify-between">
        <button className="px-4 py-2 border rounded-md text-white glass">Buy Now</button>
        <button className="px-3 py-2 border rounded-md text-white/80">+</button>
      </div>
    </div>
  );
}