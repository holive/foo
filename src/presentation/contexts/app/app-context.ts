import { createContext } from 'react'

import { FetchFoodList } from '@/domain/usecases/food-list'

export type TAppContext = {
  fetchFoodList: FetchFoodList
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

export default createContext<TAppContext>(null)
