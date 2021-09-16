import React from 'react'

import { weekDays } from '@/presentation/components'

export const WeekDays: React.FC = () => {
  return (
    <>
      <span className="block text-sm font-medium text-black-100">
        Week days
      </span>

      <div className="">
        {weekDays.map((day, i) => (
          <label key={i} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              name="weekDays"
              value={day}
              className="form-checkbox text-primary rounded-sm mr-1"
            />
            <span className="text-gray-500 capitalize select-none">{day}</span>
          </label>
        ))}
      </div>
    </>
  )
}
