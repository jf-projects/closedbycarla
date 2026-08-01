"use client";

import type { Property } from "@/src/types/property";

type PropertyDescriptionProps = {
    property: Property;
};

export default function PropertyDescription({
    property,
}: PropertyDescriptionProps) {
    return (
        <section className="py-20 bg-transparent">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">

                    {/* Description */}

                    <div>

                        <p className="mb-3 uppercase tracking-[0.25em] text-[#82B2C0] font-semibold">
                            About This Property
                        </p>

                        <h2 className="text-4xl font-bold text-[#3F4A4A]">
                            A Home Designed For Comfortable Living
                        </h2>

                        <div className="mt-8 space-y-6 text-lg leading-8 text-[#596566]">

                            {property.description ? (
                                property.description
                                    .split("\n")
                                    .map((paragraph, index) => (
                                        <p key={index}>
                                            {paragraph}
                                        </p>
                                    ))
                            ) : (
                                <p>
                                    No description has been provided for
                                    this property.
                                </p>
                            )}

                        </div>

                    </div>

                    {/* Quick Facts */}

                    <aside className="rounded-3xl border border-[#E4ECEC] bg-[#F8FAFC] p-8">

                        <h3 className="mb-8 text-xl font-semibold text-[#3F4A4A]">
                            Property Highlights
                        </h3>

                        <div className="space-y-5">

                            <div className="flex justify-between border-b border-[#E4ECEC] pb-3">
                                <span className="text-[#596566]">
                                    Property Type
                                </span>

                                <span className="font-medium text-[#3F4A4A]">
                                    {property.property_type || "-"}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#E4ECEC] pb-3">
                                <span className="text-[#596566]">
                                    Offer Type
                                </span>

                                <span className="font-medium text-[#3F4A4A]">
                                    {property.offer_type || "-"}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#E4ECEC] pb-3">
                                <span className="text-[#596566]">
                                    Bedrooms
                                </span>

                                <span className="font-medium text-[#3F4A4A]">
                                    {property.bedrooms || "-"}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#E4ECEC] pb-3">
                                <span className="text-[#596566]">
                                    Bathrooms
                                </span>

                                <span className="font-medium text-[#3F4A4A]">
                                    {property.bathrooms || "-"}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#E4ECEC] pb-3">
                                <span className="text-[#596566]">
                                    Floor Area
                                </span>

                                <span className="font-medium text-[#3F4A4A]">
                                    {property.floor_area || "-"} sqm
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-[#596566]">
                                    Lot Area
                                </span>

                                <span className="font-medium text-[#3F4A4A]">
                                    {property.lot_area || "-"} sqm
                                </span>
                            </div>

                        </div>

                    </aside>

                </div>

            </div>
        </section>
    );
}