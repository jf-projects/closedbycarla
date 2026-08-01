"use client";

import { MessageCircle, X } from "lucide-react";

type ChatButtonProps = {
    isOpen: boolean;
    onClick: () => void;
};

export default function ChatButton({
    isOpen,
    onClick,
}: ChatButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
                fixed
                bottom-8
                right-8
                z-50
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#82B2C0]
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#6CA3B3]
            "
            aria-label={isOpen ? "Close chat" : "Open chat"}
        >
            {isOpen ? (
                <X size={28} />
            ) : (
                <MessageCircle size={28} />
            )}
        </button>
    );
}