"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateHeroText = () => {
            const ctx = gsap.context(() => {
                // New Animation: No upward motion, word-by-word reveal
                const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

                tl.fromTo(".hero-badge", { opacity: 0 }, { opacity: 1, duration: 1 }) // Simple fade
                    .to(".hero-word", { opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.5") // Word by word
                    .fromTo(".hero-desc", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
                    .fromTo(".hero-cta", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2 }, "-=0.5")
                    .to(".hero-blur", { opacity: 1, duration: 2, ease: "power2.out" }, "-=0.5");
            }, container);
            return () => ctx.revert();
        };

        // Initial hidden state to prevent flash
        const ctxInit = gsap.context(() => {
            gsap.set([".hero-badge", ".hero-desc", ".hero-cta"], { opacity: 0 });
            gsap.set(".hero-word", { opacity: 0 }); // Hide words individually
            gsap.set(".hero-blur", { opacity: 0 });
        }, container);

        // Event Listener
        window.addEventListener("hero-complete", animateHeroText);

        // Fallback (5.5s)
        const fallback = setTimeout(animateHeroText, 5500);

        return () => {
            window.removeEventListener("hero-complete", animateHeroText);
            clearTimeout(fallback);
            ctxInit.revert();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-16 bg-[#000000]">
            {/* 1. Canvas Background */}
            <HeroBackground />

            {/* 2. Overlay for Readability - Reduced opacity */}
            <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
            <div className="hero-blur absolute inset-0 backdrop-blur-lg z-0 pointer-events-none opacity-0" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-1 pointer-events-none" />

            <div
                ref={container}
                className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center px-4 md:px-0"
            >
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start text-left">
                    {/* 3. Badge */}
                    <div className="hero-badge inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 mb-8 hover:bg-white/[0.05] transition cursor-pointer">
                        <span className="bg-[#9D4EDD] text-white text-[13px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
                        <span className="text-[14px] text-white whitespace-nowrap">Automated Lead Generation</span>
                    </div>

                    {/* 4. Headline with Word Split */}
                    <h1 className="hero-headline text-6xl md:text-[80px] font-bold tracking-tight mb-6 leading-[1.1] text-white">
                        {/* Word splitting for animation */}
                        {"Engineering the Future of".split(" ").map((word, i) => (
                            <span key={i} className="hero-word inline-block mr-4 opacity-0">{word}</span>
                        ))}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                            {"Digital Products.".split(" ").map((word, i) => (
                                <span key={`grad-${i}`} className="hero-word inline-block mr-4 opacity-0">{word}</span>
                            ))}
                        </span>
                    </h1>

                    {/* 5. Description & CTA */}
                    <p className="hero-desc text-lg md:text-[20px] text-[#A0AEC0] max-w-[600px] mb-10 leading-relaxed font-light">
                        Coretech Labs builds scalable, high-performance software solutions for modern enterprises.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                        <button className="hero-cta w-full md:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] text-white font-bold text-[16px] hover:scale-105 hover:shadow-[0_10px_25px_rgba(157,78,221,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                            Get in touch
                            <ArrowUpRight className="w-5 h-5" />
                        </button>

                        <button className="hero-cta w-full md:w-auto px-8 py-3.5 rounded-lg border-2 border-white bg-transparent text-white font-medium text-[16px] hover:bg-white/10 hover:border-[#E9D5FF] transition-all duration-300">
                            View services
                        </button>
                    </div>
                </div>

                {/* Right Column: Empty spacer to reveal background logo */}
                <div className="hidden md:block"></div>
            </div>

            {/* Extended Bottom Gradient for Seamless Continuity */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-1 pointer-events-none" />
        </section>
    );
}
