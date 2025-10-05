"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function IntroducingImage() {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!imageRef.current) return;

        // Create the parallax animation
        const parallaxTl = gsap.timeline({
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 5, // Smooth scrubbing, 1 second lag
                onUpdate: (self) => {
                    // Calculate the progress (0 to 1)
                    const progress = self.progress;
                    // Move the image in the opposite direction of scroll
                    // This creates the parallax effect
                    gsap.set(imageRef.current, {
                        y: progress * 80, // Adjust the multiplier for more/less parallax effect
                    });
                }
            }
        });

        // Cleanup function
        return () => {
            parallaxTl.kill();
        };
    }, []);

    return (
        <div className="mt-5 sm:mt-0 max-h-[90vh] overflow-hidden">
            <div 
                ref={imageRef}
                className="w-full h-full"
            >
                <img 
                    src="https://framerusercontent.com/images/TTy0vkv0zZmRHic7ThXKOrJsBY.png" 
                    alt="Makrformelle" 
                    className="w-full h-full object-cover object-top" 
                />
            </div>
        </div>
    );
}

export function ProductionImage() {
    return <div className="container">
        <div className="max-h-[85vh] overflow-hidden rounded-3xl">
            <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
        </div>
    </div>
}
export function GridImages() {
    return <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="max-h-[60vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
            <div className="max-h-[60vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
            <div className="max-h-[60vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
            <div className="max-h-[60vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
        </div>
    </div>
}

export function NavigatingImages({ navigateToProject = () => {} }: { navigateToProject: () => void }) {
    return <div className="container">
        <div className="py-20">
            <div className="max-h-[85vh] overflow-hidden rounded-3xl relative">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div onClick={navigateToProject} className="cursor-pointer relative w-full h-full">
                        {/* Black circle background */}
                        <div className="absolute inset-0 bg-black rounded-full"></div>
                        
                        {/* Spinning text container */}
                        <div className="absolute inset-0 hover:rotate-180 duration-900">
                            <svg 
                                className="w-full h-full" 
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <path 
                                        id="circle" 
                                        d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                    />
                                </defs>
                                <text 
                                    className="fill-white text-[15px] font-bold uppercase tracking-wider"
                                    style={{ fontSize: '13.5px' }}
                                >
                                    <textPath href="#circle" startOffset="0%">
                                    •  NEXT PROJECT • NEXT PROJECT • NEXT PROJECT • NEXT PROJECT
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}