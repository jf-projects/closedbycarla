"use client";
import { useEffect, useRef } from "react";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
// import SuggestedPrompts from "./SuggestedPrompts";
import TypingIndicator from "./TypingIndicator";
import type { Message } from "./type";

type ChatWindowProps = {
    messages: Message[];
    isTyping: boolean;
    onSend: (message: string) => void;
};


export default function ChatWindow({
    messages,
    isTyping,
    onSend,
}: ChatWindowProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isTyping]);

    return (
        <div
            className="
                fixed
                bottom-28
                right-8
                z-50
                flex
                h-162.5
                w-97.5
                flex-col
                overflow-hidden
                rounded-[30px]
                bg-white
                shadow-2xl
            "
        >
            {/* Header */}
            <div className="bg-[#82B2C0] p-6 text-white">
                <p className="text-sm uppercase tracking-widest opacity-80">
                    AI ASSISTANT
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                    Carla&apos;s Assistant
                </h2>

                <p className="mt-3 text-sm opacity-90">
                    Ask me anything about buying,
                    selling, financing, or finding
                    your dream home.
                </p>
            </div>

            {/* Conversation */}
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
                {messages.map((message, index) => (
                    <ChatMessage
                        key={index}
                        message={message}
                    />
                ))}

                {/* {messages.length === 1 && (
                    <SuggestedPrompts />
                )} */}

                {isTyping && (
                    <TypingIndicator />
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput onSend={onSend} />
        </div>
    );
}