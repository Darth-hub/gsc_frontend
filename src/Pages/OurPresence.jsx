"use client";

import { useState } from "react";

export default function IndiaPresenceMap() {
  const [cities, setCities] = useState([
    { name: "Allahabad", status: "active" },
    { name: "Delhi", status: "active" },
    { name: "Lucknow", status: "active" },
    { name: "Ahmedabad", status: "coming-soon" },
    { name: "Mumbai", status: "coming-soon" },
    { name: "Bangalore", status: "coming-soon" },
    { name: "Hyderabad", status: "coming-soon" },
  ]);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">
            Our <span className="text-green-500">Presence</span>
            <br />
            Across <span className="text-white">Nation</span>
          </h1>

          <p className="text-lg">
            ECLYRA has established its services in{" "}
            <span className="text-green-500">3 major cities of India</span> and is now expanding its reach in other
            parts of the country.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {/* Active cities */}
            {cities
              .filter((city) => city.status === "active")
              .map((city) => (
                <button
                  key={city.name}
                  className="bg-green-100 text-green-800 px-5 py-2 rounded-full font-medium"
                >
                  {city.name}
                </button>
              ))}

            {/* Coming soon cities */}
            {cities
              .filter((city) => city.status === "coming-soon")
              .map((city) => (
                <div key={city.name} className="relative">
                  <button className="bg-zinc-800 text-white px-5 py-2 rounded-full font-medium">{city.name}</button>
                  <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                    <span className="text-xs text-amber-500">coming soon</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right content - Map */}
        <div className="lg:w-1/2">
            {/* India Map Image */}
                <img src="/map.png" alt="India Map" className="w-full max-w-2xl mx-auto" />
        </div>
      </div>
    </div>
  );
}

