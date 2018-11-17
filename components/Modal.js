import { FilledButton, PlainButton } from 'components/Button'

import I18n from 'lib/I18n'
import { Label } from 'components/Label'

const Modal = props => (
  <div className="modal fade" data-backdrop={props.closeOnClickOutside ? "inherit" : "static"} data-keyboard={props.closeOnClickOutside ? "true" : "false"} id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
          {props.enableCloseButton && (
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          )}
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <PlainButton style={{ minWidth: '80px' }} type="button" className="btn" color="red" data-dismiss="modal">{props.closeText}</PlainButton>
          <FilledButton style={{ minWidth: '80px' }} type="button" className="btn" color="blue" onClick={props.onClick}>{props.continueText}</FilledButton>
        </div>
      </div>
    </div>
  </div>
)

Modal.defaultProps = {
  id: "modalId",
  enableCloseButton: true,
  title: "",
  closeText: I18n.t('cancel'),
  continueText: 'Continue',
  closeOnClickOutside: true,
  onClick: () => { }
}

export default Modal

export const ModalInfoListItem = ({title, values}) => (
  <div className="d-flex mb-2">
    <Label className="">{title}</Label>
    <div className="flex-grow-1 text-right d-flex flex-column" style={{ wordBreak: "break-word" }}>
      {
        values.map((value, key) => <Label key={key}>{value}</Label>)
      }
    </div>
  </div>
)