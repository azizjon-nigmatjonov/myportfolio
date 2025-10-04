"use client";

import ProjectHeader from "./ProjectHeader";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function ProjectUI() {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Create the scroll-triggered animation
            gsap.fromTo(
                containerRef.current,
                {
                    y: 100, // Start 100px below
                    opacity: 0,
                },
                {
                    y: 0, // Move to original position
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%", // Start animation when top of element is 85% down the viewport
                        end: "bottom 15%", // End when bottom of element is 15% down the viewport
                        toggleActions: "play none none reverse", // Play on enter, reverse on leave
                        markers: false, // Set to true for debugging
                    },
                }
            );
        }, containerRef);

        // Cleanup function
        return () => ctx.revert();
    }, []);

    const navigateToProject = () => {
        router.push("/project/makrformelle");
    }

    return <div ref={containerRef}>
        <div className="pt-15 pb-5">
            <ProjectHeader />
            <div className="container">
            <div onClick={navigateToProject} className="mt-5 sm:mt-0 max-h-[85vh] cursor-pointer overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/TTy0vkv0zZmRHic7ThXKOrJsBY.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
            </div>
        </div>
    </div>
}