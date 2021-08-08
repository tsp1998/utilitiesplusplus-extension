import { createStore, combineReducers } from 'redux'

import thingsAppReducer from './apps/ThingsCounter/redux/rootReducer'

const globalReducer = combineReducers({
  thingsApp: thingsAppReducer
})

const store = createStore(globalReducer)

export default store