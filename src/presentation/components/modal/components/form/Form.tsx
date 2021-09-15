import React from 'react'

import { FoodType } from './components/food-type'
import { WeekDays } from './components/weekdays'

export const Form: React.FC<{
  setOpen: (arg: boolean) => void
}> = ({ setOpen }) => {
  return (
    <form action="#" method="POST">
      <div className="pt-5 pb-2.5 bg-white">
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-6">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-black-100"
            >
              Food name
            </label>
            <input
              type="text"
              name="food-name"
              id="food-name"
              className="mt-1 focus:ring-primary focus:border-gray-500 block w-full shadow-sm sm:text-sm border-primary rounded-md"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="calories"
              className="block text-sm font-medium text-black-100"
            >
              Calories
            </label>
            <input
              type="number"
              name="calories"
              id="calories"
              className="mt-1 focus:ring-primary focus:border-gray-500 block w-full shadow-sm sm:text-sm border-primary rounded-md"
            />
          </div>

          <div className="col-span-6">
            <WeekDays />
          </div>

          <div className="col-span-6">
            <FoodType />
          </div>
        </div>

        <div className="mt-6 bg-gray-50 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:opacity-90 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm uppercase transition duration-300"
            onClick={() => setOpen(false)}
          >
            Save
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-primary shadow-sm px-4 py-2 bg-white text-base font-medium text-primary hover:opacity-90 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm uppercase transition duration-300"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
}
