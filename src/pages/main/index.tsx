import { Label, SubLabel } from 'components/Label'

import I18n from 'lib/I18n'
import Post from 'model/Post';
import PostManager from 'manager/PostManager';
import React from 'react'
import ReducerType from 'types/Reducer';
import actions from 'redux/actions'
import { connect } from 'react-redux'

type Props = {
  increase: () => {},
  value: number,
  posts: Post[]
}

class MainPage extends React.Component<Props> {

  static getInitialProps = async ctx => {
    const postManager = new PostManager()
    const posts = await postManager.getPosts()
    return { posts }
  }

  handleButtonClick = () => {
    this.props.increase()
  }

  render() {
    return (
      <div>
        <h3>{I18n.t('app.name')}</h3>
        <Label color="red">{this.props.value}</Label>
        <button onClick={this.handleButtonClick}>Increase</button>
        {
          this.props.posts.map(post => (
            <div className="mb-4">
              <Label>{post.title}</Label>
              <SubLabel>{post.body}</SubLabel>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state: ReducerType) => state.app_increament

const mapDispatchToProps = {
  increase: actions.app.increament.increase
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)