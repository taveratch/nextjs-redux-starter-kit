import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

export const initializeStore = (initialState: any) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, loadingBarMiddleware())))
}