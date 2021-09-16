import React, { useEffect } from 'react'

import { FetchFoodList } from '@/domain/usecases/food-list'
import {
  FilterByWeekDay,
  FoodList,
  FoodTypeChart,
  Header,
  Modal
} from '@/presentation/components'

type Props = {
  fetchFoodList: FetchFoodList
}

const Home: React.FC<Props> = ({ fetchFoodList }: Props) => {
  useEffect(() => {
    fetchFoodList.loadAll().then((result) => console.log(result))
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <FilterByWeekDay />
        <FoodTypeChart />
        <FoodList />

        <Modal />
      </div>
    </>
  )
}

export default Home
