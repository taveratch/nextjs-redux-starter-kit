import { Divider } from 'components'
import { Label } from 'components/Label'
import React from 'react'

type Props = {
  selectedIndex: number,
  titles: [string],
  onTabSelect: (index: number) => {}
}

class Tab extends React.Component<Props> {

  static defaultProps = {
    onTabSelect: () => {},
    titles: [],
    selectedIndex: 0
  }

  onTabSelect = (index: number) => {
    this.props.onTabSelect(index)
  }

  render() {
    let { selectedIndex, titles } = this.props
    selectedIndex = Math.min(selectedIndex, titles.length-1)
    selectedIndex = Math.max(selectedIndex, 0)
    return (
      <div>
        <div className="d-flex">
          {
            titles.map((title, key) => (
              <div key={key} onClick={() => this.onTabSelect(key)} className="p-2 cursor-pointer text-center" style={{minWidth: '60px'}}>
                <Label className="cursor-pointer" underline={key == selectedIndex} bold={key == selectedIndex}>{title}</Label>
              </div>
            ))
          }
        </div>
        <Divider />
      </div>
    )
  }
}


export default Tab