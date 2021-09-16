import { useState } from 'react'

import { FetchFoodList } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'
import {
  makeFetchFoodListFactory,
  makePostFoodItem
} from '@/main/factories/usecases'
import { makeDeleteFoodItem } from '@/main/factories/usecases/makeDeleteFoodItemFactory'
import { TAppContext } from '@/presentation/contexts'

export const makeInitialState = (): TAppContext => {
  const [openModal, setOpenModal] = useState(false)
  const [postList, setPostList] = useState<FetchFoodList.Model[]>([])
  const httpClient = makeAxiosHttpClient()

  return {
    fetchFoodList: makeFetchFoodListFactory(httpClient),
    postFoodItem: makePostFoodItem(httpClient),
    deleteFoodItem: makeDeleteFoodItem(httpClient),
    postList,
    setPostList,
    openModal,
    setOpenModal
  }
}
