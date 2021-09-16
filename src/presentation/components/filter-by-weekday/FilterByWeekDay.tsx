import React from 'react'

import { FilterByWeekDayHook } from './FilterByWeekDayHook'

export const FilterByWeekDay: React.FC = () => {
  const { getStyleForPosition, options, handleClick, currentSelected } =
    FilterByWeekDayHook()

  const Button = (props: { value: string; style: string }): JSX.Element => (
    <button
      onClick={() => handleClick(props.value)}
      className={`btn-filter ${props.style} ${
        props.value === currentSelected ? 'text-white bg-primary' : ''
      }`}
    >
      {props.value}
    </button>
  )

  return (
    <div className="container mx-auto">
      <div
        className="flex justify-center rounded-lg text-lg py-10"
        role="group"
      >
        <div className="shadow">
          {options.map((value, i) => (
            <Button value={value} style={getStyleForPosition(i)} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
