

"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const Dashboard = () => {
  const [selectedCompany, setSelectedCompany] = useState("Acme Inc.")
  const [chartHeight, setChartHeight] = useState(280)

  useEffect(() => {
    const updateChartHeight = () => {
      if (window.innerWidth < 640) {
        setChartHeight(160)
      } else if (window.innerWidth < 1024) {
        setChartHeight(220)
      } else {
        setChartHeight(280)
      }
    }

    updateChartHeight()
    window.addEventListener("resize", updateChartHeight)
    return () => window.removeEventListener("resize", updateChartHeight)
  }, [])

  // Sample data for the chart - matches the visual pattern from the image
  const chartData = [4.8, 7.2, 3.2, 1.8, 10.0, 3.8, 6.5, 4.2, 1.5, 3.5]
  const maxValue = Math.max(...chartData)

  // Team member avatars with more realistic representations
  const teamMembers = [
    { id: 1, initials: "JS", bgColor: "bg-amber-500" },
    { id: 2, initials: "MK", bgColor: "bg-blue-500" },
    { id: 3, initials: "AL", bgColor: "bg-purple-500" },
    { id: 4, initials: "RD", bgColor: "bg-gray-600" },
  ]

  return (
    <div className="w-full bg-gray-50 p-3 sm:p-4 lg:p-6  pflex justify-center items-center min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Dashboard Container */}
        <div className="bg-[#ebeee8] rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-sm overflow-hidden"> 
          <div className="flex flex-col xl:flex-row min-h-[600px] sm:min-h-[700px] lg:min-h-[500px]">
            {/* Left Panel */}
            <div className="bg-[#ebeee8] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex-1 flex flex-col justify-center">
              <div className="max-w-lg mx-auto xl:mx-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#083123] mb-4 sm:mb-6 lg:mb-8 leading-tight text-balance">
                  Dynamic dashboard
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#13392c] mb-6 sm:mb-8 lg:mb-12 xl:mb-16 leading-relaxed font-medium text-pretty">
                  Claude helps legal teams work faster, smarter and more efficiently, delivering the visibility and
                  data-driven insights to mitigate risk and ensure compliance.
                </p>
                <button className="bg-[#0f4939] hover:bg-green-900 text-lime-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold transition-all duration-200 w-full sm:w-auto text-sm sm:text-base lg:text-lg">
                  Explore all
                </button>
              </div>
            </div>

            {/* Right Panel */}
            <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-14 xl:mt-20 xl:mr-5 flex-1 mt-6 mb-2 ">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8 lg:mb-12 xl:mb-16 pb-4 border-b border-gray-200 sm:border-b-0">
                {/* Company Selector */}
                <div className="relative mb-4 sm:mb-0">
                  <button
                    className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#0f4939] hover:text-gray-700 transition-colors"
                    onClick={() => {
                      const companies = ["Acme Inc.", "Global Corp.", "Tech Solutions Ltd."]
                      const currentIndex = companies.indexOf(selectedCompany)
                      const nextIndex = (currentIndex + 1) % companies.length
                      setSelectedCompany(companies[nextIndex])
                    }}
                  >
                    {selectedCompany}
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>
                </div>

                {/* Team Avatars */}
                <div className="flex -space-x-1 sm:-space-x-2">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${member.bgColor} rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {member.initials}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Container */}
              <div className="relative">
                {/* Y-axis labels */}
                <div
                  className={`absolute left-0 top-0 flex flex-col justify-between text-xs sm:text-sm text-gray-500 font-medium`}
                  style={{ height: `${chartHeight}px` }}
                >
                  <span>10K</span>
                  <span>6K</span>
                  <span>2K</span>
                  <span>0</span>
                </div>

                {/* Chart */}
                <div
                  className="ml-6 sm:ml-8 md:ml-12  flex items-end justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4  overflow-x-auto pb-0 "
                  style={{ height: `${chartHeight}px` }}
                >
                  {chartData.map((value, index) => (
                    <div key={index} className="flex flex-col items-center flex-shrink-0">
                      <div
                        className={`w-4 sm:w-6 md:w-8 lg:w-10 xl:w-10 rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer ${
                          index === 4 ? "bg-[#0f4939]" : "bg-[#d5dbd3]"
                        }`}
                        style={{
                          height: `${(value / maxValue) * (chartHeight - 20)}px`,
                        }}
                        title={`${value}K`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
