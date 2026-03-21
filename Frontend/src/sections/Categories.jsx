import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
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
  { name: "Women", image: female, category: "women" },
  { name: "Men", image: male, category: "men" },
  { name: "Footwear", image: shoes, category: "footwear" },
  { name: "Accessories", image: bags, category: "accessories" },
  { name: "Streetwear", image: caps, category: "streetwear" },
];

const TOTAL = categories.length;

function Categories() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {

  //     // Force clean initial state
  //     gsap.set(containerRef.current, { gap: "0px" });
  //     cardsRef.current.forEach(card => gsap.set(card, { rotateY: 0 }));

  //     const tl = gsap.timeline({
  //       delay: 0.3,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 40%",
  //         toggleActions: "play reverse play reverse",
  //       }
  //     });

  //     // Step 1 — gap splits
  //     tl.fromTo(containerRef.current,
  //       { gap: "0px" },
  //       { gap: "16px", duration: 0.7, ease: "power2.inOut" },
  //       "+=0.3"
  //     );

  //     // Step 2 — all slices flip simultaneously
  //     cardsRef.current.forEach((card) => {
  //       tl.fromTo(card,
  //         { rotateY: 0 },
  //         { rotateY: 180, duration: 1.4, ease: "power2.inOut" },
  //         "<"
  //       );
  //     });

  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ✅ Only run the flip animation on lg screens and above
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(containerRef.current, { gap: "0px" });
        cardsRef.current.forEach(card => gsap.set(card, { rotateY: 0 }));

        const tl = gsap.timeline({
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            toggleActions: "play reverse play reverse",
          }
        });

        tl.fromTo(containerRef.current,
          { gap: "0px" },
          { gap: "16px", duration: 0.7, ease: "power2.inOut" },
          "+=0.3"
        );

        cardsRef.current.forEach((card) => {
          tl.fromTo(card,
            { rotateY: 0 },
            { rotateY: 180, duration: 1.4, ease: "power2.inOut" },
            "<"
          );
        });
      });

      // ✅ On mobile — just show the back face immediately, no animation
      mm.add("(max-width: 1023px)", () => {
        cardsRef.current.forEach(card => {
          gsap.set(card, { rotateY: 180 });
        });
        gsap.set(containerRef.current, { gap: "12px" });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[#F5F0EB] px-6 lg:px-12 py-20 lg:py-10">

      {/* Title */}
      <div className="flex items-end justify-between mb-12">
        <div className="w-full h-full flex text-center items-center justify-center">
          <div className="space-y-5">
            <h2 className="font-serif font-bold text-4xl lg:text-5xl  text-gray-900 mt-2 leading-tight">
              Shop by{" "}
              <span className=" italic text-[#E8420A]">Category</span>
            </h2>
            <p className="font-light  italic text-gray-800 text-[17px]">Explore our curated selection of high-end essentials,
              designed for the <br/> modern connoisseur of timeless style and elegance.</p>
          </div>
        </div>

      </div>

      {/* Cards container — add a wrapper that holds fixed total width */}
      <div className="relative w-full h-[420px] lg:h-[520px]">

        {/* The actual gap container sits on top */}
        <div
          ref={containerRef}
          className="lg:absolute lg:inset-0 lg:flex lg:h-full
               grid grid-cols-2 gap-3 lg:gap-0"
          style={{ gap: "0px", perspective: "1200px" }}
        >
          {categories.map((cat, i) => {
            const isFirst = i === 0;
            const isLast = i === categories.length - 1;

            return (
              <div
                key={cat.name}
                className="flex-1 cursor-pointer group h-[200px] lg:h-full rounded-none lg:rounded-2xl"
                style={{ margin: 0, padding: 0 }}
              >
                <Link to={`/shop?category=${cat.category}`}>
                  <div
                    ref={el => cardsRef.current[i] = el}
                    className="relative w-full h-full"
                    style={{
                      transformStyle: "preserve-3d",
                      borderRadius: 0,
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
                          left: `calc(-100% * ${i})`,
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
                      <div className="absolute inset-0 bg-black/30 rounded-[inherit]" />

                      {/* text */}
                      <div className="relative text-white">
                        <p className="text-xl font-bold">{cat.name}</p>
                      </div>
                    </div>



                  </div>
                </Link>

              </div>
            );
          })}
        </div>
      </div>

    </section >
  );
}

export default Categories;