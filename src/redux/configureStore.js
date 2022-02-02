import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from 'redux-state-sync'
import rootReducer from './reducers'

const config = {}

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
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
