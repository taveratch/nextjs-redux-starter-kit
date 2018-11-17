import Post from 'model/Post'
import PostDatastore from "datastore/PostDatastore";
import _ from 'lodash'

class PostManager {
  getPosts(): Promise<Post[]> {
    const postDatastore = new PostDatastore()
    return postDatastore.fetchPosts()
      .then(json => {
        const posts = this.createPostsFromJSON(json)
        return posts
      })
      .catch(err => {
        // handle error
        return []
      })
  }

  private createPostsFromJSON(json = []): Post[] {
    return _.map(json, x => Post.fromJSON(x))
  }
}

export default PostManager