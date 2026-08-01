import Image from "next/image";
import Link from "next/link";

export default function LifestyleBanner() {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="relative overflow-hidden rounded-[40px]">

                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                        alt="Luxury Home"
                        width={1800}
                        height={900}
                        className="h-130 w-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/35" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">

                        <div className="max-w-2xl px-14 text-white">

                            <p className="uppercase tracking-[0.35em] text-[#C3DEDD]">
                                FIND MORE THAN A HOUSE
                            </p>

                            <h2 className="mt-5 text-6xl font-bold leading-tight">
                                Find a Place You&apos;ll Love Coming Home To
                            </h2>

                            <p className="mt-6 text-xl leading-9 text-white/90">
                                Every home has a story. Whether you&apos;re searching
                                for your first property or your forever home,
                                let&apos;s find the one that feels just right.
                            </p>

                            <Link
                                href="/properties"
                                className="mt-10 inline-flex rounded-full bg-[#82B2C0] px-8 py-4 font-semibold text-white transition hover:bg-[#6E9EAC]"
                            >
                                Explore Properties
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}