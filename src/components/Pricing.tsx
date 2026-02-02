"use client";

import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pricing-card", {
                opacity: 0,
                y: 60,
                duration: 1,
                stagger: 0.2, // Staggered entry
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#pricing",
                    start: "top 75%"
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="pricing" className="py-24 bg-black text-white border-t border-white/5">
            <div className="container-width max-w-7xl mx-auto">
                {/* Section 11: Header + Toggle */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-[#9D4EDD]">Pricing</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Flexible Plans for <br /> Growing Teams</h3>

                    <div className="inline-flex items-center bg-[#1A1A2E] rounded-full p-1 mt-8 border border-[#2D3748]">
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-[#9D4EDD] text-white' : 'text-gray-400'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-[#9D4EDD] text-white' : 'text-gray-400'}`}
                        >
                            Annually
                        </button>
                    </div>
                </div>

                {/* Section 12: Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Starter */}
                    <div className="pricing-card p-8 border border-[#2D3748] bg-[#1A1A2E] rounded-3xl hover:border-white/20 transition-all">
                        <h3 className="text-xl font-bold mb-2">Starter</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold">${isAnnual ? '29' : '39'}</span>
                            <span className="text-white/40">/month</span>
                        </div>
                        <p className="text-white/50 text-sm mb-8">Essential tools for small startups.</p>
                        <button className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 transition text-white font-medium mb-8">Get Started</button>
                        <ul className="space-y-3">
                            {['Basic Analytics', '5 Team Members', 'Standard Support', 'API Access'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                                    <Check className="w-4 h-4 text-[#9D4EDD]" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Professional (Highlighted) */}
                    <div className="pricing-card p-8 border border-[#9D4EDD] bg-[#1A1A2E] rounded-3xl relative scale-105 shadow-2xl shadow-purple-900/20 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9D4EDD] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-bold mb-2">Professional</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold">${isAnnual ? '79' : '99'}</span>
                            <span className="text-white/40">/month</span>
                        </div>
                        <p className="text-white/50 text-sm mb-8">Advanced features for scaling businesses.</p>
                        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] hover:shadow-lg transition text-white font-bold mb-8">Start Free Trial</button>
                        <ul className="space-y-3">
                            {['Advanced Reporting', 'Unlimited Team Members', '24/7 Priority Support', 'Dedicated Account Manager', 'Custom Integrations'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm text-white/90">
                                    <Check className="w-4 h-4 text-[#9D4EDD]" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="pricing-card p-8 border border-[#2D3748] bg-[#1A1A2E] rounded-3xl hover:border-white/20 transition-all">
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <p className="text-white/50 text-sm mb-8">Tailored solutions for large organizations.</p>
                        <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/5 transition text-white font-medium mb-8">Contact Sales</button>
                        <ul className="space-y-3">
                            {['On-premise Deployment', 'SLA Guarantees', 'Custom Security Review', 'Dedicated Support Team'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                                    <Check className="w-4 h-4 text-[#9D4EDD]" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
