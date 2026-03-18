
import React from 'react'
import whyus from '../Images/whyUs/why-us.jpg';
import { Link } from 'react-router-dom';


function WhyUs() {
  return (
    <div className='h-[100vh] w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-3 h-full py-5'>

        <div className=' h-full space-y-10'>
         
        
        </div>

        <div className='overflow-hidden rounded-2xl space-y-5'>

           <div className="space-y-5 pr-6 text-center">
            <h2 className="font-serif font-bold text-4xl lg:text-5xl  text-gray-900 leading-tight">
              Why {" "}
              <span className=" italic text-[#E8420A]">Choose Us</span>
            </h2>

          </div>
          <img
            src={whyus}
            className='w-full h-full shadow-2xl rounded-2xl  object-cover object-[center_20%]'
          />
        </div>

        <div>
           <p></p> 
        </div>

      </div>
    </div>


  )
}

export default WhyUs
