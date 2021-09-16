import { RemotePostFoodItem } from '@/data/usecases'
import { PostFoodItem } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makePostFoodItem = (): PostFoodItem => {
  return RemotePostFoodItem(
    'http://localhost:3000/foods', // todo: add as env
    makeAxiosHttpClient()
  )
}
