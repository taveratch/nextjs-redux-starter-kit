import { hideLoading, showLoading } from 'react-redux-loading-bar'

import DispatchType from 'types/Dispatch';
import actionTypes from 'redux/actionTypes'

export default {
  showLoading: (isLoading: boolean, dispatch: DispatchType) => {
    if (isLoading) dispatch(showLoading())
    else dispatch(hideLoading())
    return dispatch({ type: actionTypes.APP_TOGGLE_LOADING, payload: { isLoading } })
  }
}