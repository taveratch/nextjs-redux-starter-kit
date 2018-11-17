import Colors from 'components/utils/colors'
import _ from 'lodash'
import styled from 'styled-components'

export const Th = styled.th`
  border-top: 0px !important;
  border-bottom: 0px !important;
  background-color: ${Colors.get('whitegrey')};
  font-weight: bold;
  vertical-align: middle !important;
`

export const Td = styled.td`
  vertical-align: middle !important;
  border-top: 0px !important;
  color: ${props => Colors.get(props.color || 'black')};
  border-bottom: 1px solid ${Colors.get('divider')};
`

export const Tr = styled.tr`
  transition: 0.3s;
  background-color: ${props => Colors.get(props.color || 'white')};
  &:hover {
    background-color: ${Colors.get('lightblue')};
    /* color: white; */
  }
`

type Props = {
  headers: [any],
  bodies: [any],
  onClick: (key: number) => {}
}
const Table = (props: Props) => (
  <table className="table">
    <thead>
      <tr>
        {props.headers.map((row, key) => <Th className={row.className} style={row.style} key={key} scope="col">{row.value}</Th>)}
      </tr>
    </thead>
    <tbody>
      {
        props.bodies.map((body, key) => (
          <Tr className="cursor-pointer" key={key} onClick={() => { props.onClick(key) }}>
            {
              // body.mappingKeys.map((objectKey, k) => <Td key={k}>{_.get(body.value, objectKey)}</Td>)
              body.cells.map((v: any, k: number) => <Td className={v.className} key={k}>{v.value}</Td>)
            }
          </Tr>
        ))
      }
    </tbody>
  </table>
)

Table.defaultProps = {
  headers: [],
  bodies: [],
  onClick: () => { }
}

export default Table