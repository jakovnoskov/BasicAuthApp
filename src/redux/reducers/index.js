import {combineReducers} from 'redux'
import api from './api'
import user from './user'


const rootReducer = combineReducers({
  api,
  user
})

export default rootReducer