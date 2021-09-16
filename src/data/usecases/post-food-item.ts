import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { FetchFoodList, PostFoodItem } from '@/domain/usecases'

export const RemotePostFoodItem = (
  url: string,
  httpClient: HttpClient<FetchFoodList.Model[]>
): PostFoodItem => {
  const postItem = async (
    params: PostFoodItem.Model
  ): Promise<FetchFoodList.Model[]> => {
    const httpResponse = await httpClient.request({
      url: url,
      method: 'post',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
      case HttpStatusCode.CREATED:
        return httpResponse.body || []
      case HttpStatusCode.NO_CONTENT:
        return []
      default:
        throw new UnexpectedError()
    }
  }

  return { postItem }
}
