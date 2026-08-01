"use client";

import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
// import { properties } from "./propertyData";
import type { Property } from "@/src/types/property";

export default function FeaturedProperties() {

    const [selectedFilter] = useState("All");
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/properties`);
                if (!response.ok) {
                    throw new Error("Failed to fetch properties.");
                }

                const data = await response.json();

                setProperties(data.slice(0, 6));

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const filteredProperties =
        selectedFilter === "All"
            ? properties
            : properties.filter(
                (property) => property.offer_type === selectedFilter
            );

    return (
        <section className="py-28">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-12 text-center">

                    <p className="mb-4 uppercase tracking-[0.3em] text-[#82B2C0]">
                        FEATURED PROPERTIES
                    </p>

                    <h2 className="text-5xl font-bold text-[#3F4A4A]">
                        Find Your Perfect Home
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-[#596566]">
                        Browse a selection of homes carefully chosen to match a variety of
                        lifestyles and budgets.
                    </p>

                </div>

                {/* Property Grid */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {loading && (
                        <p>Loading properties...</p>
                    )}

                    {!loading &&
                        filteredProperties.map((property) => (
                            <PropertyCard
                                key={property.title}
                                property={property}
                            />
                        ))}

                </div>

                {/* CTA */}

                <div className="mt-16 text-center">

                    <a className="rounded-full bg-[#82B2C0] px-10 py-4 font-semibold text-white transition hover:bg-[#6E9EAC]"
                        href="/properties">
                        View All Properties
                    </a>

                </div>

            </div>

        </section>
    );
}