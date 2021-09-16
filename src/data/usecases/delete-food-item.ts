import combineURLs from 'axios/lib/helpers/combineURLs'

import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { DeleteFoodItem } from '@/domain/usecases'

export const RemoteDeleteFoodItem = (
  url: string,
  httpClient: HttpClient
): DeleteFoodItem => {
  const removeItem = async (foodId: string): Promise<void> => {
    const httpResponse = await httpClient.request({
      url: combineURLs(url, `/${foodId}`),
      method: 'delete'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
      case HttpStatusCode.NO_CONTENT:
        return
      default:
        throw new UnexpectedError()
    }
  }

  return { removeItem }
}
