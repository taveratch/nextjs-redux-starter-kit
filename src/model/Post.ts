import _ from 'lodash'

class Post {
  userId: number
  id: number
  title: string
  body: string

  private constructor(json) {
    this.userId = _.get(json, 'userId')
    this.id = _.get(json, 'id')
    this.title = _.get(json, 'title')
    this.body = _.get(json, 'body')
  }

  static fromJSON(json) {
    return new Post(json)
  }
}

export default Post