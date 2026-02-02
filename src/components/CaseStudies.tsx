"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function CaseStudies() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Scroll Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards
            gsap.from(".case-card", {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#cases",
                    start: "top 80%"
                }
            });

            // Animate metrics inside cards
            gsap.from(".case-metric", {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: "#cases",
                    start: "top 80%"
                }
            });
        });
        return () => ctx.revert();
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll-fast
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <section id="cases" className="py-24 bg-black text-white relative">
            <div className="container-width max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[#9D4EDD] text-sm font-bold uppercase tracking-widest">Case Studies</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Transformation Through <br /> Advanced Technology</h3>
                    <p className="text-white/40 text-xs tracking-widest mt-8 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#9D4EDD] rounded-full animate-pulse" />
                        DRAG TO EXPLORE
                    </p>
                </div>

                {/* Draggable Carousel */}
                <div
                    ref={scrollRef}
                    className={`flex gap-8 overflow-x-auto pb-8 cursor-${isDragging ? 'grabbing' : 'grab'} no-scrollbar`}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {/* FinSolve */}
                    <div className="min-w-[85vw] md:min-w-[600px] bg-[#1A1A2E] border border-[#2D3748] rounded-3xl p-8 hover:border-[#9D4EDD] transition-all select-none">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-[#9D4EDD] text-white text-xs font-bold rounded">FinTech</div>
                            <h4 className="text-3xl font-bold">Scaling FinSolve's Transaction Engine</h4>
                            <p className="text-gray-400 leading-relaxed">
                                We re-architected the core ledger system for FinSolve, enabling them to process 1M+ transactions per second.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-2xl font-bold text-white">50x</div>
                                <div className="text-gray-500 text-xs">Throughput</div>
                            </div>
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-2xl font-bold text-white">-40%</div>
                                <div className="text-gray-500 text-xs">Costs</div>
                            </div>
                        </div>
                    </div>

                    {/* ScaleByte */}
                    <div className="min-w-[85vw] md:min-w-[600px] bg-[#1A1A2E] border border-[#2D3748] rounded-3xl p-8 hover:border-[#9D4EDD] transition-all select-none">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded">Healthcare</div>
                            <h4 className="text-3xl font-bold">MediFlow Data Pipeline</h4>
                            <p className="text-gray-400 leading-relaxed">
                                Automated patient data processing pipeline reducing manual entry/errors by 99% and HIPAA compliance.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-2xl font-bold text-white">99%</div>
                                <div className="text-gray-500 text-xs">Accuracy</div>
                            </div>
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-2xl font-bold text-white">24/7</div>
                                <div className="text-gray-500 text-xs">Uptime</div>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="min-w-[85vw] md:min-w-[600px] bg-[#1A1A2E] border border-[#2D3748] rounded-3xl p-8 hover:border-[#9D4EDD] transition-all select-none">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">Logistics</div>
                            <h4 className="text-3xl font-bold">GlobalRoute AI</h4>
                            <p className="text-gray-400 leading-relaxed">
                                Route optimization algorithms saving 15% fuel costs for a global logistics fleet.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-2xl font-bold text-white">15%</div>
                                <div className="text-gray-500 text-xs">Fuel Saved</div>
                            </div>
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-2xl font-bold text-white">100+</div>
                                <div className="text-gray-500 text-xs">Routes/Sec</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
