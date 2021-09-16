import { RemoteFetchFoodList } from '@/data/usecases'
import { FetchFoodList } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeFetchFoodListFactory = (): FetchFoodList => {
  return RemoteFetchFoodList(
    'http://localhost:3000/foods', // todo: add as env
    makeAxiosHttpClient()
  )
}
