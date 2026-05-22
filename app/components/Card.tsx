"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface CurvedCardProps extends HTMLMotionProps<"div"> {
  idx: string | number;
  children: React.ReactNode;
}

export default function Card({
  idx,
  children,
  className = "",
  style,
  ...props
}: CurvedCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      style={{
        filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.4))",
        ...style,
      }}
      {...props}
    >
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-500 group-hover:scale-[1.01]">
        <svg
          viewBox="0 0 553 508"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <clipPath id={`card-clip-${idx}`} transform="translate(3, 15.1548)">
              <path d="M22 88.1697C22 41.5238 63.1363 5.47099 109.534 10.2752C161.414 15.6471 226.808 21.1168 278 21.1168C329.192 21.1168 394.586 15.6471 446.466 10.2752C492.864 5.47099 534 41.5237 534 88.1697V403C534 445.526 499.526 480 457 480H99C56.4741 480 22 445.526 22 403V88.1697Z" />
            </clipPath>
          </defs>

          <foreignObject x="-3" y="-15.1548" width="562" height="522.555">
            <div
              style={{
                backdropFilter: "blur(12.5px)",
                WebkitBackdropFilter: "blur(12.5px)",
                clipPath: `url(#card-clip-${idx})`,
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>

          <path
            d="M22 88.1697C22 41.5238 63.1363 5.47099 109.534 10.2752C161.414 15.6471 226.808 21.1168 278 21.1168C329.192 21.1168 394.586 15.6471 446.466 10.2752C492.864 5.47099 534 41.5237 534 88.1697V403C534 445.526 499.526 480 457 480H99C56.4741 480 22 445.526 22 403V88.1697Z"
            fill="#272f22"
            fillOpacity="0.82"
            className="transition-opacity duration-500 group-hover:fill-opacity-90"
          />

          <path
            d="M446.568 11.2695C492.394 6.52454 533 42.1348 533 88.1699V403C533 444.974 498.974 479 457 479H99C57.0264 479 23 444.974 23 403V88.1699C23 42.1348 63.6056 6.52454 109.432 11.2695C161.318 16.642 226.754 22.1172 278 22.1172C329.246 22.1172 394.682 16.642 446.568 11.2695Z"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            className="transition-all duration-500 group-hover:stroke-white/40"
          />
        </svg>
      </div>

      {children}
    </motion.div>
  );
}
