import React, { useContext, useState } from 'react'

import { weekDays } from '@/presentation/components'
import { AppContext } from '@/presentation/contexts'

export const FilterByWeekDay: React.FC = () => {
  const { fetchFoodList, setPostList } = useContext(AppContext)
  const options = ['all', ...weekDays]
  const [currentSelected, setCurrentSelected] = useState<string>(options[0])

  const handleClick = (value: string): void => {
    if (value === currentSelected) return

    setCurrentSelected(value)

    const params = new URLSearchParams({ weekDays_like: value }).toString()
    const args = value !== options[0] ? `?${params}` : ''
    fetchFoodList.loadAll(args).then((data) => setPostList(data))
  }

  const Button = ({
    style,
    value
  }: {
    value: string
    style: string
  }): JSX.Element => {
    const isActive = value === currentSelected ? 'text-white bg-primary' : ''

    return (
      <button
        onClick={() => handleClick(value)}
        className={`btn-filter ${style} ${isActive}`}
      >
        {value}
      </button>
    )
  }

  const getStyleForPosition = (position: number): string => {
    return position === 0
      ? 'rounded-l'
      : position === options?.length - 1
      ? 'rounded-r border-r'
      : ''
  }

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
