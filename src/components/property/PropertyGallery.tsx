"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Property } from "@/src/types/property";

type Props = {
    property: Property;
};

export default function PropertyGallery({
    property,
}: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    const [selectedIndex, setSelectedIndex] =
        useState(0);

    const scrollPrev = () => emblaApi?.scrollPrev();

    const scrollNext = () => emblaApi?.scrollNext();

    const scrollTo = (index: number) =>
        emblaApi?.scrollTo(index);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(
            emblaApi.selectedScrollSnap()
        );
    }, [emblaApi]);

    useEffect(() => {
        const loadData = async () => {
            onSelect();
        };

        if (!emblaApi) return;

        loadData();

        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    if (!property.images?.length) {
        return null;
    }

    return (
        <section className="bg-transparent py-20">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-10">

                    <p className="mb-2 uppercase tracking-[0.3em] text-[#82B2C0]">
                        PROPERTY GALLERY
                    </p>

                    <h2 className="text-4xl font-bold text-[#3F4A4A]">
                        Explore Every Corner
                    </h2>

                </div>

                <div className="relative">

                    {/* Previous */}

                    <button
                        onClick={scrollPrev}
                        className="
                            absolute
                            left-5
                            top-1/2
                            z-20
                            -translate-y-1/2
                            rounded-full
                            bg-white/90
                            p-3
                            shadow-lg
                        "
                    >
                        <ChevronLeft />
                    </button>

                    {/* Next */}

                    <button
                        onClick={scrollNext}
                        className="
                            absolute
                            right-5
                            top-1/2
                            z-20
                            -translate-y-1/2
                            rounded-full
                            bg-white/90
                            p-3
                            shadow-lg
                        "
                    >
                        <ChevronRight />
                    </button>

                    {/* Carousel */}

                    <div
                        ref={emblaRef}
                        className="overflow-hidden rounded-3xl"
                    >

                        <div className="flex">

                            {property.images.map(
                                (image, index) => (
                                    <div
                                        key={index}
                                        className="min-w-0 flex-[0_0_100%]"
                                    >

                                        <div className="relative aspect-video">

                                            <Image
                                                src={image}
                                                alt={`${property.title} ${index}`}
                                                fill
                                                priority={index === 0}
                                                sizes="100vw"
                                                className="object-cover"
                                            />

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </div>

                {/* Dots */}

                <div className="mt-3 flex justify-center gap-2">

                    {property.images.map((_, index) => (

                        <button
                            key={index}
                            onClick={() =>
                                scrollTo(index)
                            }
                            className={`h-3 w-3 rounded-full transition ${selectedIndex === index
                                ? "bg-[#82B2C0]"
                                : "bg-gray-300"
                                }`}
                        />

                    ))}

                </div>

                {/* Thumbnails */}

                <div className="mt-10 grid grid-cols-12 gap-3">

                    {property.images.map(
                        (image, index) => (

                            <button
                                key={index}
                                onClick={() =>
                                    scrollTo(index)
                                }
                                className={`relative aspect-square overflow-hidden rounded-xl border-4 transition ${selectedIndex === index
                                    ? "border-[#82B2C0]"
                                    : "border-transparent"
                                    }`}
                            >

                                <Image
                                    src={image}
                                    alt=""
                                    fill
                                    sizes="20vw"
                                    className="object-cover"
                                />

                            </button>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}