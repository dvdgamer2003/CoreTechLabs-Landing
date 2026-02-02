"use client";

import { useEffect } from "react";
import { Zap, Users, Clock, TrendingUp, BarChart3, Shield, Server, Lock } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Benefits() {
    const benefits = [
        { title: "High Performance", desc: "Systems built for speed.", icon: Zap },
        { title: "Bank-Grade Security", desc: "ISO 27001 compliant architecture.", icon: Shield },
        { title: "Infinite Scalability", desc: "Grow without technical ceilings.", icon: TrendingUp },
        { title: "Data Precision", desc: "100% accurate real-time analytics.", icon: BarChart3 },
        { title: "Cloud Native", desc: "Kubernetes driven orchestration.", icon: Server },
        { title: "Zero Trust", desc: "Strict identity verification.", icon: Lock }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".benefit-card", {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#benefits-grid",
                    start: "top 80%",
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="benefits" className="py-24 bg-black text-white">
            <div className="container-width max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-2xl font-bold">Why Top Companies Choose Coretech</h3>
                </div>

                <div id="benefits-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="benefit-card p-8 bg-[#1A1A2E] border border-[#2D3748] rounded-2xl hover:-translate-y-1 hover:border-[#9D4EDD] hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#2D2D44] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9D4EDD] transition-colors duration-300">
                                <b.icon className="w-6 h-6 text-[#9D4EDD] group-hover:text-white transition-colors duration-300 group-hover:rotate-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-white">{b.title}</h4>
                            <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
