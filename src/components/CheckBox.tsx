import React from 'react'

type Props = {
  onClick: (name: string, checked: boolean) => {},
  id: string,
  text: string,
  name: string,
  checked: boolean
}

class CheckBox extends React.Component<Props> {

  static defaultProps = {
    id: "checkbox1",
    text: "",
    name: "checkbox1",
    onClick: () => { },
    checked: false
  }

  handleOnClick = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget
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