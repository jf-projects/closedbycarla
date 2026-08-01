import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

import type { Property } from "@/src/types/property";

type PropertyCardProps = {
    property: Property;
};

export default function PropertyCard({
    property,
}: PropertyCardProps) {
    return (
        <div className="group overflow-hidden rounded-[28px] bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">

                <Image
                    src={
                        property.images?.[0] ||
                        "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1974&auto=format&fit=crop"
                    }
                    alt={property.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#3F4A4A] shadow">
                    {property.offer_type}
                </span>

            </div>

            {/* Content */}
            <div className="flex h-96 flex-col p-6">

                {/* Title */}
                <h3 className="min-h-21 text-3xl font-bold text-[#82B2C0]">
                    {property.title}
                </h3>

                {/* Price */}
                <h4 className="mt-4 text-xl font-semibold text-[#3F4A4A]">
                    {property.price}
                </h4>

                {/* Address */}
                <p className="mt-4 min-h-14 text-[#596566]">
                    {property.location}
                </p>

                {/* Push everything below to the bottom */}
                <div className="mt-auto">

                    <div className="flex justify-between border-y border-[#C3DEDD] py-4 text-sm text-[#596566]">

                        <span>{property.bedrooms} Beds</span>

                        <span>{property.bathrooms} Baths</span>

                        <span>{property.lot_area} sqm</span>

                    </div>

                    <div className="mt-5 flex items-center justify-between">

                        <Link
                            href={`/properties/property-title/${encodeURIComponent(property.title)}`}
                            className="font-semibold text-[#82B2C0] transition hover:text-[#6E9EAC]"
                        >
                            View Details →
                        </Link>

                        <button
                            onClick={() =>
                                window.open(
                                    `${process.env.NEXT_PUBLIC_API_URL}/properties/${encodeURIComponent(property.title)}/flyer`,
                                    "_blank"
                                )
                            }
                            className="flex items-center  gap-2 rounded-lg border border-[#82B2C0] px-3 py-2 text-xs font-semibold text-[#82B2C0] transition hover:bg-[#82B2C0] hover:text-white"
                        >
                            <HiOutlineArrowDownTray className="h-4 w-4" />
                            Download Flyer
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}