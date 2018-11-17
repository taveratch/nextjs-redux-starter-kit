import Colors from 'components/utils/colors'
import styled from 'styled-components'

export const Label = styled.label`
    color: ${props => !!props.color ? Colors.get(props.color) : 'inherit'};
    font-size: 1em;
    margin: 0px;
    padding: 0px;
    line-height: 1.5em;
    font-weight: ${props => props.thin ? 'light' : props.bold ? 'bold' : 500};
    text-decoration: ${props => props.underline ? 'underline' : 'inherit'};
`

export const ThinLabel = styled(Label)`
  font-weight: 'light';
`

export const SubLabel = styled(Label)`
  font-size: 0.9em;
`

export const Remark = styled(Label)`
  font-size: 0.7em;
`