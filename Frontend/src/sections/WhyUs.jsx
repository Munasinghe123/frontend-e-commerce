import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Free Shipping",
    desc: "Free delivery on all orders over $50. Fast and reliable worldwide.",
    accent: "#f97316",
    bg: "#fff7ed",
    position: "top",    // ← top card
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "24/7 Support",
    desc: "Our team is always here to help you anytime, day or night.",
    accent: "#c87ca8",
    bg: "#f0dded",
    position: "left",   // ← left card
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Secure Checkout",
    desc: "Your payment info is always safe with 256-bit SSL encryption.",
    accent: "#8fbc6e",
    bg: "#e8f0de",
    position: "right",  // ← right card
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: "Easy Returns",
    desc: "Not happy? Return within 30 days — no questions asked.",
    accent: "#7ca8c8",
    bg: "#dde8f0",
    position: "bottom", // ← bottom card
  },
];

// Animation directions per position
const animFrom = {
  top:    { opacity: 0, y: -60 },
  bottom: { opacity: 0, y:  60 },
  left:   { opacity: 0, x: -60 },
  right:  { opacity: 0, x:  60 },
};

function WhyUs() {
  const sectionRef = useRef(null);
  const cardRefs   = useRef({});
  const centerRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Center fades in
      gsap.fromTo(centerRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1,
          duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Each card flies in from its direction
      features.forEach((f) => {
        gsap.fromTo(cardRefs.current[f.position],
          animFrom[f.position],
          {
            opacity: 1, x: 0, y: 0,
            duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const Card = ({ feature }) => (
    <div
      ref={el => cardRefs.current[feature.position] = el}
      className="group rounded-3xl p-8 border border-[#ece8e1] bg-white
                 hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)]
                 hover:-translate-y-1 transition-all duration-300 cursor-default
                 opacity-0"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                   transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: feature.bg, color: feature.accent }}
      >
        {feature.icon}
      </div>
      <h3 className="font-black text-gray-900 text-lg mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
      <div
        className="mt-6 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
        style={{ backgroundColor: feature.accent }}
      />
    </div>
  );

  const topCard    = features.find(f => f.position === "top");
  const leftCard   = features.find(f => f.position === "left");
  const rightCard  = features.find(f => f.position === "right");
  const bottomCard = features.find(f => f.position === "bottom");

  return (
    <section ref={sectionRef} className="w-full bg-[#faf8f5] px-6 lg:px-12 py-20">

      <div className="max-w-4xl mx-auto">

        {/* Top card — centered */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-sm">
            <Card feature={topCard} />
          </div>
        </div>

        {/* Middle row — left card | center title | right card */}
        <div className="flex items-center gap-6">

          {/* Left card */}
          <div className="flex-1">
            <Card feature={leftCard} />
          </div>

          {/* Center title */}
          <div
            ref={centerRef}
            className="flex-shrink-0 w-52 h-52 rounded-full bg-gray-900
                       flex flex-col items-center justify-center text-center
                       shadow-[0_20px_60px_rgba(0,0,0,0.15)] opacity-0"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 mb-2">
              ✦ Why Us
            </span>
            <h2 className="text-2xl font-black text-white leading-tight">
              Built for
              <br />
              <span className="font-playfair italic text-orange-400">You</span>
            </h2>
          </div>

          {/* Right card */}
          <div className="flex-1">
            <Card feature={rightCard} />
          </div>

        </div>

        {/* Bottom card — centered */}
        <div className="flex justify-center mt-6">
          <div className="w-full max-w-sm">
            <Card feature={bottomCard} />
          </div>
        </div>

      </div>

    </section>
  );
}

export default WhyUs;
