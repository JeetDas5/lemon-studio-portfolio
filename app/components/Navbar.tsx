import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2">
        <div className="rounded-full overflow-hidden">
          <Image src="/plants/logo.png" alt="logo" width={32} height={32} />
        </div>
        <Link href="/" className="text-white text-2xl font-semibold">
          Planto.
        </Link>
      </div>
      <nav className="flex items-center gap-10 text-white/80">
        <Link href="#">Home</Link>
        <Link href="#">
          Plants Type
          <Image
            src="/icons/down.svg"
            alt="dropdown"
            width={6}
            height={6}
            className="inline-block ml-1"
          />
        </Link>

        <Link href="#">More</Link>
        <Link href="#">Contact</Link>
      </nav>
      <div className="flex items-center gap-10 text-white/80">
        <Link href="#">
          <Image src="/icons/search.svg" alt="search" width={18} height={18} />
        </Link>
        <Link href="#">
          <Image src="/icons/cart.svg" alt="cart" width={18} height={18} />
        </Link>
        <Link href="#">
          <Image src="/icons/menu.svg" alt="menu" width={18} height={18} />
        </Link>
      </div>
    </header>
  );
}
