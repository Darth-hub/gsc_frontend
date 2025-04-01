"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TreePine, Trash2, Droplets, AlertTriangle } from "lucide-react"

export default function EnvironmentalStats() {
  const [statsVisible, setStatsVisible] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setStatsVisible(true)
          
          // Animate the progress bar
          let value = 0
          const interval = setInterval(() => {
            value += 2
            setProgressValue(Math.min(value, 67))
            if (value >= 53) clearInterval(interval)
          }, 30)

          observer.disconnect()
          
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={statsRef}
      className="bg-#2A4104 rounded-lg overflow-hidden shadow-md"
    >
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-center text-3xl font-bold text-red-500">Environmental Crisis</h2>
        <p className="text-center text-white">Current global environmental challenges</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex flex-col items-center justify-center pt-4">
          <div className="flex items-center justify-center mb-2">
            {/* Animated Alert Icon */}
            <motion.div 
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            >
              <AlertTriangle className="h-10 w-10 text-red-500 mr-2" />
            </motion.div>

            {/* Flashing Alert Text (Using Tailwind animate-pulse) */}
            <span className="text-5xl font-bold text-red-600 animate-pulse">
              {statsVisible ? "53.6 million tons" : "0%"}
            </span>
          </div>
          <p className="text-white text-lg">E-waste generated worldwide in 2024</p>
        </div>

        {/* Custom Progress Bar */}
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-1000 ease-out"
            style={{ width: `${progressValue}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded-lg text-center">
            <TreePine className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">400 million</div>
            <div className="text-sm text-gray-700">tons</div>
            <div className="text-xs text-black">of Plastic Waste annually</div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg text-center">
            <Trash2 className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">2 billion</div>
            <div className="text-sm text-gray-600">tons</div>
            <div className="text-xs text-gray-600">Dumped in landfills every year</div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg text-center">
            <Droplets className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-black"> 400 million</div>
            <div className="text-sm text-gray-600">tons</div>
            <div className="text-xs text-gray-600">Chemical and Toxic Waste</div>
          </div>
        </div>

        <div className="flex justify-between text-xs text-white pt-2">
          <span>1970</span>
          <span>1990</span>
          <span>2000</span>
          <span>2010</span>
          <span>2020</span>
          <span>2025</span>
        </div>
        <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full" />
      </div>
    </div>
  )
}
