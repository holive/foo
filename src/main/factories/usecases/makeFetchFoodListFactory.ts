import { RemoteFetchFoodList } from '@/data/usecases'
import { FetchFoodList } from '@/domain/usecases/food-list'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeFetchFoodListFactory = (): FetchFoodList => {
  return RemoteFetchFoodList(
    'http://localhost:3000/foods',
    makeAxiosHttpClient()
  )
}
