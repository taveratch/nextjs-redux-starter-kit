import React from 'react'
import { SubLabel } from 'components/Label'
import _ from 'lodash'

class Select extends React.Component {

  static defaultProps = {
    onChange: () => { },
    name: "",
    valueKey: "",
    textKey: "",
    objects: [],
    placeholder: null,
    hideFloatingLabel: false,
    floatingtext: "",
    floatingLabelBold: false,
    containerClassName: "",
    selectedValue: ""
  }

  getSelectedIndex = (selectedValue) => {
    const { objects, valueKey } = this.props
    const index = _.findIndex(objects, x => _.get(x, valueKey) == selectedValue)
    return Math.max(0, index)
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: this.getSelectedIndex(props.selectedValue)
    }
  }

  componentDidMount() {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: _.get(this.props.objects[this.state.selectedIndex], this.props.valueKey)
      }
    })
  }

  handleOnChange = e => {
    const index = parseInt(e.target.value)
    this.setState({ selectedIndex: index })
    // e.target.value = _.get(this.props.objects, [index, this.props.valueKey])
    this.props.onChange({
      target: {
        name: e.target.name,
        value: _.get(this.props.objects, [index, this.props.valueKey])
      }
    })
  }

  render() {
    const { props } = this
    const { selectedIndex } = this.state
    return (
      <div className={props.containerClassName}>
        {!props.hideFloatingLabel && <SubLabel bold={props.floatingLabelBold}>{props.floatingtext}</SubLabel>}
        <select className="custom-select custom-select-md" onChange={this.handleOnChange} name={props.name}>
          {/* {props.placeholder && <option selected value={""}>{props.placeholder}</option>} */}
          {
            props.objects.map((object, key) => <option key={key} selected={key==selectedIndex} value={key}>{_.get(object, props.textKey)}</option>)
          }
        </select>
      </div>
    )
  }
}

export default Select