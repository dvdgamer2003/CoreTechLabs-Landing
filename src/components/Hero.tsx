import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden">
            <div className="container-width flex flex-col items-center text-center z-10">
                <h1 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter mb-12 text-white select-none">
                    Core <br /> Technologies
                </h1>
                <p className="max-w-2xl text-xl md:text-2xl text-white/70 mb-16 leading-relaxed font-medium tracking-tight">
                    Engineered for precision. Scalable digital products built with modern architecture.
                </p>
                <button className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-all duration-300">
                    Our Architecture
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Abstract Background Elements (Placeholder for GSAP later) */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
        </section>
    );
}
