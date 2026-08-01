const steps = [
    {
        number: "01",
        title: "Let's Connect",
        description:
            "We'll start with a conversation about your goals, timeline, and what you're looking for in your next home.",
    },
    {
        number: "02",
        title: "Find the Right Property",
        description:
            "I'll help you explore homes that match your lifestyle, budget, and preferences while providing local market insights.",
    },
    {
        number: "03",
        title: "Offer & Negotiation",
        description:
            "Once you've found the perfect home, I'll prepare your offer and negotiate to help you secure the best possible terms.",
    },
    {
        number: "04",
        title: "Closing & Beyond",
        description:
            "From inspections to paperwork and closing day, I'll be with you every step of the way—even after you've received the keys.",
    },
];



export default function Process() {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-4 uppercase tracking-[0.35em] text-[#82B2C0]">
                        HOW IT WORKS
                    </p>

                    <h2 className="text-5xl font-bold text-[#3F4A4A]">
                        Buying a Home Should Feel Simple
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-[#596566]">
                        Whether you&apos;re buying your first home or your forever home, I guide
                        you through a clear and stress-free process from start to finish.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Number */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C3DEDD] text-2xl font-bold text-[#3F4A4A] transition-transform duration-300 group-hover:scale-110">
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="mb-4 text-2xl font-semibold text-[#3F4A4A]">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="leading-7 text-[#596566]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}