import Colors from 'components/utils/colors'
import I18n from 'lib/I18n'
import { Label } from 'components/Label'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background: ${props => Colors.get('darkgrey')};
`

class NavigationBar extends React.Component {
  
  render() {
    return (
      <Nav className="navbar navbar-light justify-content-between">
        <div>
          {this.props.menuIcon}
          <Label color="white" bold>
            {this.props.title || I18n.t('navigation.app.name')}
          </Label>
        </div>
        <div>
          {this.props.children}
        </div>
      </Nav>
    )
  }
}


export default NavigationBar