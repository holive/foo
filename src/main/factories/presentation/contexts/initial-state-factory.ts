import { useState } from 'react'

import { FetchFoodList } from '@/domain/usecases'
import {
  makeFetchFoodListFactory,
  makePostFoodItem
} from '@/main/factories/usecases'
import { TAppContext } from '@/presentation/contexts'

export const makeInitialState = (): TAppContext => {
  const [openModal, setOpenModal] = useState(false)
  const [postList, setPostList] = useState<FetchFoodList.Model[]>([])

  return {
    fetchFoodList: makeFetchFoodListFactory(),
    postFoodItem: makePostFoodItem(),
    postList,
    setPostList,
    openModal,
    setOpenModal
  }
}
