import type { Message } from "./type";

type ChatMessageProps = {
    message: Message;
};

export default function ChatMessage({
    message,
}: ChatMessageProps) {
    const isUser = message.role === "user";

    return (
        <div
            className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${isUser
                        ? "rounded-br-md bg-[#82B2C0] text-white"
                        : "rounded-bl-md bg-[#F7F4EF] text-[#3F4A4A]"
                    }`}
            >
                {message.content}
            </div>
        </div>
    );
}