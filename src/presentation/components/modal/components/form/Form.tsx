import React, { useContext, useState } from 'react'

import { FetchFoodList } from '@/domain/usecases'
import { AppContext } from '@/presentation/contexts'

import { FoodType, WeekDays } from './components'

export const Form: React.FC<{
  setOpen: (arg: boolean) => void
}> = ({ setOpen }) => {
  const { postFoodItem, setPostList, fetchFoodList } = useContext(AppContext)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const weekDaysFields: Omit<FetchFoodList.Model, 'id'> = {
      foodName: formData.get('food-name') as string,
      calories: +formData.get('calories'),
      weekDays: formData.getAll('weekDays') as string[],
      foodType: formData.getAll('foodType').join()
    }

    if (!weekDaysFields.foodName) {
      setError('Please, check the fields and try again.')
      return
    }

    postFoodItem
      .postItem(weekDaysFields)
      .then((_data) => {
        fetchFoodList.loadAll().then((posts) => {
          setPostList(posts)
          setOpen(false)
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
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
              onChange={() => setError('')}
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
              defaultValue={0}
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
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:opacity-90 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm uppercase transition duration-300"
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

          <span className="self-center text-red pr-1">{error}</span>
        </div>
      </div>
    </form>
  )
}
