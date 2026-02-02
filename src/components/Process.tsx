"use client";

import { useEffect } from "react";
import { Check, Code, Zap, BarChart, ArrowRight, Shield, Server, Cpu } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Process() {
    return (
        <section id="process" className="py-24 bg-[#050510] text-white">
            <div className="container-width max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-[#9D4EDD]">Workflow</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Our Engineering Process</h3>
                    <p className="text-white/60 max-w-2xl mx-auto">A rigorous, data-driven approach to software development.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Step 1: Analysis */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-6 rounded-2xl relative group hover:border-[#9D4EDD] transition-all">
                        <div className="text-6xl font-black text-white/5 absolute top-4 right-4">01</div>
                        <h4 className="text-xl font-bold mb-4 pt-8">Strategic Analysis</h4>
                        <p className="text-white/50 text-sm mb-6">We assess technical debt, scalability requirements, and architectural gaps.</p>
                        <div className="space-y-2">
                            {['Architecture Review', 'Security Compliance', 'Scalability Plan'].map(item => (
                                <div key={item} className="flex items-center gap-2 text-xs text-white/80">
                                    <div className="w-4 h-4 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD]" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Development */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-6 rounded-2xl relative group hover:border-[#9D4EDD] transition-all">
                        <div className="text-6xl font-black text-white/5 absolute top-4 right-4">02</div>
                        <h4 className="text-xl font-bold mb-4 pt-8">Agile Development</h4>
                        <p className="text-white/50 text-sm mb-6">Iterative sprints with focus on clean code and test-driven development (TDD).</p>
                        <div className="bg-[#0b0d10] rounded-lg p-3 font-mono text-[10px] text-green-400 overflow-hidden border border-white/5">
                            <div>class CoreEngine:</div>
                            <div className="pl-2 text-white/70">def optimize(self):</div>
                            <div className="pl-4 text-blue-300">return self.scale()</div>
                        </div>
                    </div>

                    {/* Step 3: Integration */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-6 rounded-2xl relative group hover:border-[#9D4EDD] transition-all">
                        <div className="text-6xl font-black text-white/5 absolute top-4 right-4">03</div>
                        <h4 className="text-xl font-bold mb-4 pt-8">Seamless Integration</h4>
                        <p className="text-white/50 text-sm mb-6">Deploying solutions that integrate perfectly with your existing legacy stack.</p>
                        <div className="flex items-center gap-2 justify-center bg-black/40 p-3 rounded border border-white/5">
                            <div className="text-center">
                                <Server className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                                <span className="text-[10px] text-gray-500">Legacy</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-[#9D4EDD]" />
                            <div className="text-center">
                                <Cpu className="w-5 h-5 text-white mx-auto mb-1" />
                                <span className="text-[10px] text-white">Coretech</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Optimization */}
                    <div className="process-card bg-[#1A1A2E] border border-[#2D3748] p-6 rounded-2xl relative group hover:border-[#9D4EDD] transition-all">
                        <div className="text-6xl font-black text-white/5 absolute top-4 right-4">04</div>
                        <h4 className="text-xl font-bold mb-4 pt-8">Continuous Optimization</h4>
                        <p className="text-white/50 text-sm mb-6">Real-time monitoring and automated performance tuning.</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-green-500/10 border border-green-500/20 p-2 rounded text-[10px] text-green-400 text-center">
                                Uptime 99.99%
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/20 p-2 rounded text-[10px] text-blue-400 text-center">
                                Latency &lt;20ms
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
