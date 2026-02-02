import { PRICING_PLANS } from "@/lib/constants";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 border-t border-white/20">
            <div className="container-width">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-10 tracking-tighter">Engagement Models</h2>
                    <p className="text-white/60 max-w-2xl mx-auto font-medium text-xl leading-relaxed">Flexible engagement options tailored to your project&apos;s scale and complexity.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    {PRICING_PLANS.map((plan, idx) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "relative p-12 rounded-3xl border flex flex-col h-full transition-all duration-500",
                                plan.highlight
                                    ? "bg-white text-black border-white shadow-2xl scale-105 z-10"
                                    : "bg-white/[0.02] border-white/20 text-white hover:border-white/40 hover:bg-white/[0.05]"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-12">
                                <h3 className="text-sm font-bold uppercase tracking-[0.25em] opacity-60 mb-6">{plan.name}</h3>
                                <div className="text-7xl font-black tracking-tighter mb-4">{plan.price}</div>
                                <div className="text-sm opacity-60 uppercase tracking-widest font-semibold">/ per month</div>
                            </div>

                            <ul className="space-y-6 mb-16 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-4 text-base font-bold opacity-80">
                                        <Check className="w-6 h-6 opacity-100 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={cn(
                                "w-full py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-300",
                                plan.highlight
                                    ? "bg-black text-white hover:bg-neutral-800"
                                    : "bg-white/10 hover:bg-white hover:text-black"
                            )}>
                                Choose Plan
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
