import React, { useContext, useEffect } from 'react'

import {
  FilterByWeekDay,
  FoodList,
  FoodTypeChart,
  Header,
  Modal
} from '@/presentation/components'
import { AppContext } from '@/presentation/contexts'

const Home: React.FC = () => {
  const { fetchFoodList } = useContext(AppContext)

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
