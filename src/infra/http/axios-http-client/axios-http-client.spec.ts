import { mockHttpRequest } from '@/data/test'
import { mockAxios } from '@/infra/test'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockHttpRequest()
    const sut = AxiosHttpClient()
    const mockedAxios = mockAxios()

    await sut.request(request)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: request.headers,
      method: request.method
    })
  })
})
