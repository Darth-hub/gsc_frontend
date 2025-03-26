"use client"
import { Bot } from "lucide-react"
import { useState, useEffect } from "react"
import { generateResponse } from "../lib/gemini"
import ReactMarkdown from 'react-markdown'

export default function AnswerBox({ query }) {
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query && query.trim()) {
      const fetchAnswer = async () => {
        setIsLoading(true)
        setAnswer("")
        setError(null)
        setProgress(0)
        
        try {
          // Simulate progress updates (replace with actual progress if available)
          const progressInterval = setInterval(() => {
            setProgress(prev => Math.min(prev + 10, 90)) // Cap at 90% until completion
          }, 300)

          const prompt = `As an environmental expert, provide a comprehensive response to: "${query}".
          
          Requirements:
          1. Start with a brief summary (1-2 sentences)
          2. Provide detailed explanation in markdown format
          3. Include bullet points for actionable items
          4. Add relevant statistics where available
          5. Mention environmental impact
          6. Format with headings (##), bold (**) and lists
          
          Response:`
          
          const response = await generateResponse(prompt)
          clearInterval(progressInterval)
          setProgress(100)
          setTimeout(() => setAnswer(response), 500) // Small delay for smooth transition
        } catch (error) {
          console.error("Gemini API Error:", error)
          setError(getErrorMessage(error))
        } finally {
          setIsLoading(false)
        }
      }
      
      fetchAnswer()
    }
  }, [query])

  const getErrorMessage = (error) => {
    const errorMessage = error.message || error.toString()
    
    if (errorMessage.includes("Please wait")) {
      return errorMessage;
    } else if (errorMessage.includes("API key")) {
      return "Authentication error. Please check your API configuration.";
    } else if (errorMessage.includes("quota")) {
      return "API quota exceeded. Please try again later or upgrade your plan.";
    } else if (errorMessage.includes("safety")) {
      return "The query was blocked for safety reasons. Please try a different question.";
    } else if (errorMessage.includes("network")) {
      return "Network error. Please check your internet connection.";
    } else {
      return "An error occurred while processing your request. Please try again.";
    }
  }

  return (
    <div className="h-full bg-white/10 backdrop-blur-sm border border-green-500/20 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-green-500/20">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <Bot className="mr-2 h-5 w-5" />
          Environmental Assistant
        </h2>
      </div>
      <div className="p-4">
        <div className="h-[calc(100vh-300px)] overflow-y-auto">
          {!query && !answer ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-300">
              <Bot className="h-16 w-16 mb-4 opacity-50" />
              <p className="text-lg">
                Ask a question about recycling, e-waste, or environmental topics to get started.
              </p>
            </div>
          ) : isLoading ? (
            <div className="space-y-4">
              <div className="bg-green-800/30 p-4 rounded-lg">
                <p className="text-white font-medium">Processing your query...</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  {progress < 30 && "Analyzing question..."}
                  {progress >= 30 && progress < 70 && "Researching environmental data..."}
                  {progress >= 70 && "Generating response..."}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="animate-pulse text-sm text-gray-400">
                  This typically takes 10-15 seconds...
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-900/30 p-4 rounded-lg">
              <p className="text-white font-medium">Error</p>
              <p className="text-white mt-2">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {query && (
                <div className="bg-green-800/30 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">Your question:</p>
                  <p className="text-white font-medium">{query}</p>
                </div>
              )}
              {answer && (
                <div className="bg-white/20 p-4 rounded-lg prose prose-invert max-w-3xl mx-auto">
                  <ReactMarkdown 
                    components={{
                      h2: ({node, ...props}) => <h2 className="text-xl font-bold text-green-300 mt-4 mb-2" {...props} />,
                      p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                      li: ({node, ...props}) => <li className="mb-2" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-semibold text-green-200" {...props} />,
                      a: ({node, ...props}) => <a className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                    }}
                  >
                    {answer}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}