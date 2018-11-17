import { hideLoading, showLoading } from 'react-redux-loading-bar'

import actionTypes from 'redux/actionTypes'

export default {
  showLoading: (isLoading, dispatch) => {
    if(isLoading) dispatch(showLoading())
    else dispatch(hideLoading())
    return dispatch({ type: actionTypes.APP_TOGGLE_LOADING, payload: { isLoading } })
  }
}