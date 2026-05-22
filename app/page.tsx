import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Spotlight from "./components/Spotlight";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <ProductGrid />
        <Spotlight />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}
