import actionTypes from 'redux/actionTypes'

export default {
  increase: (number) => dispatch => {
    dispatch({
      type: actionTypes.INCREASE
    })
  }
}