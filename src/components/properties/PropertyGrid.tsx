"use client";

import PropertyCard from "./PropertyCard";

import type { Property } from "@/src/types/property";

type PropertyGridProps = {
    properties: Property[];
    loading: boolean;
};



export default function PropertyGrid({
    properties,
    loading,
}: PropertyGridProps) {

    if (loading) {
        return (
            <section className="pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-center">
                        Loading properties...
                    </p>
                </div>
            </section>
        );
    }

    if (!properties.length) {
        return (
            <section className="pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-center">
                        No properties found.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="pb-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {properties.map((property) => (
                        <PropertyCard
                            key={`${property.title}-${property.price}`}
                            property={property}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}