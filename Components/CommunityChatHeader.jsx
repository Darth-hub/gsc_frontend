import { Bell, Phone, Search, Settings } from "lucide-react"

export function ChatHeader({ channelName }) {
  return (
    <div className="h-14 border-b border-green-700 flex items-center justify-between px-4 bg-gradient-to-b from-[#143d27] to-[#0a1e11]">
      <div className="flex items-center">
        <h2 className="font-semibold">{channelName}</h2>
        <span className="text-xs text-green-300 ml-2">48 members</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-green-300 hover:text-green-700 focus:outline-none">
          <Search className="h-5 w-5" />
        </button>
        <button className="text-green-300 hover:text-green-700 focus:outline-none">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-green-300 hover:text-green-700 focus:outline-none">
          <Phone className="h-5 w-5" />
        </button>
        <button className="text-green-300 hover:text-green-700 focus:outline-none">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
