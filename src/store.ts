import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productReducer from './features/products/slice';

const rootReducer = combineReducers({
  products: productReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
