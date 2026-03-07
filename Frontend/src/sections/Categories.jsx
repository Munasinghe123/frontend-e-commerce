import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import BigDiv from '../Images/categories/big-div.jpg';
import female from '../Images/categories/catfemale.jpg';
import male from '../Images/categories/catmale.jpg';
import shoes from '../Images/categories/catShoes.jpg';
import caps from '../Images/categories/catStreetWear.jpg';
import bags from '../Images/categories/catAccesories.jpg';

gsap.registerPlugin(ScrollTrigger);



const categories = [
  { name: "Women", count: "320+ items", image: female },
  { name: "Men", count: "280+ items", image: male },
  { name: "Footwear", count: "150+ items", image: shoes },
  { name: "Accessories", count: "200+ items", image: bags },
  { name: "Streetwear", count: "95+ items", image: caps },
];

const TOTAL = categories.length;

function Categories() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

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
    <section ref={sectionRef} className="w-full min-h-screen bg-[#F5F0EB] px-6 lg:px-12 py-20">

      {/* Title */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-serif font-bold text-4xl lg:text-5xl  text-gray-900 mt-2 leading-tight">
            Shop by{" "}
            <span className=" italic text-[#E8420A]">Category</span>
          </h2>
        </div>
      </div>

      {/* Cards container — add a wrapper that holds fixed total width */}
      <div className="relative w-full h-[420px] lg:h-[520px]">

        {/* The actual gap container sits on top */}
        <div
          ref={containerRef}
          className="absolute inset-0 flex h-full"
          style={{ gap: "0px", perspective: "1200px" }}
        >
          {categories.map((cat, i) => {
            const isFirst = i === 0;
            const isLast = i === categories.length - 1;

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
                      : isLast ? "0 24px 24px 0"
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
                        src={BigDiv}
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
                    className="absolute inset-0 flex items-end p-6 group-hover:scale-105 transition duration-500"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      borderRadius: "inherit",
                      backgroundImage: `url(${cat.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-black/40 rounded-[inherit]" />

                    {/* text */}
                    <div className="relative text-white">
                      <p className="text-xl font-bold">{cat.name}</p>
                      <p className="text-sm opacity-80">{cat.count}</p>
                    </div>
                  </div>

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