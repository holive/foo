import { HttpStatusCode } from './HttpStatusCode'

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
