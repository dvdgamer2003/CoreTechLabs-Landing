"use client";

import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const testimonials = [
        { name: "Sarah Jenkins", role: "CTO at TechFlow", text: "Coretech Labs transformed our legacy stack into a modern, scalable powerhouse." },
        { name: "Michael Chen", role: "VP Engineering", text: "The architectural insights provided by the team were invaluable for our growth." },
        { name: "Elena Rodriguez", role: "Product Director", text: "Seamless integration and top-tier support. Highly recommended for enterprise projects." },
        { name: "David Kim", role: "Founder, StartScale", text: "Our efficiency improved by 200% after implementing Coretech's automation workflow." },
    ];

    useEffect(() => {
        // Auto-advance
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % testimonials.length);
        }, 5000);

        // GSAP Animation
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-header", { opacity: 0, y: 30, duration: 1, scrollTrigger: { trigger: ".testimonial-section", start: "top 80%" } });
            gsap.from(".testimonial-card-container", { opacity: 0, y: 40, duration: 1.2, delay: 0.2, ease: "power4.out", scrollTrigger: { trigger: ".testimonial-section", start: "top 80%" } });
        });

        return () => {
            clearInterval(interval);
            ctx.revert();
        };
    }, [testimonials.length]);

    return (
        <section className="testimonial-section py-24 bg-black text-white">
            <div className="container-width max-w-7xl mx-auto">
                {/* Section 13: Enterprise + Header */}
                <div className="testimonial-header grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Enterprise-Ready Infrastructure</h3>
                        <p className="text-gray-400">Trusted by Fortune 500 companies to deliver mission-critical software.</p>
                    </div>
                    <div className="flex gap-4 opacity-50 justify-end">
                        <div className="w-12 h-12 bg-gray-800 rounded-full" />
                        <div className="w-12 h-12 bg-gray-800 rounded-full" />
                        <div className="w-12 h-12 bg-gray-800 rounded-full" />
                    </div>
                </div>

                {/* Section 14: Testimonials Carousel (Prompt 8) */}
                <div className="testimonial-card-container relative overflow-hidden min-h-[300px]">
                    {/* Cards Stack */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${active * 100}%)` }}
                    >
                        {testimonials.map((t, i) => (
                            <div key={i} className="min-w-full md:min-w-[50%] lg:min-w-[25%] px-3">
                                <div className="p-6 bg-[#1A1A2E] border border-[#2D3748] rounded-2xl hover:border-[#9D4EDD] transition-colors h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map((s, idx) => (
                                                <Star
                                                    key={s}
                                                    className="w-4 h-4 fill-[#9D4EDD] text-[#9D4EDD]"
                                                    style={{ animation: `fade-in 0.3s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">"{t.text}"</p>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-sm">{t.name}</div>
                                        <div className="text-xs text-gray-500">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-[#9D4EDD] scale-125' : 'bg-gray-600'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
