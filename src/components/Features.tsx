import { Zap, Shield, Globe, Layers } from "lucide-react";

const FEATURES = [
    {
        icon: Zap,
        title: "High Performance",
        description: "Optimized for speed and efficiency. We build systems that handle high throughput with minimal latency.",
    },
    {
        icon: Shield,
        title: "Secure Architecture",
        description: "Security by design. Enterprise-grade protection integrated into every layer of the application stack.",
    },
    {
        icon: Layers,
        title: "Scalable Infrastructure",
        description: "Built to grow. Modular architecture that scales horizontally to meet increasing demands without compromise.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 md:py-32 border-t border-white/10">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="md:col-span-2 lg:col-span-3 mb-24">
                        <h2 className="text-5xl md:text-7xl font-black uppercase mb-10 tracking-tighter">Core Capabilities</h2>
                        <div className="h-0.5 w-full bg-white/20"></div>
                    </div>

                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="group p-10 border border-white/20 rounded-2xl bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-300">
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-300 border border-white/10">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-4 tracking-wider text-white">{feature.title}</h3>
                            <p className="text-white/70 leading-relaxed text-base font-medium">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
