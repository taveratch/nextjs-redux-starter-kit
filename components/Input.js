import React from 'react'
import { SubLabel } from 'components/Label'

class Input extends React.Component {

  static defaultProps = {
    onEnter: () => {},
    hideFloatingLabel: false,
    floatingtext: "",
    floatingLabelBold: false
  }
  
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.onEnter()
    }
  }
  
  render() {
    return (
      <div className={this.props.containerClassName}>
        { !this.props.hideFloatingLabel && <SubLabel bold={this.props.floatingLabelBold}>{this.props.floatingtext}</SubLabel> }
        <input className={`form-control ${this.props.inputClassName}`} {...this.props} onKeyPress={this.handleKeyPress}/>
      </div>
    )
  }
}


export default Input