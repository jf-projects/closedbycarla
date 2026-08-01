import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-28" id="aboutsection">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Agent Image */}
                <div className="relative">

                    <div className="overflow-hidden rounded-4xl border border-[#C3DEDD] bg-white p-3 shadow-xl">
                        <Image
                            src="/images/CarlaFigueroa2.png"
                            alt="Real Estate Agent"
                            width={600}
                            height={700}
                            className="h-162.5 w-full rounded-3xl object-cover"
                        />



                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-8 -right-8 rounded-3xl border border-[#C3DEDD] bg-white/90 p-6 shadow-lg backdrop-blur-xl">

                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#82B2C0]">
                            Your Trusted Realtor
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-[#3F4A4A]">
                            Here to Guide You Home
                        </h3>

                    </div>

                </div>

                {/* Content */}
                <div>

                    <p className="mb-4 uppercase tracking-[0.3em] text-[#82B2C0]">
                        Meet Carla
                    </p>

                    <h2 className="mb-6 text-5xl font-bold leading-tight text-[#3F4A4A]">
                        Real Estate with a
                        <span className="text-[#82B2C0]"> Personal Touch</span>
                    </h2>

                    <p className="mb-6 text-lg leading-8 text-[#596566]">
                        Buying or selling a home is one of life&apos;s biggest decisions.
                        My goal is to make the process simple, transparent, and enjoyable
                        while helping you find the property that truly fits your needs.
                    </p>

                    <p className="mb-10 text-lg leading-8 text-[#596566]">
                        Whether you&apos;re purchasing your first home, investing in property,
                        or preparing to sell, I&apos;ll be by your side from our first meeting
                        until closing day.
                    </p>

                    {/* Features */}
                    <div className="grid gap-8 sm:grid-cols-2">

                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-[#3F4A4A]">
                                🌿 Personalized Service
                            </h4>

                            <p className="text-[#596566]">
                                Every client receives dedicated attention and honest guidance.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-[#3F4A4A]">
                                🏡 Local Market Expertise
                            </h4>

                            <p className="text-[#596566]">
                                Helping you make confident decisions based on current market trends.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-[#3F4A4A]">
                                💬 Clear Communication
                            </h4>

                            <p className="text-[#596566]">
                                You&apos;ll always know what&apos;s happening throughout the buying or selling process.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-[#3F4A4A]">
                                ❤️ Client-First Approach
                            </h4>

                            <p className="text-[#596566]">
                                Your goals come first—from our first conversation to closing day.
                            </p>
                        </div>

                    </div>

                    <Link
                        href="/#contactsection"
                        className="mt-12 inline-block rounded-full bg-[#82B2C0] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#6E9EAC]"
                    >
                        Let&apos;s Connect
                    </Link>

                </div>

            </div>
        </section>
    );
}