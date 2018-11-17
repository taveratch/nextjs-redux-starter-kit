import { Label } from 'components/Label'
import React from 'react'

type Props = {
  id: string,
  text: string
}

class Dropdown extends React.Component<Props> {

  static defaultProps = {
    id: "dropdown1",
    text: ""
  }
  
  render() {
    const { id, text } = this.props
    return (
      <div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id={id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <Label>{text}</Label>
        </button>
        <div className="dropdown-menu" aria-labelledby={id}>
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Dropdown