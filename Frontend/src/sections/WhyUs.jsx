
import React from 'react'
import whyus from '../Images/whyUs/why-us .jpg';
import { Link } from 'react-router-dom';
import delivery from '../Images/whyUs/delivery.jpg';
import clothes from '../Images/whyUs/clothes.jpg';
import payments from '../Images/whyUs/payments.jpg';
import support from '../Images/whyUs/support.jpg';


function WhyUs() {
  return (
    <div className='h-[100vh] w-full'>
      <div className='grid grid-cols-1 h-full py-5'>

        <div className='overflow-hidden w-full space-y-10'>

          <div className="space-y-5 pr-6 text-center">
            <h2 className="font-serif font-bold text-4xl lg:text-5xl  text-gray-900 leading-tight">
              Why {" "}
              <span className=" italic text-[#E8420A]">Choose Us</span>
            </h2>
            <p className="font-light italic text-gray-800 text-[17px]">The essence of our craft is rooted in precision, simplicity, and a deep respect <br /> for timeless design that transcends fleeting trends.</p>

          </div>

          <div className=' w-full  space-x-16 flex justify-center items-center'>
            <div className='flex space-x-10' >
              <div style={{
                transform: "scale(0.85)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
              }}
                className='bg-white w-[220px] h-[500px] rounded-full flex justify-center items-center space-y-6 p-5 flex-col'>

                <img src={delivery} className='rounded-full w-40 h-40 object-cover' />

                <div className='text-center px-2'>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="italic font-semibold text-gray-800 text-lg mb-2">
                    Shipping Free
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    We ship your order straight to your door. Track every step with real-time updates.
                  </p>
                  <button className="text-xs italic underline underline-offset-4 text-[#E8420A] hover:text-gray-800 transition-colors duration-200"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Learn more →
                  </button>
                </div>

              </div>

              <div style={{
                transform: "scale(0.85)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
              }}
                className='bg-white text-center w-[220px] h-[500px] rounded-full flex justify-center justify-center items-center space-y-6 p-5 flex-col'>
                <img src={clothes} className='rounded-full w-40 h-40 object-cover' />
                <div>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="italic font-semibold text-gray-800 text-lg mb-2">Premium Quality</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Every piece is crafted with precision and care, using only the finest fabrics that stand the test of time.
                  </p>
                </div>
                <button className="text-xs italic underline underline-offset-4 text-[#E8420A] hover:text-gray-800 transition-colors duration-200"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Learn more →
                </button>
              </div>
            </div>

            <img
              src={whyus}
              className='w-[320px] h-[500px] object-cover rounded-[999px]'
              style={
                { objectPosition: "center top" }}
            />
            <div className='flex space-x-10'>
              <div
                style={{
                  transform: "scale(0.85)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
                }}
                className='bg-white text-center w-[220px] h-[500px] rounded-full flex justify-center justify-center items-center space-y-6 p-5 flex-col'>
                <img src={payments} className='rounded-full w-40 h-40 object-cover' />
                <div>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="italic font-semibold text-gray-800 text-lg mb-2 italic">100% Secure Payments</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Your transactions are protected with industry-leading encryption. Shop with complete confidence.
                  </p>
                </div>

                <button className="text-xs italic underline underline-offset-4 text-[#E8420A] hover:text-gray-800 transition-colors duration-200"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Learn more →
                </button>

              </div>
              <div
                style={{
                  transform: "scale(0.85)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
                }} className='bg-white text-center w-[220px] h-[500px] rounded-full flex justify-center items-center space-y-6 p-5 flex-col'>
                <img src={support} className='rounded-full w-40 h-40 object-cover' />
                <div>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="italic font-semibold text-gray-800 text-base mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Our team is always here for you. Reach us anytime by chat, email, or phone day or night.
                  </p>
                </div>
                <button className="text-xs italic underline underline-offset-4 text-[#E8420A] hover:text-gray-800 transition-colors duration-200"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Learn more →
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div >


  )
}

export default WhyUs
