import Colors from 'components/utils/colors'
import styled from 'styled-components'

export const FullHeightContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => Colors.get(props.color || 'white')};
`

export const Image = styled.img`
  width: ${props => `${props.scale}rem` || 'initial'};
`

export const Divider = styled.div`
  height: 2px;
  border: solid 0.5px rgba(0, 0, 0, 0.14);
`