import React, { useContext } from 'react'

import { FetchFoodList } from '@/domain/usecases'
import { foodType, TrashIcon } from '@/presentation/components'
import { AppContext } from '@/presentation/contexts'

export const FoodList: React.FC = () => {
  const { postList, deleteFoodItem, fetchFoodList, setPostList } =
    useContext(AppContext)

  const handleDeleteItem = (foodId: string | number): void => {
    if (!foodId) return

    deleteFoodItem.removeItem(foodId?.toString()).then(() => {
      fetchFoodList
        .loadAll()
        .then((posts) => setPostList(posts))
        .catch((error) => console.log(error))
    })
  }

  const Card = (item: FetchFoodList.Model): JSX.Element => {
    const color =
      item.foodType === foodType[0]
        ? 'green'
        : item.foodType === foodType[1]
        ? 'primary'
        : 'yellow'

    return (
      <div className="pb-4 px-20 md:px-40 bg-blue-100">
        <div className="bg-white p-4 rounded shadow-lg flex align-middle">
          <div className="w-1/12 flex justify-center align-middle">
            <span className={`h-3 w-3 bg-${color} rounded-full self-center`} />
          </div>

          <h3 className="font-normal text-black-100 w-4/12 capitalize">
            {item.foodName}
          </h3>

          <p className="w-3/12">{item.calories || 0} kcal</p>
          <p className="w-3/12 capitalize">{item.foodType}</p>

          <button
            onClick={() => handleDeleteItem(item.id)}
            className="focus:outline-none opacity-70 hover:opacity-90 cursor-pointer transition duration-300"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <div className="py-10">
        {postList.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
