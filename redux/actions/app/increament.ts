import DispatchType from 'types/Dispatch';
import actionTypes from 'redux/actionTypes';

export default {
  increase: () => (dispatch: DispatchType) => {
    dispatch({
      type: actionTypes.INCREASE
    })
  }
}