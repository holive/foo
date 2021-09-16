import { createContext } from 'react'

import { FetchFoodList, PostFoodItem } from '@/domain/usecases'

export type TAppContext = {
  fetchFoodList: FetchFoodList
  postFoodItem: PostFoodItem
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

export default createContext<TAppContext>(null)
