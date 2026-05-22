import ProductCard from "./ProductCard";
import { imgCard, imgRose1, imgNagy } from "../lib/figmaAssets";

export default function ProductGrid() {
  const items = [
    { title: "Calathea plant", price: "Rs. 309/-", img: imgCard },
    { title: "Desk plant", price: "Rs. 259/-", img: imgCard },
    { title: "Show plant", price: "Rs. 359/-", img: imgCard },
    { title: "Cal O2 plant", price: "Rs. 399/-", img: imgCard },
  ];
  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <h3 className="text-4xl text-white font-semibold mb-8">Our Top Selling</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((it) => (
          <ProductCard key={it.title} title={it.title} price={it.price} img={it.img} />
        ))}
      </div>
    </section>
  );
}