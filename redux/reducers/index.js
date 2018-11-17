import app from './app'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({ 
  app_increament: app.increament,
  app_loading: app.loading,
  loadingBar: loadingBarReducer
})