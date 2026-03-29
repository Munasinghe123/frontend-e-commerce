import React from "react";

import Bro1 from "../Images/Testimonials/bro1.jpg";
import Bro2 from "../Images/Testimonials/bro2.jpg";
import Sis1 from "../Images/Testimonials/sis1.jpg";

const testimonials = [
  {
    image: Bro1,
    name: "Daniel Cruz",
    role: "Fashion Enthusiast",
    text: "I've never felt more confident in what I wear. The quality is amazing, and every piece fits like a dream.",
  },
  {
    image: Bro2,
    name: "Ethan Walker",
    role: "Creative Director",
    text: "Honestly, I keep coming back for more. The styles are always on point, and I love how unique everything feels.",
  },
  {
    image: Sis1,
    name: "Amara Johnson",
    role: "Content Creator",
    text: "From the moment I walked in, I felt taken care of. I've been getting compliments ever since!",
  },
];


const TestimonialCard = ({ item, color }) => {
  return (
    <div className="relative w-[320px] h-[220px] flex items-center justify-center group">

      {/* Background Shape */}
      <div
        className="absolute w-[280px] h-[180px] rounded-3xl rotate-[10deg] shadow-md transition duration-300 group-hover:translate-x-[40px] group-hover:translate-y-[35px]"
        style={{
          backgroundColor: color,
          transform: "translate(30px, 25px)",
        }}
      ></div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl p-8 w-[300px] h-[200px] 
                      shadow-[0_8px_30px_rgba(0,0,0,0.06)] 
                      flex flex-col justify-between transition hover:-translate-y-1">

        <span className="absolute top-4 left-6 text-5xl text-[#E8420A]/20 font-serif">
          “
        </span>

        <p className="text-[15px] text-gray-700 leading-relaxed pl-4 line-clamp-3">
          {item.text}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-11 h-11 rounded-full object-cover"
          />

          <div>
            <p className="text-sm font-semibold text-[#E8420A]">
              {item.name}
            </p>
            <p className="text-xs text-gray-400">
              {item.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <section className="relative w-full overflow-hidden pb-32 pt-10  min-h-[400px]">

      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1512 343"
          preserveAspectRatio="none"
          className="w-full h-[200px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M653.826 270C438 377.5 174.075 354.155 0 270V0H1512V251C1500 230 1350 110 1142 105C968 100 870 160 653.826 270Z"
            fill="#E1D3C7"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="font-serif font-bold text-4xl lg:text-5xl text-black leading-tight ">
          What Our{" "}
          <span className="italic text-[#E8420A]">Customers</span> Say
        </h2>

        <p className=" italic text-gray-600 text-[16px] mt-3">
          Real experiences from people who trust our style.
        </p>

        <div className="flex justify-center gap-12 mt-24 flex-wrap">

          <TestimonialCard item={testimonials[0]} color="#d9c7b8" />
          <TestimonialCard item={testimonials[1]} color="#cfdde8" />
          <TestimonialCard item={testimonials[2]} color="#e5cfd6" />

        </div>

      </div>
    </section>
  );
}

export default Testimonial;