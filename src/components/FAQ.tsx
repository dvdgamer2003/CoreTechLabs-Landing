"use client";

import { useState, useEffect } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function FAQ() {
    const faqs = [
        { q: "How can Coretech Labs accelerate my development?", a: "We provide pre-built architectural modules and AI-driven automation patterns that reduce development time by up to 50%." },
        { q: "Is the infrastructure scalable?", a: "Yes, our solutions are built on cloud-native principles (Kubernetes, Serverless) ensuring infinite horizontal scalability." },
        { q: "What industries do you serve?", a: "We specialize in FinTech, Healthcare, and SaaS sectors where security and performance are paramount." },
        { q: "Do you offer post-launch support?", a: "Absolutely. We offer 24/7 SLAs and dedicated engineering support for all enterprise clients." },
        { q: "How does the pricing model work?", a: "We offer flexible monthly and annual subscriptions, with custom enterprise tiers based on usage volume." }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".faq-header", { opacity: 0, y: 30, duration: 1, scrollTrigger: { trigger: "#faq", start: "top 80%" } });
            gsap.from(".faq-item", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: { trigger: "#faq", start: "top 80%" }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="faq" className="py-24 bg-black text-white border-t border-white/5">
            <div className="container-width max-w-4xl mx-auto">
                <div className="faq-header text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">FAQs</h2>
                    <p className="text-white/60">Technical answers for engineering teams.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <FAQItem key={i} question={f.q} answer={f.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-[#9D4EDD]/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.01] transition"
            >
                <span className="font-medium text-lg">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-400 ease-out ${isOpen ? 'rotate-180 text-[#9D4EDD]' : '0'}`}
                />
            </button>
            <div
                className={`transition-all duration-400 ease-out overflow-hidden`}
                style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0
                }}
            >
                <p className="p-6 pt-0 text-white/50 text-sm leading-relaxed max-w-2xl">
                    {answer}
                </p>
            </div>
        </div>
    );
}
