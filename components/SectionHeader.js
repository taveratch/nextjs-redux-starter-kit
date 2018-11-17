import { Divider } from 'components'
import { Label } from 'components/Label'

const SectionHeader = props => (
  <div className={props.className}>
    <div className="d-flex">
      {
        props.breadcrumbs.map((text, i) => {
          if (i == 0)
            return <Label key={i} bold={props.breadcrumbs.length == 1} className="mb-2 mr-2">{text}</Label>
          return <div key={i}>
            <Label className="mb-2 mr-2">/</Label>
            <Label bold={i == props.breadcrumbs.length - 1} className="mb-2 mr-2">{text}</Label>
          </div>
        })
      }
    </div>
    {!props.hideDivider && <Divider className="mb-2" />}
  </div>
)

SectionHeader.defaultProps = {
  breadcrumbs: [],
  className: ""
}

export default SectionHeader