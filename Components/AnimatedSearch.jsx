"use client"

import React, { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"

const EXAMPLE_QUERIES = [
  "What are ways to recycle plastic?",
  "How to reduce e-waste?",
  "Benefits of composting?",
  "How to start recycling at home?",
  "Impact of plastic pollution on oceans?",
]

export default function AnimatedSearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("")
  const [isAnimating, setIsAnimating] = useState(true)
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0)
  const [direction, setDirection] = useState("typing") // "typing" or "deleting"
  const [charIndex, setCharIndex] = useState(0)
  const inputRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (isAnimating) {
      animationRef.current = setInterval(
        () => {
          if (direction === "typing") {
            const currentQuery = EXAMPLE_QUERIES[currentQueryIndex]
            if (charIndex < currentQuery.length) {
              setInputValue(currentQuery.substring(0, charIndex + 1))
              setCharIndex(charIndex + 1)
            } else {
              setTimeout(() => {
                setDirection("deleting")
              }, 1500) // Pause before deleting
            }
          } else {
            if (charIndex > 0) {
              setInputValue(EXAMPLE_QUERIES[currentQueryIndex].substring(0, charIndex - 1))
              setCharIndex(charIndex - 1)
            } else {
              setDirection("typing")
              setCurrentQueryIndex((currentQueryIndex + 1) % EXAMPLE_QUERIES.length)
            }
          }
        },
        direction === "typing" ? 100 : 50,
      )
    }

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
  }, [charIndex, currentQueryIndex, direction, isAnimating])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setIsAnimating(false)
      onSearch(inputValue)
    }
  }

  const handleInputChange = (e) => {
    if (isAnimating) {
      setIsAnimating(false)
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
    setInputValue(e.target.value)
  }

  const handleInputFocus = () => {
    if (isAnimating) {
      setIsAnimating(false)
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
    if (inputRef.current) {
      inputRef.current.select()
    }
  }

  const handleInputBlur = () => {
    if (!inputValue.trim()) {
      // Only restart animation if search box is empty
      setIsAnimating(true)
      setCharIndex(0)
      setCurrentQueryIndex(0)
      setDirection("typing")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask about recycling, e-waste, environment..."
          className="w-full pl-10 pr-20 py-3 bg-white/10 text-white placeholder:text-gray-300 border border-green-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300" />
      </div>
      <button
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-#2A4104 hover:bg-green-600 text-white px-4 py-1 rounded-md transition-colors"
      >
        Search
      </button>
    </form>
  )
}