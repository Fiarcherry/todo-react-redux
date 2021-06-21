import { combineReducers } from 'redux'
import { withReduxStateSync } from 'redux-state-sync'

import filterReducer from './filterReducer'
import pageReducer from './pageReducer'
import queryReducer from './queryReducer'
import themeReducer from './themeReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  page: pageReducer,
  query: queryReducer,
  theme: themeReducer,
  todos: todosReducer,
})

export default withReduxStateSync(rootReducer)
