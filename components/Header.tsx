"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-1 text-xs md:text-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        <span>📞 071 234 5678</span>
                        <span className="hidden md:inline">✉️ support@zibusisozande.co.za</span>
                    </div>
                    <div className="flex gap-2">
                        <a href="#" className="hover:text-secondary">Facebook</a>
                        <a href="#" className="hover:text-secondary">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Placeholder */}
                <Link href="/" className="text-2xl font-bold text-dark flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary">Z</div>
                    Zibusisozande
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 font-medium text-dark">
                    <Link href="/" className="hover:text-primary transition">Home</Link>
                    <Link href="/about" className="hover:text-primary transition">About Us</Link>
                    <Link href="/products" className="hover:text-primary transition">Products</Link>
                    <Link href="/services" className="hover:text-primary transition">Services</Link>
                    <Link href="/contact" className="hover:text-primary transition">Contact</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="/contact" className="bg-secondary text-dark font-semibold px-5 py-2 rounded hover:bg-yellow-400 transition">
                        Request Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-dark text-2xl" onClick={toggleMenu}>
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg">
                    <Link href="/" onClick={toggleMenu} className="block hover:text-primary">Home</Link>
                    <Link href="/about" onClick={toggleMenu} className="block hover:text-primary">About Us</Link>
                    <Link href="/products" onClick={toggleMenu} className="block hover:text-primary">Products</Link>
                    <Link href="/services" onClick={toggleMenu} className="block hover:text-primary">Services</Link>
                    <Link href="/contact" onClick={toggleMenu} className="block hover:text-primary">Contact</Link>
                    <Link href="/contact" onClick={toggleMenu} className="block bg-secondary text-dark text-center py-2 rounded font-semibold">
                        Request Quote
                    </Link>
                </div>
            )}
        </header>
    );
}
