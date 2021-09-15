import React from 'react'

import { MyResponsivePie } from '@/presentation/pages/home/chart'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <nav className="py-2 md:py-6">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.1422 5.85781C30.3647 2.08031 25.3422 0 20 0C14.6578 0 9.63531 2.08031 5.85781 5.85781C2.08031 9.63531 0 14.6578 0 20C0 25.3422 2.08039 30.3646 5.85781 34.1422C9.63523 37.9198 14.6578 40 20 40C25.3422 40 30.3647 37.9197 34.1422 34.1422C37.9197 30.3647 40 25.3422 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781Z"
                  fill="#AC6DDE"
                ></path>
                <path
                  d="M16 14H29"
                  stroke="#F5F5F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 20H29"
                  stroke="#F5F5F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 26H29"
                  stroke="#F5F5F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11 14H11.01"
                  stroke="#F5F5F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11 20H11.01"
                  stroke="#F5F5F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11 26H11.01"
                  stroke="#F5F5F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <button className="p-2 lg:px-4 md:mx-2 text-primary text-center border border-solid border-primary rounded hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                ADD NEW
              </button>
            </div>
          </div>
        </nav>

        {/* filter */}
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

        {/* chart */}
        <div className="flex justify-center">
          <MyResponsivePie />
        </div>

        {/* list */}
        <div className="py-10">
          <div className="pb-4 px-20 md:px-40 bg-blue-100">
            <div className="bg-white p-4 rounded-lg shadow-lg flex align-middle">
              <div className="w-1/12 flex justify-center align-middle">
                <span className="h-3 w-3 bg-primary rounded-full self-center" />
              </div>

              <h3 className="font-normal text-black-100 w-4/12">Avocado</h3>

              <p className="w-3/12">200 kcal</p>
              <p className="w-3/12">Fat</p>

              <img
                className="cursor-pointer"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie2UzUrDQBSFvztKEOLrmLgtzaJYMUixD6mg1pULS7f+vI4BCXGuCzXIJM3cdlMXPds5Od9l7snAXv9SVZGX1Tg7t/uzaVXkZd+ZdMyj/Eyd3gIiIvP06WUxFP4+PpmA3AEHAvN0+Xr/99yFH6jzHlAgUdXrdZMF4UeA4p0PPR3A8fLtEfQS+Ggho9OLSHgt3l2lq+eH0Ne5IkuANXwQsC5I3WdtDY8COhClEcErJJZwE6CFCAtUEgBUGlGZxcKhZ8k2qdkZBbRX9D19g1AjHKrzN33t2gjQs+QZqiW/FTZAdlNTS8DWP9om01m8nR2Id+4HHO158KyA87ZWVkVeVkU2NZkZfq732r2+AHzztSsOAhLPAAAAAElFTkSuQmCC"
              />
            </div>
          </div>

          <div className="pb-4 px-20 md:px-40 bg-blue-100">
            <div className="bg-white p-4 rounded-lg shadow-lg flex align-middle">
              <div className="w-1/12 flex justify-center align-middle">
                <span className="h-3 w-3 bg-green rounded-full self-center" />
              </div>

              <h3 className="font-normal text-black-100 w-4/12">Pizza</h3>

              <p className="w-3/12">900 kcal</p>
              <p className="w-3/12">Carbohydrate</p>

              <img
                className="cursor-pointer"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie2UzUrDQBSFvztKEOLrmLgtzaJYMUixD6mg1pULS7f+vI4BCXGuCzXIJM3cdlMXPds5Od9l7snAXv9SVZGX1Tg7t/uzaVXkZd+ZdMyj/Eyd3gIiIvP06WUxFP4+PpmA3AEHAvN0+Xr/99yFH6jzHlAgUdXrdZMF4UeA4p0PPR3A8fLtEfQS+Ggho9OLSHgt3l2lq+eH0Ne5IkuANXwQsC5I3WdtDY8COhClEcErJJZwE6CFCAtUEgBUGlGZxcKhZ8k2qdkZBbRX9D19g1AjHKrzN33t2gjQs+QZqiW/FTZAdlNTS8DWP9om01m8nR2Id+4HHO158KyA87ZWVkVeVkU2NZkZfq732r2+AHzztSsOAhLPAAAAAElFTkSuQmCC"
              />
            </div>
          </div>

          <div className="pb-4 px-20 md:px-40 bg-blue-100">
            <div className="bg-white p-4 rounded-lg shadow-lg flex align-middle">
              <div className="w-1/12 flex justify-center align-middle">
                <span className="h-3 w-3 bg-yellow rounded-full self-center" />
              </div>

              <h3 className="font-normal text-black-100 w-4/12">Beef</h3>

              <p className="w-3/12">200 kcal</p>
              <p className="w-3/12">Protein</p>

              <img
                className="cursor-pointer"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie2UzUrDQBSFvztKEOLrmLgtzaJYMUixD6mg1pULS7f+vI4BCXGuCzXIJM3cdlMXPds5Od9l7snAXv9SVZGX1Tg7t/uzaVXkZd+ZdMyj/Eyd3gIiIvP06WUxFP4+PpmA3AEHAvN0+Xr/99yFH6jzHlAgUdXrdZMF4UeA4p0PPR3A8fLtEfQS+Ggho9OLSHgt3l2lq+eH0Ne5IkuANXwQsC5I3WdtDY8COhClEcErJJZwE6CFCAtUEgBUGlGZxcKhZ8k2qdkZBbRX9D19g1AjHKrzN33t2gjQs+QZqiW/FTZAdlNTS8DWP9om01m8nR2Id+4HHO158KyA87ZWVkVeVkU2NZkZfq732r2+AHzztSsOAhLPAAAAAElFTkSuQmCC"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
