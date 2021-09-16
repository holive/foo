import { createContext } from 'react'

import { FetchFoodList } from '@/domain/usecases/food-list'

type Props = {
  fetchFoodList: FetchFoodList
}

export default createContext<Props>(null)
