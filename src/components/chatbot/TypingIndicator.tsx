export default function TypingIndicator() {
    return (
        <div className="mb-5 flex justify-start">

            <div className="max-w-[80%]">

                <p className="mb-1 text-xs text-[#596566]">
                    Carla AI
                </p>

                <div className="rounded-3xl rounded-bl-md border border-[#E6DFD6] bg-[#F7F4EF] px-5 py-4 shadow-sm">

                    <div className="flex items-center gap-2">

                        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#82B2C0]" />

                        <span
                            className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#82B2C0]"
                            style={{ animationDelay: "0.15s" }}
                        />

                        <span
                            className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#82B2C0]"
                            style={{ animationDelay: "0.3s" }}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}