import React from 'react'

import { makeFetchFoodListFactory } from '@/main/factories/usecases'
import Home from '@/presentation/pages/home'

export const makeHomePage: React.FC = () => {
  return <Home fetchFoodList={makeFetchFoodListFactory()} />
}
