import React from 'react'

export const FilterByWeekDay: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex justify-center rounded-lg text-lg py-10"
        role="group"
      >
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary border-r-0 rounded-l hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          All
        </button>
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          Sun
        </button>
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary border-l-0 hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          Mon
        </button>
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary border-l-0 hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          Tue
        </button>
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary border-l-0 hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          Wed
        </button>
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary border-l-0 hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          Thu
        </button>
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary border-l-0 hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          Fri
        </button>
        <button className="p-2 lg:px-4 text-primary text-center border border-solid border-primary border-l-0 rounded-r hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0">
          Sat
        </button>
      </div>
    </div>
  )
}
