"use client";

type PropertyFiltersProps = {
    filters: {
        status: string;
        type: string;
        bedrooms: string;
        location: string;
    };
    onChange: (
        name: string,
        value: string
    ) => void;
};

export default function PropertyFilters({
    filters,
    onChange,
}: PropertyFiltersProps) {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {/* Status */}

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#3F4A4A]">
                            Status
                        </label>

                        <select
                            value={filters.status}
                            onChange={(e) =>
                                onChange("status", e.target.value)
                            }
                            className="
                        w-full
                        rounded-xl
                        border
                        border-[#D9E6E6]
                        bg-white
                        p-4
                        outline-none
                        focus:border-[#82B2C0]
                    "
                        >
                            <option value="">All Status</option>
                            <option value="For Sale">For Sale</option>
                            <option value="For Rent">For Rent</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </div>

                    {/* Property Type */}

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#3F4A4A]">
                            Property Type
                        </label>

                        <select
                            value={filters.type}
                            onChange={(e) =>
                                onChange("type", e.target.value)
                            }
                            className="
                        w-full
                        rounded-xl
                        border
                        border-[#D9E6E6]
                        bg-white
                        p-4
                        outline-none
                        focus:border-[#82B2C0]
                    "
                        >
                            <option value="">All Types</option>
                            <option value="House and Lot">House and Lot</option>
                            <option value="Condominium">Condominium</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Lot">Lot</option>
                        </select>
                    </div>

                    {/* Bedrooms */}

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#3F4A4A]">
                            Bedrooms
                        </label>

                        <select
                            value={filters.bedrooms}
                            onChange={(e) =>
                                onChange("bedrooms", e.target.value)
                            }
                            className="
                        w-full
                        rounded-xl
                        border
                        border-[#D9E6E6]
                        bg-white
                        p-4
                        outline-none
                        focus:border-[#82B2C0]
                    "
                        >
                            <option value="">Any</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                            <option value="5">5+</option>
                        </select>
                    </div>

                    {/* Location */}

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#3F4A4A]">
                            Location
                        </label>

                        <input
                            value={filters.location}
                            onChange={(e) =>
                                onChange("location", e.target.value)
                            }
                            placeholder="City or Province"
                            className="
                        w-full
                        rounded-xl
                        border
                        border-[#D9E6E6]
                        p-4
                        outline-none
                        focus:border-[#82B2C0]
                    "
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}