"use client";

import Image from "next/image";
import {
    BedDouble,
    Bath,
    Ruler,
    MapPin,
} from "lucide-react";

import type { Property } from "@/src/types/property";

type PropertyHeroProps = {
    property: Property;
};

export default function PropertyHero({
    property,
}: PropertyHeroProps) {
    const heroImage =
        property.images?.length > 0
            ? property.images[0]
            : "/images/property-placeholder.jpg";

    return (
        <section className="bg-transparent pt-30 pb-16">
            <div className="mx-auto max-w-7xl px-6">

                {/* Image */}

                <div className="relative aspect-video overflow-hidden rounded-4xl shadow-xl">

                    <Image
                        src={heroImage}
                        alt={property.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    {/* Status */}

                    <div className="absolute left-6 top-6">

                        <span className="rounded-full bg-[#82B2C0] px-5 py-2 text-sm font-semibold text-white">

                            {property.offer_type}

                        </span>

                    </div>

                </div>

                {/* Content */}

                <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto]">

                    <div>

                        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#82B2C0]">

                            {property.property_type}

                        </p>

                        <h1 className="text-4xl font-bold text-[#3F4A4A] lg:text-5xl">

                            {property.title}

                        </h1>

                        <div className="mt-4 flex items-center gap-2 text-[#596566]">

                            <MapPin
                                size={18}
                                className="text-[#82B2C0]"
                            />

                            <span>
                                {property.location},
                                {" "}
                                {property.city_town},
                                {" "}
                                {property.province}
                            </span>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-8">

                            <div className="flex items-center gap-2">

                                <BedDouble
                                    size={20}
                                    className="text-[#82B2C0]"
                                />

                                <span>
                                    {property.bedrooms} Bedrooms
                                </span>

                            </div>

                            <div className="flex items-center gap-2">

                                <Bath
                                    size={20}
                                    className="text-[#82B2C0]"
                                />

                                <span>
                                    {property.bathrooms} Bathrooms
                                </span>

                            </div>

                            <div className="flex items-center gap-2">

                                <Ruler
                                    size={20}
                                    className="text-[#82B2C0]"
                                />

                                <span>
                                    {property.lot_area} sqm
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Price */}

                    <div className="flex items-start lg:justify-end">

                        <div className="rounded-3xl border border-[#E4ECEC] bg-white px-8 py-6 shadow-lg">

                            <p className="text-sm uppercase tracking-widest text-[#82B2C0]">

                                Price

                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-[#3F4A4A]">
                                {
                                    property.price
                                }

                            </h2>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}