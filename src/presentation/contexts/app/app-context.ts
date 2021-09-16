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
  currentPostsFilter: Record<string, string>
  setCurrentPostsFilter: (
    value: Record<string, string>,
    reset?: boolean
  ) => void
}

export default createContext<TAppContext>(null)
