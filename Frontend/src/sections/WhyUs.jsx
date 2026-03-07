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
    height: 380,
    float: { duration: 3.2, yAmount: 14, delay: 0 },
  },
  {
    img: payments,
    title: "Secure Payments",
    desc: "All payments are encrypted and protected.",
    height: 380,
    float: { duration: 2.8, yAmount: 10, delay: 0.5 },
  },
  {
    img: delivery,
    title: "Fast Delivery",
    desc: "Nationwide shipping within 2–3 days.",
    height: 380,
    float: { duration: 3.6, yAmount: 16, delay: 0.9 },
  },
  {
    img: support,
    title: "24/7 Support",
    desc: "Our team is always here to help you.",
    height: 380,
    float: { duration: 3.0, yAmount: 12, delay: 0.3 },
  },
];

function WhyUs() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Scroll reveal — each card staggers in
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        // Yo-yo float — each card bobs at its own pace
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
    <section ref={sectionRef} className="relative flex-1 bg-[#F5F0EB] xl:h-[90vh] pb-20 px-14">

      <h2 className="text-5xl font-serif font-bold mb-10">
        Why <span className="italic text-[#E8420A]">Choose</span> Us
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-4 items-end gap-5 w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="relative flex-1 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] h-[220px] xl:h-[380px] cursor-pointer group"
            style={{
              height: card.height,
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0,
              willChange: "transform",
            
            }}
          >
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

            <div className="absolute bottom-8 left-4  text-white max-w-[200px]">
              <h3 className="text-2xl font-bold mb-1 ">{card.title}</h3>
              <p className="text-white/70 text-sm leading-snug">{card.desc}</p>
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