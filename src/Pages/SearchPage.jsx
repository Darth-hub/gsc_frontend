"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import AnimatedSearchBar from "./Components/AnimatedSearch"
import EnvironmentalStats from "./Components/EnvironmentStats"
import AnswerBox from "./Components/AnswerBox"

export default function Home() {
  const [query, setQuery] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return
    
    setQuery(searchQuery)
    setAnswer("")
    setIsLoading(true)
  
    try {
      const response = await generateResponse(
        `As an environmental expert, provide detailed information about: ${searchQuery}. 
        Include practical advice, statistics, and formatted markdown response.`
      )
      setAnswer(response)
    } catch (error) {
      console.error("Error:", error)
      setAnswer("Sorry, I couldn't process your request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-#2A4104 text-white">
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          EclyraSearch:Your Environment Guide
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - Search and Stats */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-green-500/20 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-green-500/20">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Ask About Environmental Topics
                </h2>
              </div>
              <div className="p-4">
                <AnimatedSearchBar onSearch={handleSearch} />
              </div>
            </div>

            <EnvironmentalStats />
          </div>

          {/* Right Section - Answer Box */}
          <div className="h-full">
            <AnswerBox query={query} answer={answer} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </main>
  )
}