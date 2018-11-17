import APIRequest from "model/api/APIRequest";
import ApiManager from "lib/common/ApiManager";
import HTTPMethod from 'model/api/HTTPMethod'

class PostDatastore {
  fetchPosts(): Promise<any> {
    const request = new APIRequest('https://jsonplaceholder.typicode.com/posts')
    request.method = HTTPMethod.GET
    return ApiManager.default.fetch(request)
  }
}

export default PostDatastore