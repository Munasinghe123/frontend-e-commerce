import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CategoryBanner = "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&q=80";

const categories = [
  { name: "Women",       count: "320+ items", emoji: "👗", bg: "#f5e6d3", accent: "#e8a87c" },
  { name: "Men",         count: "280+ items", emoji: "👔", bg: "#dde8f0", accent: "#7ca8c8" },
  { name: "Footwear",    count: "150+ items", emoji: "👟", bg: "#e8f0de", accent: "#8fbc6e" },
  { name: "Accessories", count: "200+ items", emoji: "👜", bg: "#f0dded", accent: "#c87ca8" },
  { name: "Streetwear",  count: "95+ items",  emoji: "🧢", bg: "#e8e0f0", accent: "#9b7cc8" },
];

const TOTAL = categories.length;

function Categories() {
  const sectionRef   = useRef(null);
  const containerRef = useRef(null);
  const cardsRef     = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Force clean initial state
      gsap.set(containerRef.current, { gap: "0px" });
      cardsRef.current.forEach(card => gsap.set(card, { rotateY: 0 }));

      const tl = gsap.timeline({
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Step 1 — gap splits
      tl.fromTo(containerRef.current,
        { gap: "0px" },
        { gap: "16px", duration: 0.7, ease: "power2.inOut" },
        "+=0.3"
      );

      // Step 2 — all slices flip simultaneously
      cardsRef.current.forEach((card) => {
        tl.fromTo(card,
          { rotateY: 0 },
          { rotateY: 180, duration: 1.4, ease: "power2.inOut" },
          "<"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#faf8f5] px-6 lg:px-12 py-20">

      {/* Title */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            ✦ Browse
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2 leading-tight">
            Shop by{" "}
            <span className="font-playfair italic text-orange-500">Category</span>
          </h2>
        </div>
        <a
          href="/shop"
          className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition group"
        >
          View All
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

     {/* Cards container — add a wrapper that holds fixed total width */}
<div className="relative w-full h-72 lg:h-80">

  {/* The actual gap container sits on top */}
  <div
    ref={containerRef}
    className="absolute inset-0 flex h-full"
    style={{ gap: "0px", perspective: "1200px" }}
  >
    {categories.map((cat, i) => {
      const isFirst = i === 0;
      const isLast  = i === categories.length - 1;

      return (
        <div
          key={cat.name}
          className="flex-1 cursor-pointer group"
          style={{ margin: 0, padding: 0 }}
        >
          <div
            ref={el => cardsRef.current[i] = el}
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              borderRadius: isFirst ? "24px 0 0 24px"
                          : isLast  ? "0 24px 24px 0"
                          : "0",
            }}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                borderRadius: "inherit",
              }}
            >
              {/* Single full image pinned to the section width */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `calc(-100% * ${i})`,   // ← uses % of THIS element's width
                  width: `calc(100% * ${TOTAL})`,
                  height: "100%",
                }}
              >
                <img
                  src={CategoryBanner}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                backgroundColor: cat.bg,
                borderRadius: "inherit",
              }}
            >
              <span className="text-5xl">{cat.emoji}</span>
              <div className="text-center">
                <p className="font-black text-gray-900 text-lg">{cat.name}</p>
                <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
              </div>
              <span
                className="mt-2 px-5 py-2 rounded-full text-xs font-bold text-white
                           opacity-0 group-hover:opacity-100 translate-y-2
                           group-hover:translate-y-0 transition-all duration-300"
                style={{ backgroundColor: cat.accent }}
              >
                Shop Now →
              </span>
            </div>

          </div>

          {/* Label below */}
          <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-bold text-sm text-gray-900 group-hover:text-orange-500 transition-colors">
              {cat.name}
            </p>
          </div>

        </div>
      );
    })}
  </div>
</div>

    </section>
  );
}

export default Categories;