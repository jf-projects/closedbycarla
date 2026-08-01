"use client";

import { useState } from "react";
import {
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
} from "react-icons/hi2";

const tips = [
    {
        icon: "💰",
        title: "Know Your Budget",
        description:
            "Get pre-approved and understand your monthly budget before falling in love with a property.",
    },
    {
        icon: "📍",
        title: "Location Matters",
        description:
            "Consider schools, transportation, nearby establishments, and future developments.",
    },
    {
        icon: "🏡",
        title: "Never Skip Inspection",
        description:
            "A professional inspection can uncover costly issues before you commit.",
    },
    {
        icon: "📈",
        title: "Think Long-Term",
        description:
            "Buy a property that fits both your current lifestyle and your future plans.",
    },
];

export default function RealEstateTips() {

    const [current, setCurrent] = useState(0);

    const next = () =>
        setCurrent((current + 1) % tips.length);

    const prev = () =>
        setCurrent(
            (current - 1 + tips.length) %
            tips.length
        );

    const tip = tips[current];

    return (
        <section className="py-28">

            <div className="mx-auto max-w-5xl px-6">

                <p className="text-center uppercase tracking-[0.35em] text-[#82B2C0]">
                    REAL ESTATE TIPS
                </p>

                <h2 className="mt-4 text-center text-5xl font-bold text-[#3F4A4A]">
                    Tip of the Week
                </h2>

                <div className="mt-14 rounded-[40px] bg-white p-14 shadow-xl">

                    <div className="text-center text-7xl">
                        {tip.icon}
                    </div>

                    <h3 className="mt-8 text-center text-4xl font-bold text-[#3F4A4A]">
                        {tip.title}
                    </h3>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-[#596566]">
                        {tip.description}
                    </p>

                    <div className="mt-12 flex items-center justify-center gap-5">

                        <button
                            onClick={prev}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#82B2C0] text-[#82B2C0] hover:bg-[#82B2C0] hover:text-white"
                        >
                            <HiOutlineChevronLeft />
                        </button>

                        <div className="flex gap-2">

                            {tips.map((_, index) => (

                                <div
                                    key={index}
                                    className={`h-2.5 w-2.5 rounded-full ${current === index
                                            ? "bg-[#82B2C0]"
                                            : "bg-[#DDE8E8]"
                                        }`}
                                />

                            ))}

                        </div>

                        <button
                            onClick={next}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#82B2C0] text-[#82B2C0] hover:bg-[#82B2C0] hover:text-white"
                        >
                            <HiOutlineChevronRight />
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}