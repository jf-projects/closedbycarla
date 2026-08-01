"use client";

import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

import type { Message } from "./type";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [conversationId,setConversationId] = useState(() => crypto.randomUUID());

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hi! 👋 I'm Carla's AI Assistant. How can I help you today?",
        },
    ]);

    const [isTyping, setIsTyping] = useState(false);

    const toggleChat = () => {
        console.log(isOpen)
        setIsOpen((prev) => !prev);
    };

    const sendMessage = async (content: string) => {
        if (!content.trim()) return;

        const userMessage: Message = {
            role: "user",
            content,
        };

        setMessages((prev) => [...prev, userMessage]);

        setIsTyping(true);

        // Temporary fake AI response
        // setTimeout(() => {
        //     const assistantMessage: Message = {
        //         role: "assistant",
        //         content:
        //             "This is a placeholder response. We'll connect OpenAI later.",
        //     };

        //     setMessages((prev) => [...prev, assistantMessage]);
        //     setIsTyping(false);
        // }, 1000);


        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/chat`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    conversationId,
                    message: content,
                }),
            }
        );

        const data = await response.json();
        console.log(data.conversationId)

        setMessages((prev) => [
            ...prev,
            {
                role: "assistant",
                content: data.reply,
            },
        ]);
        setConversationId(data.conversationId);
        setIsTyping(false);

    };

    return (
        <>
            <ChatButton
                isOpen={isOpen}
                onClick={toggleChat}
            />

            {isOpen && (
                <ChatWindow
                    messages={messages}
                    isTyping={isTyping}
                    onSend={sendMessage}
                />
            )}
        </>
    );
}