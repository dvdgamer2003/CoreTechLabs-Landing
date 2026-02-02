"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function LogoCloud() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate entire section on scroll
            gsap.from(".trust-content", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // Start earlier
                    toggleActions: "play none none reverse"
                }
            });

            // Stagger logos
            gsap.from(".logo-track", {
                opacity: 0,
                y: 30,
                duration: 1.5,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%"
                }
            });

            // Headline Reveal
            gsap.from(".service-headline", {
                y: 40,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".service-headline",
                    start: "top 85%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 bg-black text-center border-b border-white/5 overflow-hidden">
            <p className="trust-text text-white/40 text-sm font-medium mb-12 uppercase tracking-widest">Over 50+ business trust us</p>

            <div className="logo-track relative w-full overflow-hidden">
                <div className="flex gap-16 items-center justify-center whitespace-nowrap animate-marquee w-max">
                    {[
                        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-8" },
                        { name: "Stanford", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo_2002.svg", h: "h-8" },
                        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", h: "h-8" },
                        { name: "MIT", url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg", h: "h-8" },
                        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-8" },
                        { name: "Harvard", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg", h: "h-8" },
                        { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", h: "h-8" },
                        { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", h: "h-8" },
                    ].map((logo, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <img src={logo.url} alt={logo.name} className={`${logo.h} w-auto object-contain brightness-0 invert`} />
                        </div>
                    ))}
                    {/* Duplicate */}
                    {[
                        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-8" },
                        { name: "Stanford", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo_2002.svg", h: "h-8" },
                        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", h: "h-8" },
                        { name: "MIT", url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg", h: "h-8" },
                        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-8" },
                        { name: "Harvard", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg", h: "h-8" },
                        { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", h: "h-8" },
                        { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", h: "h-8" },
                    ].map((logo, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <img src={logo.url} alt={logo.name} className={`${logo.h} w-auto object-contain brightness-0 invert`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="trust-content mt-32 container-width max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70">
                    Our Services
                </div>
                <h2 className="service-headline text-4xl md:text-6xl font-bold tracking-tight">
                    AI Solutions That Take Your <br />
                    <span className="text-white">Business to the Next Level</span>
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    We design, develop, and implement automation tools that help you work smarter, not harder.
                </p>
            </div>
        </section>
    );
}
