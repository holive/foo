import { createContext } from 'react'

import { FetchFoodList, PostFoodItem } from '@/domain/usecases'

export type TAppContext = {
  fetchFoodList: FetchFoodList
  postFoodItem: PostFoodItem
  postList: FetchFoodList.Model[]
  setPostList: (value: FetchFoodList.Model[]) => void
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

export default createContext<TAppContext>(null)
