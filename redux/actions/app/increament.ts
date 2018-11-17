import DispatchType from 'types/Dispatch';
import actionTypes from 'redux/actionTypes';

export type types = {
  increase: () => {}
}

const actions: types = {
  increase: () => (dispatch: DispatchType) => {
    dispatch({
      type: actionTypes.INCREASE
    })
  }
}

export default actions