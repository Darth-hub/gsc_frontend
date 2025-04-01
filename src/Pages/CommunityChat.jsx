"use client";

import { useState } from "react";
import { MessageList } from "./Components/MessageListCommunityChat";
import { Sidebar } from "./Components/CommunityChatSideBar";
import { MembersList } from "./Components/MembersListCommunity";
import { MessageInput } from "./Components/MessageInputCommunity";
import { ChatHeader } from "./Components/CommunityChatHeader";

export default function ChatPage() {
  const [currentChannel, setCurrentChannel] = useState("General");
  const [messages, setMessages] = useState([
    {
      id: "1",
      user: {
        name: "Ayush Ranjan",
        avatar: "/images/profilepic.png",
      },
      content: "Hey everyone! We're organizing a community cleaning drive this Sunday at Central Park. Volunteers will get eco-reward points! Who's in?",
      timestamp: "10:15 AM",
      reactions: {
        likes: 12,
        hearts: 5,
        stars: 8,
      },
      replies: 4,
    },
    {
      id: "2",
      user: {
        name: "Rohit Khallar",
        avatar: "/images/profilepic.png",
      },
      content: "That sounds amazing! I'm definitely joining. Also, can we set up an e-waste collection booth alongside the cleanup?",
      timestamp: "10:18 AM",
      reactions: {
        likes: 9,
        hearts: 3,
        stars: 6,
      },
      replies: 2,
    },
  ]);

  const handleSendMessage = (content) => {
    const newMessage = {
      id: Date.now().toString(),
      user: {
        name: "You",
        avatar: "/images/woman.png",
      },
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      reactions: {
        likes: 0,
        hearts: 0,
        stars: 0,
      },
      replies: 0,
    };
    
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-green-900 text-white">
      {/* Left Sidebar */}
      <Sidebar 
        currentChannel={currentChannel}
        onChannelChange={setCurrentChannel}
      />
      
      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 border-l border-r border-green-700">
        <ChatHeader channelName={currentChannel} />
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
      
      {/* Right Sidebar - Members */}
      <MembersList />
    </div>
  );
}