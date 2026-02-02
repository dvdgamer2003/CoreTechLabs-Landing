export default function Process() {
    return (
        <section id="process" className="py-24 md:py-32 bg-black text-white border-t border-white/20">
            <div className="container-width">
                <h2 className="text-5xl md:text-7xl font-black uppercase mb-24 md:mb-32 tracking-tighter">Engineering Methodology</h2>

                <div className="flex flex-col gap-0">
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-white/20 py-20 transition-all hover:bg-white/[0.04] px-4 md:px-6 -mx-4 md:-mx-6 rounded-3xl">
                        <div className="md:col-span-2">
                            <span className="text-6xl md:text-7xl font-black text-white/20 group-hover:text-white transition-colors duration-500">01</span>
                        </div>
                        <div className="md:col-span-4 flex items-center">
                            <h3 className="text-3xl font-black uppercase tracking-wider">System Design</h3>
                        </div>
                        <div className="md:col-span-6 flex items-center">
                            <p className="opacity-70 leading-relaxed text-xl font-medium">
                                We begin with robust architectural planning. Defining data structures, API contracts, and scalability requirements before a single line of code is written.
                            </p>
                        </div>
                    </div>
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-white/20 py-20 transition-all hover:bg-white/[0.04] px-4 md:px-6 -mx-4 md:-mx-6 rounded-3xl">
                        <div className="md:col-span-2">
                            <span className="text-6xl md:text-7xl font-black text-white/20 group-hover:text-white transition-colors duration-500">02</span>
                        </div>
                        <div className="md:col-span-4 flex items-center">
                            <h3 className="text-3xl font-black uppercase tracking-wider">Agile Development</h3>
                        </div>
                        <div className="md:col-span-6 flex items-center">
                            <p className="opacity-70 leading-relaxed text-xl font-medium">
                                Iterative implementation using modern standards. Clean, type-safe code with comprehensive testing to ensure reliability and maintainability.
                            </p>
                        </div>
                    </div>
                    <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-white/20 border-b py-20 transition-all hover:bg-white/[0.04] px-4 md:px-6 -mx-4 md:-mx-6 rounded-3xl">
                        <div className="md:col-span-2">
                            <span className="text-6xl md:text-7xl font-black text-white/20 group-hover:text-white transition-colors duration-500">03</span>
                        </div>
                        <div className="md:col-span-4 flex items-center">
                            <h3 className="text-3xl font-black uppercase tracking-wider">Deployment & Scale</h3>
                        </div>
                        <div className="md:col-span-6 flex items-center">
                            <p className="opacity-70 leading-relaxed text-xl font-medium">
                                Automated CI/CD pipelines ensure smooth delivery. We monitor performance metrics and optimize for global availability and speed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
