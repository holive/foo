import { HttpClient } from '@/data/protocols/http'
import { RemoteDeleteFoodItem } from '@/data/usecases/delete-food-item'
import { DeleteFoodItem } from '@/domain/usecases'

export const makeDeleteFoodItem = (httpClient: HttpClient): DeleteFoodItem => {
  return RemoteDeleteFoodItem(process.env.API_URL, httpClient)
}
