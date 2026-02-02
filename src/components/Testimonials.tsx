import { Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 border-t border-white/20">
            <div className="container-width px-0">
                <div className="px-6 md:px-12 mb-20">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Strategic Partners</h2>
                </div>

                {/* Scroll container */}
                <div className="flex overflow-x-auto pb-16 px-6 md:px-12 gap-10 snap-x hide-scrollbar mask-image-gradient">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="min-w-[350px] md:min-w-[500px] bg-white/[0.03] border border-white/20 p-12 rounded-3xl flex flex-col justify-between snap-center hover:bg-white/[0.06] transition-colors duration-500">
                            <div className="flex gap-2 mb-10 text-white">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-2xl leading-snug mb-12 text-white/90 font-medium tracking-tight">
                                &quot;Coretech Labs engineered a platform that handles millions of requests seamlessly. Their focus on clean architecture made scaling effortless.&quot;
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10" />
                                <div>
                                    <div className="font-bold uppercase text-sm tracking-widest mb-2">Sarah Chen</div>
                                    <div className="text-xs uppercase tracking-widest text-white/50 font-bold">VP of Engineering, NexusCorp</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
