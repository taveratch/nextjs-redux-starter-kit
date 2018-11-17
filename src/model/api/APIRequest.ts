import HTTPMethod from "model/api/HTTPMethod";
import objectType from "types/ObjectType";

class APIRequest {
  url: string
  query: any = {}
  method: string = HTTPMethod.GET
  body: objectType = {}
  private _headers: objectType = {}

  private defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  constructor(url: string) {
    this.url = url
  }

  makeRequest() {
    return {
      url: this.url,
      params: this.query,
      data: this.body,
      headers: this.headers
    }
  }

  get headers() {
    return {
      ...this.defaultHeaders,
      ...this._headers
    }
  }
}

export default APIRequest