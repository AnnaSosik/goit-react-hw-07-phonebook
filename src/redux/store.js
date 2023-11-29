import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

// Creating a Redux store with configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Reduxer for contact state management
    filter: filterReducer, // Reducer for filter state management
  },

  // Apply middleware with getDefaultMiddleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Creating persistent storage that retains the state of the Redux store when the page reloads
export const persistor = persistStore(store);
