"use client";

import { useEffect } from "react";
import { Check, Code, Zap, BarChart, ArrowRight, Shield, Server, Cpu, MessageSquare } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Process() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from("#process h2, #process h3, #process p", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#process",
                    start: "top 80%",
                }
            });

            gsap.from(".process-card", {
                opacity: 0,
                y: 50,
                duration: 1.2,
                stagger: 0.2, // Sequential reveal
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#process-grid",
                    start: "top 80%", // Starts animating when grid hits 80% viewport height
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="process" className="py-24 bg-black text-white">
            <div className="container-width max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold">Our Simple, Smart, and <br /> Scalable Process</h3>
                    <p className="text-white/60 max-w-xl mx-auto">We design, develop, and implement automation tools that help you work smarter, not harder.</p>
                </div>

                <div id="process-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Step 1: Smart Analyzing */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-8 rounded-2xl hover:border-[#9D4EDD] transition-all group min-h-[350px] relative overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 border border-white/10 inline-block px-2 py-1 rounded">Step 1</div>
                            <h4 className="text-2xl font-bold mb-3">Smart Analyzing</h4>
                            <p className="text-white/50 text-sm mb-8">We assess your needs and identify AI solutions to streamline workflows and improve efficiency.</p>
                        </div>

                        {/* Radar Chart Visual */}
                        <div className="flex items-center gap-4 bg-black/40 border border-white/5 p-4 rounded-xl">
                            <div className="w-24 h-24 rounded-full border border-white/10 relative flex items-center justify-center">
                                <div className="absolute w-full h-full border border-white/5 rounded-full animate-ping opacity-20" />
                                <div className="w-full h-px bg-white/10 absolute rotate-0" />
                                <div className="w-full h-px bg-white/10 absolute rotate-45" />
                                <div className="w-full h-px bg-white/10 absolute rotate-90" />
                                <div className="w-full h-px bg-white/10 absolute rotate-[135deg]" />
                                <div className="w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/40 to-transparent absolute top-0 right-0 rounded-tr-full animate-spin origin-bottom-left" style={{ animationDuration: '3s' }} />
                            </div>
                            <div className="space-y-2 flex-1">
                                {['System check', 'Process check', 'Speed check'].map((check, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-white/70 bg-white/5 px-2 py-1.5 rounded border border-white/5">
                                        <Shield className="w-3 h-3 text-white" /> {check}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Step 2: AI Development */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-8 rounded-2xl hover:border-[#9D4EDD] transition-all group min-h-[350px] relative overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 border border-white/10 inline-block px-2 py-1 rounded">Step 2</div>
                            <h4 className="text-2xl font-bold mb-3">AI Development</h4>
                            <p className="text-white/50 text-sm mb-8">Our team builds intelligent automation systems tailored to your business processes.</p>
                        </div>

                        {/* Code Visual */}
                        <div className="bg-[#050505] border border-white/10 rounded-xl p-4 font-mono text-[10px] text-gray-400 relative overflow-hidden">
                            <div className="flex gap-1.5 mb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                            <div><span className="text-purple-400">def</span> <span className="text-blue-400">check_trigger</span>(self, value):</div>
                            <div className="pl-4">if value &gt; self.threshold:</div>
                            <div className="pl-8">self.status = <span className="text-green-400">"active"</span></div>
                            <div className="pl-8 text-purple-400">return "Automation triggered!"</div>
                            <div className="pl-4">else:</div>
                            <div className="pl-8 text-gray-600">return "No action taken."</div>
                        </div>
                    </div>

                    {/* Step 3: Seamless Integration */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-8 rounded-2xl hover:border-[#9D4EDD] transition-all group min-h-[350px] relative overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 border border-white/10 inline-block px-2 py-1 rounded">Step 3</div>
                            <h4 className="text-2xl font-bold mb-3">Seamless Integration</h4>
                            <p className="text-white/50 text-sm mb-8">We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.</p>
                        </div>

                        {/* Integration Graph Visual */}
                        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex items-center justify-between px-12">
                            <div className="text-center relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    <Zap className="w-6 h-6 text-purple-400" />
                                </div>
                                <span className="text-[10px] text-white/60">Our solution</span>
                            </div>

                            {/* Animated Connection Lines */}
                            <div className="flex-1 mx-4 space-y-1.5 relative">
                                <div className="h-px bg-white/10 w-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-purple-500 w-1/2 animate-[shimmer_2s_infinite]" />
                                </div>
                                <div className="h-px bg-white/10 w-full" />
                                <div className="h-px bg-white/10 w-full" />
                            </div>

                            <div className="text-center relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                    <Server className="w-6 h-6 text-white/40" />
                                </div>
                                <span className="text-[10px] text-white/60">Your stack</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Continuous Optimization */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-8 rounded-2xl hover:border-[#9D4EDD] transition-all group min-h-[350px] relative overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 border border-white/10 inline-block px-2 py-1 rounded">Step 4</div>
                            <h4 className="text-2xl font-bold mb-3">Continuous Optimization</h4>
                            <p className="text-white/50 text-sm mb-8">We refine performance, analyze insights, and enhance automation for long-term growth.</p>
                        </div>

                        {/* System Status List Visual */}
                        <div className="bg-black/30 border border-white/5 rounded-xl p-3 space-y-2">
                            <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="w-3 h-3 text-white/60" />
                                    <div>
                                        <div className="text-[10px] font-bold text-white">Chatbot system</div>
                                        <div className="text-[8px] text-green-400">Efficiency +20%</div>
                                    </div>
                                </div>
                                <div className="w-2 h-2 rounded-full border border-white/20" />
                            </div>

                            <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                                <div className="flex items-center gap-2">
                                    <Cpu className="w-3 h-3 text-white/60" />
                                    <div>
                                        <div className="text-[10px] font-bold text-white">Workflow system</div>
                                        <div className="text-[8px] text-white/40">Update available</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-3 h-3 text-white/40" />
                            </div>

                            <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                                <div className="flex items-center gap-2">
                                    <BarChart className="w-3 h-3 text-white/60" />
                                    <div>
                                        <div className="text-[10px] font-bold text-white">Sales system</div>
                                        <div className="text-[8px] text-white/40">Up to date</div>
                                    </div>
                                </div>
                                <Check className="w-3 h-3 text-purple-500" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
