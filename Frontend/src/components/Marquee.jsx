import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Nike from '../Images/nike.png';
import Calvin from '../Images/calvin.png';
import Levis from '../Images/levis.jpg';
import Adidas from '../Images/adids.png';
import Puma from '../Images/puma.png';

const brands = [
  { name: "Nike",         img: Nike,    style: "font-black tracking-widest text-xl" },
  { name: "Puma",         img: Puma,    style: "font-black tracking-widest text-xl" },
  { name: "Adidas",       img: Adidas,  style: "font-bold tracking-widest text-xl" },
  { name: "Levi's",       img: Levis,   style: "font-bold tracking-widest text-xl" },
  { name: "Calvin Klein", img: Calvin,  style: "font-bold tracking-widest text-xl" },
];

function BrandItem({ brand }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <img
        src={brand.img}
        alt={brand.name}
        className="h-7 w-auto object-contain grayscale opacity-40
                   group-hover:grayscale-0 group-hover:opacity-100
                   transition-all duration-300 group-hover:scale-110"
      />
      <span className={`${brand.style} text-black group-hover:text-orange-500
                        transition-colors duration-300 whitespace-nowrap`}>
        {brand.name}
      </span>
    </div>
  );
}

function Marquee() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const startAnimation = () => {
      const totalWidth = track.scrollWidth / 3;

      tweenRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });
    };

    const timer = setTimeout(startAnimation, 100);
    return () => {
      clearTimeout(timer);
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () =>
    gsap.to(tweenRef.current, { timeScale: 0.1, duration: 0.5 });
  const handleMouseLeave = () =>
    gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });

  const tripled = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-white border-y border-orange-100
                        shadow-[0_4px_20px_rgba(37,99,235,0.05)]
                        overflow-hidden select-none py-5">
      <div className="relative">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={trackRef} className="flex items-center gap-14 w-max px-10">
            {tripled.map((brand, i) => (
              <React.Fragment key={i}>
                <BrandItem brand={brand} />
                <span className="text-orange-100 text-sm pointer-events-none shrink-0">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Marquee;