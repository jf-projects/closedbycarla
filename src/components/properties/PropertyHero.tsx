import Image from "next/image";
import { parisienne } from "../lib/fonts";

export default function PropertyHero() {
    return (
        <section className="relative h-162.5 overflow-hidden mt-20">

            {/* Background Image */}

            <Image
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Home"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20" />

            {/* Content */}

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">

                <div className="max-w-3xl">

                    <p className={`mb-5 text-4xl text-[#C3DEDD] ${parisienne.className}`}>
                        Closed by Carla
                    </p>

                    <h1 className="text-6xl font-bold leading-tight text-white lg:text-7xl">
                        Discover Your
                        <br />
                        Dream Home
                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
                        Explore carefully selected homes across Pampanga.
                        Whether you&apos;re searching for your first home,
                        an investment property, or your forever home,
                        I&apos;m here to guide you every step of the way.
                    </p>

                </div>

            </div>
        </section>
    );
}