import React from 'react'

import {
  FilterByWeekDay,
  FoodList,
  FoodTypeChart,
  Header,
  Modal
} from '@/presentation/components'

const Home: React.FC = () => {
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
