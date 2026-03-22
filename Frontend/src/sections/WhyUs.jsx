import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import whyus from '../Images/whyUs/why-us .jpg';
import delivery from '../Images/whyUs/delivery.jpg';
import clothes from '../Images/whyUs/clothes.jpg';
import payments from '../Images/whyUs/payments.jpg';
import support from '../Images/whyUs/support.jpg';

gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  const leftRef1 = useRef(null);
  const leftRef2 = useRef(null);
  const rightRef1 = useRef(null);
  const rightRef2 = useRef(null);
  const centerRef = useRef(null);
  const headingRef = useRef(null);

 useEffect(() => {
    const scrollConfig = {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    };

    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 3, ease: "power3.out", ...scrollConfig }
    );

    // Left block 
    gsap.fromTo([leftRef1.current, leftRef2.current],
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 3, ease: "power3.out", ...scrollConfig }
    );

    // Center image
    gsap.fromTo(centerRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 3, ease: "power3.out", ...scrollConfig }
    );

    // Right block 
    gsap.fromTo([rightRef1.current, rightRef2.current],
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 3, ease: "power3.out", ...scrollConfig }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const cardStyle = {
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  };

  const cardClass = 'bg-white w-[220px] h-[500px] rounded-full flex justify-center items-center space-y-6 p-5 flex-col';

  const CardContent = ({ img, title, desc }) => (
    <>
      <img src={img} className='rounded-full w-40 h-40 object-cover' />
      <div className='text-center px-2'>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="italic font-semibold text-gray-800 text-lg mb-2">
          {title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{desc}</p>
        <button
          className="text-xs italic underline underline-offset-4 text-[#E8420A] hover:text-gray-800 transition-colors duration-200"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Learn more →
        </button>
      </div>
    </>
  );

  return (
    <div className='h-[100vh] w-full'>
      <div className='grid grid-cols-1 h-full py-5'>
        <div className='overflow-hidden w-full space-y-10'>

          <div ref={headingRef} className="space-y-5 pr-6 text-center" style={{ opacity: 0 }}>
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
              Why <span className="italic text-[#E8420A]">Choose Us</span>
            </h2>
            <p className="font-light italic text-gray-800 text-[17px]">
              The essence of our craft is rooted in precision, simplicity, and a deep respect <br />
              for timeless design that transcends fleeting trends.
            </p>
          </div>

          <div className='w-full space-x-16 flex justify-center items-center'>

            {/* Left Cards */}
            <div className='flex space-x-10'>
              <div ref={leftRef1} style={{ ...cardStyle, opacity: 0 }} className={cardClass}>
                <CardContent img={delivery} title="Shipping Free"
                  desc="We ship your order straight to your door. Track every step with real-time updates." />
              </div>
              <div ref={leftRef2} style={{ ...cardStyle, opacity: 0 }} className={cardClass}>
                <CardContent img={clothes} title="Premium Quality"
                  desc="Every piece is crafted with precision and care, using only the finest fabrics." />
              </div>
            </div>

            {/* Center Image */}
            <div ref={centerRef} style={{ opacity: 0 }}>
              <img
                src={whyus}
                className='w-[320px] h-[500px] object-cover rounded-[999px]'
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* Right Cards */}
            <div className='flex space-x-10'>
              <div ref={rightRef1} style={{ ...cardStyle, opacity: 0 }} className={cardClass}>
                <CardContent img={payments} title="Secure Payments"
                  desc="Your transactions are protected with industry-leading encryption." />
              </div>
              <div ref={rightRef2} style={{ ...cardStyle, opacity: 0 }} className={cardClass}>
                <CardContent img={support} title="24/7 Support"
                  desc="Our team is always here for you. Reach us anytime by chat, email, or phone." />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;