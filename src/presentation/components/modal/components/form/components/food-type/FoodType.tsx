import React, { useState } from 'react'

import { foodType } from '@/presentation/components'

export const FoodType: React.FC = () => {
  const [selectedType, setSelectedType] = useState(foodType[0])

  const handleChange = (e: React.MouseEvent): void => {
    const { value } = e.target as HTMLSelectElement
    const newValue = selectedType === value ? '' : value
    setSelectedType(newValue || selectedType)
  }

  return (
    <>
      <span className="block text-sm font-medium text-black-100">
        Food type
      </span>

      <div className="">
        {foodType.map((type, i) => (
          <label key={i} className="inline-flex items-center mr-4">
            <input
              checked={selectedType === type}
              onClick={handleChange}
              type="checkbox"
              name="foodType"
              value={type}
              className="form-checkbox text-primary rounded-sm mr-1"
            />
            <span className="text-gray-500 capitalize select-none">{type}</span>
          </label>
        ))}
      </div>
    </>
  )
}
