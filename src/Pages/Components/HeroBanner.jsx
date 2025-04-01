import { useEffect, useState, useRef } from "react"
import { Droplet, Zap, Fuel, TreePine } from "lucide-react"

export default function HeroBanner() {
  const [mainCount, setMainCount] = useState(0)
  const targetMainCount = 100000

  const [counts, setCounts] = useState({
    water: 0,
    electricity: 0,
    oil: 0,
    trees: 0,
  })

  const targetCounts = {
    water: 1000000, // 10 lakh
    electricity: 50000,
    oil: 200000, // 2 lakh
    trees: 10000,
  }

  const [startCounting, setStartCounting] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true)
        }
      },
      { threshold: 0.8 } // Start animation when 80% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!startCounting) return

    const duration = 1000 // 1 sec animation
    const interval = 10 // update every 10ms
    const steps = duration / interval

    // Function to handle count updates
    const animateCount = (target, setState) => {
      const increment = Math.ceil(target / steps)
      let currentCount = 0

      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= target) {
          clearInterval(timer)
          setState(target)
        } else {
          setState(currentCount)
        }
      }, interval)

      return () => clearInterval(timer)
    }

    // Animate main counter
    const clearMain = animateCount(targetMainCount, setMainCount)

    // Animate stats counters
    const clearWater = animateCount(targetCounts.water, (val) =>
      setCounts((prev) => ({ ...prev, water: val }))
    )
    const clearElectricity = animateCount(targetCounts.electricity, (val) =>
      setCounts((prev) => ({ ...prev, electricity: val }))
    )
    const clearOil = animateCount(targetCounts.oil, (val) =>
      setCounts((prev) => ({ ...prev, oil: val }))
    )
    const clearTrees = animateCount(targetCounts.trees, (val) =>
      setCounts((prev) => ({ ...prev, trees: val }))
    )

    return () => {
      clearMain()
      clearWater()
      clearElectricity()
      clearOil()
      clearTrees()
    }
  }, [startCounting])

  // Format the number with commas in Indian format
  const formatIndianNumber = (num) => {
    return new Intl.NumberFormat("en-IN").format(num)
  }

  const stats = [
    {
      value: formatIndianNumber(counts.water),
      label: "LITRES OF WATER TO BE SAVED FROM TOXIC CONTAMINATION",
      icon: <Droplet className="h-6 w-6 text-blue-600" />,
      bgColor: "bg-blue-500",
      iconBgColor: "bg-blue-50",
    },
    {
      value: formatIndianNumber(counts.electricity),
      label: "KWH OF ELECTRICITY TO BE CONSERVED TRHOUGH RECYCLING",
      icon: <Zap className="h-6 w-6 text-red-600" />,
      bgColor: "bg-red-500",
      iconBgColor: "bg-red-50",
    },
    {
      value: formatIndianNumber(counts.oil),
      label: "LITERS OF OIL TO BE PREVENTED FROM HAZARDOUS DISPOSAL",
      icon: <Fuel className="h-6 w-6 text-yellow-600" />,
      bgColor: "bg-yellow-500",
      iconBgColor: "bg-yellow-50",
    },
    {
      value: formatIndianNumber(counts.trees),
      label: "DEVICES TO BE REFURBISHED & REUSED",
      icon: <TreePine className="h-6 w-6 text-green-700" />,
      bgColor: "bg-green-500",
      iconBgColor: "bg-green-50",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with background image */}
      <div ref={sectionRef} className="relative flex flex-col items-center justify-center py-20 bg-gray-800 text-white">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-90"
          style={{
            backgroundImage: "url('../../../public/pedophil.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-grey-500">Our Vision</h1>

          {/* White card with statistics */}
          <div className="bg-white text-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-green-500 mb-2">
                {formatIndianNumber(mainCount)}
              </div>
              <p className="text-lg md:text-xl text-gray-700">kilograms of e-waste to be diverted from landfills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="py-12 px-4 bg-[#1a2214]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} rounded-lg p-6 flex items-center space-x-4 transition-transform hover:scale-105`}
              >
                <div className={`${stat.iconBgColor} p-3 rounded-full`}>{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm font-medium text-black-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
