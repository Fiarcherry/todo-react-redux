import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from 'redux-state-sync'

// import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

const config = {}

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      // loggerMiddleware,
      createStateSyncMiddleware(config),
      ...getDefaultMiddleware(),
    ],
    preloadedState,
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  initStateWithPrevTab(store)

  return store
}
