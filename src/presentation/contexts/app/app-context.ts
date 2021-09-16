import { createContext } from 'react'

import { DeleteFoodItem, FetchFoodList, PostFoodItem } from '@/domain/usecases'

export type TAppContext = {
  fetchFoodList: FetchFoodList
  postFoodItem: PostFoodItem
  deleteFoodItem: DeleteFoodItem
  postList: FetchFoodList.Model[]
  setPostList: (value: FetchFoodList.Model[]) => void
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

export default createContext<TAppContext>(null)
