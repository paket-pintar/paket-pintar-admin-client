import { createStore, applyMiddleware } from 'redux'
import { thunk } from './middleware/thunk'
import { loggerMiddleware } from './middleware/loggerMiddleware'
import reducer from './reducers/index'

let store = createStore(reducer, applyMiddleware(thunk))

export default store