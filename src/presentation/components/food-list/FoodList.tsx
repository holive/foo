import React from 'react'

import { TrashIcon } from '@/presentation/components'

export const FoodList: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <div className="pb-4 px-20 md:px-40 bg-blue-100">
          <div className="bg-white p-4 rounded-lg shadow-lg flex align-middle">
            <div className="w-1/12 flex justify-center align-middle">
              <span className="h-3 w-3 bg-primary rounded-full self-center" />
            </div>

            <h3 className="font-normal text-black-100 w-4/12">Avocado</h3>

            <p className="w-3/12">200 kcal</p>
            <p className="w-3/12">Fat</p>

            <button className="focus:outline-none opacity-70 hover:opacity-90 cursor-pointer transition duration-300">
              <TrashIcon />
            </button>
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

            <button className="focus:outline-none opacity-70 hover:opacity-90 cursor-pointer transition duration-300">
              <TrashIcon />
            </button>
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

            <button className="focus:outline-none opacity-70 hover:opacity-90 cursor-pointer transition duration-300">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
