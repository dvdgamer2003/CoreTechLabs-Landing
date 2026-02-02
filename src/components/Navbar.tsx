import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white/90">
            <div className="container-width flex items-center justify-between h-24">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold uppercase tracking-widest hover:text-white transition-colors">
                    {SITE_NAME}
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                    >
                        Get Started
                    </Link>
                    <button className="md:hidden p-2">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
