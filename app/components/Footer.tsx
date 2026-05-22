import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1b2316] text-white pt-24 pb-16 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-full overflow-hidden shrink-0">
                <Image
                  src="/plants/logo.png"
                  alt="Planto Logo"
                  width={44}
                  height={44}
                />
              </div>
              <h4 className="text-white text-3xl font-bold tracking-tight">
                Planto.
              </h4>
            </div>
            <p className="text-white/60 text-[16px] leading-[1.75] font-light mt-6 max-w-[340px] ">
              Planto is dedicated to bringing clean air and tranquil green
              aesthetics to modern homes. We source only the healthiest,
              sustainably-grown indoor plants.
            </p>
          </div>

          <div className="flex items-center gap-8 mt-16 font-bold tracking-widest text-white text-[16px] ">
            <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">
              FB
            </span>
            <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">
              TW
            </span>
            <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">
              LI
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <h5 className="text-white text-[20px] font-bold tracking-tight mb-8">
            Quick Link&apos;s
          </h5>
          <ul className="space-y-4  text-white/70 font-light text-[16px]">
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Type&apos;s Of plant&apos;s
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Contact
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Privacy
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="w-full max-w-[420px] md:text-right">
            <h5 className="text-white text-[20px] font-bold tracking-tight mb-8 md:text-left">
              For Every Update.
            </h5>

            <div className="flex items-center border border-white/20 rounded-2xl p-1 w-full bg-transparent focus-within:border-white/40 transition-colors duration-300 mt-6">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-transparent border-none outline-none text-white placeholder-white/35 px-4 py-2.5 flex-1 text-[16px] w-full "
              />
              <button className="bg-white hover:bg-white/90 text-[#1b2316] font-bold text-xs uppercase tracking-[0.15em] px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="text-white/50 text-[15px]  tracking-wide mt-20 w-full text-left md:text-right">
            planto © all right reserve
          </div>
        </div>
      </div>
    </footer>
  );
}
