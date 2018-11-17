import Colors from 'components/utils/colors'
import styled from 'styled-components'

export const PrimaryButton = styled.button`
    cursor: pointer;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    background-color: ${Colors.get('blue')};
    color: white;
    font-size: 1em;
    font-weight: 500;
`

export const WhiteButton = styled(PrimaryButton)`
    background-color: white;
    color: black;
`

export const FilledButton = styled(PrimaryButton)`
    background-color: ${props => Colors.get(props.color)};
    border-color: ${props => Colors.get(props.color)};
    color: ${Colors.get('white')};
    transition: 0.5s;
    &:hover {
        background-color: ${Colors.get('white')};
        color: ${props => Colors.get(props.color)};
    }
`

type PlainButtonProps = {
    filled: boolean,
    color: string
}
export const PlainButton = styled<PlainButtonProps, any>(PrimaryButton)`
    border-color: ${props => Colors.get(props.color)};
    background-color: ${props => props.filled ? Colors.get(props.color) : Colors.get('white')};
    color: ${props => props.filled ? Colors.get('white') : Colors.get(props.color)};
    transition: 0.5s;
    &:hover {
        background-color: ${props => Colors.get(props.color)};
        color: ${Colors.get('white')};
    }
`