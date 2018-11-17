import Action from 'types/Action'
import actionTypes from 'redux/actionTypes'

const initialState = {
  value: 0
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.INCREASE: {
      return {
        ...state,
        value: state.value + 1
      }
    }
    default: {
      return state
    }
  }
}