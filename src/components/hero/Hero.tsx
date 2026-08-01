/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">

            {/* Soft Background Glow */}
            <div className="absolute inset-0">

                <div className="absolute -top-24 right-0 h-125 w-125 rounded-full bg-[#82B2C0]/20 blur-[140px]" />

                <div className="absolute -bottom-32 left-0 h-112.5 w-112.5 rounded-full bg-[#F6C7B3]/20 blur-[140px]" />

                <div className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[120px]" />

            </div>

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row">

                {/* Left Side */}
                <div className="flex-1">

                    <p className="mb-4 uppercase tracking-[0.35em] text-[#82B2C0]">
                        FIND YOUR DREAM HOME
                    </p>

                    <h1 className="mb-6 text-5xl font-bold leading-tight text-[#3F4A4A] md:text-7xl">
                        Helping You Find
                        <br />
                        The Perfect
                        <span className="text-[#82B2C0]"> Home</span>
                    </h1>

                    <p className="max-w-xl text-lg leading-8 text-[#596566]">
                        Whether you&apos;re buying your first home, upgrading, or investing,
                        I&apos;m here to guide you through every step with personalized service
                        and local market expertise.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            href="/properties"
                            className="rounded-full bg-[#82B2C0] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#6E9EAC]"
                        >
                            Browse Properties
                        </Link>

                        {/* <Link
                            key="contactsection"
                            href="/#contactsection"
                            scroll={false}
                            className="rounded-full border border-[#82B2C0] px-8 py-4 font-semibold text-[#3F4A4A] transition-all duration-300 hover:bg-[#82B2C0] hover:text-white"
                        >
                            Contact Me
                        </Link> */}

                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-3 gap-8">

                        <div>
                            <h2 className="text-3xl font-bold text-[#3F4A4A]">
                                100%
                            </h2>

                            <p className="mt-2 text-[#596566]">
                                Dedicated Service
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#3F4A4A]">
                                Local
                            </h2>

                            <p className="mt-2 text-[#596566]">
                                Market Knowledge
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#3F4A4A]">
                                24/7
                            </h2>

                            <p className="mt-2 text-[#596566]">
                                Personalized Support
                            </p>
                        </div>

                    </div>

                </div>

                {/* Right Side */}
                <div className="flex flex-1 justify-center">

                    <div className="relative overflow-hidden rounded-4xl border border-[#C3DEDD] bg-white p-3 shadow-xl">

                        <img
                            src="https://mapiles.ai/uploads/photos/main_6896adc346c27.jpg"
                            alt="Luxury Home"
                            className="h-162.5 w-125 rounded-3xl object-cover"
                        />

                        {/* Property Card */}
                        <div className="absolute bottom-8 left-8 rounded-2xl border border-[#C3DEDD] bg-white/90 p-5 backdrop-blur-xl shadow-lg">

                            <p className="text-sm text-[#596566]">
                                Featured Property
                            </p>

                            <h3 className="mt-1 text-xl font-semibold text-[#3F4A4A]">
                                Chelsea Park Place
                            </h3>

                            <p className="mt-2 font-semibold text-[#82B2C0]">
                                ₱24,432,000
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}