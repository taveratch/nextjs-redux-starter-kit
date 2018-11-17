import I18n from 'lib/I18n'
import React from 'react'
import actions from 'redux/actions'
import { connect } from 'react-redux'

class MainPage extends React.Component {

  handleButtonClick = () => {
    this.props.increase()
  }

  render() {
    return (
      <div>
        <h3>{I18n.t('app.name')}</h3>
        <div>{this.props.value}</div>
        <button onClick={this.handleButtonClick}>Increase</button>
      </div>
    )
  }
}

const mapStateToProps = ({app_increament}) => app_increament

const mapDispatchToProps = {
  increase: actions.app.increament.increase
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)