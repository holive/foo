import { HttpClient } from '@/data/protocols/http'
import { RemoteFetchFoodList } from '@/data/usecases'
import { FetchFoodList } from '@/domain/usecases'

export const makeFetchFoodListFactory = (
  httpClient: HttpClient
): FetchFoodList => {
  return RemoteFetchFoodList(process.env.API_URL, httpClient)
}
