"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Footer() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-content", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 95%"
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <footer className="bg-black text-white border-t border-white/5 pt-16 pb-8">
            <div className="footer-content container-width max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-wider mb-4">
                            <div className="w-6 h-6 bg-purple-600 text-white flex items-center justify-center rounded-md text-[12px] font-black">C</div>
                            CORETECH
                        </div>
                        <p className="text-gray-500 text-sm mb-6">
                            Engineering scalable digital future for modern enterprises.
                        </p>
                        <div className="flex gap-4">
                            <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                            <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                            <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Custom Development</Link></li>
                            <li><Link href="#" className="hover:text-white">Workflow Automation</Link></li>
                            <li><Link href="#" className="hover:text-white">Cloud Architecture</Link></li>
                            <li><Link href="#" className="hover:text-white">Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <p className="text-xs text-gray-500 mb-4">Subscribe to our engineering digest.</p>
                        <div className="flex">
                            <input type="email" placeholder="Enter email" className="bg-white/5 border border-white/10 rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:border-[#9D4EDD]" />
                            <button className="bg-[#9D4EDD] text-white px-4 py-2 rounded-r-md text-sm font-bold">Join</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <div>&copy; 2026 Coretech Labs. All rights reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
