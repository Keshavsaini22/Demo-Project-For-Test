import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import leaveTypeSlice from '../features/leaveType/leaveType.slice';
// import UserReducers from '../features/user/user.slice';


const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

// export const persistedReducer = persistReducer(persistConfig, UserReducers)

export const store = configureStore({
    reducer: {
        // persistedReducer,
        // leaveType: leaveTypeSlice,

    },
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
