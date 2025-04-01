"use client";

import React, { useEffect, useState } from "react";

export default function CarbonFootprintMeter() {
  const [progress, setProgress] = useState(0);

  // Animation effect for the progress bar
  useEffect(() => {
    const target = document.querySelector(".progress-bar-target"); // Add a class to the target element
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setProgress(78), 1000);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(target); // Observe the target element

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className="w-[95vw] bg-gradient-to-b from-green-950 to-green-900 p-8 ml-7 rounded-md mb-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
            Carbon Footprint Reduction
          </h1>
          <p className="text-lg text-green-100">
            Our impact over the predicted 5 years
          </p>
        </div>

        <div className="overflow-hidden rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-center gap-4">
            <LeafIcon className="h-12 w-12 text-green-500" />
            <div className="text-center">
              <h2 className="text-6xl font-bold text-green-500">
                <span className="inline-flex items-center">
                  <span>78</span>
                  <span className="text-3xl">%</span>
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Carbon Reduction Target Achieved
              </p>
            </div>
          </div>

          <div className="mb-4 h-8 w-full overflow-hidden rounded-full bg-gray-200 progress-bar-target">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <MetricCard
              value="125,000"
              unit="tons"
              description="CO₂ emissions to be reduced"
              icon={<ArrowDownIcon className="h-6 w-6 text-green-500" />}
            />
            <MetricCard
              value="2025"
              unit=""
              description="Year we started our carbon initiative"
              icon={<LeafIcon className="h-6 w-6 text-green-500" />}
            />
            <MetricCard
              value="30,000"
              unit="tons"
              description="Annual reduction rate"
              icon={<ArrowDownIcon className="h-6 w-6 text-green-500" />}
            />
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-500">
              <div>2025</div>
              <div>2026</div>
              <div>2027</div>
              <div>2028</div>
              <div>2029</div>
              <div>2030</div>
            </div>
            <div className="mt-1 h-2 w-full bg-gray-200">
              <div className="flex h-full">
                <div className="h-full w-1/5 bg-green-300"></div>
                <div className="h-full w-1/5 bg-green-400"></div>
                <div className="h-full w-1/5 bg-green-500"></div>
                <div className="h-full w-1/5 bg-green-600"></div>
                <div className="h-full w-1/5 bg-green-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ value, unit, description, icon }) {
  return (
    <div className="rounded-lg bg-green-50 p-4 text-center">
      <div className="mb-2 flex justify-center">{icon}</div>
      <div className="text-2xl font-bold text-gray-800">
        {value} <span className="text-sm font-normal">{unit}</span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// Custom icon components instead of using Lucide icons
function LeafIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function ArrowDownIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}