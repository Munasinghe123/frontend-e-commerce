import React from "react";
import HeroImg from "../Images/Ecom-Hero.jpg";
import { ArrowRight, Zap } from "lucide-react";

function LandingPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-73px)] bg-[#faf8f5] px-6 lg:px-12 py-8">

            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 border border-[#ece8e1]">
                            <img
                                src={HeroImg}
                                className="rounded-2xl object-cover w-full max-h-[520px]
                                           hover:scale-[1.02] transition duration-500"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col xl:pl-16 space-y-7">

                        <span className="inline-block w-fit px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 bg-orange-50 border border-orange-200 rounded-full">
                            ✦ Summer Collection 2026
                        </span>
                       
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-gray-900">
                            Experience
                            <br />
                            <span className="text-orange-500 font-playfair italic">Style</span>
                            <span className="text-gray-900"> with</span>
                            <br />
                            ShopSwift
                        </h1>
  
                        <p className="text-gray-500 max-w-md leading-relaxed text-base">
                            Discover the latest trends in lifestyle and fashion
                            with lightning-fast delivery that keeps up with your life.
                        </p>

                     
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="flex items-center gap-2 px-8 py-3.5 bg-orange-500 text-white rounded-full font-bold text-sm shadow-[0_8px_20px_rgba(249,115,22,0.35)] hover:bg-orange-600 hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)] hover:scale-[1.03] transition-all duration-300">
                                Shop Now
                                <ArrowRight size={17} />
                            </button>

                            <button className="px-8 py-3.5 border border-orange-500 rounded-full font-bold text-sm text-gray-700 hover:border-orange-600 hover:text-gray-900 transition-all duration-300">
                                Learn More
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;