"use client"

import { MessageSquare, ThumbsUp, Reply } from "lucide-react"

export function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6 
    bg-gradient-to-b from-[#0d2818] via-[#1b4332] to-[#2d6a4f]
    text-green-50">
      {messages.map((message) => (
        <div key={message.id} className="flex">
          <div className="h-10 w-10 mr-3 mt-1 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={message.user.avatar} 
              alt={message.user.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-semibold">{message.user.name}</span>
              <span className="text-xs text-green-300 ml-2">{message.timestamp}</span>
            </div>
            <p className="mt-1 text-green-100">{message.content}</p>

            {/* Reactions and Reply */}
            <div className="flex items-center mt-2 space-x-4">
              <button className="flex items-center bg-black rounded-full px-3 py-1 hover:bg-green-800">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span className="text-xs">{message.reactions.likes}</span>
              </button>
              <button className="flex items-center bg-black rounded-full px-3 py-1 hover:bg-green-800">
                <span className="mr-1">❤️</span>
                <span className="text-xs">{message.reactions.hearts}</span>
              </button>
              <button className="flex items-center bg-black rounded-full px-3 py-1 hover:bg-green-800">
                <span className="mr-1">⭐</span>
                <span className="text-xs">{message.reactions.stars}</span>
              </button>
              <button className="flex items-center text-green-300 hover:text-white">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span className="text-xs">{message.replies}</span>
              </button>
              <button className="flex items-center text-green-300 hover:text-white px-2 py-1 rounded hover:bg-green-800">
                <Reply className="h-4 w-4 mr-1" />
                <span className="text-sm">Reply</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Typing Indicator */}
      <div className="flex items-center text-white text-sm">
        <div className="h-6 w-6 mr-2 rounded-full overflow-hidden">
          <img 
            src="../../Components/images/profilepic.png" 
            alt="Typing user"
            className="h-full w-full object-cover"
          />
        </div>
        <span>Ayush Ranjan is typing...</span>
      </div>
    </div>
  );
}