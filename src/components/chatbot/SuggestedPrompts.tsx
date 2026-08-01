const prompts = [
    "🏡 Find homes under your budget",
    "💰 Mortgage calculator",
    "📍 Recommend neighborhoods",
    "📄 Explain buying process",
    "📅 Schedule consultation",
];

export default function SuggestedPrompts() {
    return (
        <div className="mt-5 flex flex-col gap-3">

            {prompts.map((prompt) => (

                <button
                    key={prompt}
                    className="
                        rounded-full
                        border
                        border-[#C3DEDD]
                        px-4
                        py-3
                        text-left
                        text-sm
                        text-[#596566]
                        transition
                        hover:bg-[#82B2C0]
                        hover:text-white
                    "
                >
                    {prompt}
                </button>

            ))}

        </div>
    );
}