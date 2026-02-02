import { SITE_NAME } from "@/lib/constants";
import { Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-24 px-6 border-t border-white/5 bg-black text-white">
            <div className="container-width flex flex-col md:flex-row justify-between items-end gap-12">
                <div>
                    <h2 className="text-[14vw] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-white/10 select-none pointer-events-none">
                        {SITE_NAME}
                    </h2>
                    <div className="mt-12 text-xs font-bold uppercase tracking-widest opacity-30">
                        &copy; {new Date().getFullYear()} Coretech Labs. All rights reserved.
                    </div>
                </div>

                <div className="flex gap-6 mb-4">
                    <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group">
                        <Twitter className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                    </a>
                    <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group">
                        <Instagram className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                    </a>
                    <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group">
                        <Mail className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
