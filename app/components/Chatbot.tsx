"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BotMessageSquare , Send, X } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const newMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);
  
    // Add placeholder
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
  
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
  
      if (!res.body) throw new Error("No response body");
  
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantResponse = "";
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantResponse += decoder.decode(value, { stream: true });
  
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantResponse,
          };
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Sorry, something went wrong.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full shadow-lg hover:bg-neutral-200 transition z-50"
      >
        <BotMessageSquare  className="w-5 h-5" />
        <span>Chat with Ricardo</span>
      </button>

      {/* Chat Window */}
{isOpen && (
  <div className="fixed bottom-20 right-6 w-90 bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8">
          <Image
            src="/me.png"
            alt="Ricardo"
            fill
            className="rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-neutral-900 rounded-full" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-white">Chat with Ricardo</h3>
          <p className="text-xs text-neutral-400">Online</p>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="text-neutral-400 hover:text-white transition"
        aria-label="Close chat"
      >
        <X className="w-4 h-4" />
      </button>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[28rem] scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.role === "assistant" && (
            <div className="flex-shrink-0 mr-2">
              <Image
                src="/me.png"
                alt="Assistant"
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
            </div>
          )}
          <div
            className={`p-2.5 text-sm rounded-2xl leading-relaxed max-w-[75%] ${
              msg.role === "user"
                ? "bg-white text-black"
                : "bg-neutral-800 text-neutral-100"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
      {loading && <p className="text-neutral-500 text-sm italic">Thinking...</p>}
      <div ref={messagesEndRef} />
    </div>

    {/* Input Area */}
    <div className="border-t border-neutral-800 bg-neutral-950 p-3">
      <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg px-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 bg-transparent text-sm text-white py-2 px-2 outline-none placeholder-neutral-500"
        />
        <button
          onClick={sendMessage}
          className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-md transition"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[10px] text-neutral-500 mt-1 text-right">
        Ask me about programming, web dev, or tech!
      </p>
    </div>
  </div>
)}

    </>
  );
}
