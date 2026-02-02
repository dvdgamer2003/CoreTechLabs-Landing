"use client";

import { useEffect, useState } from "react";
import { Check, Plus, MessageSquare, ArrowUpRight, Search, Layout, Mail, Calendar, User, Clock, ChevronLeft, ChevronRight, BarChart, Zap, Layers, Code, Shield } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Services() {
    useEffect(() => {
        gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                x: i % 2 === 0 ? -30 : 30, // Alternate direction
                y: 30,
                duration: 1.2,
                delay: i * 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
            });
        });
    }, []);

    return (
        <section id="services" className="py-24 bg-black text-white px-6">
            <div className="container-width max-w-7xl mx-auto">
                {/* Section 2: Services Header */}
                <div className="mb-20 space-y-4 text-center md:text-left">
                    <span className="inline-block px-4 py-1.5 rounded-md bg-[#1F1F3F] text-white text-[14px] font-semibold mb-6">Our Services</span>
                    <h3 className="text-4xl md:text-[56px] font-bold leading-[1.3] mb-4">Scalable Solutions for <br /> Modern Enterprises</h3>
                    <p className="text-[#D1D5DB] text-[16px] max-w-2xl">We engineer digital ecosystems that drive growth, efficiency, and innovation.</p>
                </div>

                {/* Section 3: Tasks & Workflows */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Card 1: Task Management */}
                    <div className="service-card bg-[#1A1A2E] p-7 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] hover:shadow-[0_20px_40px_rgba(157,78,221,0.15)] hover:-translate-y-1 transition-all duration-300 min-h-[400px]">
                        <div className="flex justify-between items-center mb-6 pb-5 border-b border-[#2D3748]">
                            <h4 className="text-[14px] font-bold uppercase tracking-wider">System Operations</h4>
                            <span className="text-[12px] text-[#A0AEC0]">Live Status</span>
                        </div>
                        <div className="space-y-4">
                            <TaskItem icon={Layers} title="Database Optimization" sub="Completed 2m ago" status="completed" />
                            <TaskItem icon={Shield} title="Security Audit" sub="In Progress" status="progress" />
                            <TaskItem icon={Code} title="API Integration" sub="Pending Review" status="pending" />
                            <TaskItem icon={Zap} title="Cache Cleanup" sub="Scheduled: 12:00 AM" status="pending" />
                            <TaskItem icon={BarChart} title="Daily Analytics" sub="Generating Report..." status="progress" />
                        </div>
                    </div>

                    {/* Card 2: Workflow Automation */}
                    <div className="service-card bg-[#1A1A2E] p-8 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <div className="text-[12px] uppercase text-[#9D4EDD] tracking-widest mb-3 font-bold">Automation Patterns</div>
                            <h4 className="text-[32px] font-bold mb-4 text-white">Streamline Complex Workflows</h4>
                            <p className="text-[#A0AEC0] text-[15px] leading-[1.6] mb-8">Deploy intelligent bots and scripts to handle redundant processes, ensuring your team focuses on high-impact engineering.</p>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <span className="px-4 py-2 bg-[#2D3748] rounded-md text-white text-[13px]">AI-Driven</span>
                            <span className="px-4 py-2 bg-[#2D3748] rounded-md text-white text-[13px]">Scalable</span>
                            <span className="px-4 py-2 bg-[#2D3748] rounded-md text-white text-[13px]">Secure</span>
                        </div>
                    </div>
                </div>

                {/* Section 4: AI Assistant, Founders, Sales */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Card 1: AI Assistant */}
                    <div className="service-card bg-[#1A1A2E] p-8 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] transition-all duration-300 md:col-span-1">
                        <h4 className="text-xl font-bold mb-4">AI Copilots</h4>
                        <div className="bg-black/30 p-4 rounded-lg h-[200px] flex flex-col justify-end space-y-2 border border-white/5">
                            <div className="self-start bg-white/10 px-3 py-2 rounded-lg text-xs text-white/80 rounded-bl-none">Analyzing metrics...</div>
                            <div className="self-end bg-[#9D4EDD] px-3 py-2 rounded-lg text-xs text-white rounded-br-none">Report generated.</div>
                        </div>
                    </div>

                    {/* Card 2: Founders / Leadership */}
                    <FoundersCard />

                    {/* Card 3: Sales & Marketing */}
                    <div className="service-card bg-[#1A1A2E] p-8 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] transition-all duration-300 md:col-span-1">
                        <h4 className="text-xl font-bold mb-4">Growth Engines</h4>
                        <ul className="space-y-3">
                            {['Lead Scoring', 'Automated Outreach', 'CRM Sync', 'Performance Tracking'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section 5: Custom Projects */}
                <div className="service-card bg-[#1A1A2E] p-8 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] transition-all duration-300 flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="text-[12px] uppercase text-[#9D4EDD] tracking-widest mb-3 font-bold">Custom Development</div>
                        <h4 className="text-[32px] font-bold mb-4">Enterprise Architectures</h4>
                        <p className="text-[#A0AEC0] mb-6 max-w-md">Bespoke software solutions architected for high availability, security, and massive scale.</p>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium text-white">System Operational</span>
                        </div>
                    </div>

                    <div className="flex-1 bg-black/20 border border-white/5 rounded-xl p-6 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-sm font-bold">Project Alpha</div>
                            <div className="text-xs text-[#9D4EDD] bg-[#9D4EDD]/10 px-2 py-1 rounded">In Progress</div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-xs text-white/60 mb-1">
                                <span>Progress</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <div className="h-full bg-[#9D4EDD] w-[85%]" />
                            </div>
                            <div className="grid grid-cols-7 gap-1 mt-4">
                                {[...Array(14)].map((_, i) => (
                                    <div key={i} className={`h-6 rounded-sm ${i % 2 === 0 ? 'bg-[#9D4EDD]/40' : 'bg-white/5'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function FoundersCard() {
    const [founderIndex, setFounderIndex] = useState(0);
    const founders = [
        { name: "John Doe", role: "CTO & Founder", initials: "JD" },
        { name: "Jane Smith", role: "VP Engineering", initials: "JS" },
        { name: "Alex Ray", role: "Lead Architect", initials: "AR" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFounderIndex((prev) => (prev + 1) % founders.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [founders.length]);

    const currentFounder = founders[founderIndex];

    return (
        <div className="service-card bg-[#2D2D44] p-8 rounded-xl border border-transparent hover:border-[#9D4EDD] transition-all duration-300 md:col-span-1 flex flex-col justify-center relative overflow-hidden">

            {/* Background glow for transition */}
            <div
                key={`glow-${founderIndex}`}
                className="absolute inset-0 bg-[#9D4EDD]/5 animate-pulse"
            />

            <h4 className="text-xl font-bold mb-6 relative z-10">Expert Leadership</h4>

            <div className="relative z-10">
                <div key={founderIndex} className="animate-[fade-in_0.5s_ease-out]">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#7209B7] flex items-center justify-center text-xl font-bold text-white shadow-lg">
                            {currentFounder.initials}
                        </div>
                        <div>
                            <div className="font-bold text-lg text-white">{currentFounder.name}</div>
                            <div className="text-sm text-gray-400">{currentFounder.role}</div>
                        </div>
                    </div>
                </div>

                {/* Tabs / Indicators */}
                <div className="flex gap-2 mt-4">
                    {founders.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setFounderIndex(i)}
                            className={`h-1 rounded-full flex-1 transition-all duration-300 cursor-pointer ${i === founderIndex ? 'bg-[#9D4EDD]' : 'bg-white/10'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-green-400 relative z-10">
                <Shield className="w-4 h-4" /> Verified Industry Experts
            </div>
        </div>
    );
}

function TaskItem({ icon: Icon, title, sub, status }: any) {
    let statusIcon = null;
    if (status === 'completed') statusIcon = <Check className="w-4 h-4 text-green-400" />;
    else if (status === 'cancelled') statusIcon = <div className="text-red-400 font-bold">✕</div>;
    else if (status === 'progress') statusIcon = <div className="w-4 h-4 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />;
    else if (status === 'pending') statusIcon = <div className="w-4 h-4 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />;

    return (
        <div className="flex items-center gap-4 hover:bg-[#2D3748] p-2 rounded-lg transition-colors">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9D4EDD] to-[#7209B7] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <div className="text-[14px] font-bold text-white">{title}</div>
                <div className="text-[12px] text-[#A0AEC0]">{sub}</div>
            </div>
            <div className="w-6 flex justify-center">
                {statusIcon}
            </div>
        </div>
    );
}
