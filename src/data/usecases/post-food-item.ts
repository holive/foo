import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { PostFoodItem } from '@/domain/usecases'

export const RemotePostFoodItem = (
  url: string,
  httpClient: HttpClient<PostFoodItem.Model>
): PostFoodItem => {
  const postItem = async (
    params: PostFoodItem.Model
  ): Promise<PostFoodItem.Model> => {
    const httpResponse = await httpClient.request({
      url: url,
      method: 'post',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
      case HttpStatusCode.CREATED:
        return httpResponse.body
      case HttpStatusCode.NO_CONTENT:
        return null
      default:
        throw new UnexpectedError()
    }
  }

  return { postItem }
}
