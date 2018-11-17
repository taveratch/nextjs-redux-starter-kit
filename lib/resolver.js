import Response from 'lib/models/Response'

export default (promise) => {
  var response = new Response()
  return promise
  .then(res => {
    response.ok = res.ok
    response.statusCode = res.status
    return res.json()
  })
  .then(json => {
    response.body = json
    return response
  })
}