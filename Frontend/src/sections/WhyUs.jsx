import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import quality from "../Images/whyUs/clothes.jpg";
import payments from "../Images/whyUs/payments.jpg";
import delivery from "../Images/whyUs/delivery.jpg";
import support from "../Images/whyUs/support.jpg";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    img: quality,
    title: "Premium Quality",
    desc: "Every product is carefully selected and quality tested.",
    height: "h-[340px]",   // tall
    float: { duration: 3.2, yAmount: 14, delay: 0 },
  },
  {
    img: payments,
    title: "Secure Payments",
    desc: "All payments are encrypted and protected.",
    height: "h-[260px]",   // short
    float: { duration: 2.8, yAmount: 10, delay: 0.4 },
  },
  {
    img: delivery,
    title: "Fast Delivery",
    desc: "Nationwide shipping within 2–3 days.",
    height: "h-[270px]",   // short
    float: { duration: 3.6, yAmount: 12, delay: 0.8 },
  },
  {
    img: support,
    title: "24/7 Support",
    desc: "Our team is always here to help you.",
    height: "h-[350px]",   // tall
    float: { duration: 3.0, yAmount: 16, delay: 0.2 },
  },
];

function WhyUs() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + slide up on scroll enter
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        // Yo-yo float after entry
        const { duration, yAmount, delay } = cards[i].float;
        gsap.to(card, {
          y: `-=${yAmount}`,
          duration,
          delay,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F5F0EB] pb-32 px-6">
      <h2 className="text-center text-5xl font-serif font-bold mb-20">
        Why <span className="italic text-[#E8420A]">Choose</span> Us
      </h2>

      {/* 2x2 grid — left col cards are taller, right col shorter (or vice versa) */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-5 items-end">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`why-card relative ${card.height} rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] cursor-pointer group`}
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0, // start hidden for scroll reveal
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

            {/* Content */}
            <div className="absolute bottom-8 left-8 text-white max-w-xs">
              <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
              <p className="text-white/75 text-sm leading-snug">{card.desc}</p>
              <button className="mt-4 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;