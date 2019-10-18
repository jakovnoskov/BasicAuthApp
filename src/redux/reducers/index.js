import {combineReducers} from 'redux'
import api from './api'
import user from './user'


const appReducer = combineReducers({
  api,
  user
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = {}
  }

  return appReducer(state, action)
}

export default rootReducer