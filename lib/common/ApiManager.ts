import 'isomorphic-fetch'

import { stringify } from 'query-string'

const urlWithQuery = (url: string, query: any): string => !!query ? `${url}?${stringify(query)}` : url


class ApiManager {
  static default: ApiManager = new ApiManager()

  private constructor() { }

  fetcher(options: any): Promise<any> {
    const url = urlWithQuery(options.url, options.query)
    console.log(`>> Calling API: ${url}`)
    return fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers
      }
    })
  }
}

export default ApiManager