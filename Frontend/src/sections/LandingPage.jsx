import { ArrowRight } from "lucide-react";
import male from '../Images/landing/male.jpg';
import female from '../Images/landing/female.jpg';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            // Col 1 — text content slides up
            tl.from(".col-1", {
                x: -60,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out"
            });

            // Col 2 — first image comes up
            tl.from(".col-2", {
                y: 80,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out"
            }, "-=0.5");

            // Col 3 — second image comes up
            tl.from(".col-3", {
                y: 80,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out"
            }, "-=0.5");

            // Parallax — male moves up, female moves down
            gsap.to(".male-img", {
                y: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });

            gsap.to(".female-img", {
                y: 120,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="xl:min-h-screen w-full bg-[#F5F0EB] flex items-start pb-3 px-14 pt-12"
        >
            <div className="grid xl:grid-cols-3 w-full">

                {/* Col 1 */}
                <div className="col-1 flex flex-col justify-between xl:min-h-[90vh] max-w-xl">
                    <div>
                        <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8420A] font-medium mb-4">
                            New Arrival Products
                        </p>

                        <h1 className="font-serif font-bold leading-[1] text-[clamp(3rem,5.5vw,5.5rem)] text-black mb-6">
                            The Best <br />
                            Look <br />
                            <em className="italic text-[#E8420A]">Anytime</em> <br />
                            Anywhere
                        </h1>

                        <p className="text-[18px] text-gray-500 leading-[1.8] max-w-[300px] mb-10 font-light">
                            Refresh your style with on-trend pieces from our latest clothing
                            collection. Anyone can get dressed up and glamorous.
                        </p>

                        <div className="flex items-center gap-4 flex-wrap">
                            <Link to='/shop'>
                                <button className="flex items-center gap-2 px-8 py-3 bg-[#E8420A] text-white 
                                        rounded-full text-xs font-semibold tracking-wider uppercase
                                        shadow-lg shadow-orange-500/30
                                        hover:-translate-y-[2px] hover:bg-[#c93800] transition-all">
                                    Shop Now
                                    <ArrowRight size={15} />
                                </button>
                            </Link>

                            <button className="flex items-center gap-2 px-7 py-3 border border-black/20
                                rounded-full text-xs font-medium tracking-wider uppercase
                                text-gray-700 hover:border-black hover:text-black transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Col 2 */}
                <div className="hidden xl:block col-2 mt-10">
                    <div className="male-img border border-orange-200 p-4">
                        <img src={male} alt="model" className=" w-full object-cover" />
                    </div>
                </div>

                {/* Col 3 */}
                <div className="hidden xl:block col-3 mt-32">
                    <div className="female-img bg-gray-200 p-4">
                        <img src={female} alt="woman" className=" w-full object-cover" />
                    </div>
                </div>

            </div>
        </div>
    );
}