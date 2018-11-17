import React from 'react'

class CheckBox extends React.Component {

  static defaultProps = {
    id: "checkbox1",
    text: "",
    name: "checkbox1",
    onClick: (name, checked) => { },
    checked: false
  }

  handleOnClick = e => {
    const { name, checked } = e.target
    this.props.onClick(name, checked)
  }

  render() {
    const { id, text, name, checked } = this.props
    return (
      <div className="custom-control custom-checkbox">
        <input type="checkbox" checked={checked} name={name} onClick={this.handleOnClick} className="custom-control-input" id={id} />
        <label className="custom-control-label" htmlFor={id}>{text}</label>
      </div>
    )
  }
}


export default CheckBox