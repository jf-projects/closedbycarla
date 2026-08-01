"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Phone,
    Mail,
    MessageCircle,
} from "lucide-react";

import type { Property } from "@/src/types/property";
import InquirySuccess from "./InquirySuccess";

type Props = {
    property: Property;
};

export default function PropertyContact({
    property,
}: Props) {

    const initialForm = {
        name: "",
        email: "",
        phone: "",
        message: `Hi Carla,

I'm interested in "${property.title}".

I'd like to know if this property is still available.

Thank you!`,
    };

    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    subject: `Inquiry about ${property.title}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to send inquiry."
                );
            }

            setSuccess(true);
            setForm(initialForm);

        } catch (err) {

            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong."
            );

        } finally {

            setLoading(false);

        }
    };

    if (success) {
        return (
            <section className="bg-transparent py-24">
                <div className="mx-auto max-w-7xl px-6">

                    <InquirySuccess
                        propertyTitle={property.title}
                        onReset={() => {
                            setSuccess(false);
                            setError("");
                            setForm(initialForm);
                        }}
                    />

                </div>
            </section>
        );
    }

    return (
        <section className="bg-transparent py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="overflow-hidden rounded-4xl bg-white shadow-xl">

                    <div className="grid lg:grid-cols-[350px_1fr]">

                        {/* Left Side */}

                        <div className="bg-[#82B2C0] p-10 text-white">

                            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white">

                                <Image
                                    src="/images/CarlaFigueroa2.png"
                                    alt="Carla Figueroa"
                                    fill
                                    sizes="160px"
                                    className="object-cover"
                                />

                            </div>

                            <h3 className="mt-6 text-center text-3xl font-bold">
                                Carla Figueroa
                            </h3>

                            <p className="mt-2 text-center text-white/90">
                                Real Estate Professional
                            </p>

                            <div className="mt-10 space-y-5">

                                <div className="flex items-center gap-4">
                                    <Phone size={20} />
                                    <span>+63 926 286 1397</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail size={20} />
                                    <span>
                                        florescarla399@gmail.com
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <MessageCircle size={20} />
                                    <span>
                                        Messenger / WhatsApp
                                    </span>
                                </div>

                            </div>

                        </div>

                        {/* Right Side */}

                        <form
                            onSubmit={handleSubmit}
                            className="p-10"
                        >

                            <p className="uppercase tracking-[0.3em] text-[#82B2C0]">
                                Interested?
                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-[#3F4A4A]">
                                Schedule a Private Viewing
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-[#596566]">
                                Interested in{" "}
                                <strong>
                                    {property.title}
                                </strong>
                                ? I&apos;d be happy to answer your
                                questions, schedule a private
                                tour, or help you explore
                                financing options.
                            </p>

                            <div className="mt-10 grid gap-5 md:grid-cols-2">

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="rounded-xl border border-[#DDE8E8] px-5 py-4 outline-none focus:border-[#82B2C0]"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="rounded-xl border border-[#DDE8E8] px-5 py-4 outline-none focus:border-[#82B2C0]"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="rounded-xl border border-[#DDE8E8] px-5 py-4 outline-none focus:border-[#82B2C0] md:col-span-2"
                                />

                                <textarea
                                    rows={5}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="rounded-xl border border-[#DDE8E8] px-5 py-4 outline-none focus:border-[#82B2C0] md:col-span-2"
                                />

                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-8 rounded-full bg-[#82B2C0] px-10 py-4 font-semibold text-white transition hover:bg-[#6E9EAC] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading
                                    ? "Sending..."
                                    : "Send Inquiry"}
                            </button>

                            {error && (
                                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
                                    {error}
                                </div>
                            )}

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}