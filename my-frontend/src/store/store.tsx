import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducers from "../feature/auth/auth.slice";

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

export const persistedReducer = persistReducer(persistConfig, authReducers)

export const store = configureStore({
  reducer: {
    persistedReducer
  },
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch