import { ArrowRight } from "lucide-react";
import shoe from '../Images/hero1.jpg';
import bag from '../Images/hero2.jpg';

export default function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-[#F5F0EB] flex items-start pb-3 px-14 pt-12">

            <div className="grid xl:grid-cols-3">
                {/* col 1 */}
                <div className="flex flex-col justify-between min-h-[90vh] max-w-xl">

                    <div>
                        {/* Eyebrow */}
                        <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8420A] font-medium mb-4">
                            New Arrival Products
                        </p>

                        {/* Heading */}
                        <h1 className="font-serif font-bold leading-[1] text-[clamp(3rem,5.5vw,5.5rem)] text-black mb-6">
                            The Best <br />
                            Look <br />
                            <em className="italic text-[#E8420A]">Anytime</em> <br />
                            Anywhere
                        </h1>

                        {/* Description */}
                        <p className="text-[14px] text-gray-500 leading-[1.8] max-w-[300px] mb-10 font-light">
                            Refresh your style with on-trend pieces from our latest clothing
                            collection. Anyone can get dressed up and glamorous.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 flex-wrap">

                            <button
                                className="flex items-center gap-2 px-8 py-3 bg-[#E8420A] text-white 
              rounded-full text-xs font-semibold tracking-wider uppercase
              shadow-lg shadow-orange-500/30
              hover:-translate-y-[2px] hover:bg-[#c93800] transition-all"
                            >
                                Shop Now
                                <ArrowRight size={15} />
                            </button>

                            <button
                                className="flex items-center gap-2 px-7 py-3 border border-black/20
              rounded-full text-xs font-medium tracking-wider uppercase
              text-gray-700 hover:border-black hover:text-black transition"
                            >
                                Learn More
                            </button>

                        </div>
                    </div>
                </div>

                {/*col 2  */}
                <div className="mt-10">
                    <div className="border border-orange-200 p-4">
                        <img
                            src={shoe}
                            alt="model"
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                {/* col 3 */}
                <div className="mt-32">
                    <div className="bg-gray-200 p-4">
                        <img
                            src={bag}
                            alt="woman"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>



        </div>
    );
}