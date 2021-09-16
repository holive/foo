import { useCallback, useContext, useState } from 'react'

import { weekDays } from '@/presentation/components'
import { AppContext } from '@/presentation/contexts'

interface Model {
  getStyleForPosition: (position: number) => string
  options: string[]
  handleClick: (value: string) => void
  currentSelected: string
}

export const FilterByWeekDayHook = (): Model => {
  const {
    fetchFoodList,
    setPostList,
    setCurrentPostsFilter,
    currentPostsFilter
  } = useContext(AppContext)
  const options = ['all', ...weekDays]
  const [currentSelected, _setCurrentSelected] = useState<string>(options[0])
  const setCurrentSelected = useCallback((value: string) => {
    _setCurrentSelected(value)
  }, [])

  const setFiltersAndFetchData = (
    weekDaysFilter: Record<string, string>,
    value: string,
    params: string
  ): void => {
    const newParams = params === '' ? '' : `?${params}`

    setCurrentPostsFilter(weekDaysFilter)
    setCurrentSelected(value)
    fetchFoodList
      .loadAll(value !== options[0] ? newParams : '')
      .then((posts) => setPostList(posts))
  }

  const shouldResetFilters = (
    value: string,
    weekDaysFilter: Record<string, string>
  ): boolean => {
    return (
      value === 'all' &&
      JSON.stringify(currentPostsFilter) !== JSON.stringify(weekDaysFilter)
    )
  }

  const resetFilters = (): void =>
    setFiltersAndFetchData({ weekDays_like: '' }, '', '')

  const handleClick = (value: string): void => {
    if (value === currentSelected) return

    const weekDaysFilter = { weekDays_like: value === 'all' ? '' : value }
    const params = new URLSearchParams({
      ...currentPostsFilter,
      ...weekDaysFilter
    }).toString()

    if (shouldResetFilters(value, weekDaysFilter)) return resetFilters()
    setFiltersAndFetchData(weekDaysFilter, value, params)
  }

  const getStyleForPosition = (position: number): string => {
    switch (true) {
      case position === 0:
        return 'rounded-l'
      case position === options?.length - 1:
        return 'rounded-r border-r'
      default:
        return ''
    }
  }

  return {
    getStyleForPosition,
    options,
    handleClick,
    currentSelected
  }
}
