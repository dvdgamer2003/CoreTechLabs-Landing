"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function CTA() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(container.current, {
                opacity: 0,
                scale: 0.9,
                y: 40,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%"
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 bg-gradient-to-t from-[#1A1A2E] to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="container-width max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Scale Your <br /> Digital Infrastructure?</h2>
                <p className="text-xl text-white/60 mb-10">Book a free consultation with our engineering team.</p>

                <button className="px-10 py-5 rounded-full bg-gradient-to-r from-[#9D4EDD] to-[#7209B7] text-white font-bold text-lg hover:scale-105 transition shadow-2xl shadow-purple-600/40 flex items-center gap-3 mx-auto">
                    Book a Free Call
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
