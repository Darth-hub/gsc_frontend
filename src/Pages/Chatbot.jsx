"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Smile, ImageIcon, Send } from "lucide-react";

export default function ChatFlow() {
  const chat = useChat();
  const messages = chat.messages;
  const input = chat.input;
  const handleInputChange = chat.handleInputChange;
  const handleSubmit = chat.handleSubmit;
  const isLoading = chat.isLoading;

  const messagesEndRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    return diffInMinutes < 5 ? "Just Now" : formatTime(date);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm h-[600px] rounded-lg overflow-hidden flex flex-col shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 p-6 text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-2xl font-bold">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">ChatFlow</h1>
              <p className="text-sm opacity-90 mt-1 max-w-[250px]">
                A live chat interface that allows for seamless, natural communication and connection.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white/20 rounded-full p-1 hover:bg-white/30 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 bg-[#0a0a1a] p-4 overflow-y-auto">
        <div className="space-y-6">
          {messages.length === 0 ? (
            <>
              <div className="flex justify-end">
                <div className="max-w-[80%]">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">Hello, how are you doing?</div>
                  <div className="text-gray-400 text-xs mt-1 text-right">{formatTime(new Date(Date.now() - 60000))}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Avatar>
                  <img src="/placeholder.svg?height=40&width=40" alt="Assistant" className="rounded-full" />
                </Avatar>
                <div className="max-w-[80%]">
                  <div className="text-white text-sm font-medium">Assistant</div>
                  <div className="bg-[#1e1e3a] text-white p-3 rounded-lg mt-1">
                    I'm doing well, thank you! How can I help you today?
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{formatTime(new Date())}</div>
                </div>
              </div>
            </>
          ) : (
            messages.map((message, index) => (
              <div key={index} className={message.role === "user" ? "flex justify-end" : "flex items-start gap-2"}>
                {message.role === "assistant" && (
                  <Avatar>
                    <img src="/placeholder.svg?height=40&width=40" alt="Assistant" className="rounded-full" />
                  </Avatar>
                )}
                <div className="max-w-[80%]">
                  {message.role === "assistant" && <div className="text-white text-sm font-medium">Assistant</div>}
                  <div
                    className={`${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-[#1e1e3a] text-white"
                    } p-3 rounded-lg ${message.role === "assistant" ? "mt-1" : ""}`}
                  >
                    {message.content}
                  </div>
                  <div className={`text-gray-400 text-xs mt-1 ${message.role === "user" ? "text-right" : ""}`}>
                    {getRelativeTime(new Date(message.createdAt || Date.now()))}
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-start gap-2">
              <Avatar>
                <img src="/placeholder.svg?height=40&width=40" alt="Assistant" className="rounded-full" />
              </Avatar>
              <div className="max-w-[80%]">
                <div className="text-white text-sm font-medium">Assistant</div>
                <div className="bg-[#1e1e3a] text-white p-3 rounded-lg mt-1 flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="bg-[#0a0a1a] border-t border-gray-800 p-3">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Button type="button" variant="ghost" size="icon" className="text-gray-400">
            <Smile className="h-5 w-5" />
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Reply..."
            className="flex-1 bg-transparent border-none text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
          />
          <Button type="button" variant="ghost" size="icon" className="text-gray-400">
            <ImageIcon className="h-5 w-5" />
          </Button>
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
