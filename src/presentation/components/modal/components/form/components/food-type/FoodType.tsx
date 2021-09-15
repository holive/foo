import React from 'react'

import { foodType } from '@/presentation/components'

export const FoodType: React.FC = () => {
  return (
    <>
      <span className="block text-sm font-medium text-black-100">
        Food type
      </span>

      <div className="">
        {foodType.map((day, i) => (
          <label key={i} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-primary rounded-sm mr-1"
            />
            <span className="text-gray-500 capitalize">{day}</span>
          </label>
        ))}
      </div>
    </>
  )
}
