import { useState } from 'react'

import { makeFetchFoodListFactory } from '@/main/factories/usecases'
import { TAppContext } from '@/presentation/contexts'

export const makeInitialState = (): TAppContext => {
  const [openModal, setOpenModal] = useState(false)

  return {
    fetchFoodList: makeFetchFoodListFactory(),
    openModal,
    setOpenModal
  }
}
