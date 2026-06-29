import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import type { Reducer } from 'redux'
// @ts-ignore
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistedRootReducer: Reducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(
//   persistedRootReducer,
//   undefined,
//   applyMiddleware(thunk, logger)
// )
export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
