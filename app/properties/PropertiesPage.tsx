"use client";

import { useEffect, useState } from "react";
import {
    useRouter,
    useSearchParams,
} from "next/navigation";

import Navbar from "@/src/components/layout/Navbar";

import PropertyHero from "@/src/components/properties/PropertyHero";
import PropertySearch from "@/src/components/properties/PropertySearch";
import PropertyFilters from "@/src/components/properties/PropertyFilters";
import PropertyGrid from "@/src/components/properties/PropertyGrid";
import PropertyPagination from "@/src/components/properties/PropertyPagination";

import type { Property } from "@/src/types/property";

export default function PropertiesPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters now come from the URL
    const filters = {
        search: searchParams.get("search") || "",
        status: searchParams.get("status") || "",
        type: searchParams.get("type") || "",
        bedrooms: searchParams.get("bedrooms") || "",
        location: searchParams.get("location") || "",
    };

    const ITEMS_PER_PAGE = 9;

    const currentPage =
        Number(searchParams.get("page")) || 1;

    const fetchProperties = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/properties`
            );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch properties."
                );
            }

            const data = await response.json();

            setProperties(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            await fetchProperties();
        };
        loadData();
    }, []);

    const handleFilterChange = (
        name: string,
        value: string
    ) => {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (value) {
            params.set(name, value);
        } else {
            params.delete(name);
        }

        // Whenever filters change,
        // always return to page 1.
        params.set("page", "1");

        router.push(
            `/properties?${params.toString()}`,
            {
                scroll: false,
            }
        );
    };

    const handlePageChange = (
        page: number
    ) => {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.set("page", page.toString());

        router.push(
            `/properties?${params.toString()}`,
            {
                scroll: false,
            }
        );
    };

    const filteredProperties = properties.filter(
        (property) => {
            // Search
            if (filters.search) {
                const search =
                    filters.search.toLowerCase();

                const text = `
                    ${property.title}
                    ${property.location}
                    ${property.city_town}
                    ${property.province}
                `.toLowerCase();

                if (!text.includes(search)) {
                    return false;
                }
            }

            // Status
            if (
                filters.status &&
                property.offer_type !==
                filters.status
            ) {
                return false;
            }

            // Property Type
            if (
                filters.type &&
                property.property_type !==
                filters.type
            ) {
                return false;
            }

            // Bedrooms
            if (
                filters.bedrooms &&
                Number(property.bedrooms) !==
                Number(filters.bedrooms)
            ) {
                return false;
            }

            // Location
            if (filters.location) {
                const location =
                    filters.location.toLowerCase();

                const text = `
                    ${property.city_town}
                    ${property.province}
                    ${property.location}
                `.toLowerCase();

                if (
                    !text.includes(location)
                ) {
                    return false;
                }
            }

            return true;
        }
    );

    const totalPages = Math.ceil(
        filteredProperties.length /
        ITEMS_PER_PAGE
    );

    const paginatedProperties =
        filteredProperties.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,
            currentPage *
            ITEMS_PER_PAGE
        );

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
        <>
            <main>
                <Navbar />

                <PropertyHero />

                <PropertySearch
                    value={filters.search}
                    onChange={(value) =>
                        handleFilterChange(
                            "search",
                            value
                        )
                    }
                />

                <PropertyFilters
                    filters={filters}
                    onChange={
                        handleFilterChange
                    }
                />

                <PropertyGrid
                    properties={
                        paginatedProperties
                    }
                    loading={loading}
                />

                <PropertyPagination
                    currentPage={
                        currentPage
                    }
                    totalPages={
                        totalPages
                    }
                    onPageChange={
                        handlePageChange
                    }
                />
            </main>
        </>
    );
}