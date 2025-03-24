"use client"
import { useState } from "react"
import { ChevronDown, ChevronRight, Hash, Users, HelpCircle, MessageCircle, Leaf, ShoppingCart, Megaphone, Calendar } from "lucide-react"

export function Sidebar({ currentChannel, onChannelChange }) {
  const [expandedCategories, setExpandedCategories] = useState({
    "Eclyra Announcements": true,
    "Recycling & Sustainability": true,
    "Community Engagement": true,
    "Support & Orders": true,
  })

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const channels = [
    // Announcements
    { id: "updates", name: "Eclyra Updates", category: "Eclyra Announcements", icon: <Megaphone size={16} /> },
    { id: "events", name: "Upcoming Events", category: "Eclyra Announcements", icon: <Calendar size={16} /> },

    // Recycling & Sustainability
    { id: "recycling-tips", name: "Recycling Tips", category: "Recycling & Sustainability", icon: <Leaf size={16} /> },
    { id: "eco-news", name: "Eco News", category: "Recycling & Sustainability", icon: <Leaf size={16} /> },

    // Community Engagement
    { id: "discussions", name: "Discussions", category: "Community Engagement", icon: <MessageCircle size={16} /> },
    { id: "local-cleanups", name: "Local Cleanups", category: "Community Engagement", icon: <Users size={16} /> },

    // Support & Orders
    { id: "order-help", name: "Order Support", category: "Support & Orders", icon: <ShoppingCart size={16} /> },
    { id: "faq", name: "FAQs & Help", category: "Support & Orders", icon: <HelpCircle size={16} /> },
  ]

  return (
    <div className="w-64 flex flex-col bg-gradient-to-b from-[#0a1e11] to-[#143d27] border-r border-green-800/30 h-full">
      {/* Eclyra Branding */}
      <div className="p-4 border-b border-green-800/30 flex items-center gap-3">
        <div className="h-9 w-8 rounded-full  flex items-center justify-center">
        <img 
              src="../../Components/images/eclyralogo.png" 
              alt="Eclyra Logo" 
              className="h-full w-full object-cover"
            />
        </div>
        <div>
          <h1 className="font-bold text-green-100">Eclyra</h1>
          <p className="text-xs text-green-400">Sustainability Community</p>
        </div>
      </div>

      {/* Channels List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {Object.keys(expandedCategories).map((category) => (
          <div key={category} className="space-y-1">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between px-3 py-2 text-white hover:text-white rounded-md hover:bg-green-800/30 transition-colors text-sm"
            >
              <div className="flex items-center gap-2">
                {expandedCategories[category] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
                <span>{category}</span>
              </div>
            </button>

            {expandedCategories[category] && (
              <div className="ml-6 space-y-1">
                {channels
                  .filter(channel => channel.category === category)
                  .map(channel => (
                    <button
                      key={channel.id}
                      onClick={() => onChannelChange(channel.name)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        currentChannel === channel.name
                          ? 'bg-green-700/50 text-white'
                          : 'text-white hover:bg-green-800/20 hover:text-white'
                      }`}
                    >
                      <span className="opacity-70">{channel.icon}</span>
                      <span>{channel.name}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-3 border-t border-green-800/30 bg-black/20 backdrop-blur-sm flex items-center gap-3">
        <div className="relative h-8 w-8 rounded-full bg-green-600 flex-shrink-0 overflow-hidden">
          <img 
            src="../../Components/images/woman.png" 
            alt="User Avatar" 
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 border border-[#143d27]"></div>
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-medium text-green-100 truncate">Tanisha Rattan</p>
          <p className="text-xs text-green-400 truncate">Online</p>
        </div>
      </div>
    </div>
  )
}