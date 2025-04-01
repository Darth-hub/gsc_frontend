"use client";

import { useState } from "react";
import { Smile, Paperclip, Send, Mic } from "lucide-react";

export function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="sticky bottom-0 bg-gradient-to-t from-[#1b4332] to-[#081c15] p-4 border-t border-black">
      <form onSubmit={handleSubmit} className="flex items-center">
        <button
          type="button"
          className="text-green-300 hover:text-white hover:bg-green-700 p-2 rounded-full focus:outline-none"
          aria-label="Attach file"
        >
          <Paperclip className="h-5 w-5" />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Type Message `}
          className="flex-1 bg-black border border-black rounded-md px-4 py-2 mx-2 text-white placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Type your message"
        />

        <button
          type="button"
          className="text-green-300 hover:text-white hover:bg-green-700 p-2 rounded-full focus:outline-none"
          aria-label="Emoji picker"
        >
          <Smile className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="text-green-300 hover:text-white hover:bg-green-700 p-2 rounded-full focus:outline-none"
          aria-label="Voice message"
        >
          <Mic className="h-5 w-5" />
        </button>

        <button
          type="submit"
          className="text-green-300 hover:text-white hover:bg-green-700 p-2 rounded-full focus:outline-none"
          aria-label="Send message"
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}