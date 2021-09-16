import { useState } from 'react'

import { FetchFoodList } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'
import {
  makeDeleteFoodItem,
  makeFetchFoodListFactory,
  makePostFoodItem
} from '@/main/factories/usecases'
import { TAppContext } from '@/presentation/contexts'

export const MakeInitialState = (): TAppContext => {
  const [openModal, setOpenModal] = useState(false)
  const [postList, setPostList] = useState<FetchFoodList.Model[]>([])
  const [currentPostsFilter, _setCurrentPostsFilter] = useState({})
  const setCurrentPostsFilter = (data: Record<string, string>): void => {
    _setCurrentPostsFilter((old) => ({
      ...old,
      ...data
    }))
  }

  const httpClient = makeAxiosHttpClient()

  return {
    fetchFoodList: makeFetchFoodListFactory(httpClient),
    postFoodItem: makePostFoodItem(httpClient),
    deleteFoodItem: makeDeleteFoodItem(httpClient),
    postList,
    setPostList,
    openModal,
    setOpenModal,
    currentPostsFilter,
    setCurrentPostsFilter
  }
}
