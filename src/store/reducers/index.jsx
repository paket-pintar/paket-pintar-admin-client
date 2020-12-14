import { combineReducers } from 'redux'
import packages from './packageReducer'
import user from './userReducer'
import error from './errorReducer'

export default combineReducers({
  packages, user, error
})