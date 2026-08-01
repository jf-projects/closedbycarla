type PropertySearchProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function PropertySearch({
    value,
    onChange,
}: PropertySearchProps) {
    return (
        <section className="-mt-14 relative z-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="rounded-3xl bg-white p-6 shadow-xl">

                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Search by location, city, or property name..."
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-[#D9E6E6]
                            px-5
                            py-4
                            outline-none
                            focus:border-[#82B2C0]
                        "
                    />

                </div>

            </div>
        </section>
    );
}