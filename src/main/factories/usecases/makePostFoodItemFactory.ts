import { HttpClient } from '@/data/protocols/http'
import { RemotePostFoodItem } from '@/data/usecases'
import { PostFoodItem } from '@/domain/usecases'

export const makePostFoodItem = (httpClient: HttpClient): PostFoodItem => {
  return RemotePostFoodItem(process.env.API_URL, httpClient)
}
