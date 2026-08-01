"use client";

import { CheckCircle2, Mail, ArrowLeft } from "lucide-react";

type Props = {
    propertyTitle: string;
    onReset: () => void;
};

export default function InquirySuccess({
    propertyTitle,
    onReset,
}: Props) {
    return (
        <div className="flex h-full items-center justify-center p-10">

            <div className="w-full max-w-xl rounded-3xl border border-[#DDE8E8] bg-white p-10 text-center shadow-xl">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#82B2C0]/10">

                    <CheckCircle2
                        className="text-[#82B2C0]"
                        size={44}
                    />

                </div>

                <p className="mt-8 uppercase tracking-[0.35em] text-[#82B2C0]">
                    Inquiry Sent
                </p>

                <h2 className="mt-3 text-4xl font-bold text-[#3F4A4A]">
                    Thank You!
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#596566]">
                    Your inquiry regarding
                </p>

                <p className="mt-2 text-xl font-semibold text-[#3F4A4A]">
                    {propertyTitle}
                </p>

                <div className="mt-8 rounded-2xl bg-[#F7FBFB] p-6">

                    <Mail
                        className="mx-auto text-[#82B2C0]"
                        size={28}
                    />

                    <p className="mt-4 leading-7 text-[#596566]">
                        Carla has successfully received your
                        message and will get back to you as
                        soon as possible.
                    </p>

                    <p className="mt-3 font-medium text-[#3F4A4A]">
                        Expected response time:
                        <span className="text-[#82B2C0]">
                            {" "}
                            Within 24 hours
                        </span>
                    </p>

                </div>

                <button
                    onClick={onReset}
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#82B2C0] px-7 py-3 font-medium text-[#82B2C0] transition hover:bg-[#82B2C0] hover:text-white"
                >
                    <ArrowLeft size={18} />
                    Send Another Inquiry
                </button>

            </div>

        </div>
    );
}