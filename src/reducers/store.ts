'use strict';

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/count';

// Storeの生成
const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

// RootStateにStoreの型を指定する
export type RootState = ReturnType<typeof store.getState>
// AppDispatchにStoreへdispatchするアクションの型を指定する
export type AppDispatch = typeof store.dispatch

export { store };
