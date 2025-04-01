"use client"
import { ChevronDown, Plus, Award, Leaf, TrendingUp } from "lucide-react"

export function MembersList() {
  const members = [
    { id: "1", name: "Ayush Ranjan", avatar: "/images/profilepic.png", online: true, role: "Moderator" },
    { id: "2", name: "Rohit Khallar", avatar: "/images/profilepic.png", online: true, points: 420 },
    { id: "3", name: "Ayush Kumar", avatar: "/images/profilepic.png", online: true },
    { id: "4", name: "Tanisha Rattan", avatar: "/images/woman.png", online: true, role: "Owner" },
  ]

  return (
    <div className="w-64 flex flex-col bg-gradient-to-b from-[#0a1e11] to-[#143d27] border-l border-black h-full text-green-100">
      {/* Community Info */}
      <div className="p-4 border-b border-green-800/30">
        <div className="flex justify-center mb-3">
          <div className="h-20 w-15 rounded-full  flex items-center justify-center">
          <img 
              src="/images/eclyralogo.png" 
              alt="Eclyra Logo" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h2 className="font-bold text-center text-white mb-1">Eclyra Community</h2>
        <p className="text-xs text-white text-center mb-3">
          Join discussions on sustainability, recycling, and environmental awareness!
        </p>
        <button className="w-full py-1.5 px-4 bg-green-700/50 hover:bg-green-700 text-green-100 text-xs rounded-md transition-colors">
          Learn More
        </button>
      </div>

      {/* Community Features */}
      <div className="p-4 space-y-3 border-b border-black">
        <div className="flex items-center text-sm text-white">
          <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
          Weekly Recycling Challenges
        </div>
        <div className="flex items-center text-sm text-white">
          <Leaf className="h-4 w-4 mr-2 text-green-400" />
          Eco-Friendly Tips & Tricks
        </div>
        <div className="flex items-center text-sm text-white">
          <Award className="h-4 w-4 mr-2 text-green-400" />
          Earn Points for Green Actions
        </div>
      </div>

      {/* Members List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 flex items-center justify-between border-b border-green-800/30">
          <div className="flex items-center text-sm font-medium text-green-200">
            <ChevronDown className="h-4 w-4 mr-1" />
            <span>Community Members</span>
            <span className="ml-2 text-xs bg-green-800/30 px-2 py-0.5 rounded-full">48</span>
          </div>
          <button className="h-6 w-6 flex items-center justify-center text-green-300 hover:text-white hover:bg-green-800/30 rounded-full transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="p-2 space-y-1">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-2 rounded-md hover:bg-green-800/30 transition-colors">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="h-8 w-8 rounded-full bg-green-600 overflow-hidden">
                    <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  {member.online && (
                    <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 border border-[#143d27]"></div>
                  )}
                </div>
                <div>
                  <p className="text-sm text-green-50 flex items-center gap-1">
                    {member.name}
                    {member.role === "Owner" && (
                      <Award className="h-3 w-3 text-yellow-400" />
                    )}
                    {member.role === "Moderator" && (
                      <Award className="h-3 w-3 text-green-400" />
                    )}
                  </p>
                  {member.points && (
                    <p className="text-xs text-green-400">{member.points} eco-points</p>
                  )}
                </div>
              </div>
              <div className={`text-xs px-2 py-0.5 rounded-full ${member.online ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                {member.online ? "Online" : "Offline"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}




