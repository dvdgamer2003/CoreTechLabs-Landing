"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/animations";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const showNavbar = () => {
            const ctx = gsap.context(() => {
                gsap.to(navRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                });
            });
            return () => ctx.revert();
        };

        // Initial state
        gsap.set(navRef.current, { y: -100, opacity: 0 });

        // Listeners
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("hero-complete", showNavbar);

        // Fallback
        const fallback = setTimeout(showNavbar, 5000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("hero-complete", showNavbar);
            clearTimeout(fallback);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-[5000] h-20 flex items-center transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent border-transparent"
                }`}
        >
            <div className="container-width flex items-center justify-between text-white w-full px-6">
                <Link href="/" className="flex items-center gap-2 text-[20px] font-bold uppercase tracking-wider group">
                    <div className="w-8 h-8 bg-[#9D4EDD] text-white flex items-center justify-center rounded-lg text-[14px] font-black group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_15px_rgba(157,78,221,0.5)]">C</div>
                    <span className="group-hover:text-white/90 transition-colors">CORETECH LABS</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {['Services', 'Process', 'Case Studies', 'Pricing'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="text-[15px] font-medium text-white/80 hover:text-white transition-colors relative group py-2"
                        >
                            {item}
                            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#9D4EDD] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#9D4EDD]" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden md:block px-6 py-2.5 text-sm font-bold bg-white text-black rounded-lg hover:bg-[#9D4EDD] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(157,78,221,0.6)]">
                        Book a call
                    </Link>
                    <button className="md:hidden text-white hover:text-[#9D4EDD] transition-colors">
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

