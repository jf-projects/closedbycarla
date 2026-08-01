import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { parisienne } from "@/src/components/lib/fonts";

const links = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/#aboutsection" },
    { name: "Contact", href: "/#contactsection" },
];

export default function Footer() {
    return (
        <footer className="border-t border-[#C3DEDD] bg-[#F8F7F5]">
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h2
                            className={`text-4xl text-[#3F4A4A] ${parisienne.className}`}
                            
                        >
                            Closed By Carla
                        </h2>

                        <p className="mt-4 max-w-sm leading-7 text-[#596566]">
                            Helping buyers and sellers navigate the real estate market with
                            confidence, honesty, and personalized service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-[#3F4A4A]">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#596566] transition hover:text-[#82B2C0]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-[#3F4A4A]">
                            Contact
                        </h3>

                        <div className="space-y-3 text-[#596566]">
                            <p>📧 florescarla399@gmail.com</p>

                            <p>📞 +63 926 286 1397</p>

                            <p>📍 Angeles City, Pampanga</p>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-8 flex gap-4">

                            <a
                                href="https://www.facebook.com/crlgmzfls.15"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#82B2C0] text-white transition hover:bg-[#6E9EAC]"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#82B2C0] text-white transition hover:bg-[#6E9EAC]"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#82B2C0] text-white transition hover:bg-[#6E9EAC]"
                            >
                                <FaTiktok />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}

                <div className="mt-16 border-t border-[#C3DEDD] pt-6">

                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#596566] md:flex-row">

                        <p>
                            © {new Date().getFullYear()} Closed By Carla. All rights reserved.
                        </p>

                        <p>
                            Designed & Developed with ❤️
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
}