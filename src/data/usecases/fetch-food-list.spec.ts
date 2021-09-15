import faker from 'faker'

import { HttpStatusCode } from '@/data/protocols/http'
import { HttpClientSpy, mockFetchFoodDataModelList } from '@/data/test'
import * as useCases from '@/data/usecases'

describe('RemoteLoadFoodList', () => {
  test('Should return a list of FoodList.Model if HttpClient returns 200', async () => {
    const httpClientSpy = new HttpClientSpy<useCases.Model[]>()
    const sut = useCases.RemoteFetchFoodList(
      faker.internet.url(),
      httpClientSpy
    )
    const httpResult = mockFetchFoodDataModelList()

    httpClientSpy.response = {
      statusCode: HttpStatusCode.OK,
      body: httpResult
    }

    const surveyList = await sut.loadAll()
    expect(surveyList).toEqual(httpResult)
  })
})
