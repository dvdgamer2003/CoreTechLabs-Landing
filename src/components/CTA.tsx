import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-40 flex flex-col items-center justify-center text-center border-t border-white/20 mt-0 bg-white text-black">
            <div className="container-width">
                <h2 className="text-[14vw] md:text-[11vw] leading-[0.8] font-black uppercase tracking-tighter mb-16 select-none">
                    Start Engineering
                </h2>
                <div className="flex flex-col items-center gap-12">
                    <p className="max-w-3xl text-2xl md:text-3xl opacity-60 font-medium leading-relaxed tracking-tight">
                        Ready to build scalable digital products? Partner with Coretech Labs for precision engineering.
                    </p>
                    <button className="flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-2xl">
                        Initialize Project
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
