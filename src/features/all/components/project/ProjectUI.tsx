"use client";

import ProjectHeader from "./ProjectHeader";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Portfolio } from "@/types/portfolio";
import { usePortfoliosStore } from "@/store/portfolios";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function ProjectUI({ portfolio = {} as Portfolio }: { portfolio: Portfolio }) {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const { setPortfolio } = usePortfoliosStore();
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
        router.push(`/project/${portfolio.id}`);
        setPortfolio(portfolio);
    }

    return <div ref={containerRef}>
        <div className="pt-15 pb-5">
            <ProjectHeader portfolio={portfolio} />
            <div className="container">
            <div onClick={navigateToProject} className="mt-5 sm:mt-0 max-h-[85vh] cursor-pointer overflow-hidden rounded-3xl">
                <img src={portfolio.showing_image_url || 'nothing'} alt={portfolio.title} className="w-full h-full object-cover object-center" />
            </div>
            </div>
        </div>
    </div>
}