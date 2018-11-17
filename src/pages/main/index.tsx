import I18n from 'lib/I18n'
import { Label } from 'components/Label'
import React from 'react'
import ReducerType from 'types/Reducer';
import actions from 'redux/actions'
import { connect } from 'react-redux'

type Props = {
  increase: () => {},
  value: number
}

class MainPage extends React.Component<Props> {

  handleButtonClick = () => {
    this.props.increase()
  }

  render() {
    return (
      <div>
        <h3>{I18n.t('app.name')}</h3>
        <Label color="red">{this.props.value}</Label>
        <button onClick={this.handleButtonClick}>Increase</button>
      </div>
    )
  }
}

const mapStateToProps = (state: ReducerType) => state.app_increament

const mapDispatchToProps = {
  increase: actions.app.increament.increase
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)