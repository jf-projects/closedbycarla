import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section className="py-20" id="contactsection">
            <div className="mx-auto max-w-7xl px-3">
                <div className="overflow-hidden rounded-[40px] bg-[#F2EAE0] shadow-xl">

                    <div className="grid items-center lg:grid-cols-2">

                        {/* Left Side */}
                        <div className="p-8 md:p-10">

                            <p className="mb-4 uppercase tracking-[0.35em] text-[#82B2C0]">
                                LET&apos;S CONNECT
                            </p>

                            <h2 className="mb-6 text-5xl font-bold leading-tight text-[#3F4A4A]">
                                Let&apos;s Find Your
                                <br />
                                Dream Home
                            </h2>

                            <p className="mb-6 text-lg leading-8 text-[#596566]">
                                Have a question about buying, selling, or investing?
                                Fill out the form below and I&apos;ll get back to you as soon as possible.
                            </p>

                            <ContactForm />

                        </div>

                        {/* Right Side */}
                        <div className="relative h-175">

                            <Image
                                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Real Estate Agent"
                                fill
                                className="object-cover"
                            />

                            {/* Floating Card */}

                            <div className="absolute bottom-8 left-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur">

                                <p className="text-sm uppercase tracking-widest text-[#82B2C0]">
                                    Available
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-[#3F4A4A]">
                                    Let&apos;s Talk!
                                </h3>

                                <p className="mt-2 text-[#596566]">
                                    I&apos;d love to help you find the perfect place to call home.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}