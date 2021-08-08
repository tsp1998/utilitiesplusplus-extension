import { combineReducers } from 'redux'

import thingsReducer from './things/thingsReducer'

const rootReducer = combineReducers({
  things: thingsReducer
})

export default rootReducer