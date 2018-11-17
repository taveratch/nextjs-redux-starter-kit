import APIRequest from 'model/api/APIRequest';
import axios from 'axios'

class ApiManager {
  static default: ApiManager = new ApiManager()

  private constructor() { }

  fetch(request: APIRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      axios(request.makeRequest())
      .then(response => resolve(response.data))
      .catch(err => {
        reject(err)
      })
    })
  }
}

export default ApiManager