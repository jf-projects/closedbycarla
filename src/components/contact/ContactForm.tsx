"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  ArrowLeft,
  Mail,
} from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>();

  const onSubmit = async (
    data: ContactFormData
  ) => {

    setError("");

    try {

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to send your message."
        );
      }

      setSuccess(true);
      reset();

    } catch {

      setError(
        "Something went wrong. Please try again."
      );

    }
  };

  if (success) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#82B2C0]/10">

          <CheckCircle2
            size={42}
            className="text-[#82B2C0]"
          />

        </div>

        <p className="mt-8 uppercase tracking-[0.3em] text-[#82B2C0]">
          Message Sent
        </p>

        <h3 className="mt-3 text-4xl font-bold text-[#3F4A4A]">
          Thank You!
        </h3>

        <p className="mt-6 text-lg leading-8 text-[#596566]">
          Your message has been sent successfully.
          Carla will personally review your inquiry
          and get back to you shortly.
        </p>

        <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-6">

          <Mail
            className="mx-auto text-[#82B2C0]"
            size={28}
          />

          <p className="mt-4 text-[#596566]">
            Expected response time:
          </p>

          <p className="mt-1 font-semibold text-[#3F4A4A]">
            Within 24 hours
          </p>

        </div>

        <button
          onClick={() => {
            setSuccess(false);
            setError("");
          }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#82B2C0] px-7 py-3 font-medium text-[#82B2C0] transition hover:bg-[#82B2C0] hover:text-white"
        >
          <ArrowLeft size={18} />
          Send Another Message
        </button>

      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >

      <div>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="Full Name"
          className="w-full rounded-2xl border border-[#C3DEDD] bg-white px-5 py-4 outline-none transition focus:border-[#82B2C0]"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}

      </div>

      <div>

        <input
          {...register("email", {
            required:
              "Email is required",
          })}
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-[#C3DEDD] bg-white px-5 py-4 outline-none transition focus:border-[#82B2C0]"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

      </div>

      <input
        {...register("phone")}
        placeholder="Phone Number"
        className="w-full rounded-2xl border border-[#C3DEDD] bg-white px-5 py-4 outline-none transition focus:border-[#82B2C0]"
      />

      <select
        {...register("subject")}
        className="w-full rounded-2xl border border-[#C3DEDD] bg-white px-5 py-4 outline-none transition focus:border-[#82B2C0]"
      >
        <option value="">
          Select a Subject
        </option>

        <option>
          Buying a Property
        </option>

        <option>
          Selling a Property
        </option>

        <option>
          Property Viewing
        </option>

        <option>
          Investment Inquiry
        </option>

        <option>
          General Inquiry
        </option>

      </select>

      <div>

        <textarea
          {...register("message", {
            required:
              "Message is required",
          })}
          rows={6}
          placeholder="Tell me how I can help..."
          className="w-full rounded-2xl border border-[#C3DEDD] bg-white px-5 py-4 outline-none transition focus:border-[#82B2C0]"
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}

      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
          {error}
        </div>
      )}

      <button
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#82B2C0] py-4 font-semibold text-white transition hover:bg-[#6E9EAC] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? "Sending..."
          : "Send Message"}
      </button>

    </form>
  );
}