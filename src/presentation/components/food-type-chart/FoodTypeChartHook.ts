import { ComputedDatum } from '@nivo/pie'
import { useCallback, useContext, useState } from 'react'

import { colorByType, foodType } from '@/presentation/components'
import { AppContext } from '@/presentation/contexts'

export interface Data {
  id: string
  label: string
  value: number
  color: string
  totalItems: number
}

type DataType = Data[]

interface Model {
  toPercentage: (value: number) => string
  newData: DataType
  formatArcLinkLabel: (data: ComputedDatum<Data>) => string
  formatArcLabel: (data: ComputedDatum<Data>) => string
  handleClick: (data: ComputedDatum<Data>) => void
}

const emptyPie = [
  {
    id: 'empty',
    value: 100,
    label: 'No data',
    color: '#ddd',
    totalItems: 0
  }
]

export const FoodTypeChartHook = (): Model => {
  const {
    postList,
    fetchFoodList,
    setPostList,
    setCurrentPostsFilter,
    currentPostsFilter
  } = useContext(AppContext)
  const [currentFilter, setCurrentFilter] = useState('')

  const toPercentage = (value: number): string => value?.toString() + '%'
  const capitalize = (value: string): string =>
    value.charAt(0).toUpperCase() + value.slice(1)

  const getNewData = useCallback(() => {
    if (!postList.length) return emptyPie

    const types = {}
    postList.map(
      (post) => (types[post.foodType] = (+types[post.foodType] || 0) + 1)
    )

    return foodType.map((type) => ({
      id: type,
      value: +((types[type] / postList.length) * 100).toFixed(2),
      label: capitalize(type),
      color: colorByType[type],
      totalItems: types[type]
    }))
  }, [postList])

  const formatArcLinkLabel = (data: ComputedDatum<Data>): string => {
    if (data.id === 'empty') return 'There are no items on this list.'
    return `${data.label?.toString()}: ${toPercentage(data.value)}`
  }

  const formatArcLabel = (data: ComputedDatum<Data>): string =>
    data.id === 'empty' ? 'ಠ╭╮ಠ' : toPercentage(data.value)

  const handleClick = (data: ComputedDatum<Data>): void => {
    const value = data.id.toString()
    if (value === 'empty') return

    const newFilterValue = currentFilter === value ? '' : value
    const foodTypeFilter = { foodType_like: newFilterValue }
    const params = new URLSearchParams({
      ...currentPostsFilter,
      ...foodTypeFilter
    }).toString()

    setCurrentPostsFilter(foodTypeFilter)
    setCurrentFilter(newFilterValue)
    fetchFoodList.loadAll(`?${params}`).then((posts) => setPostList(posts))
  }

  return {
    toPercentage,
    newData: getNewData(),
    formatArcLinkLabel,
    formatArcLabel,
    handleClick
  }
}
