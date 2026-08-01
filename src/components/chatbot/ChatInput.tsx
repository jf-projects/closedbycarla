"use client";

import { useState } from "react";

type ChatInputProps = {
    onSend: (message: string) => void;
};

export default function ChatInput({
    onSend,
}: ChatInputProps) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim()) return;

        onSend(message);
        setMessage("");
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="border-t border-[#E5E5E5] p-5">
            <div className="flex gap-3">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask Carla's AI anything..."
                    className="
                        flex-1
                        rounded-full
                        border
                        border-[#C3DEDD]
                        px-5
                        py-3
                        outline-none
                        focus:border-[#82B2C0]
                    "
                />

                <button
                    onClick={handleSend}
                    className="
                        rounded-full
                        bg-[#82B2C0]
                        px-6
                        text-white
                        transition
                        hover:bg-[#6E9EAC]
                    "
                >
                    Send
                </button>
            </div>
        </div>
    );
}