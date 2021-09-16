import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { FetchFoodList } from '@/domain/usecases/food-list'

export type Model = FetchFoodList.Model

export const RemoteFetchFoodList = (
  url: string,
  httpClient: HttpClient<FetchFoodList.Model[]>
): FetchFoodList => {
  const loadAll = async (queryParams = ''): Promise<FetchFoodList.Model[]> => {
    const httpResponse = await httpClient.request({
      url: url + queryParams,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        return httpResponse.body || []
      case HttpStatusCode.NO_CONTENT:
        return []
      default:
        throw new UnexpectedError()
    }
  }

  return { loadAll }
}
