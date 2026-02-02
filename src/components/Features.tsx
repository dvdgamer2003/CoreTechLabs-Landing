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
                {/* Header */}
                <div className="mb-20 space-y-4 text-center md:text-left">
                    <span className="inline-block px-4 py-1.5 rounded-md bg-[#1F1F3F] text-white text-[14px] font-semibold mb-6">Our Services</span>
                    <h3 className="text-4xl md:text-[56px] font-bold leading-[1.1] mb-4">AI Solutions That Take Your <br /> Business to the Next Level</h3>
                    <p className="text-[#D1D5DB] text-[16px] max-w-2xl">We design, develop, and implement automation tools that help you work smarter, not harder.</p>
                </div>

                {/* Section 1: Workflow & AI Assistant */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Card 1: Workflow Automation (Already Updated) */}
                    <div className="service-card bg-[#1A1A2E] p-7 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] hover:shadow-[0_20px_40px_rgba(157,78,221,0.15)] hover:-translate-y-1 transition-all duration-300 min-h-[400px]">
                        <div className="flex items-center gap-2 mb-6 pb-5 border-b border-[#2D3748]">
                            <div className="px-3 py-1.5 rounded-md bg-white/5 text-white text-[12px] font-medium border border-[#2D3748]">All Tasks</div>
                            <div className="px-3 py-1.5 rounded-md text-[#A0AEC0] text-[12px] font-medium hover:text-white transition-colors cursor-pointer">Waiting for approval</div>
                        </div>
                        <div className="space-y-4">
                            <TaskItem icon={Layers} title="Payroll management" sub="Due on 2nd july" status="completed" />
                            <TaskItem icon={Shield} title="Employee Tracking" sub="2 days ago" status="progress" />
                            <TaskItem icon={MessageSquare} title="Social media post" sub="Cancelled by user" status="cancelled" />
                            <TaskItem icon={Zap} title="Lead list" sub="70% prepared" status="pending" />
                            <TaskItem icon={BarChart} title="Payment reminder" sub="sent to selected clients" status="progress" />
                        </div>
                        <div className="mt-8">
                            <div className="text-[12px] uppercase text-[#9D4EDD] tracking-widest mb-3 font-bold border border-[#2D3748] inline-block px-3 py-1 rounded-md">Workflow Automation</div>
                            <h4 className="text-[32px] font-bold mb-4 text-white leading-tight">Automate repetitive workflows</h4>
                            <p className="text-[#A0AEC0] text-[15px] leading-[1.6]">We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains.</p>
                        </div>
                    </div>

                    {/* Card 2: AI Assistant */}
                    <div className="service-card bg-[#0D0D15] p-8 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[400px] overflow-hidden relative">
                        {/* Interactive Chat UI */}
                        <div className="absolute top-8 right-8 left-8 bottom-40 bg-[#000000] border border-[#2D3748] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-2xl">
                            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-4 relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse" />
                                <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full animate-spin-slow" />
                            </div>
                            <h5 className="text-lg font-medium text-white mb-2">What can I help with?</h5>
                            <p className="text-xs text-gray-500 max-w-[200px] mb-6">Weather you want help in customer handling or make changes in your system just give me command</p>

                            <div className="w-full bg-[#1A1A2E] border border-white/5 rounded-lg p-3 flex items-center justify-between">
                                <div className="text-xs text-gray-500 flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full bg-white/10 text-[8px] flex items-center justify-center">Pr</span>
                                    + Add document
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-purple-500" />
                            </div>
                        </div>

                        <div className="mt-[320px] relative z-10">
                            <div className="text-[12px] uppercase text-[#9D4EDD] tracking-widest mb-3 font-bold border border-[#2D3748] inline-block px-3 py-1 rounded-md">AI Assistant</div>
                            <h4 className="text-[32px] font-bold mb-4 text-white leading-tight">Delegate Daily Tasks</h4>
                            <p className="text-[#A0AEC0] text-[15px] leading-[1.6] mb-6">From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock.</p>
                            <div className="flex flex-wrap gap-2">
                                {['Summaries', 'Scheduling', 'Many more'].map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#1A1A2E] border border-[#2D3748] text-xs text-gray-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Sales & Custom Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 3: Sales & Marketing */}
                    <div className="service-card bg-[#1A1A2E] p-8 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] hover:-translate-y-1 transition-all duration-300 min-h-[400px]">
                        {/* Email / Lead UI Mockup */}
                        <div className="bg-[#0D0D15] rounded-xl border border-[#2D3748] p-5 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">JD</div>
                                <div>
                                    <div className="text-sm font-bold text-white">Jack Daniel</div>
                                    <div className="text-[10px] text-gray-500">Founder</div>
                                </div>
                                <div className="ml-auto px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] rounded border border-green-500/20">Verified</div>
                            </div>
                            <div className="h-px bg-[#2D3748] w-full my-3" />
                            <div className="flex justify-between items-center text-[10px] text-gray-500">
                                <span>Draft</span>
                                <span className="text-[#9D4EDD]">Schedule</span>
                                <span>Sent</span>
                            </div>
                            <div className="relative w-full h-1 bg-[#2D3748] rounded-full mt-2">
                                <div className="absolute left-0 top-0 h-full w-1/2 bg-[#9D4EDD] rounded-full" />
                                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#9D4EDD] rounded-full shadow-[0_0_10px_#9D4EDD]" />
                            </div>
                        </div>

                        <div>
                            <div className="text-[12px] uppercase text-[#9D4EDD] tracking-widest mb-3 font-bold border border-[#2D3748] inline-block px-3 py-1 rounded-md">Sales & Marketing</div>
                            <h4 className="text-[32px] font-bold mb-4 text-white leading-tight">Accelerate Sales Growth</h4>
                            <p className="text-[#A0AEC0] text-[15px] leading-[1.6] mb-6">AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts.</p>
                            <div className="flex flex-wrap gap-2">
                                {['Leads', 'Content', 'Social post'].map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#0D0D15] border border-[#2D3748] text-xs text-gray-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Custom Projects */}
                    <div className="service-card bg-[#000000] p-8 rounded-xl border border-[#2D3748] hover:border-[#9D4EDD] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
                        {/* Abstract Background Visual */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full" />

                        <div className="relative z-20">
                            <div className="text-[12px] uppercase text-[#9D4EDD] tracking-widest mb-3 font-bold border border-[#2D3748] inline-block px-3 py-1 rounded-md bg-black">Custom Projects</div>
                            <h4 className="text-[32px] font-bold mb-4 text-white leading-tight">Build Smarter Systems</h4>
                            <p className="text-[#A0AEC0] text-[15px] leading-[1.6]">Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects.</p>
                        </div>
                    </div>
                </div>

                {/* Section 4: AI Assistant, Founders, Sales */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Card 1: AI Assistant */}
                    {/* This card was replaced by the new structure above */}

                    {/* Card 2: Founders / Leadership */}
                    <FoundersCard />

                    {/* Card 3: Sales & Marketing */}
                    {/* This card was replaced by the new structure above */}
                </div>

                {/* Section 5: Custom Projects */}
                {/* This card was replaced by the new structure above */}

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
