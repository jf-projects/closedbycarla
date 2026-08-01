"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { parisienne } from "@/src/components/lib/fonts";

const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Properties", href: "/properties" },
    { name: "About", href: "/#aboutsection" },
    { name: "Contact", href: "/#contactsection" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-white/85 backdrop-blur-xl border-b border-[#C3DEDD] shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 transition-colors duration-300"
                >
                    <span
                        className={`${parisienne.className} text-4xl font-bold text-[#3F4A4A]`}
                    >
                        Closed by Carla
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors duration-300 ${isScrolled
                                ? "text-[#596566] hover:text-[#82B2C0]"
                                : "text-[#596566] hover:text-[#82B2C0]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <Link href="/properties" className="rounded-full bg-[#82B2C0] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#6E9EAC]">
                        View Properties
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="text-3xl text-[#3F4A4A] transition-colors duration-300 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-[#C3DEDD] bg-white/95 px-6 py-6 shadow-xl backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-[#596566] transition-colors duration-300 hover:text-[#82B2C0]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button className="rounded-full bg-[#82B2C0] py-3 font-medium text-white transition hover:bg-[#6E9EAC]">
                            Book Consultation
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}