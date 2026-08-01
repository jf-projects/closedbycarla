"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Navbar from "@/src/components/layout/Navbar";

import PropertyHero from "@/src/components/property/PropertyHero";
import PropertyDescription from "@/src/components/property/PropertyDescription";
import PropertyGallery from "@/src/components/property/PropertyGallery";
import PropertyContact from "@/src/components/property/PropertyContact";

import type { Property } from "@/src/types/property";
import Footer from "@/src/components/hero/Footer";

export default function PropertyTitle() {
    const { title } = useParams();

    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/properties/${encodeURIComponent(
                    title as string
                )}`, {
                    cache: "no-store",
                });

                const data = await response.json();


                setProperty(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (title) {
            fetchProperty();
        }
    }, [title]);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
                    Loading property...
                </div>
            </>
        );
    }

    if (!property) {
        return (
            <>
                <Navbar />
                <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
                    Property not found.
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <main className="relative">
              
                <PropertyHero property={property} />

                <PropertyDescription property={property} />


                <PropertyGallery property={property} />

                <PropertyContact property={property} />

            </main>

            <Footer />
        </>
    );
}